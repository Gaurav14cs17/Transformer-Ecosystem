# DINOv2 — Learning Robust Visual Features without Supervision

## Overview

DINOv2 scales up the DINO self-supervised learning approach with curated data, improved training techniques, and larger models to produce general-purpose visual features that work across domains without fine-tuning. The resulting features match or exceed task-specific supervised and weakly-supervised models on image classification, segmentation, depth estimation, and more, using only frozen features with simple linear probes.

## Architecture & Mechanism

DINOv2 combines and improves several self-supervised methods:

- **Training objective**: Combines DINO's self-distillation loss (image-level) with iBOT's masked image modeling loss (patch-level), providing both global and local learning signals.
- **Data curation**: An automated pipeline curates a high-quality dataset (LVD-142M) from web-crawled images using self-supervised retrieval and deduplication — no manual labeling.
- **Architecture**: Standard ViT backbone (ViT-S/B/L/g) with register tokens to reduce attention artifacts.
- **Distillation**: Trains a large teacher (ViT-g, 1.1B parameters) and distills to smaller student models.
- **KoLeo regularization**: Encourages uniform distribution of features on the unit hypersphere, preventing collapse.

## Key Innovations

- **Universal visual features**: Frozen DINOv2 features work across tasks and domains without fine-tuning (linear probing only).
- **Automated data curation**: Replaces the need for large labeled datasets with a principled unsupervised curation pipeline.
- **Combined objectives**: Merging DINO + iBOT losses provides complementary learning signals.
- **Strong out-of-distribution generalization**: Features transfer well to medical, satellite, and other specialized domains.
- **Efficient distillation**: Large teacher → small student pipeline produces efficient models.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| DINOv2: Learning Robust Visual Features without Supervision (Oquab et al.) | 2023 | [arXiv:2304.07193](https://arxiv.org/abs/2304.07193) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
