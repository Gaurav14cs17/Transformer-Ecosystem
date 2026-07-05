# Eta Sampling (Truncation Sampling)

Truncates the probability distribution by removing tokens whose probability falls below an entropy-dependent threshold. The cutoff adapts dynamically: when the model is uncertain (high entropy), more tokens are retained; when confident (low entropy), the distribution is aggressively truncated. This "desmoothing" counteracts the over-smoothing inherent in softmax-based language models.

## Reference
| Paper | Year | Link |
|-------|------|------|
| Truncation Sampling as Language Model Desmoothing (Eta Sampling) | 2022 | [arXiv](https://arxiv.org/abs/2210.15191) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
