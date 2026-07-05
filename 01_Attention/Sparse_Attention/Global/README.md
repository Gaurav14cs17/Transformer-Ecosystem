# Global Attention Tokens

A mechanism where designated tokens have full bidirectional attention to all positions in the sequence, serving as information hubs in an otherwise sparse attention pattern.

## Architecture

Global tokens maintain full attention connectivity:

```
For global token g and sequence of length n:
  A(g) = {0, 1, 2, ..., n-1}  (global token attends to ALL positions)
  For any token i: g ∈ A(i)    (ALL tokens attend to global token)

Combined with local attention (window w):
  Regular token i: A(i) = {j : |i-j| ≤ w/2} ∪ {global tokens}
  Global token g:  A(g) = {0, 1, ..., n-1}

Complexity: O(n·w + n·g) where g = number of global tokens (usually small)
```

Global tokens can be:
- Prepended special tokens ([CLS], [SEP])
- Task-specific tokens (question tokens in QA)
- Learned global memory tokens (added as parameters)
- Periodically placed tokens (every k-th position)

## Key Innovations

- **Information bottleneck**: Global tokens aggregate and broadcast sequence-wide information
- **Flexible designation**: Can be task-specific or learned
- **Minimal overhead**: Small number of global tokens (g << n) adds negligible cost
- **Combines with any local pattern**: Works with sliding window, dilated, block-sparse
- **Proven effectiveness**: Ensures all tokens are reachable within 2 attention hops

## Performance

- Critical for maintaining long-range information flow in sparse models
- Enables sparse attention models to match dense attention quality
- Negligible memory overhead (typically g < 128 for sequences of 4K+)
- Essential component of Longformer, BigBird, ETC, and many others

## Usage

Global attention tokens appear in:
- Longformer ([CLS] and task-specific tokens)
- BigBird (ITC — Internal Transformer Construction)
- ETC (Extended Transformer Construction)
- Star Transformer (central relay node)
- Any sparse attention model needing full-sequence awareness

## Reference

| Paper | Year | Link |
|-------|------|------|
| Longformer: The Long-Document Transformer | 2020 | [arXiv](https://arxiv.org/abs/2004.05150) |
| Big Bird: Transformers for Longer Sequences | 2020 | [arXiv](https://arxiv.org/abs/2007.14062) |
| ETC: Encoding Long and Structured Inputs in Transformers | 2020 | [arXiv](https://arxiv.org/abs/2004.08483) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
