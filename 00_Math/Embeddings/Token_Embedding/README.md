# Token Embedding

Learned lookup table that maps discrete token IDs to dense d-dimensional vectors.

## Architecture
- Embedding matrix E ∈ ℝ^{V×d} where V = vocabulary size, d = model dimension
- Forward: token_id → E[token_id]
- Often tied with the output projection (weight tying)

## Key Properties
- Trainable parameters: V × d (can be the largest parameter block)
- Weight tying with output layer reduces parameters and improves performance
- Scaled by √d in the original Transformer

## Used In
- All transformer language models (GPT, BERT, LLaMA, etc.)
- Vision transformers (patch embedding equivalent)

## Reference
| Paper | Year | Link |
|-------|------|------|
| Attention Is All You Need | 2017 | [arXiv](https://arxiv.org/abs/1706.03762) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
