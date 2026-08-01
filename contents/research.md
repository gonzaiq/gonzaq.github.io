<h3 class="section-subheading">Publications & technical reports</h3>

<div class="pub-years">

<div class="pub-year-group">
<button class="pub-year-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#pubYear2026" aria-expanded="true" aria-controls="pubYear2026">
<span class="pub-year-label">2026</span><span class="pub-year-count">2 publications</span><i class="bi bi-chevron-down pub-year-chevron"></i>
</button>
<div class="collapse show" id="pubYear2026">

<div class="pub-card" tabindex="0" role="button" aria-haspopup="dialog">
<div class="pub-body">
<strong>MONET: A Massive, Open, Non-redundant and Enriched Text-to-image dataset</strong><br>
Aubin, B., Quintana, G. I., Tasar, O., Sreetharan, S., Czerwinska, U., Henry, D., & Chadebec, C.<br>
<em>arXiv preprint</em>, May 2026<br>
<a href="https://arxiv.org/abs/2605.21272" target="_blank" rel="noopener noreferrer"><i class="bi bi-file-text"></i> Link to paper</a>
</div>
<div class="pub-abstract" hidden>Training large text-to-image models requires high-quality, curated datasets with diverse content and detailed captions. Yet the cost and complexity of collecting, filtering, deduplicating, and re-captioning such corpora at scale hinders open and reproducible research in the field. We introduce MONET, an open Apache 2.0 dataset of approx. 104.9M image-text pairs collected from 2.9B raw pairs across heterogeneous open sources through successive stages of safety filtering, domain-based filtering, exact and near-duplicate removal, and re-captioning with multiple vision-language models covering short to long-form descriptions, and further augmented with synthetically generated samples. Each image is shipped with pre-computed embeddings and annotations to accelerate downstream use. To validate the effectiveness of MONET, we train a 4B-parameter latent diffusion model exclusively on it and reach competitive GenEval and DPG scores, demonstrating that our dataset lowers the barrier to large-scale, reproducible text-to-image research.</div>
</div>

<div class="pub-card" tabindex="0" role="button" aria-haspopup="dialog">
<div class="pub-body">
<strong>Fast, faithful and photorealistic diffusion-based image super-resolution with enhanced Flow Map models</strong><br>
Noble, M., Quintana, G. I., Aubin, B., & Chadebec, C.<br>
<em>arXiv preprint</em>, Jan 2026<br>
<a href="https://arxiv.org/abs/2601.16660" target="_blank" rel="noopener noreferrer"><i class="bi bi-file-text"></i> Link to paper</a>
</div>
<div class="pub-abstract" hidden>Diffusion-based image super-resolution (SR) has recently attracted significant attention by leveraging the expressive power of large pre-trained text-to-image diffusion models (DMs). A central practical challenge is resolving the trade-off between reconstruction faithfulness and photorealism. To address inference efficiency, many recent works have explored knowledge distillation strategies specifically tailored to SR, enabling one-step diffusion-based approaches. However, these teacher-student formulations are inherently constrained by information compression, which can degrade perceptual cues such as lifelike textures and depth of field, even with high overall perceptual quality. In parallel, self-distillation DMs, known as Flow Map models, have emerged as a promising alternative for image generation tasks, enabling fast inference while preserving the expressivity and training stability of standard DMs. Building on these developments, we propose FlowMapSR, a novel diffusion-based framework for image super-resolution explicitly designed for efficient inference. Beyond adapting Flow Map models to SR, we introduce two complementary enhancements: (i) positive-negative prompting guidance, based on a generalization of classifier free-guidance paradigm to Flow Map models, and (ii) adversarial fine-tuning using Low-Rank Adaptation (LoRA). Among the considered Flow Map formulations (Eulerian, Lagrangian, and Shortcut), we find that the Shortcut variant consistently achieves the best performance when combined with these enhancements. Extensive experiments show that FlowMapSR achieves a better balance between reconstruction faithfulness and photorealism than recent state-of-the-art methods for both x4 and x8 upscaling, while maintaining competitive inference time. Notably, a single model is used for both upscaling factors, without any scale-specific conditioning or degradation-guided mechanisms.</div>
</div>

</div>
</div>

<div class="pub-year-group">
<button class="pub-year-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#pubYear2025" aria-expanded="false" aria-controls="pubYear2025">
<span class="pub-year-label">2025</span><span class="pub-year-count">1 publication</span><i class="bi bi-chevron-down pub-year-chevron"></i>
</button>
<div class="collapse" id="pubYear2025">

