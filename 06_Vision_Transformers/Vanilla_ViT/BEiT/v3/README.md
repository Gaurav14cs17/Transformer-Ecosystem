# BEiT-3 — Multimodal Foundation Model

## Overview

BEiT-3 is a general-purpose multimodal foundation model that unifies vision, language, and vision-language tasks under a single Multiway Transformer architecture. It treats images as a "foreign language" and uses masked data modeling across modalities (text, image, and image-text pairs) with a shared backbone, achieving state-of-the-art results on a wide range of benchmarks.

## Architecture & Mechanism

BEiT-3 introduces the Multiway Transformer:

- **Shared self-attention**: All modalities share the same multi-head self-attention layers.
- **Modality-specific FFNs**: Each modality (vision, language) has its own feed-forward network (FFN) experts within each Transformer block. A routing mechanism selects the appropriate FFN based on the input modality.
- **Unified masked modeling**: Pre-trained with three objectives:
  - **Masked language modeling (MLM)**: Predict masked text tokens.
  - **Masked image modeling (MIM)**: Predict masked image patch tokens (using VQ-KD from BEiT v2).
  - **Masked vision-language modeling**: Predict masked tokens in image-text pairs.
- **Unified input**: Images are tokenized into patch embeddings; text is tokenized with SentencePiece.

## Key Innovations

- **Multiway Transformer**: Shared attention + modality-specific FFNs balance parameter sharing with modality specialization.
- **Three-way pre-training**: Joint masked modeling across text-only, image-only, and image-text data.
- **Scalable**: Scales to ViT-giant (1B parameters) with strong performance across vision, language, and multimodal benchmarks.
- **Transfer versatility**: A single pre-trained model fine-tunes for image classification, object detection, semantic segmentation, VQA, image captioning, and retrieval.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Image as a Foreign Language: BEiT Pretraining for Vision and Vision-Language Tasks (Wang et al.) | 2022 | [arXiv:2208.10442](https://arxiv.org/abs/2208.10442) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
