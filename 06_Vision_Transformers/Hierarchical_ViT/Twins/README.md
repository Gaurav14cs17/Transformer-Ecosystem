# Twins — Revisiting Spatial Attention Design in Vision Transformers

## Overview

Twins proposes two efficient spatial attention designs for Vision Transformers: Twins-PCPVT (combining PVT with conditional position encoding) and Twins-SVT (using spatially separable self-attention). The key contribution is an interleaved local-global attention mechanism that achieves strong performance with linear complexity, serving as a general-purpose hierarchical backbone.

## Architecture & Mechanism

**Twins-SVT** (the primary contribution) alternates between two types of attention:

- **Locally-Grouped Self-Attention (LSA)**: Divides the feature map into non-overlapping sub-windows and computes self-attention within each window (similar to Swin but without shifting).
- **Global Sub-Sampled Attention (GSA)**: Generates a representative summary token for each sub-window, then computes attention between all summary tokens and all original tokens. This provides global receptive field with reduced cost.
- **Interleaved design**: LSA and GSA are alternated in consecutive layers, providing both local detail and global context.

**Twins-PCPVT** enhances PVT with:
- **Conditional Position Encoding (CPE)**: A depth-wise convolution after attention provides dynamic, input-dependent positional information.

## Key Innovations

- **Spatially separable attention**: Decomposes global attention into local attention + global summarization, achieving linear complexity.
- **No shifted windows needed**: Unlike Swin, cross-window communication is handled by GSA without window shifting.
- **Conditional position encoding**: Input-dependent PE that works with variable image sizes.
- **Strong dense prediction**: Competitive with Swin on COCO and ADE20K without shifted window complexity.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Twins: Revisiting the Design of Spatial Attention in Vision Transformers (Chu et al.) | 2021 | [arXiv:2104.13840](https://arxiv.org/abs/2104.13840) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
