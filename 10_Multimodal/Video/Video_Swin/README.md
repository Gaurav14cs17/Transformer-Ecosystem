# Video Swin Transformer

## Overview

Video Swin Transformer extends the Swin Transformer architecture from 2D images to 3D video by replacing 2D shifted windows with 3D shifted windows that operate across both spatial and temporal dimensions. This enables efficient spatiotemporal modeling with linear complexity, providing a general-purpose video backbone for action recognition, temporal grounding, and video understanding tasks.

## Architecture & Mechanism

Video Swin extends Swin Transformer to 3D:

1. **3D patch embedding**: Video is divided into 3D patches (2×4×4 for temporal×height×width), producing spatiotemporal tokens.
2. **3D window attention (W-MSA-3D)**: Self-attention is computed within non-overlapping 3D windows of size (T×M×M), e.g., (8×7×7).
3. **3D shifted window attention (SW-MSA-3D)**: Windows are shifted by (T/2, M/2, M/2) in alternating layers to enable cross-window connections across both space and time.
4. **Hierarchical stages**: Four stages with progressive spatial downsampling via patch merging (temporal dimension is not reduced).
5. **Relative position bias**: 3D relative position bias captures spatiotemporal relationships within windows.

## Key Innovations

- **3D shifted windows**: Extends the efficient shifted window mechanism to the temporal dimension, enabling cross-window temporal connections.
- **Linear complexity**: Attention cost scales linearly with video length × spatial size, making it practical for long videos.
- **Spatial-temporal factorization**: The 3D window naturally captures local spatiotemporal correlations.
- **Pre-trained from images**: Can be initialized from 2D Swin Transformer weights pre-trained on ImageNet, with temporal layers initialized separately.
- **Strong baselines**: State-of-the-art on Kinetics-400/600 and Something-Something V2 at the time.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Video Swin Transformer (Liu et al.) | 2021 | [arXiv:2106.13230](https://arxiv.org/abs/2106.13230) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
