# TinyBERT — Distilling BERT for Natural Language Understanding

## Overview

TinyBERT introduces a two-stage knowledge distillation framework that distills BERT at both the pre-training and fine-tuning stages. It performs distillation at multiple levels — embedding, attention, hidden, and prediction layers — producing a 4-layer model that is 7.5× smaller and 9.4× faster than BERT-base while retaining 96.8% of its performance on GLUE.

## Architecture & Mechanism

TinyBERT's two-stage distillation operates at multiple granularities:

1. **General distillation (pre-training stage)**: The student learns from the teacher's intermediate representations on a general corpus:
   - **Embedding distillation**: Linear transformation to match teacher's embedding layer output.
   - **Attention distillation**: MSE loss between student and teacher attention matrices (before softmax), capturing the teacher's attention patterns.
   - **Hidden state distillation**: MSE loss between transformed student hidden states and teacher hidden states.
   - **Layer mapping**: Student layers are mapped to evenly-spaced teacher layers (e.g., student layer 1 → teacher layer 3).

2. **Task-specific distillation (fine-tuning stage)**: The generally-distilled student is further distilled on task-specific data:
   - Same intermediate losses as above, plus prediction-layer KL divergence.
   - Data augmentation: GloVe-based word replacement augments the fine-tuning dataset.

## Key Innovations

- **Multi-layer distillation**: Distilling attention matrices and hidden states (not just final logits) transfers richer knowledge.
- **Two-stage training**: General + task-specific distillation outperforms single-stage approaches.
- **Attention transfer**: Directly matching attention distributions helps the student learn the teacher's reasoning patterns.
- **7.5× compression**: TinyBERT₄ (4 layers, 312 hidden size) achieves 96.8% of BERT-base on GLUE.
- **Data augmentation**: Augmenting the fine-tuning data improves task-specific distillation.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| TinyBERT: Distilling BERT for Natural Language Understanding (Jiao et al.) | 2019 | [arXiv:1909.10351](https://arxiv.org/abs/1909.10351) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
