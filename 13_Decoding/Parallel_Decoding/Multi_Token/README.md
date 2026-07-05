# Multi-Token Generation

Predict multiple output tokens in a single forward pass without an explicit draft-verify cycle. Uses additional prediction heads or modified training objectives to output several tokens simultaneously, trading slightly more compute per step for fewer total autoregressive steps.

## Sub-directories
| Directory | Description |
|-----------|-------------|
| [Multi_Token_Prediction](Multi_Token_Prediction/) | Train with multi-token prediction loss; generate k tokens per step (Meta) |
| [Blockwise](Blockwise/) | Blockwise parallel decoding with additional feedforward prediction heads |

## Papers
| Paper | Year | Link |
|-------|------|------|
| Blockwise Parallel Decoding for Deep Autoregressive Models | 2018 | [arXiv](https://arxiv.org/abs/1811.03115) |
| Better & Faster Large Language Models via Multi-token Prediction (ICML'24) | 2024 | [arXiv](https://arxiv.org/abs/2404.19737) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
