# CLIP — Contrastive Language-Image Pre-training

## Overview

CLIP (Contrastive Language-Image Pre-training) from OpenAI learns visual representations from natural language supervision by training dual encoders (image + text) on 400 million image-text pairs from the internet. The contrastive learning objective aligns images and their text descriptions in a shared embedding space, enabling remarkable zero-shot transfer to downstream vision tasks through natural language prompting.

## Architecture & Mechanism

CLIP uses a dual-encoder architecture with contrastive learning:

1. **Image encoder**: Either a Vision Transformer (ViT-B/16, ViT-L/14) or a modified ResNet (RN50, RN101). Produces a single image embedding vector.
2. **Text encoder**: A Transformer (63M parameters, 12 layers) processes text descriptions. The [EOS] token embedding serves as the text representation.
3. **Projection**: Both image and text embeddings are linearly projected to a shared embedding space of dimension 512 or 768.
4. **Contrastive loss (InfoNCE)**: For a batch of N image-text pairs, compute the N×N matrix of cosine similarities. The loss maximizes similarity of matching pairs and minimizes similarity of non-matching pairs using a symmetric cross-entropy over the matrix rows and columns.
5. **Zero-shot inference**: For classification, create text prompts for each class (e.g., "a photo of a {class}"), embed them, and classify images by nearest text embedding.

## Key Innovations

- **Natural language supervision**: Learning from free-form text descriptions (not class labels) provides richer, more flexible supervision.
- **Zero-shot transfer**: CLIP matches supervised ResNet-50 on ImageNet zero-shot — no task-specific training needed.
- **Robustness**: Significantly more robust to distribution shift than supervised models (ImageNet-V2, ObjectNet, etc.).
- **Scalable data**: 400M image-text pairs from the internet — orders of magnitude more data than ImageNet.
- **Foundation for generative AI**: CLIP embeddings are used in DALL-E 2, Stable Diffusion, and many multimodal models.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Learning Transferable Visual Models From Natural Language Supervision (Radford et al.) | 2021 | [arXiv:2103.00020](https://arxiv.org/abs/2103.00020) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
