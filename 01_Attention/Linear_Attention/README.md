# Linear Attention

Attention mechanisms that achieve O(n) complexity by avoiding the explicit n×n attention matrix.

## Sub-directories

| Directory | Description |
|-----------|-------------|
| [Linear_Transformer](Linear_Transformer/) | Original linear attention via kernel trick |
| [Performer](Performer/) | FAVOR+ random feature maps |
| [Linformer](Linformer/) | Low-rank projection of K and V |
| [Nystromformer](Nystromformer/) | Nyström approximation of attention |
| [Reformer](Reformer/) | LSH-based attention |
| [CosFormer](CosFormer/) | Cosine re-weighting for linear attention |
| [DeltaNet](DeltaNet/) | Delta rule for linear attention |
| [GLA](GLA/) | Gated Linear Attention |
| [Based](Based/) | Based: Simple linear attention with IO-awareness |
| [Kimi](Kimi/) | Kimi linear attention (Moonshot AI) |
| [Lightning_Attention](Lightning_Attention/) | Lightning Attention |
| [FLA](FLA/) | Flash Linear Attention |
| [Gated_Delta_Net](Gated_Delta_Net/) | Gated Delta Networks (GDN) |
| [Kalman_Linear_Attention](Kalman_Linear_Attention/) | Kalman Linear Attention (KLA) |

## Papers

| Paper | Year | Link |
|-------|------|------|
| Transformers are RNNs: Fast Autoregressive Transformers with Linear Attention | 2020 | [arXiv](https://arxiv.org/abs/2006.16236) |
| Rethinking Attention with Performers (FAVOR+) | 2020 | [arXiv](https://arxiv.org/abs/2009.14794) |
| Linformer: Self-Attention with Linear Complexity | 2020 | [arXiv](https://arxiv.org/abs/2006.04768) |
| Gated Linear Attention Transformers with Hardware-Efficient Training | 2023 | [arXiv](https://arxiv.org/abs/2312.06635) |
| Gated Delta Networks: Improving Mamba2 with Delta Rule | 2025 | [arXiv](https://arxiv.org/abs/2501.06252) |
| Kalman Linear Attention (KLA) | 2026 | [arXiv](https://arxiv.org/abs/2602.10743) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