<div class="pub-card" tabindex="0" role="button" aria-haspopup="dialog">
<div class="pub-body">
<strong>Bridging Contrastive Learning and Domain Adaptation: Theoretical Perspective and Practical Application</strong><br>
Quintana, G. I., Vancamberg, L., Jugnon, V., Desolneux, A., Mougeot, M.<br>
<em>arXiv preprint</em>, Jan 2025<br>
<a href="https://www.arxiv.org/abs/2502.00052" target="_blank" rel="noopener noreferrer"><i class="bi bi-file-text"></i> Link to paper</a>
</div>
<div class="pub-abstract" hidden>This work studies the relationship between Contrastive Learning and Domain Adaptation from a theoretical perspective. The two standard contrastive losses, NT-Xent loss (Self-supervised) and Supervised Contrastive loss, are related to the Class-wise Mean Maximum Discrepancy (CMMD), a dissimilarity measure widely used for Domain Adaptation. Our work shows that minimizing the contrastive losses decreases the CMMD and simultaneously improves class-separability, laying the theoretical groundwork for the use of Contrastive Learning in the context of Domain Adaptation. Due to the relevance of Domain Adaptation in medical imaging, we focused the experiments on mammography images. Extensive experiments on three mammography datasets - synthetic patches, clinical (real) patches, and clinical (real) images - show improved Domain Adaptation, class-separability, and classification performance, when minimizing the Supervised Contrastive loss.</div>
</div>

</div>
</div>

<div class="pub-year-group">
<button class="pub-year-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#pubYear2024" aria-expanded="false" aria-controls="pubYear2024">
<span class="pub-year-label">2024</span><span class="pub-year-count">4 publications</span><i class="bi bi-chevron-down pub-year-chevron"></i>
</button>
<div class="collapse" id="pubYear2024">

<div class="pub-card" tabindex="0" role="button" aria-haspopup="dialog">
<div class="pub-body">
<strong>BN-SCAFFOLD: controlling the drift of Batch Normalization statistics in Federated Learning</strong><br>
Quintana, G. I., Vancamberg, L., Jugnon, V., Mougeot, M., & Desolneux, A.<br>
<em>arXiv preprint</em>, Dec 2024<br>
<a href="https://arxiv.org/abs/2410.03281" target="_blank" rel="noopener noreferrer"><i class="bi bi-file-text"></i> Link to paper</a>
</div>
<div class="pub-abstract" hidden>Federated Learning (FL) is gaining traction as a learning paradigm for training Machine Learning (ML) models in a decentralized way. Batch Normalization (BN) is ubiquitous in Deep Neural Networks (DNN), as it improves convergence and generalization. However, BN has been reported to hinder performance of DNNs in heterogeneous FL. Recently, the FedTAN algorithm has been proposed to mitigate the effect of heterogeneity on BN, by aggregating BN statistics and gradients from all the clients. However, it has a high communication cost, that increases linearly with the depth of the DNN. SCAFFOLD is a variance reduction algorithm, that estimates and corrects the client drift in a communication-efficient manner. Despite its promising results in heterogeneous FL settings, it has been reported to underperform for models with BN. In this work, we seek to revive SCAFFOLD, and more generally variance reduction, as an efficient way of training DNN with BN in heterogeneous FL. We introduce a unified theoretical framework for analyzing the convergence of variance reduction algorithms in the BN-DNN setting, and show that SCAFFOLD is unable to remove the bias introduced by BN. We thus propose the BN-SCAFFOLD algorithm, which extends the client drift correction of SCAFFOLD to BN statistics. We prove convergence using the aforementioned framework and validate the theoretical results with experiments on MNIST and CIFAR-10. BN-SCAFFOLD equals the performance of FedTAN, without its high communication cost, outperforming Federated Averaging (FedAvg), SCAFFOLD, and other FL algorithms designed to mitigate BN heterogeneity.</div>
</div>

<div class="pub-card" tabindex="0" role="button" aria-haspopup="dialog">
<div class="pub-body">
<strong>Contrastive learning: an efficient Domain Adaptation strategy for 2D mammography image classification</strong><br>
Quintana, G. I., Jugnon, V., Vancamberg, L., Desolneux, A., & Mougeot, M.<br>
<em>IEEE 21st International Symposium on Biomedical Imaging (ISBI)</em>, Aug 2024<br>
<a href="https://univ-tlse2.hal.science/UP-SCIENCES/hal-04577704v1" target="_blank" rel="noopener noreferrer"><i class="bi bi-file-text"></i> Link to paper</a>
</div>
<div class="pub-abstract" hidden>Computer-aided breast cancer diagnosis models using 2D mammography images must maintain consistent performance across varying image acquisition systems and post-processing techniques, as deep learning models have shown diminished performance with variations in image style and contrast. This work proposes two models trained for classifying 2D mammography patches and complete images using heterogeneous datasets distinguished by different image post-processing methods, employing a Domain Adaptation methodology based on Supervised Contrastive Learning to achieve domain-invariant representations and improved class-separability. The domain-invariant models outperform those trained with Cross-Entropy loss in binary classification of full mammograms (cancer vs. no cancer), increasing the AUC from 0.745 to 0.816 on an independent test set.</div>
</div>

