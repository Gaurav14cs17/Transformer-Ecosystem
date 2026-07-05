# UNETR — Transformers for 3D Medical Image Segmentation

## Overview

UNETR (UNEt TRansformers) combines a Vision Transformer encoder with a CNN-based U-Net decoder for 3D medical image segmentation. It uses a pure Transformer as the encoder to capture global context from volumetric medical data and connects it via skip connections to a convolutional decoder that recovers fine spatial details, achieving strong performance on organ and tumor segmentation tasks.

## Architecture & Mechanism

UNETR follows a U-shaped encoder-decoder design:

1. **3D Patch Embedding**: The 3D volume is divided into non-overlapping 16×16×16 patches, linearly projected to embedding vectors.
2. **Transformer Encoder**: A standard ViT encoder (12 layers) processes the patch sequence with global self-attention. Features are extracted from layers {3, 6, 9, 12} for skip connections.
3. **CNN Decoder**: A convolutional decoder progressively upsamples features using transposed convolutions and concatenation with skip connections from the encoder.
4. **Skip Connections**: Multi-resolution features from intermediate Transformer layers are reshaped to 3D and connected to corresponding decoder stages, providing fine-grained spatial information.
5. **Output**: Per-voxel segmentation predictions at the original volume resolution.

## Key Innovations

- **Transformer encoder for 3D volumes**: First to use a pure ViT encoder for 3D medical image segmentation, capturing long-range spatial dependencies.
- **Global self-attention**: Every voxel patch can attend to every other patch, crucial for understanding anatomy across the entire volume.
- **Multi-scale skip connections**: Extracting features from multiple Transformer layers provides a hierarchy of representations.
- **Strong on BTCV**: State-of-the-art results on the Beyond the Cranial Vault (BTCV) multi-organ segmentation benchmark.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| UNETR: Transformers for 3D Medical Image Segmentation (Hatamizadeh et al.) | 2021 | [arXiv:2103.10504](https://arxiv.org/abs/2103.10504) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
