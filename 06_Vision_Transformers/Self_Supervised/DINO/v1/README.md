# DINO — Self-Distillation with No Labels

## Overview

DINO (Self-Distillation with No Labels) is a self-supervised learning method based on self-distillation with a momentum teacher. A student network is trained to match the output of a momentum-updated teacher network on different augmented views of the same image. DINO discovers that self-supervised ViT features contain explicit information about semantic segmentation, producing attention maps that clearly segment objects without any supervision.

## Architecture & Mechanism

DINO uses a student-teacher framework with no labels:

1. **Multi-crop augmentation**: Two global views (224×224) and several local views (96×96) of each image.
2. **Student network**: Processes all views and produces output distributions via a projection head.
3. **Teacher network**: Processes only global views. Weights are updated via exponential moving average (EMA) of the student weights (momentum teacher).
4. **Centering + sharpening**: Teacher outputs are centered (subtract running mean) and sharpened (low temperature) to prevent collapse.
5. **Loss**: Cross-entropy between the student's output distribution (on all views) and the teacher's output distribution (on global views only).

## Key Innovations

- **Emergent segmentation**: Self-supervised ViT attention maps naturally segment objects, with different heads attending to different semantic parts.
- **No contrastive learning**: Avoids the need for negative samples, large batch sizes, or memory banks.
- **Momentum teacher**: EMA updates provide a stable, slowly evolving target that prevents mode collapse.
- **Multi-crop training**: Local-to-global correspondence encourages learning of scale-invariant features.
- **Strong k-NN performance**: DINO features achieve competitive ImageNet accuracy with simple k-NN classification (no fine-tuning).

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Emerging Properties in Self-Supervised Vision Transformers (Caron et al.) | 2021 | [arXiv:2104.14294](https://arxiv.org/abs/2104.14294) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
