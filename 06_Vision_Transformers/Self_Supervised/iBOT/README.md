# iBOT — Image BERT Pre-Training with Online Tokenizer

## Overview

iBOT (Image BERT Pre-Training with Online Tokenizer) combines masked image modeling (MIM) with self-distillation by using the momentum teacher network as an online tokenizer. Unlike BEiT, which requires a separately pre-trained dVAE tokenizer, iBOT jointly learns the visual tokenizer and the representation in a unified framework, producing strong features for both image-level and patch-level tasks.

## Architecture & Mechanism

iBOT uses a dual-objective student-teacher framework:

1. **Self-distillation (DINO-style)**: The student matches the teacher's [CLS] token output across different augmented views. Provides image-level representation learning.
2. **Masked image modeling (MIM)**: Random patches are masked in the student input. The student predicts the teacher's patch-level output tokens for the masked positions. The teacher acts as the online tokenizer.
3. **Momentum teacher**: Updated via EMA of student weights (same as DINO).
4. **Centering + sharpening**: Applied to teacher outputs at both CLS and patch levels.
5. **Loss**: Cross-entropy between student and teacher outputs for both [CLS] (self-distillation) and patch tokens (MIM).

## Key Innovations

- **Online tokenizer**: The momentum teacher serves as the tokenizer, eliminating the need for a pre-trained dVAE or VQGAN. The tokenizer improves as training progresses.
- **Joint image + patch learning**: Combines global (DINO-like) and local (BEiT-like) learning objectives in a single framework.
- **Self-improving targets**: Unlike BEiT (fixed tokenizer), iBOT's targets evolve during training, becoming more semantically meaningful.
- **Strong dense features**: Patch-level pre-training significantly improves performance on semantic segmentation and object detection.
- **Foundation for DINOv2**: iBOT's patch-level loss is a key component of DINOv2.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| iBOT: Image BERT Pre-Training with Online Tokenizer (Zhou et al.) | 2021 | [arXiv:2111.07832](https://arxiv.org/abs/2111.07832) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
