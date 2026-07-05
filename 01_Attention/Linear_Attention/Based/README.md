# Based (Simple Linear Attention with IO-Awareness)

A simple linear attention architecture that combines a Taylor-expansion-based kernel with IO-aware implementation techniques to achieve strong quality and speed.

## Architecture

Based uses a second-order Taylor expansion of the exponential kernel for feature maps:

```
φ(x) = [1, x₁, x₂, ..., x_d, x₁², x₁x₂, ..., x_d²] (normalized)
Attention(Q, K, V) = φ(Q) * (φ(K)^T * V) / (φ(Q) * φ(K)^T * 1)
```

Key architectural choices:
- Taylor-expansion feature map (degree 2) for the kernel approximation
- Sliding window attention for local patterns combined with linear attention for global context
- IO-aware CUDA kernel implementation using tiling strategies

## Key Innovations

- **Simple kernel**: Uses straightforward Taylor expansion rather than complex learned feature maps
- **IO-awareness**: Borrows tiling techniques from FlashAttention for the linear attention computation
- **Hybrid local + global**: Combines sliding window (local) with linear attention (global) in a single layer
- **Quality recovery**: The quadratic Taylor term significantly improves over first-order linear attention
- **Practical speed**: Achieves real wall-clock speedups, not just theoretical FLOPs reduction

## Performance

- Matches Transformer quality on perplexity benchmarks with simpler architecture
- Up to 24× higher throughput than FlashAttention-2 at sequence length 2048
- Linear scaling enables processing of very long sequences
- Competitive with state-of-the-art subquadratic models (Mamba, RetNet)

## Usage

Based is designed for:
- Language modeling tasks requiring both local and global context
- Inference-heavy deployments where throughput matters
- Long-context scenarios beyond standard Transformer limits

## Reference

| Paper | Year | Link |
|-------|------|------|
| Based: Simple Linear Attention Language Models Balance the Recall-Throughput Tradeoff | 2024 | [arXiv](https://arxiv.org/abs/2402.18668) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
