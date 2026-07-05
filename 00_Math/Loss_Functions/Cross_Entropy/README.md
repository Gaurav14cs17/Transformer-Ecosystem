# Cross-Entropy Loss

H(p, q) = -Σ p(x) · log q(x)

Standard loss for classification and language modeling. Measures the divergence between the true distribution p and the predicted distribution q.

## Variants
- **Binary CE**: For binary classification, uses sigmoid
- **Categorical CE**: For multi-class, uses softmax
- **Label smoothing CE**: Softens one-hot targets to prevent overconfidence

## Key Properties
- Equivalent to negative log-likelihood under softmax
- Gradient is simply (predicted - target)
- Standard training objective for all autoregressive LLMs

## Reference
| Paper | Year | Link |
|-------|------|------|
| Attention Is All You Need (as training loss) | 2017 | [arXiv](https://arxiv.org/abs/1706.03762) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
