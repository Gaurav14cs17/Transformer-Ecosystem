# Swin UNETR — Swin Transformers for Self-Supervised Pre-Training and 3D Medical Image Segmentation

## Overview

Swin UNETR combines the Swin Transformer with the UNETR framework, replacing the ViT encoder with a hierarchical Swin Transformer encoder for 3D medical image segmentation. It also introduces a self-supervised pre-training strategy based on masked volume inpainting, rotation prediction, and contrastive learning, which significantly improves segmentation quality when labeled medical data is scarce.

## Architecture & Mechanism

Swin UNETR extends UNETR with two key improvements:

1. **Swin Transformer Encoder**:
   - Uses 3D Swin Transformer with shifted window self-attention for volumetric data.
   - Hierarchical stages produce multi-scale features (at 1/2, 1/4, 1/8, 1/16 of input resolution).
   - Window-based attention reduces complexity from O(n²) to linear in the number of voxels.

2. **Self-Supervised Pre-training**:
   - **Masked volume inpainting**: Random sub-volumes are masked and the model is trained to reconstruct them.
   - **3D rotation prediction**: Predict the rotation applied to the input volume.
   - **Contrastive learning**: Learn discriminative features by contrasting augmented views.
   - Pre-training on 5,050 unlabeled CT scans from publicly available datasets.

3. **CNN Decoder**: Same U-Net style decoder with skip connections from each Swin stage.

## Key Innovations

- **Hierarchical 3D attention**: Swin's window-based attention enables efficient processing of large 3D volumes.
- **Multi-task self-supervised pre-training**: Three complementary pre-training tasks provide rich initialization for the encoder.
- **Label efficiency**: Self-supervised pre-training significantly reduces the need for expensive medical annotations.
- **State-of-the-art**: Top performance on BTCV and Medical Segmentation Decathlon (MSD).

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Self-Supervised Pre-Training of Swin Transformers for 3D Medical Image Analysis (Tang et al.) | 2022 | [arXiv:2111.14791](https://arxiv.org/abs/2111.14791) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
