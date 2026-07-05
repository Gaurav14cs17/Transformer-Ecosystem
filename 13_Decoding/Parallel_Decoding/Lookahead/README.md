# Lookahead Decoding
Uses Jacobi iteration to decode multiple tokens in parallel without a draft model. Maintains n-gram pools from previous iterations as lookahead candidates. Each forward pass verifies and extends multiple positions simultaneously, achieving lossless speedup.
## Papers
| Paper | Year | Link |
|-------|------|------|
| Break the Sequential Dependency of LLM Inference Using Lookahead Decoding | 2023 | [arXiv](https://arxiv.org/abs/2402.02057) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
