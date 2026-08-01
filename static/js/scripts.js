

const content_dir = 'contents/';
const config_file = 'config.yml';
const section_names = ['home', 'research', 'news', 'resume', 'opensource', 'patents'];


// Theme (dark mode)
(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
        document.documentElement.setAttribute('data-theme', stored);
    }
})();

// Hero background animation: particles drifting between "noise" and
// "structure", evoking the denoising process behind diffusion models.
function initHeroAnimation() {
    const canvas = document.getElementById('hero-canvas');
    const section = canvas && canvas.parentElement;
    if (!canvas || !section) return;
    const ctx = canvas.getContext('2d');

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width, height, particles, clusters;

    function setup() {
        width = canvas.width = section.clientWidth;
        height = canvas.height = section.clientHeight;

        clusters = Array.from({ length: 4 }, () => ({
            x: width * (0.15 + Math.random() * 0.7),
            y: height * (0.25 + Math.random() * 0.5),
        }));

        const count = Math.max(60, Math.min(160, Math.floor((width * height) / 9000)));
        particles = Array.from({ length: count }, () => {
            const cluster = clusters[Math.floor(Math.random() * clusters.length)];
            return {
                noiseX: Math.random() * width,
                noiseY: Math.random() * height,
                cluster,
                offsetX: (Math.random() - 0.5) * 40,
                offsetY: (Math.random() - 0.5) * 40,
                driftPhase: Math.random() * Math.PI * 2,
                driftSpeed: 0.2 + Math.random() * 0.3,
                radius: 1 + Math.random() * 1.5,
                alpha: 0.25 + Math.random() * 0.35,
            };
        });
    }

    const start = performance.now();
    const cyclePeriod = 14; // seconds for a full noise -> structure -> noise loop

    function draw(now) {
        const t = (now - start) / 1000;
        ctx.clearRect(0, 0, width, height);

        const cycle = (Math.sin((t * Math.PI * 2) / cyclePeriod) + 1) / 2;
        const structure = cycle * cycle * (3 - 2 * cycle); // smoothstep easing

        particles.forEach(p => {
            const driftX = Math.sin(t * p.driftSpeed + p.driftPhase) * 6;
            const driftY = Math.cos(t * p.driftSpeed * 0.8 + p.driftPhase) * 6;

            const targetX = p.cluster.x + p.offsetX;
            const targetY = p.cluster.y + p.offsetY;

            const x = p.noiseX + (targetX - p.noiseX) * structure + driftX;
            const y = p.noiseY + (targetY - p.noiseY) * structure + driftY;

            ctx.beginPath();
            ctx.arc(x, y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(170, 180, 255, ${(p.alpha * (0.6 + structure * 0.4)).toFixed(3)})`;
            ctx.fill();
        });

        if (!reduceMotion) {
            requestAnimationFrame(draw);
        }
    }

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setup, 200);
    });

    setup();
    if (reduceMotion) {
        draw(start + (cyclePeriod * 1000) / 4); // static mid-cycle frame
    } else {
        requestAnimationFrame(draw);
    }
}

function initPage() {

    // Theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const applyIcon = theme => {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
            }
        };
        const currentTheme = document.documentElement.getAttribute('data-theme')
            || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        applyIcon(currentTheme);

        themeToggle.addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            applyIcon(next);
        });
    }

    initHeroAnimation();

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    // Yaml
    fetch(content_dir + config_file)
        .then(response => response.text())
        .then(text => {
            const yml = jsyaml.load(text);
            Object.keys(yml).forEach(key => {
                try {
                    document.getElementById(key).innerHTML = yml[key];
                } catch {
                    console.log("Unknown id and value: " + key + "," + yml[key].toString())
                }

            })
        })
        .catch(error => console.log(error));


    // Marked
    marked.use({ mangle: false, headerIds: false })
    section_names.forEach((name, idx) => {
        fetch(content_dir + name + '.md')
            .then(response => response.text())
            .then(markdown => {
                const html = marked.parse(markdown);
                document.getElementById(name + '-md').innerHTML = html;
            }).then(() => {
                if (name === 'news') {
                    setupNewsToggle();
                }
                if (name === 'research') {
                    setupAbstractModal();
                }
                // MathJax
                MathJax.typeset();
            })
            .catch(error => console.log(error));
    })

    // Open a modal with the full abstract when a publication card is clicked
    function setupAbstractModal() {
        const modalEl = document.getElementById('abstractModal');
        if (!modalEl || typeof bootstrap === 'undefined') return;

        const modal = new bootstrap.Modal(modalEl);
        const titleEl = modalEl.querySelector('.modal-title');
        const metaEl = modalEl.querySelector('.abstract-meta');
        const textEl = modalEl.querySelector('.abstract-text');

        const openCard = card => {
            const abstractEl = card.querySelector('.pub-abstract');
            if (!abstractEl) return;

            titleEl.textContent = card.querySelector('strong')?.textContent || '';
            metaEl.textContent = extractAuthorsLine(card);
            textEl.textContent = abstractEl.textContent.trim();
            modal.show();
        };

        // The body is "Title (strong) / Authors / Venue, Date / links",
        // separated by <br>. Authors and venue are the 2nd and 3rd lines.
        function extractAuthorsLine(card) {
            const body = card.querySelector('.pub-body');
            if (!body) return '';
            const lines = body.innerText.split('\n').map(s => s.trim()).filter(Boolean);
            return lines.length > 2 ? `${lines[1]} — ${lines[2]}` : (lines[1] || '');
        }

        document.querySelectorAll('#research-md .pub-card').forEach(card => {
            card.addEventListener('click', e => {
                if (e.target.closest('a')) return;
                openCard(card);
            });
            card.addEventListener('keydown', e => {
                if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('a')) {
                    e.preventDefault();
                    openCard(card);
                }
            });
        });
    }

    // Collapse older news items behind a "Show more" toggle
    function setupNewsToggle(visibleCount = 5) {
        const list = document.querySelector('#news-md ul');
        if (!list) return;
        const items = Array.from(list.children);
        if (items.length <= visibleCount) return;

        const hidden = items.slice(visibleCount);
        hidden.forEach(li => li.style.display = 'none');

        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'news-toggle';
        toggle.textContent = `Show ${hidden.length} more`;

        let expanded = false;
        toggle.addEventListener('click', () => {
            expanded = !expanded;
            hidden.forEach(li => li.style.display = expanded ? '' : 'none');
            toggle.textContent = expanded ? 'Show less' : `Show ${hidden.length} more`;
        });

        list.insertAdjacentElement('afterend', toggle);
    }

}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}
