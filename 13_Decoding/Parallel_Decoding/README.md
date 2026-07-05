# Parallel Decoding
Methods that generate multiple tokens per forward pass, breaking the sequential bottleneck of standard autoregressive decoding.

## Sub-directories
| Directory | Description |
|-----------|-------------|
| [Speculative](Speculative/) | **Draft-and-verify family** — use a fast draft mechanism to propose tokens, verify in parallel (Speculative Decoding, EAGLE, Medusa, Hydra, SpecInfer, Sequoia) |
| [Multi_Token](Multi_Token/) | **Multi-token generation family** — predict multiple tokens per step without draft-verify (Multi-Token Prediction, Blockwise) |
| [Lookahead](Lookahead/) | Jacobi iteration-based parallel decoding |
| [Tree_Decoding](Tree_Decoding/) | Tree-structured candidate verification |
| [DeepSeek](DeepSeek/) | **DeepSeek family** — DFlash (block diffusion) and DSpark (semi-autoregressive) |

## Papers
| Paper | Year | Link |
|-------|------|------|
| Blockwise Parallel Decoding for Deep Autoregressive Models | 2018 | [arXiv](https://arxiv.org/abs/1811.03115) |
| Fast Inference from Transformers via Speculative Decoding | 2022 | [arXiv](https://arxiv.org/abs/2211.17192) |
| Accelerating Large Language Model Decoding with Speculative Sampling | 2023 | [arXiv](https://arxiv.org/abs/2302.01318) |
| SpecInfer: Accelerating Generative LLM Serving with Tree-based Speculative Inference | 2023 | [arXiv](https://arxiv.org/abs/2305.09781) |
| Break the Sequential Dependency of LLM Inference Using Lookahead Decoding | 2023 | [arXiv](https://arxiv.org/abs/2402.02057) |
| Medusa: Simple LLM Inference Acceleration Framework with Multiple Decoding Heads | 2024 | [arXiv](https://arxiv.org/abs/2401.10774) |
| EAGLE: Speculative Sampling Requires Rethinking Feature Uncertainty | 2024 | [arXiv](https://arxiv.org/abs/2401.15077) |
| Hydra: Sequentially-Dependent Draft Heads for Medusa Decoding | 2024 | [arXiv](https://arxiv.org/abs/2402.05109) |
| Sequoia: Scalable, Robust, and Hardware-aware Speculative Decoding | 2024 | [arXiv](https://arxiv.org/abs/2402.12374) |
| Better & Faster LLMs via Multi-token Prediction (ICML'24) | 2024 | [arXiv](https://arxiv.org/abs/2404.19737) |
| EAGLE-2: Faster Inference with Dynamic Draft Trees | 2024 | [arXiv](https://arxiv.org/abs/2406.16858) |
| EAGLE-3: Scaling up Inference Acceleration via Training-Time Test (NeurIPS'25) | 2025 | [arXiv](https://arxiv.org/abs/2503.01840) |
| SpecForge: Training Framework for Speculative Decoding | 2025 | [arXiv](https://arxiv.org/abs/2603.18567) |
| DFlash: Block Diffusion for Flash Speculative Decoding (6x speedup) | 2026 | [arXiv](https://arxiv.org/abs/2602.06036) |
| DSpark: Confidence-Scheduled Speculative Decoding with Semi-Autoregressive Generation | 2026 | [GitHub](https://github.com/deepseek-ai/DeepSpec) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
