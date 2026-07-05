# Dilated Attention (Dilated/Strided Patterns)

Introduces gaps (dilation) between attended positions, enabling each token to attend to a wider span of the sequence with the same computational budget.

## Architecture

Dilated attention attends to positions at regular intervals (dilation rate d):

```
For token at position i, window size w, dilation rate d:
  A(i) = {j : j = i - k·d, for k = 0, 1, ..., w-1}

Effective span: w × d tokens covered per attention head
Multi-scale: Different heads use different dilation rates
  Head 1: d=1 (local, contiguous)
  Head 2: d=2 (every other token)
  Head h: d=2^(h-1) (exponentially increasing)

Complexity: O(n · w) regardless of dilation rate
```

Multi-head dilated attention combines multiple scales:
```
Head_h covers span of w × d_h with d_h = 2^(h-1)
Combined receptive field: covers up to w × 2^(H-1) positions
```

## Key Innovations

- **Expanded receptive field**: Covers a larger span without increasing computation
- **Multi-scale attention**: Different heads capture different granularities
- **Exponential coverage**: With exponential dilation rates, covers O(2^H × w) positions
- **No information loss**: Combined with dense local attention, ensures full coverage
- **Efficient implementation**: Same computation cost as local attention (just different indices)

## Performance

- Expands effective receptive field exponentially with number of heads
- Useful for capturing periodic or hierarchical patterns
- Complements local attention for full sequence coverage
- Used in LongNet to achieve 1B+ token context

## Usage

Dilated attention is used in:
- LongNet (dilated attention for billion-token sequences)
- Sparse Transformer (strided attention pattern)
- Audio/speech models (capturing long-range periodicity)
- Vision models (multi-scale feature extraction)

## Reference

| Paper | Year | Link |
|-------|------|------|
| LongNet: Scaling Transformers to 1,000,000,000 Tokens | 2023 | [arXiv](https://arxiv.org/abs/2307.02486) |
| Generating Long Sequences with Sparse Transformers | 2019 | [arXiv](https://arxiv.org/abs/1904.10509) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
