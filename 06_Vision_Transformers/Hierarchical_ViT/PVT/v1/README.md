# PVT — Pyramid Vision Transformer

## Overview

Pyramid Vision Transformer (PVT) is one of the first Vision Transformers designed with a hierarchical (pyramid) structure for dense prediction tasks. Unlike ViT, which produces single-scale features, PVT generates multi-scale feature maps similar to CNN backbones (ResNet), making it directly compatible with existing detection and segmentation frameworks.

## Architecture & Mechanism

PVT uses a four-stage design with progressively reduced spatial resolution:

- **Stage 1**: Patch embedding with 4×4 patches → Transformer blocks → feature map at 1/4 resolution.
- **Stages 2-4**: Progressive 2× downsampling via strided patch embedding → Transformer blocks → features at 1/8, 1/16, 1/32 resolution.
- **Spatial Reduction Attention (SRA)**: To reduce the quadratic cost of self-attention at high resolutions, keys and values are spatially reduced (e.g., by a factor of 8 in early stages) via a convolution before computing attention.
- **Output**: Multi-scale feature pyramid {F1, F2, F3, F4} suitable for FPN, RetinaNet, Mask R-CNN, etc.

## Key Innovations

- **Pure Transformer pyramid backbone**: First to demonstrate a pure-Transformer hierarchical backbone for dense prediction.
- **Spatial Reduction Attention**: Reduces attention complexity from O(n²) to O(n²/R²) by spatially downsampling K and V.
- **Drop-in CNN replacement**: Produces the same multi-scale feature format as ResNet, enabling direct use with existing detection/segmentation heads.
- **Scalable**: PVT-Tiny to PVT-Large variants cover a wide parameter range.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Pyramid Vision Transformer: A Versatile Backbone for Dense Prediction (Wang et al.) | 2021 | [arXiv:2102.12122](https://arxiv.org/abs/2102.12122) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
