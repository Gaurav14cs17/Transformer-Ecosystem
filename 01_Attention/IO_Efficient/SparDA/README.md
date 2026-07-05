# SparDA (Sparse Decoupled Attention)

Introduces a fourth "Forecast" projection alongside Q, K, V that predicts which KV blocks the next layer needs. Enables lookahead CPU-to-GPU prefetch. Delivers up to 5.3× decode throughput improvement.

## Reference
| Paper | Year | Link |
|-------|------|------|
| SparDA: Sparse Decoupled Attention for Efficient Long-Context LLM Inference | 2026 | [arXiv](https://arxiv.org/abs/2606.04511) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
