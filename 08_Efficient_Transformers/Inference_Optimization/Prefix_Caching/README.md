# Prefix Caching
Stores and reuses computed KV cache blocks for shared prompt prefixes across requests. When multiple queries share the same system prompt or few-shot examples, the KV cache for the shared prefix is computed once and reused, significantly reducing time-to-first-token (TTFT).
## Papers
| Paper | Year | Link |
|-------|------|------|
| Efficient Memory Management for LLM Serving with PagedAttention (vLLM — Automatic Prefix Caching) | 2023 | [arXiv](https://arxiv.org/abs/2309.06180) |
| SGLang: Efficient Execution of Structured Language Model Programs (RadixAttention) | 2023 | [arXiv](https://arxiv.org/abs/2312.07104) |
| ChunkAttention: Efficient Self-Attention with Prefix-Aware KV Cache and Two-Phase Partition | 2024 | [arXiv](https://arxiv.org/abs/2402.15220) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
