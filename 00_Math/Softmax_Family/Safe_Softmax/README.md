# Safe Softmax

Overflow/underflow-safe softmax implementations that subtract the maximum value before exponentiation.

safe_softmax(x_i) = exp(x_i - max(x)) / Σ_j exp(x_j - max(x))

## Key Properties
- Prevents exp() overflow for large logits
- Mathematically equivalent to standard softmax
- Default implementation in all modern frameworks (PyTorch, JAX)
- Critical for mixed-precision (FP16/BF16) training

## Reference
| Paper | Year | Link |
|-------|------|------|
| FlashAttention (online safe softmax) | 2022 | [arXiv](https://arxiv.org/abs/2205.14135) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
