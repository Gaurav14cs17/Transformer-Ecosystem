# Temperature Scaling
Divides logits by a temperature parameter T before softmax. T < 1 sharpens the distribution (more deterministic), T > 1 flattens it (more random). Typically combined with Top-K or Top-P for fine-grained control over output diversity.
## Papers
| Paper | Year | Link |
|-------|------|------|
| Distilling the Knowledge in a Neural Network (Temperature in Softmax) | 2015 | [arXiv](https://arxiv.org/abs/1503.02531) |
| The Curious Case of Neural Text Degeneration | 2019 | [arXiv](https://arxiv.org/abs/1904.09751) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
