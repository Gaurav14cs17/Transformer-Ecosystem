# Multi-Head Attention (MHA)

Original multi-head attention from "Attention Is All You Need." Splits Q, K, V into h heads, computes attention independently per head, then concatenates and projects.

MultiHead(Q, K, V) = Concat(head₁, ..., headₕ) · W_O

## Reference
| Paper | Year | Link |
|-------|------|------|
| Attention Is All You Need | 2017 | [arXiv](https://arxiv.org/abs/1706.03762) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
