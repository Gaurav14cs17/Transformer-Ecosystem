# Sparse Softmax (Sparsemax / α-entmax)

Produces sparse probability distributions where most weights are exactly zero, unlike standard softmax which always produces dense outputs.

## Variants
- **Sparsemax**: Projects onto the probability simplex, producing exact zeros
- **α-entmax**: Generalizes softmax (α=1) and sparsemax (α=2), with tunable sparsity

## Key Properties
- Exact sparse outputs (not just near-zero)
- Learnable sparsity level with α-entmax
- Better interpretability through hard selection
- Used in DashAttention (2025) for adaptive block selection

## References
| Paper | Year | Link |
|-------|------|------|
| From Softmax to Sparsemax: A Sparse Model of Attention and Multi-Label Classification | 2016 | [arXiv](https://arxiv.org/abs/1602.02068) |
| Adaptively Sparse Transformers | 2019 | [arXiv](https://arxiv.org/abs/1905.07765) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
