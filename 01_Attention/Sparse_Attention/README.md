# Sparse Attention

Attention patterns that attend to a subset of positions rather than all tokens, reducing O(n²) complexity.

## Sub-directories

| Directory | Description |
|-----------|-------------|
| [Sparse_Transformer](Sparse_Transformer/) | Original sparse attention patterns |
| [Local_Attention](Local_Attention/) | Fixed local window attention |
| [Sliding_Window](Sliding_Window/) | Sliding window (Mistral-style) |
| [Dilated](Dilated/) | Dilated/strided attention patterns |
| [Global](Global/) | Global attention tokens (Longformer-style) |
| [NSA](NSA/) | Native Sparse Attention (hardware-aligned) |
| [Gated_Attention](Gated_Attention/) | Gated attention for sparsity |
| [DashAttention](DashAttention/) | Differentiable adaptive sparse hierarchical |

## Papers

| Paper | Year | Link |
|-------|------|------|
| Generating Long Sequences with Sparse Transformers | 2019 | [arXiv](https://arxiv.org/abs/1904.10509) |
| NSA: Native Sparse Attention | 2025 | [arXiv](https://arxiv.org/abs/2502.11089) |
| DashAttention | 2025 | [arXiv](https://arxiv.org/abs/2605.18753) |
| SparDA: Sparse Decoupled Attention | 2026 | [arXiv](https://arxiv.org/abs/2606.04511) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
