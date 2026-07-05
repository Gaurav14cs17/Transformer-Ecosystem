# DistilBERT — A Distilled Version of BERT

## Overview

DistilBERT is a smaller, faster, and cheaper version of BERT produced through knowledge distillation. By training a 6-layer student model to mimic the behavior of a 12-layer BERT teacher, DistilBERT retains 97% of BERT's language understanding capabilities while being 60% smaller and 60% faster, making it practical for resource-constrained deployment.

## Architecture & Mechanism

DistilBERT uses a triple loss during distillation:

1. **Architecture**: A 6-layer Transformer (half of BERT-base's 12 layers) with the same hidden size (768) and attention heads (12). The token-type embeddings and the pooler are removed.
2. **Distillation loss**: KL divergence between the student's and teacher's soft probability distributions (with temperature softening).
3. **Masked language modeling loss**: Standard MLM loss on the training corpus (same as BERT pre-training).
4. **Cosine embedding loss**: Alignment between student and teacher hidden representations, ensuring the student's internal representations are similar to the teacher's.
5. **Initialization**: Student layers are initialized from every other layer of the pre-trained teacher.

## Key Innovations

- **97% of BERT's performance**: Retains the vast majority of BERT's capability across GLUE benchmarks.
- **60% smaller**: 66M parameters vs. 110M for BERT-base.
- **60% faster**: Inference speedup from the reduced number of layers.
- **Triple loss**: Combining distillation, MLM, and cosine losses provides richer training signal than distillation alone.
- **Pre-training distillation**: Distillation is applied during pre-training (not fine-tuning), producing a general-purpose smaller model.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter (Sanh et al.) | 2019 | [arXiv:1910.01108](https://arxiv.org/abs/1910.01108) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
