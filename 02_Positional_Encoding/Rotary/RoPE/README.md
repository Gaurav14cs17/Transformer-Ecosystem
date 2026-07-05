# Rotary Position Embedding (RoPE)

## Overview

Rotary Position Embedding (RoPE) encodes position information by rotating query and key vectors in the complex plane. This elegant approach naturally incorporates relative position information into the dot-product attention mechanism without adding any terms to the attention logits. RoPE has become the de facto standard for modern LLMs including LLaMA, Qwen, Gemma, Mistral, and many others.

## Architecture & Mechanism

RoPE applies a rotation matrix to query and key vectors based on their absolute position:

- **Rotation**: For position `m`, the query/key vector is multiplied by a block-diagonal rotation matrix `R_m` where each 2D block rotates by angle `mθ_i`.
- **Frequency basis**: `θ_i = 10000^(-2i/d)` for dimension pair `i`, identical to sinusoidal PE frequencies.
- **Dot product encodes relative position**: `(R_m q)^T (R_n k) = q^T R_{n-m} k`, so the attention score depends only on the relative position `n - m`.
- **Complex number view**: Treating consecutive dimension pairs as complex numbers, RoPE multiplies by `e^{imθ}`, a pure rotation.

## Key Innovations

- **Relative position via absolute rotation**: Applies per-token absolute rotations, but the dot product naturally yields relative position dependence.
- **No additive terms**: Unlike Shaw or T5 biases, RoPE modifies Q/K directly — no extra parameters or bias tables.
- **Decaying inter-token dependency**: The dot product between rotated vectors exhibits a long-term decay property, providing a natural locality bias.
- **Zero additional parameters**: The rotation is fully deterministic; no learned embeddings needed.
- **Compatibility with linear attention**: Works with various efficient attention approximations.

## Adoption

RoPE is used in LLaMA (1/2/3), Qwen (1/2/3), Gemma, Mistral, Falcon, CodeLlama, DeepSeek, and most modern open-source LLMs.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| RoFormer: Enhanced Transformer with Rotary Position Embedding (Su et al.) | 2021 | [arXiv:2104.09864](https://arxiv.org/abs/2104.09864) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
