# Mask2Former — Masked-attention Mask Transformer for Universal Image Segmentation

## Overview

Mask2Former is a universal architecture for image segmentation that handles panoptic, instance, and semantic segmentation within a single framework. It introduces masked attention in the Transformer decoder, which restricts cross-attention to the predicted mask regions of each query, significantly improving convergence speed and final performance over its predecessor MaskFormer.

## Architecture & Mechanism

Mask2Former uses a meta-architecture with three components:

1. **Backbone + Pixel Decoder**: Any backbone (ResNet, Swin) extracts features, and a multi-scale deformable attention pixel decoder produces high-resolution per-pixel features at multiple scales.
2. **Transformer Decoder with Masked Attention**:
   - `N` learnable query embeddings represent potential segments.
   - **Masked cross-attention**: Each query only attends to locations within its predicted mask region from the previous layer, focusing attention on relevant pixels.
   - Multi-scale features: Queries attend to different resolution feature maps at different decoder layers.
3. **Prediction heads**: Each query produces a class prediction and a binary mask (via dot product with pixel features).

## Key Innovations

- **Masked attention**: Constraining cross-attention to predicted mask regions dramatically improves convergence (vs. full cross-attention) and performance.
- **Universal architecture**: A single model handles panoptic, instance, and semantic segmentation — no task-specific modifications needed.
- **Multi-scale decoder**: Processing features from different resolutions at different decoder layers captures both fine details and global context.
- **State-of-the-art**: Top results on COCO panoptic, instance, and ADE20K semantic segmentation.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Masked-attention Mask Transformer for Universal Image Segmentation (Cheng et al.) | 2021 | [arXiv:2112.01527](https://arxiv.org/abs/2112.01527) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
