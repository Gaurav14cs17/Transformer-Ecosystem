# Multi-Head Attention Variants

Variations on multi-head attention that modify how heads are organized, shared, or computed.

## Sub-directories

| Directory | Description |
|-----------|-------------|
| [Multi_Head_Attention](Multi_Head_Attention/) | Original MHA from "Attention Is All You Need" |
| [Multi_Query_Attention](Multi_Query_Attention/) | Single shared K/V head across all query heads |
| [Grouped_Query_Attention](Grouped_Query_Attention/) | Groups of query heads share K/V heads |
| [Talking_Heads](Talking_Heads/) | Linear projections between heads |
| [Multi_Latent_Attention](Multi_Latent_Attention/) | Low-rank latent compression (DeepSeek-V2) |
| [LUCID_Attention](LUCID_Attention/) | Preconditioned attention for retrieval |
| [Affine_Scaled_Attention](Affine_Scaled_Attention/) | Input-dependent scaling and bias |
| [Keyless_Attention](Keyless_Attention/) | Eliminates key projection entirely |

## Papers

| Paper | Year | Link |
|-------|------|------|
| Attention Is All You Need (MHA) | 2017 | [arXiv](https://arxiv.org/abs/1706.03762) |
| Fast Transformer Decoding: One Write-Head is All You Need (MQA) | 2019 | [arXiv](https://arxiv.org/abs/1911.02150) |
| Talking-Heads Attention | 2020 | [arXiv](https://arxiv.org/abs/2003.02436) |
| GQA: Training Generalized Multi-Query Transformer Models | 2023 | [arXiv](https://arxiv.org/abs/2305.13245) |
| DeepSeek-V2 (Multi-Latent Attention) | 2024 | [arXiv](https://arxiv.org/abs/2405.04434) |
| LUCID: Attention with Preconditioned Representations | 2026 | [arXiv](https://arxiv.org/abs/2602.10410) |
| Affine-Scaled Attention | 2026 | [arXiv](https://arxiv.org/abs/2602.23057) |
| Keyless Attention: Value-Space Routing | 2026 | [arXiv](https://arxiv.org/abs/2606.21848) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
