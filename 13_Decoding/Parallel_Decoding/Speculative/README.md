# Speculative Decoding (Draft-and-Verify)

Use a fast draft mechanism to propose multiple candidate tokens, then verify them in parallel with the full target model. Tokens that match the target distribution are accepted in a single step, yielding lossless speedup.

## Sub-directories
| Directory | Description |
|-----------|-------------|
| [Speculative_Decoding](Speculative_Decoding/) | Foundational draft-model approach (Leviathan et al., Chen et al.) |
| [Eagle](Eagle/) | EAGLE family — feature-level autoregressive drafting without a separate model |
| [Medusa](Medusa/) | Multi-head decoding — extra prediction heads on the target model |
| [Hydra](Hydra/) | Improved multi-head drafting with learned head routing |
| [SpecInfer](SpecInfer/) | Tree-based speculative inference with multiple small draft models |
| [Sequoia](Sequoia/) | Hardware-aware tree-based speculative decoding with optimal tree topology |

## Papers
| Paper | Year | Link |
|-------|------|------|
| Fast Inference from Transformers via Speculative Decoding | 2022 | [arXiv](https://arxiv.org/abs/2211.17192) |
| Accelerating Large Language Model Decoding with Speculative Sampling | 2023 | [arXiv](https://arxiv.org/abs/2302.01318) |
| EAGLE: Speculative Sampling Requires Rethinking Feature Uncertainty | 2024 | [arXiv](https://arxiv.org/abs/2401.15077) |
| Medusa: Simple LLM Inference Acceleration Framework with Multiple Decoding Heads | 2024 | [arXiv](https://arxiv.org/abs/2401.10774) |
| SpecInfer: Accelerating Generative LLM Serving with Tree-based Speculative Inference | 2023 | [arXiv](https://arxiv.org/abs/2305.09781) |
| Sequoia: Scalable, Robust, and Hardware-aware Speculative Decoding | 2024 | [arXiv](https://arxiv.org/abs/2402.12374) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
