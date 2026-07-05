# Context Parallelism
Partitions the input sequence across GPUs along the sequence dimension. Each device handles a contiguous chunk of tokens, using ring-style communication for cross-chunk attention. Enables training on ultra-long contexts that exceed single-GPU memory.
## Papers
| Paper | Year | Link |
|-------|------|------|
| Ring Attention with Blockwise Transformers for Near-Infinite Context | 2023 | [arXiv](https://arxiv.org/abs/2310.01889) |
| Context Parallelism for Scalable Million-Token Inference | 2024 | [NVIDIA Blog](https://developer.nvidia.com/blog/context-parallelism-for-scalable-million-token-inference/) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
