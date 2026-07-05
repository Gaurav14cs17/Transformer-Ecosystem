# CoPE — Contextual Position Encoding

## Overview

Contextual Position Encoding (CoPE) computes position values that are context-dependent rather than fixed. Instead of assigning positions based on token index alone, CoPE determines effective positions by using attention-like gates that count relevant tokens, allowing the model to measure positions in terms of meaningful units (e.g., words, sentences) rather than raw token indices.

## Architecture & Mechanism

CoPE modifies how positions are computed within the attention mechanism:

1. **Gate computation**: For each query-key pair, a gate value `g_ij = sigmoid(q_i^T k_j)` is computed, measuring how "relevant" each preceding token is.
2. **Context-dependent position**: The effective position of key `j` relative to query `i` is `p_ij = Σ_{t=j}^{i} g_it`, i.e., the sum of gates between positions `j` and `i`.
3. **Position embedding interpolation**: Since `p_ij` is continuous (not integer), position embeddings are obtained via interpolation between learned embeddings at integer positions.
4. **Position bias**: The interpolated position embedding is used to compute a bias added to attention logits.

## Key Innovations

- **Context-dependent positions**: Positions are determined by content, not just index. Two tokens at the same index distance can have different effective positions depending on the intervening content.
- **Counting in meaningful units**: The gates can learn to count words, sentences, or other semantic units, abstracting away subword tokenization artifacts.
- **Generalizes existing methods**: CoPE subsumes both absolute and relative position encodings as special cases.
- **Improved length generalization**: Because positions are content-dependent, the model can better generalize to unseen sequence lengths.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Contextual Position Encoding: Learning to Count What's Important (Golovneva et al.) | 2024 | [arXiv:2405.18719](https://arxiv.org/abs/2405.18719) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
