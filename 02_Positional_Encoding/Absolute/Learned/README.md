# Learned Positional Encoding

## Overview

Learned Positional Encoding replaces fixed sinusoidal functions with trainable embedding vectors, one per position. Each position index maps to a learned d-dimensional vector that is added to the token embedding. This approach is used in models such as BERT, GPT-2, and the original Vision Transformer (ViT).

## Architecture & Mechanism

A learnable embedding matrix **P ∈ ℝ^(L_max × d_model)** is initialized (typically randomly) and optimized during training alongside all other model parameters. For a token at position `t`, the input to the first Transformer layer becomes:

**x_t = token_embedding(t) + P[t]**

The maximum sequence length `L_max` is a fixed hyperparameter set before training (e.g., 512 for BERT, 1024 for GPT-2).

## Key Innovations

- **Task-adaptive positions**: The model can learn position representations that are optimal for the specific downstream task and data distribution.
- **Simplicity**: No mathematical formulation is needed; standard backpropagation handles learning.
- **Competitive performance**: Vaswani et al. (2017) found nearly identical results between learned and sinusoidal encodings on machine translation.

## Limitations

- **Fixed maximum length**: Cannot generalize to positions beyond `L_max` without retraining or interpolation.
- **No explicit relative position bias**: Each position is treated independently; the model must learn any relative patterns implicitly.
- **Parameter overhead**: Adds `L_max × d_model` parameters, though this is typically negligible compared to overall model size.

## Paper References

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| BERT: Pre-training of Deep Bidirectional Transformers (Devlin et al.) | 2018 | [arXiv:1810.04805](https://arxiv.org/abs/1810.04805) |
| Language Models are Unsupervised Multitask Learners (Radford et al., GPT-2) | 2019 | [OpenAI Blog](https://openai.com/research/better-language-models) |
| Attention Is All You Need (Vaswani et al.) | 2017 | [arXiv:1706.03762](https://arxiv.org/abs/1706.03762) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
