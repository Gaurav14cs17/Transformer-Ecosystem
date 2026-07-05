# FlashAttention

IO-aware exact attention algorithm that uses tiling to minimize HBM reads/writes, achieving 2-4× speedup over standard attention.

## Sub-directories
| Directory | Description |
|-----------|-------------|
| [v1](v1/) | Original FlashAttention (2022) |
| [v2](v2/) | Better parallelism and work partitioning (2023) |
| [v3](v3/) | Asynchrony and low-precision on Hopper GPUs (2024) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
