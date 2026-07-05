# CvT — Convolutional Vision Transformer

## Overview

CvT (Convolutional Vision Transformer) integrates convolutions into the Vision Transformer architecture at two levels: convolutional token embedding and convolutional projection in attention. This design introduces desirable properties of CNNs (shift invariance, local receptive fields) into the Transformer while maintaining the benefits of global attention, achieving strong performance without requiring positional encodings.

## Architecture & Mechanism

CvT modifies ViT with convolutional operations at two key points:

- **Convolutional Token Embedding**: Each stage begins with a convolutional token embedding layer (strided convolution) that progressively reduces spatial resolution and increases channel dimension, creating a multi-scale hierarchy.
- **Convolutional Projection**: In each attention block, Q, K, and V are computed using depth-wise separable convolutions instead of linear projections. This provides:
  - Local spatial context before attention computation.
  - Built-in 2D structure awareness.
  - Implicit positional information (no explicit PE needed).
- **Multi-stage hierarchy**: Three stages with token counts progressively reduced by 4×.

## Key Innovations

- **No positional encoding**: The convolutional projections provide sufficient position information, simplifying the architecture.
- **Efficiency**: Convolutional projections can use stride > 1 to reduce token count for K and V, lowering attention cost.
- **Shift invariance**: Convolutional operations bring translation equivariance, improving generalization.
- **Flexible resolution**: Without fixed positional encodings, the model naturally handles variable input resolutions.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| CvT: Introducing Convolutions to Vision Transformers (Wu et al.) | 2021 | [arXiv:2103.15808](https://arxiv.org/abs/2103.15808) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
