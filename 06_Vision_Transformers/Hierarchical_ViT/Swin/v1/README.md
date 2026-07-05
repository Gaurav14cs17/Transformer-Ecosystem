# Swin Transformer — Hierarchical Vision Transformer using Shifted Windows

## Overview

Swin Transformer introduces a hierarchical Vision Transformer that computes self-attention within local windows and shifts these windows between layers to enable cross-window connections. This design produces multi-scale feature maps (like CNNs) while maintaining linear computational complexity with respect to image size, making it suitable as a general-purpose backbone for both classification and dense prediction tasks.

## Architecture & Mechanism

- **Patch partition**: Image is split into 4×4 non-overlapping patches (tokens).
- **Hierarchical stages**: Four stages with progressively reduced spatial resolution (via patch merging) and increased channel dimension, producing feature maps at 1/4, 1/8, 1/16, and 1/32 of the original resolution.
- **Window-based self-attention (W-MSA)**: Self-attention is computed within non-overlapping local windows of fixed size (typically 7×7), reducing complexity from O(n²) to O(n·M²) where M is window size.
- **Shifted window (SW-MSA)**: In alternating layers, the window partition is shifted by (M/2, M/2) pixels, creating connections between adjacent windows from the previous layer.
- **Patch merging**: Between stages, 2×2 neighboring patches are concatenated and linearly projected, halving spatial resolution and doubling channels.

## Key Innovations

- **Linear complexity**: Window-based attention scales linearly with image size, enabling high-resolution inputs.
- **Shifted windows**: Provide cross-window connections without the overhead of overlapping windows or global attention.
- **Hierarchical features**: Multi-scale feature maps enable direct use with FPN, U-Net, and other dense prediction frameworks.
- **General-purpose backbone**: Serves as a drop-in replacement for CNNs in detection (COCO) and segmentation (ADE20K).

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Swin Transformer: Hierarchical Vision Transformer using Shifted Windows (Liu et al.) | 2021 | [arXiv:2103.14030](https://arxiv.org/abs/2103.14030) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