<div class="pub-card" tabindex="0" role="button" aria-haspopup="dialog">
<div class="pub-body">
<strong>Deep-learning-based background parenchymal enhancement quantification in contrast enhanced mammography: an application to neoadjuvant chemotherapy</strong><br>
Ripaud, E., Jailin, C., Quintana, G. I., de Carvalho, P. M., Mohamed, S., Moustafa, A. F., Kamal, R. M. & Vancamberg, L.<br>
<em>17th International Workshop on Breast Imaging (IWBI)</em>, May 2024<br>
<a href="https://hal.science/hal-04652762v1/document" target="_blank" rel="noopener noreferrer"><i class="bi bi-file-text"></i> Link to paper</a>
</div>
<div class="pub-abstract" hidden>This work extends automated background parenchymal enhancement (BPE) quantification, previously studied mainly in contrast-enhanced MRI, to contrast-enhanced mammography (CEM). A deep-learning-based quantification pipeline is developed and applied to longitudinal CEM exams acquired during neoadjuvant chemotherapy, with the goal of tracking BPE changes over the course of treatment as a potential biomarker of therapy response.</div>
</div>

<div class="pub-card" tabindex="0" role="button" aria-haspopup="dialog">
<div class="pub-body">
<strong>Deep-learning model for background parenchymal enhancement classification in contrast-enhanced mammography</strong><br>
Ripaud, E., Jailin, C., Quintana, G. I., de Carvalho, P. M., de la Rosa, R. S., & Vancamberg, L.<br>
<em>Physics in Medicine & Biology</em>, May 2024<br>
<a href="https://hal.univ-lorraine.fr/SU-SCIENCES/hal-04645023v1" target="_blank" rel="noopener noreferrer"><i class="bi bi-file-text"></i> Link to paper</a>
</div>
<div class="pub-abstract" hidden>Background. Breast background parenchymal enhancement (BPE) is correlated with the risk of breast cancer. BPE level is currently assessed by radiologists in contrast-enhanced mammography (CEM) using 4 classes: minimal, mild, moderate and marked, as described in the breast imaging reporting and data system (BI-RADS). However, BPE classification remains subject to intra- and inter-reader variability. Fully automated methods to assess BPE level have already been developed in breast contrast-enhanced MRI (CE-MRI) and have been shown to provide accurate and repeatable BPE level classification. However, to our knowledge, no BPE level classification tool is available in the literature for CEM. Materials and methods. A BPE level classification tool based on deep learning has been trained and optimized on 7012 CEM image pairs (low-energy and recombined images) and evaluated on a dataset of 1013 image pairs. The impact of image resolution, backbone architecture and loss function were analyzed, as well as the influence of lesion presence and type on BPE assessment. Results. The optimized model achieved a 4-class balanced accuracy of 71.5% (95% CI: 71.2-71.9) with 98.8% of classification errors between adjacent classes. For binary classification, the accuracy reached 93.0%. A slight decrease in model accuracy is observed in the presence of lesions, but it is not statistically significant, suggesting that our model is robust to the presence of lesions in the image for a classification task. Conclusion. The proposed BPE classification tool for CEM achieves similar results to what is published in the literature for CE-MRI.</div>
</div>

</div>
</div>

<div class="pub-year-group">
<button class="pub-year-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#pubYear2023" aria-expanded="false" aria-controls="pubYear2023">
<span class="pub-year-label">2023</span><span class="pub-year-count">2 publications</span><i class="bi bi-chevron-down pub-year-chevron"></i>
</button>
<div class="collapse" id="pubYear2023">

