# Inference Optimization
Techniques for making transformer inference faster and more memory-efficient at serving time.

## Sub-directories
| Directory | Description |
|-----------|-------------|
| [FlashDecoding](FlashDecoding/) | Parallelized decoding across KV cache split |
| [Prefix_Caching](Prefix_Caching/) | Reuse KV cache for shared prompt prefixes |

## Related (elsewhere in this repo)
| Topic | Location |
|-------|----------|
| Continuous Batching | [IO_Optimized/Continuous_Batching](../IO_Optimized/Continuous_Batching/) |
| Paged Attention | [IO_Optimized/Paged_Attention](../IO_Optimized/Paged_Attention/) |
| Speculative Decoding | [Speculative_Decoding](../Speculative_Decoding/) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
