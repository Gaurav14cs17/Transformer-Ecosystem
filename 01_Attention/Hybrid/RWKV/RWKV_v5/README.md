# RWKV v5 (Eagle)

The fifth generation of RWKV, introducing multi-headed matrix-valued states and improved token-shift mechanisms for stronger performance while maintaining linear computational complexity.

## Architecture

RWKV v5 uses a recurrent architecture with matrix-valued states:

```
Token shift: x_t' = lerp(x_{t-1}, x_t, μ)  (time-mixing via linear interpolation)

Receptance (R), Key (K), Value (V), Gate (G):
  r_t = W_r · x_t'
  k_t = W_k · x_t'
  v_t = W_v · x_t'
  g_t = silu(W_g · x_t')

Multi-head recurrence (per head h):
  s_t^h = diag(w^h) · s_{t-1}^h + k_t^h ⊗ v_t^h
  o_t^h = (r_t^h)^T · s_t^h

Output: y_t = (σ(g_t) ⊙ GroupNorm(concat(o_t^1, ..., o_t^H))) · W_o
```

Key changes from v4:
- Matrix-valued state `s_t` (instead of vector) per head
- Multi-headed design for increased expressiveness
- SiLU gating for output control

## Key Innovations

- **Matrix-valued states**: Each head maintains a d_k × d_v matrix state (richer memory)
- **Multi-head linear attention**: Parallel heads with independent decay and state
- **Improved token shift**: Better interpolation between current and previous tokens
- **GroupNorm on output**: Stabilizes training of the multi-head recurrent states
- **Gate mechanism**: SiLU-gated output for better gradient flow
- **Linear complexity maintained**: Still O(n) for both training (parallel) and inference (recurrent)

## Performance

- Significant improvement over RWKV v4 on language modeling benchmarks
- Competitive with Transformer models of similar size (1.5B - 7B parameters)
- Maintains constant inference cost per token
- Better in-context learning ability than v4

## Usage

RWKV v5 is used for:
- Efficient language model inference on consumer hardware
- Long-context processing with constant memory
- Community-driven open-source model development
- Applications requiring linear-time sequence processing

## Reference

| Paper | Year | Link |
|-------|------|------|
| Eagle and Finch: RWKV with Matrix-Valued States and Dynamic Recurrence | 2024 | [arXiv](https://arxiv.org/abs/2404.05892) |
| RWKV: Reinventing RNNs for the Transformer Era | 2023 | [arXiv](https://arxiv.org/abs/2305.13048) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
