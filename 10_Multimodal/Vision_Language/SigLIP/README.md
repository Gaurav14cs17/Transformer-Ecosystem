# SigLIP — Sigmoid Loss for Language Image Pre-Training

## Overview

SigLIP replaces CLIP's softmax-based contrastive loss with a simpler per-pair sigmoid loss, eliminating the need for global batch normalization across devices. This makes distributed training simpler and more scalable while achieving equal or better performance, particularly at smaller batch sizes where softmax-based methods degrade.

## Architecture & Mechanism

SigLIP modifies the CLIP training objective while keeping the same architecture:

- **Dual encoders**: Standard ViT (image) + Transformer (text) dual-encoder architecture, identical to CLIP.
- **Sigmoid loss**: Each image-text pair is treated as an independent binary classification:
  - **Positive pairs** (matched): `loss = -log σ(t · sim(z_img, z_txt) + b)`
  - **Negative pairs** (unmatched): `loss = -log σ(-t · sim(z_img, z_txt) - b)`
  - `t` is a learned temperature, `b` is a learned bias.
- **No global softmax**: Unlike CLIP's InfoNCE loss (which requires computing a softmax over all pairs in the batch), SigLIP processes each pair independently.
- **No cross-device communication for loss**: Each device can compute its loss independently, simplifying distributed training.

## Key Innovations

- **Simpler distributed training**: No need to gather all embeddings across TPU/GPU pods for global softmax computation.
- **Batch-size robustness**: Performance is stable across a wide range of batch sizes (4K-32K), unlike softmax loss which requires very large batches.
- **Learnable bias**: The bias term `b` replaces the implicit bias from batch size in the softmax formulation.
- **Better scaling**: More efficient use of compute at large scales.
- **Widely adopted**: Used as the vision backbone in PaLI-3, Gemma, and many other Google models.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Sigmoid Loss for Language Image Pre-Training (Zhai et al.) | 2023 | [arXiv:2303.15343](https://arxiv.org/abs/2303.15343) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
