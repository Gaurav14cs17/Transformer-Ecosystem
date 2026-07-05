# SimMIM — Simple Framework for Masked Image Modeling

## Overview

SimMIM is a simplified masked image modeling framework that demonstrates strong self-supervised pre-training with minimal design complexity. It uses random masking with large patches, a direct regression target (raw pixel values), and a lightweight prediction head, showing that the core masked prediction task drives performance rather than elaborate tokenizers or decoder architectures.

## Architecture & Mechanism

SimMIM follows a straightforward design:

1. **Masking strategy**: Random masking of patches with a moderately large mask patch size (e.g., 32×32). Each patch is independently masked with a fixed probability (typically 60%).
2. **Encoder**: Any vision backbone (ViT or Swin Transformer) processes the masked input. Masked patches are replaced with a learnable mask token.
3. **Prediction head**: A single linear layer maps encoder outputs to pixel predictions. No heavy decoder needed.
4. **Target**: Raw RGB pixel values of the masked regions (no tokenization).
5. **Loss**: L1 regression loss computed only on the masked patches.

## Key Innovations

- **Extreme simplicity**: Demonstrates that a simple L1 loss on raw pixels with a linear head is sufficient — no dVAE, no codebook, no multi-layer decoder.
- **Large mask patches**: Using 32×32 mask patches (vs. 16×16) creates spatially coherent masked regions, improving pre-training quality.
- **Backbone agnostic**: Works with both ViT and Swin Transformer (and potentially other architectures).
- **Competitive performance**: Matches BEiT and MAE results with a much simpler pipeline.
- **Swin Transformer pre-training**: First to demonstrate effective MIM pre-training for hierarchical ViTs (Swin).

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| SimMIM: A Simple Framework for Masked Image Modeling (Xie et al.) | 2021 | [arXiv:2111.09886](https://arxiv.org/abs/2111.09886) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
