# Swin Transformer V2 — Scaling Up Capacity and Resolution

## Overview

Swin Transformer V2 addresses the challenges of scaling Vision Transformers to larger model sizes (up to 3B parameters) and higher image resolutions (up to 1536×1536). It introduces three key techniques: residual post-normalization, scaled cosine attention, and log-spaced continuous position bias, enabling stable training of very large models and effective transfer across resolutions.

## Architecture & Mechanism

Swin V2 builds on the Swin V1 architecture with the following modifications:

- **Residual post-normalization**: Moves LayerNorm from pre-normalization to post-normalization position within each residual block, preventing activation magnitude explosion at large model scales.
- **Scaled cosine attention**: Replaces dot-product attention with cosine similarity-based attention, normalized by a learned temperature parameter. This prevents attention logits from being dominated by a few high-magnitude elements.
- **Log-spaced continuous position bias (Log-CPB)**: Replaces the fixed relative position bias table with a small MLP that takes log-spaced relative coordinates as input, enabling smooth extrapolation to window sizes larger than those seen during training.
- **Sequential self-supervised pre-training**: Uses SimMIM for self-supervised pre-training to improve data efficiency.

## Key Innovations

- **3B parameter training**: Successfully trains ViTs at 3B parameters, the largest dense vision model at time of publication.
- **Resolution transfer**: Log-CPB enables effective transfer from low-resolution pre-training to high-resolution fine-tuning.
- **Stable training**: Post-normalization and cosine attention together prevent training instabilities at scale.
- **Strong downstream results**: State-of-the-art on ImageNet (84.0% V2), COCO detection (63.1 AP), and ADE20K segmentation (59.9 mIoU).

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Swin Transformer V2: Scaling Up Capacity and Resolution (Liu et al.) | 2021 | [arXiv:2111.09883](https://arxiv.org/abs/2111.09883) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
