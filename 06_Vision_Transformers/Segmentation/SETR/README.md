# SETR — Rethinking Semantic Segmentation as a Sequence-to-Sequence Prediction

## Overview

SETR (SEgmentation TRansformer) is one of the first works to apply a pure Vision Transformer as the encoder for semantic segmentation. It treats the image as a sequence of patches and processes them with a standard Transformer encoder, then uses various decoder designs to produce per-pixel segmentation maps, demonstrating that Transformers can serve as powerful feature extractors for dense prediction.

## Architecture & Mechanism

SETR uses a ViT encoder with different decoder options:

- **Encoder**: Standard ViT (ViT-L/16) pre-trained on ImageNet-21K. The image is divided into 16×16 patches, producing a sequence of feature tokens at 1/16 resolution.
- **Three decoder designs**:
  - **SETR-Naive**: Simple 1×1 convolution on the reshaped feature map + bilinear upsampling.
  - **SETR-PUP (Progressive UPsampling)**: Multiple stages of 2× upsampling with convolution layers.
  - **SETR-MLA (Multi-Level feature Aggregation)**: Aggregates features from multiple Transformer layers (not just the last), similar to FPN.
- **Output**: Per-pixel class predictions at the original image resolution.

## Key Innovations

- **Pure Transformer encoder for segmentation**: First to show that a plain ViT (without convolutions in the encoder) works well for dense prediction.
- **Global receptive field**: Every patch attends to every other patch from the first layer, eliminating the limited receptive field of CNN encoders.
- **Multi-level features**: SETR-MLA demonstrates that intermediate Transformer layers contain useful multi-scale information.
- **Strong results**: Competitive with CNN-based methods (DeepLabV3+, OCRNet) on ADE20K and Cityscapes.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Rethinking Semantic Segmentation from a Sequence-to-Sequence Perspective with Transformers (Zheng et al.) | 2020 | [arXiv:2012.15840](https://arxiv.org/abs/2012.15840) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
