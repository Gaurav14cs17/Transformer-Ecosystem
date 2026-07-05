# Expert Parallelism
Distributes different experts of a Mixture-of-Experts (MoE) layer across GPUs. Tokens are routed to the appropriate expert via all-to-all communication, enabling massive model capacity with constant per-token compute.
## Papers
| Paper | Year | Link |
|-------|------|------|
| GShard: Scaling Giant Models with Conditional Computation and Automatic Sharding | 2020 | [arXiv](https://arxiv.org/abs/2006.16668) |
| Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity | 2021 | [arXiv](https://arxiv.org/abs/2101.03961) |
| DeepSeek-V3 Technical Report | 2024 | [arXiv](https://arxiv.org/abs/2412.19437) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
