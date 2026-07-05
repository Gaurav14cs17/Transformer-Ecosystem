# KL Divergence

D_KL(P || Q) = Σ P(x) · log(P(x)/Q(x))

Measures how one probability distribution P diverges from a reference distribution Q. Asymmetric — D_KL(P||Q) ≠ D_KL(Q||P).

## Usage in Transformers
- **Knowledge distillation**: Matching student to teacher distribution
- **VAE training**: KL term in ELBO
- **RLHF**: KL penalty to prevent reward hacking
- **MoE routing**: Load-balancing auxiliary loss

## Reference
| Paper | Year | Link |
|-------|------|------|
| On Information and Sufficiency (Kullback & Leibler) | 1951 | [AMS](https://projecteuclid.org/journals/annals-of-mathematical-statistics/volume-22/issue-1/On-Information-and-Sufficiency/10.1214/aoms/1177729694.full) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
