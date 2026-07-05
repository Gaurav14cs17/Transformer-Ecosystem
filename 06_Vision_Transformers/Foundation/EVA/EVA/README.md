# EVA — Exploring the Limits of Masked Visual Representation Learning at Scale

## Overview

EVA is a vision foundation model that scales masked image modeling (MIM) to one billion parameters by using CLIP features as reconstruction targets instead of raw pixels or discrete tokens. This vision-language aligned pre-training objective produces representations that transfer exceptionally well to a wide range of vision tasks including classification, detection, segmentation, and video understanding.

## Architecture & Mechanism

EVA uses a scaled-up MIM framework with CLIP-guided targets:

1. **Architecture**: Standard ViT-Enormous (ViT-E) with ~1B parameters, using 14×14 patch size.
2. **MIM with CLIP targets**: Instead of predicting pixel values (MAE) or discrete tokens (BEiT), EVA predicts the CLIP visual features of masked patches. This aligns the learned representations with semantic, language-grounded features.
3. **Pre-training stages**:
   - Stage 1: MIM pre-training on ImageNet-21K with CLIP feature reconstruction.
   - Stage 2: Intermediate fine-tuning on ImageNet-21K with labels.
   - Stage 3: Final fine-tuning on ImageNet-1K.
4. **Loss**: Cosine similarity loss between the predicted features and CLIP teacher features for masked patches.

## Key Innovations

- **CLIP-guided MIM**: Using CLIP features as targets provides semantically rich, language-aligned supervision that pixel or token reconstruction cannot match.
- **Billion-scale ViT**: Successfully trains a 1B-parameter ViT with stable training dynamics.
- **Universal transfer**: A single pre-trained model achieves strong results across image classification, COCO detection/segmentation, ADE20K segmentation, and video classification.
- **Efficient scaling**: MIM pre-training with CLIP targets is more compute-efficient than contrastive pre-training at the same scale.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| EVA: Exploring the Limits of Masked Visual Representation Learning at Scale (Fang et al.) | 2022 | [arXiv:2211.07636](https://arxiv.org/abs/2211.07636) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
