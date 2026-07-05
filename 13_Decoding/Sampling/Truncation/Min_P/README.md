# Min-p Sampling

Sets a minimum probability threshold relative to the top token's probability. A token is kept only if its probability is at least p × max_prob. Unlike Top-K (fixed count) or Top-P (fixed cumulative mass), Min-p adapts both the number of candidates and the cumulative mass based on the model's confidence at each step.

## Reference
| Paper | Year | Link |
|-------|------|------|
| Turning Up the Heat: Min-p Sampling for Creative and Coherent LLM Outputs (ICLR'25 Oral) | 2024 | [arXiv](https://arxiv.org/abs/2407.01082) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