<div class="pub-card" tabindex="0" role="button" aria-haspopup="dialog">
<div class="pub-body">
<strong>Exploiting patch sizes and resolutions for multi-scale deep learning in mammogram image classification</strong><br>
Quintana, G. I., Li, Z., Vancamberg, L., Mougeot, M., Desolneux, A., & Muller, S.<br>
<em>Bioengineering</em>, April 2023<br>
<a href="https://www.mdpi.com/2306-5354/10/5/534" target="_blank" rel="noopener noreferrer"><i class="bi bi-file-text"></i> Link to paper</a>
</div>
<div class="pub-abstract" hidden>Recent progress in deep learning (DL) has revived the interest on DL-based computer aided detection or diagnosis (CAD) systems for breast cancer screening. Patch-based approaches are one of the main state-of-the-art techniques for 2D mammogram image classification, but they are intrinsically limited by the choice of patch size, as there is no unique patch size that is adapted to all lesion sizes. In addition, the impact of input image resolution on performance is not yet fully understood. In this work, we study the impact of patch size and image resolution on the classifier performance for 2D mammograms. To leverage the advantages of different patch sizes and resolutions, a multi patch-size classifier and a multi-resolution classifier are proposed. These new architectures perform multi-scale classification by combining different patch sizes and input image resolutions. The AUC is increased by 3% on the public CBIS-DDSM dataset and by 5% on an internal dataset. Compared with a baseline single patch size and single resolution classifier, our multi-scale classifier reaches an AUC of 0.809 and 0.722 in each dataset.</div>
</div>

<div class="pub-card" tabindex="0" role="button" aria-haspopup="dialog">
<div class="pub-body">
<strong>Incidence of the sample size distribution on one-shot federated learning</strong><br>
Garin, M., & Quintana, G. I.<br>
<em>Image Processing On Line</em>, Feb 2023<br>
<a href="https://www.ipol.im/pub/art/2023/440/" target="_blank" rel="noopener noreferrer"><i class="bi bi-file-text"></i> Link to paper</a> &nbsp; <a href="https://ipolcore.ipol.im/demo/clientApp/demo.html?id=440" target="_blank" rel="noopener noreferrer"><i class="bi bi-play-circle"></i> Link to demo</a> &nbsp; <a href="https://github.com/gonzaiq/one-shot-fed-learning" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i> Link to code</a>
</div>
<div class="pub-abstract" hidden>Federated Learning (FL) is a learning paradigm where multiple nodes collaboratively train a model by only exchanging updates or parameters, without sharing their raw data. This work examines how variations in per-node sample sizes affect one-shot federated learning performance, focusing on aggregation across independent data sources using empirical risk minimization. A key finding is that for a total of m nodes, each node should contain at least on the order of m samples to match the performance of centralized training. The work introduces the FESC (Federated Estimation with Statistical Correction) algorithm, which uses a weighting scheme based on local sample sizes, and compares it against standard federated and centralized estimators across various sample size distributions and configurations.</div>
</div>

</div>
</div>

<div class="pub-year-group">
<button class="pub-year-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#pubYear2021" aria-expanded="false" aria-controls="pubYear2021">
<span class="pub-year-label">2021</span><span class="pub-year-count">1 publication</span><i class="bi bi-chevron-down pub-year-chevron"></i>
</button>
<div class="collapse" id="pubYear2021">

<div class="pub-card" tabindex="0" role="button" aria-haspopup="dialog">
<div class="pub-body">
<strong>Statistical forecast of the marine surge</strong><br>
Quintana, G. I., Tandeo, P., Drumetz, L., Leballeur, L., & Pavec, M.<br>
<em>Natural Hazards</em>, Sep 2021<br>
<a href="https://www.researchgate.net/publication/352004125_Statistical_forecast_of_the_marine_surge" target="_blank" rel="noopener noreferrer"><i class="bi bi-file-text"></i> Link to paper</a>
</div>
<div class="pub-abstract" hidden>This work studies different machine learning methods for solving the regression problem of estimating the marine surge value given meteorological data. The marine surge is defined as the difference between the sea level predicted with the tide equations and the real measured sea level. Different approaches are explored, from linear regression to multilayer perceptrons and recurrent neural networks, with stochastic networks also considered to enable prediction error estimation. The statistical models outperformed a baseline physical method, with the multilayer perceptron achieving an R² score of 0.68 and an RMSE of 7.3 cm.</div>
</div>

</div>
</div>

</div>

<h3 class="section-subheading">Other resources</h3>

<div class="pub-academic">
<p><a href="https://cnrs.hal.science/tel-04981572/" target="_blank" rel="noopener noreferrer"><i class="bi bi-book"></i> PhD thesis</a></p>
<p><a href="./static/assets/PhD_defense.pdf" target="_blank" rel="noopener noreferrer"><i class="bi bi-easel"></i> PhD defense slides</a></p>
<p><a href="./static/assets/isbi_2024_poster.pdf" target="_blank" rel="noopener noreferrer"><i class="bi bi-image"></i> ISBI 2024 poster</a></p>
<p><a href="./static/assets/master_thesis.pdf" target="_blank" rel="noopener noreferrer"><i class="bi bi-book"></i> Master's thesis</a></p>
</div>
