# Sampling Strategies
Stochastic decoding methods that introduce randomness to improve diversity and naturalness of generated text.

## Sub-directories
| Directory | Description |
|-----------|-------------|
| [Truncation](Truncation/) | **Truncation family** — restrict the candidate set by removing low-probability tokens (Top-K, Top-P, Min-P, Eta, Typical) |
| [Temperature](Temperature/) | Scale logits to control distribution sharpness |
| [Contrastive](Contrastive/) | Penalize tokens favored by a weaker model |
| [Mirostat](Mirostat/) | Perplexity-controlled decoding via feedback mechanism |

## Papers
| Paper | Year | Link |
|-------|------|------|
| Distilling the Knowledge in a Neural Network (Temperature Scaling) | 2015 | [arXiv](https://arxiv.org/abs/1503.02531) |
| Hierarchical Neural Story Generation (Top-K Sampling) | 2018 | [arXiv](https://arxiv.org/abs/1805.04833) |
| The Curious Case of Neural Text Degeneration (Top-P / Nucleus Sampling) | 2019 | [arXiv](https://arxiv.org/abs/1904.09751) |
| Mirostat: A Neural Text Decoding Algorithm (Perplexity Control) | 2020 | [arXiv](https://arxiv.org/abs/2007.14966) |
| A Contrastive Framework for Neural Text Generation (Contrastive Search) | 2022 | [arXiv](https://arxiv.org/abs/2202.06417) |
| Typical Decoding for Natural Language Generation (Typical Sampling) | 2022 | [arXiv](https://arxiv.org/abs/2202.00666) |
| Truncation Sampling as Language Model Desmoothing (Eta Sampling) | 2022 | [arXiv](https://arxiv.org/abs/2210.15191) |
| Contrastive Decoding: Open-ended Text Generation as Optimization | 2022 | [arXiv](https://arxiv.org/abs/2210.15097) |
| Contrastive Decoding Improves Reasoning in Large Language Models | 2023 | [arXiv](https://arxiv.org/abs/2309.09117) |
| Turning Up the Heat: Min-p Sampling (ICLR'25 Oral) | 2024 | [arXiv](https://arxiv.org/abs/2407.01082) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
