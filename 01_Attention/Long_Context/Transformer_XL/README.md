# Transformer-XL (Segment-Level Recurrence)

Introduces segment-level recurrence and relative positional encoding to enable learning dependencies beyond a fixed context length.

## Architecture

Transformer-XL processes text in segments and caches hidden states for reuse:

```
h̃_n^(l-1) = [SG(h_{n-1}^(l-1)) ∘ h_n^(l-1)]    (concatenate cached + current)
q_n^(l) = h_n^(l-1) * W_q
k_n^(l) = h̃_n^(l-1) * W_k
v_n^(l) = h̃_n^(l-1) * W_v
Attention uses relative positional encoding (R) instead of absolute positions
```

Where:
- `SG(·)` denotes stop-gradient (cached states don't receive gradients)
- `h_{n-1}` is the cached hidden state from the previous segment
- Relative position encoding replaces absolute sinusoidal/learned positions

## Key Innovations

- **Segment-level recurrence**: Caches previous segment's hidden states to extend effective context
- **Relative positional encoding**: Makes attention position-aware without absolute positions, enabling generalization to longer sequences
- **No context fragmentation**: Information flows across segment boundaries through cached states
- **Extended context**: Effective context length grows linearly with number of layers (L × segment_length)

## Performance

- Up to 80% perplexity reduction vs. vanilla Transformer on long-range tasks
- 450% faster evaluation than vanilla Transformer (due to state reuse)
- State-of-the-art on enwiki8, text8, WikiText-103, and Penn Treebank at time of publication
- Generates coherent long-form text (1000+ tokens)

## Usage

Transformer-XL is foundational to many subsequent models (XLNet, Compressive Transformer) and is used for:
- Long-document language modeling
- Character-level modeling of long texts
- Any task requiring dependencies beyond fixed window length

## Reference

| Paper | Year | Link |
|-------|------|------|
| Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context | 2019 | [arXiv](https://arxiv.org/abs/1901.02860) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
