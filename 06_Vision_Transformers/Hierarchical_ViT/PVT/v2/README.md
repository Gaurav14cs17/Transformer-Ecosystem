# PVTv2 — Improved Baselines with Pyramid Vision Transformer

## Overview

PVTv2 improves upon the original PVT with several architectural refinements that enhance both performance and computational efficiency. The key improvements include overlapping patch embeddings, convolutional feed-forward networks, and linear-complexity attention, resulting in a stronger and more efficient hierarchical vision backbone.

## Architecture & Mechanism

PVTv2 retains the four-stage pyramid structure but introduces:

- **Overlapping patch embedding**: Replaces non-overlapping patch embedding with overlapping convolutions (e.g., 7×7 convolution with stride 4), providing local continuity and reducing boundary artifacts.
- **Convolutional FFN**: Adds a 3×3 depth-wise convolution between the two linear layers in the FFN, injecting local spatial information without explicit position encodings.
- **Linear SRA (Spatial Reduction Attention)**: Replaces the average pooling in SRA with a linear projection, further reducing computation while maintaining performance.
- **Zero padding position encoding**: The depth-wise convolution in the FFN implicitly provides position information, eliminating the need for explicit positional encodings.

## Key Innovations

- **No explicit position encoding needed**: The depth-wise convolution in the FFN provides implicit positional information.
- **Overlapping patch merging**: Smoother feature transitions between patches improve dense prediction tasks.
- **Linear attention complexity**: Linear SRA achieves better efficiency-performance tradeoffs.
- **Stronger baselines**: PVTv2-B2 outperforms PVT-Large with fewer parameters on both ImageNet and COCO.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| PVT v2: Improved Baselines with Pyramid Vision Transformer (Wang et al.) | 2022 | [arXiv:2106.13797](https://arxiv.org/abs/2106.13797) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
