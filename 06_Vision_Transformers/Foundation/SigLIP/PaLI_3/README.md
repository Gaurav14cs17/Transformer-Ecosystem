# PaLI-3 — Smaller, Faster, Stronger

## Overview

PaLI-3 is a 5B-parameter vision-language model from Google that achieves results competitive with models 10× its size by using a SigLIP-based vision encoder instead of the ViT-e encoder used in PaLI and PaLI-X. It demonstrates that contrastively pre-trained (SigLIP) vision encoders produce stronger multimodal models than classification-pretrained encoders, even at much smaller scales.

## Architecture & Mechanism

PaLI-3 follows the PaLI architecture pattern:

- **Vision encoder**: SigLIP ViT-G/14 (2B parameters) pre-trained with sigmoid contrastive loss on WebLI data.
- **Language model**: UL2 3B-parameter encoder-decoder model.
- **Projection**: Linear projection maps vision encoder outputs to the language model's input space.
- **Resolution**: Supports up to 812×812 input resolution, enabling fine-grained understanding.
- **Training**: Multi-stage training on WebLI image-text data with resolution increases.

## Key Innovations

- **SigLIP > classification pre-training**: Contrastive (SigLIP) vision encoders provide significantly better visual features for VLM tasks than classification-pretrained encoders (e.g., JFT-pretrained ViT).
- **Efficient scale**: 5B total parameters achieve results competitive with PaLI-X (55B), demonstrating the importance of vision encoder quality over raw scale.
- **Strong on localization**: Excellent performance on referring expression comprehension, object detection, and visual question answering tasks.
- **High resolution**: Processing images at 812×812 enables fine-grained text reading and small object recognition.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| PaLI-3: A Versatile Vision Language Model (Chen et al.) | 2023 | [arXiv:2310.09199](https://arxiv.org/abs/2310.09199) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
