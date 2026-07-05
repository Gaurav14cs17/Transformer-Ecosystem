# Blockwise Parallel Decoding
Predicts multiple future tokens simultaneously by using additional prediction heads or feedforward layers. The model generates a block of k tokens in one step, then verifies and corrects them. Trades slightly more compute per step for fewer total steps.
## Papers
| Paper | Year | Link |
|-------|------|------|
| Blockwise Parallel Decoding for Deep Autoregressive Models | 2018 | [arXiv](https://arxiv.org/abs/1811.03115) |
| Fast Inference from Transformers via Speculative Decoding | 2022 | [arXiv](https://arxiv.org/abs/2211.17192) |
| Better & Faster LLMs via Multi-token Prediction (ICML'24) | 2024 | [arXiv](https://arxiv.org/abs/2404.19737) |
| DFlash: Block Diffusion for Flash Speculative Decoding | 2026 | [arXiv](https://arxiv.org/abs/2602.06036) |
| DSpark: Semi-Autoregressive Block Drafting with Confidence Scheduling | 2026 | [GitHub](https://github.com/deepseek-ai/DeepSpec) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
