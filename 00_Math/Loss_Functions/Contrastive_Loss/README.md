# Contrastive Loss

Learns representations by pulling positive pairs together and pushing negative pairs apart in embedding space.

## Variants
- **InfoNCE**: L = -log(exp(sim(z_i, z_j)/τ) / Σ_k exp(sim(z_i, z_k)/τ))
- **NT-Xent**: Normalized temperature-scaled cross-entropy (SimCLR)
- **Triplet Loss**: max(0, d(a,p) - d(a,n) + margin)

## Usage in Transformers
- **CLIP**: Image-text contrastive pre-training
- **SimCLR/MoCo**: Self-supervised visual representation learning
- **SigLIP**: Sigmoid-based contrastive loss (per-pair, no softmax)

## References
| Paper | Year | Link |
|-------|------|------|
| Learning Transferable Visual Models From Natural Language Supervision (CLIP) | 2021 | [arXiv](https://arxiv.org/abs/2103.00020) |
| A Simple Framework for Contrastive Learning (SimCLR) | 2020 | [arXiv](https://arxiv.org/abs/2002.05709) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
