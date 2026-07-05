# Truncation-Based Sampling

Methods that restrict the candidate token set by removing low-probability tokens before sampling. Each approach uses a different criterion to determine the cutoff — fixed count (Top-K), cumulative probability (Top-P), relative probability (Min-P), entropy-adaptive threshold (Eta), or information-theoretic typicality (Typical).

## Sub-directories
| Directory | Description |
|-----------|-------------|
| [Top_K](Top_K/) | Sample from the k most probable tokens |
| [Top_P](Top_P/) | Nucleus sampling — smallest set exceeding cumulative probability p |
| [Min_P](Min_P/) | Keep tokens with probability ≥ p × max_prob |
| [Eta](Eta/) | Entropy-adaptive truncation threshold (desmoothing) |
| [Typical](Typical/) | Keep tokens with surprise close to the conditional entropy |

## Papers
| Paper | Year | Link |
|-------|------|------|
| Hierarchical Neural Story Generation (Top-K Sampling) | 2018 | [arXiv](https://arxiv.org/abs/1805.04833) |
| The Curious Case of Neural Text Degeneration (Nucleus / Top-P Sampling) | 2019 | [arXiv](https://arxiv.org/abs/1904.09751) |
| Typical Decoding for Natural Language Generation | 2022 | [arXiv](https://arxiv.org/abs/2202.00666) |
| Truncation Sampling as Language Model Desmoothing (Eta Sampling) | 2022 | [arXiv](https://arxiv.org/abs/2210.15191) |
| Turning Up the Heat: Min-p Sampling (ICLR'25 Oral) | 2024 | [arXiv](https://arxiv.org/abs/2407.01082) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
