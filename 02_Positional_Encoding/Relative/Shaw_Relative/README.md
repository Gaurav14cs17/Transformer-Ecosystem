# Shaw Relative Position Representations

## Overview

Shaw et al. introduced the first practical method for incorporating relative position information directly into the self-attention mechanism. Instead of adding absolute position encodings to input embeddings, this approach learns pairwise relative position representations that are used within the attention computation itself.

## Architecture & Mechanism

The method modifies the self-attention computation by adding learned relative position embeddings:

- **Relative key bias**: An edge vector `a_ij^K` is added to the key when computing attention logits: `e_ij = (x_i W^Q)(x_j W^K + a_ij^K)^T / √d`
- **Relative value bias**: An edge vector `a_ij^V` is added to the value when computing the output: `z_i = Σ_j α_ij (x_j W^V + a_ij^V)`
- **Clipped distances**: Relative positions are clipped to a maximum distance `k`, so `a_ij` depends on `clip(j - i, -k, k)`. This means positions beyond distance `k` share the same embedding.

The total number of unique relative position embeddings is `2k + 1`.

## Key Innovations

- **Relative over absolute**: Captures translation-invariant patterns that absolute encodings miss.
- **Clipped distance**: Limits the number of learned embeddings while assuming that precise relative position matters less at long distances.
- **Seamless integration**: Directly modifies attention scores without changing the overall Transformer architecture.
- **Length generalization**: Not tied to absolute position indices, offering better generalization to unseen lengths.

## Limitations

- Increases computation in the attention layer due to additional terms.
- The clipping window `k` is a hyperparameter that must be tuned.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Self-Attention with Relative Position Representations (Shaw et al.) | 2018 | [arXiv:1803.02155](https://arxiv.org/abs/1803.02155) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
