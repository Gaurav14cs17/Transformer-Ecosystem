# SegFormer — Simple and Efficient Design for Semantic Segmentation with Transformers

## Overview

SegFormer is an efficient semantic segmentation framework that pairs a hierarchical Transformer encoder (Mix Transformer, MiT) with a lightweight All-MLP decoder. The encoder produces multi-scale features without positional encodings, and the decoder simply fuses features from all scales using MLPs, achieving strong performance with minimal computational overhead.

## Architecture & Mechanism

SegFormer consists of two components:

1. **Mix Transformer Encoder (MiT)**:
   - Hierarchical with four stages producing features at 1/4, 1/8, 1/16, 1/32 resolution.
   - **Efficient self-attention**: Reduces K and V spatial dimensions by a reduction ratio R (similar to PVT's SRA).
   - **Mix-FFN**: Adds a 3×3 depthwise convolution within the FFN, providing positional information without explicit PE.
   - **Overlapping patch merging**: Uses overlapping convolutions for downsampling between stages.

2. **All-MLP Decoder**:
   - Unifies multi-scale features through four steps: (1) MLP per stage to unify channel dimensions, (2) upsample all to 1/4 resolution, (3) concatenate, (4) MLP to predict segmentation map.
   - No complex operations like attention or ASPP — pure MLPs.

## Key Innovations

- **No positional encoding**: Mix-FFN's depthwise convolution provides implicit position information, enabling flexible input resolutions.
- **Lightweight decoder**: The All-MLP decoder is extremely efficient, making the model practical for real-time applications.
- **Scalable**: MiT-B0 to MiT-B5 span a wide range of model sizes (3.8M to 84.7M parameters).
- **Strong efficiency-accuracy tradeoff**: SegFormer-B0 achieves 37.4 mIoU on ADE20K with only 3.8M parameters.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| SegFormer: Simple and Efficient Design for Semantic Segmentation with Transformers (Xie et al.) | 2021 | [arXiv:2105.15203](https://arxiv.org/abs/2105.15203) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
