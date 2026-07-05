# 13 Decoding

Strategies for generating text from autoregressive language models — from deterministic methods to parallel and constrained decoding.

## Sub-directories
| Directory | Description |
|-----------|-------------|
| [Greedy_Search](Greedy_Search/) | Pick highest-probability token at each step |
| [Beam_Search](Beam_Search/) | **Beam family** — maintain top-k partial sequences (Standard, GNMT, Diverse) |
| [Sampling](Sampling/) | **Sampling family** — stochastic methods: Truncation/ (Top-K, Top-P, Min-P, Eta, Typical), Temperature, Contrastive, Mirostat |
| [Parallel_Decoding](Parallel_Decoding/) | **Parallel family** — generate multiple tokens per pass: Speculative/ (EAGLE, Medusa, Hydra, SpecInfer, Sequoia), Multi_Token/ (Blockwise, MTP), Lookahead, Tree, DeepSeek/ (DFlash, DSpark) |
| [Constrained_Decoding](Constrained_Decoding/) | **Constrained family** — force output to satisfy structural constraints (NeuroLogic, Grammar, Outlines, Guidance) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
