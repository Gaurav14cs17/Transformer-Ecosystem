# Mamba-Attention Hybrid

Combines selective state space models (Mamba) with standard Transformer attention layers, leveraging SSM efficiency for most of the computation while retaining attention's superior recall capabilities.

## Architecture

The hybrid interleaves Mamba and Attention blocks:

```
Mamba block:
  x → Linear → Conv1D → SSM(A, B, C, Δ) → Linear → output
  SSM: h_t = Ā·h_{t-1} + B̄·x_t,  y_t = C·h_t
  Selection: Δ, B, C are input-dependent (selective)

Attention block:
  x → LayerNorm → MultiHeadAttention → Residual → FFN → output

Hybrid stack (example):
  [Mamba, Mamba, Mamba, Attention, Mamba, Mamba, Mamba, Attention, ...]
  Typical ratio: 3-7 Mamba blocks per 1 Attention block
```

Design principle: Use attention sparingly for tasks requiring precise token-level recall (copying, lookup), and Mamba for everything else.

## Key Innovations

- **Best of both worlds**: SSM efficiency + attention's associative recall
- **Reduced KV-cache**: Fewer attention layers → much smaller cache at inference
- **Selective placement**: Attention layers placed where recall is most needed
- **Linear + quadratic**: Most layers run in O(n) time, few in O(n²)
- **State sharing**: Some designs share state between Mamba and attention layers
- **Scalable**: The ratio is tunable — more attention for quality, more Mamba for speed

## Performance

- Matches pure Transformer quality with 3-7× fewer attention layers
- Significantly faster inference due to reduced KV-cache
- Better length extrapolation than pure attention models
- Strong performance on both language modeling and downstream tasks

## Usage

Mamba-Attention hybrids are used in:
- Jamba (AI21 Labs) — production-scale hybrid
- Zamba (Zyphra) — efficient hybrid model
- Research on optimal attention/SSM ratios
- Any application wanting Transformer quality with SSM efficiency

## Reference

| Paper | Year | Link |
|-------|------|------|
| Jamba: A Hybrid Transformer-Mamba Language Model | 2024 | [arXiv](https://arxiv.org/abs/2403.19887) |
| An Empirical Study of Mamba-based Language Models | 2024 | [arXiv](https://arxiv.org/abs/2406.07887) |
| Mamba: Linear-Time Sequence Modeling with Selective State Spaces | 2023 | [arXiv](https://arxiv.org/abs/2312.00752) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
