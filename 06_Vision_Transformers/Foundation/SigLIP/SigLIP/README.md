# SigLIP — Sigmoid Loss for Language Image Pre-Training

## Overview

SigLIP replaces CLIP's contrastive softmax-based loss with a simpler sigmoid loss that operates on individual image-text pairs independently. This eliminates the need for a global view across all pairs in the batch, enabling simpler distributed training, better scalability, and improved performance, especially at smaller batch sizes.

## Architecture & Mechanism

SigLIP modifies the CLIP training objective:

- **Standard CLIP**: Uses an InfoNCE loss with softmax normalization across the entire batch. Requires gathering all embeddings across devices for the global softmax denominator.
- **SigLIP**: Uses a binary sigmoid loss on each image-text pair independently:
  - Positive pairs: `log(σ(z_i · z_j · t + b))` (matched image-text pair)
  - Negative pairs: `log(1 - σ(z_i · z_j · t + b))` (unmatched pairs)
  - `t` and `b` are learned temperature and bias parameters.
- **Architecture**: Dual encoder (ViT for images, text Transformer for text) — same as CLIP.
- **No global normalization**: Each pair contributes independently to the loss; no cross-device communication for the softmax denominator.

## Key Innovations

- **Simpler distributed training**: No need to gather embeddings across all devices for a global softmax — each pair is processed independently.
- **Better at smaller batch sizes**: Softmax-based contrastive loss degrades significantly with small batches; sigmoid loss is more robust.
- **Learnable bias**: The bias term `b` replaces the role of the batch size in setting the contrast threshold.
- **Matched performance**: SigLIP matches or exceeds CLIP performance with the same compute budget.
- **Foundation for PaLI-3**: SigLIP encoders serve as the vision backbone in Google's PaLI-3 model.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Sigmoid Loss for Language Image Pre-Training (Zhai et al.) | 2023 | [arXiv:2303.15343](https://arxiv.org/abs/2303.15343) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
