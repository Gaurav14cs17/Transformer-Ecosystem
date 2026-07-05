# Sliding Window Attention (Mistral)

A fixed-size sliding window attention mechanism used in Mistral and similar models, where each token attends to a fixed number of most recent tokens, enabling efficient inference with bounded KV-cache.

## Architecture

Sliding window attention with window size W:

```
For token at position i:
  A(i) = {j : max(0, i - W) ≤ j ≤ i}  (causal sliding window)

Attention_i = softmax(q_i · K[i-W:i]^T / √d) · V[i-W:i]

KV-cache size: Fixed at W entries (rolling buffer)
Effective receptive field: W × num_layers (information propagates through layers)
```

Key properties:
- Fixed memory cost regardless of sequence length
- Information propagates across layers: token at position i can access information from position i - W × L after L layers
- Rolling KV-cache: oldest entries overwritten by newest

## Key Innovations

- **Bounded KV-cache**: Memory usage during inference is O(W) regardless of sequence length
- **Rolling buffer**: Fixed-size cache acts as a circular buffer, overwriting oldest entries
- **Layer stacking**: Effective context grows with depth (W × num_layers theoretical reach)
- **Pre-fill + chunking**: During prefill, processes chunks of size W for efficiency
- **Paired with GQA**: Combined with Grouped Query Attention in Mistral for further efficiency

## Performance

- Mistral 7B matches or exceeds LLaMA 2 13B across benchmarks
- Enables constant-memory inference for arbitrarily long sequences
- Faster inference due to smaller attention matrices
- No quality loss vs. full attention for most practical contexts

## Usage

Sliding window attention is used in:
- Mistral 7B and Mixtral 8x7B
- Any deployment requiring bounded inference memory
- Streaming/online applications with continuous input
- Long-context inference without memory growth

## Reference

| Paper | Year | Link |
|-------|------|------|
| Mistral 7B | 2023 | [arXiv](https://arxiv.org/abs/2310.06825) |
| Effective Long-Context Scaling of Foundation Models | 2023 | [arXiv](https://arxiv.org/abs/2309.16039) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
