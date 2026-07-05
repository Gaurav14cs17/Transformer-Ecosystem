# IO-Efficient Attention

Attention implementations optimized for GPU memory hierarchy — minimizing HBM reads/writes.

## Sub-directories

| Directory | Description |
|-----------|-------------|
| [FlashAttention](FlashAttention/) | Tiling-based exact attention (v1, v2, v3) |
| [FlexAttention](FlexAttention/) | PyTorch's flexible compiled attention |
| [SparDA](SparDA/) | Sparse Decoupled Attention with forecast projection |

## Papers

| Paper | Year | Link |
|-------|------|------|
| FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness | 2022 | [arXiv](https://arxiv.org/abs/2205.14135) |
| FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning | 2023 | [arXiv](https://arxiv.org/abs/2307.08691) |
| FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision | 2024 | [arXiv](https://arxiv.org/abs/2407.08691) |
| FlexAttention | 2024 | [PyTorch Blog](https://pytorch.org/blog/flexattention/) |
| SparDA: Sparse Decoupled Attention | 2026 | [arXiv](https://arxiv.org/abs/2606.04511) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
