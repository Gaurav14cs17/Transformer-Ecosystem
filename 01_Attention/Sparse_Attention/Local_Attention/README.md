# Local Attention (Fixed Local Window)

Restricts each token's attention to a fixed-size local neighborhood, reducing complexity from O(n²) to O(n·w) where w is the window size.

## Architecture

Each token attends only to tokens within a fixed window:

```
For token at position i with window size w:
  A(i) = {j : |i - j| ≤ w/2}

Attention(i) = softmax(q_i · K[i-w/2 : i+w/2]^T / √d) · V[i-w/2 : i+w/2]

Effective receptive field after L layers: L × w tokens
Complexity per layer: O(n · w) instead of O(n²)
Memory per layer: O(n · w)
```

For causal (autoregressive) models:
```
A(i) = {j : i - w < j ≤ i}  (only attend to previous w tokens)
```

## Key Innovations

- **Simplicity**: Most straightforward sparse attention pattern
- **Linguistic motivation**: Most linguistic dependencies are local (syntax, coreference)
- **Stacking benefit**: Multiple layers create larger effective receptive fields
- **Hardware friendly**: Regular memory access patterns amenable to GPU optimization
- **Composable**: Often combined with global tokens or random connections for coverage

## Performance

- O(n·w) time and memory complexity
- Captures majority of useful attention signal (studies show attention is locally concentrated)
- Effective receptive field grows linearly with depth
- Minimal quality loss for tasks dominated by local patterns

## Usage

Local attention is used in:
- Longformer (as the base local pattern)
- Many efficient Transformer variants
- Audio and speech processing (inherently local)
- Tasks where context beyond a window is less important

## Reference

| Paper | Year | Link |
|-------|------|------|
| Image Transformer (introduced local attention) | 2018 | [arXiv](https://arxiv.org/abs/1802.05751) |
| Longformer: The Long-Document Transformer | 2020 | [arXiv](https://arxiv.org/abs/2004.05150) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
