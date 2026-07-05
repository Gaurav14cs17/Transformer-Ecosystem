# Standard Softmax

softmax(x_i) = exp(x_i) / Σ_j exp(x_j)

Converts a vector of real-valued scores (logits) into a probability distribution. The standard normalization function used in transformer attention mechanisms and classification heads.

## Key Properties
- Output sums to 1 (valid probability distribution)
- Preserves ordering of inputs
- Differentiable everywhere
- Exponential amplification makes the largest value dominate

## Usage in Transformers
- **Attention weights**: softmax(QK^T/√d_k) normalizes attention scores
- **Output layer**: Converts logits to class probabilities
- **Temperature scaling**: softmax(x/τ) controls sharpness

## Reference
| Paper | Year | Link |
|-------|------|------|
| Softmax Function | — | [Wikipedia](https://en.wikipedia.org/wiki/Softmax_function) |
| Attention Is All You Need | 2017 | [arXiv](https://arxiv.org/abs/1706.03762) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
