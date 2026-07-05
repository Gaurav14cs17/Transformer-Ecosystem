# ConvNeXt V2

## Overview

ConvNeXt V2 combines the ConvNeXt architecture with a self-supervised pre-training framework based on masked autoencoders. It introduces Global Response Normalization (GRN) to address feature collapse issues that arise when training ConvNets with masked image modeling, enabling fully convolutional masked autoencoders for the first time.

## Architecture & Mechanism

ConvNeXt V2 consists of two main contributions:

1. **FCMAE (Fully Convolutional Masked Autoencoder)**:
   - Randomly masks 60% of 32×32 input patches.
   - Encoder: Sparse ConvNeXt processes only visible patches.
   - Decoder: Single ConvNeXt block reconstructs masked patches.
   - Loss: MSE on masked patch pixels.

2. **Global Response Normalization (GRN)**:
   - Addresses feature collapse where many channels become inactive after MAE pre-training.
   - Three steps: (1) Global feature aggregation via L2 norm across spatial dimensions, (2) Feature normalization dividing by mean aggregated value, (3) Feature calibration via learned scaling and bias.
   - `GRN(x) = γ · x · (||x_i||₂ / mean(||x||₂)) + β + x`

## Key Innovations

- **Masked autoencoders for ConvNets**: Demonstrates that MAE-style pre-training can work for ConvNets (not just ViTs) with proper architectural modifications.
- **GRN layer**: Solves the feature collapse problem by encouraging inter-channel feature competition and diversity.
- **Scalable**: Models from 3.7M (Atto) to 650M (Huge) parameters, all benefiting from self-supervised pre-training.
- **Strong transfer**: Improves on ConvNeXt V1 across ImageNet, COCO, and ADE20K with the same architectures.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| ConvNeXt V2: Co-designing and Scaling ConvNets with Masked Autoencoders (Woo et al.) | 2023 | [arXiv:2301.00808](https://arxiv.org/abs/2301.00808) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
