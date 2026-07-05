# Kalman Linear Attention (KLA)

Reframes sequence modelling as Bayesian filtering using the Kalman filter in information form. Enables parallel prefix scans via associative reparameterisation of fractional-linear (Möbius) maps.

KLA provides strictly more expressive nonlinear updates than standard GLA variants while retaining O(T) training complexity and O(1) inference per step.

## Key Properties
- Parallel training via associative scan (O(log T) depth)
- Nonlinear gating from belief-state uncertainty
- Explicit uncertainty tracking during inference

## Reference
| Paper | Year | Link |
|-------|------|------|
| Kalman Linear Attention: Parallel Bayesian Filtering for Efficient Language Modelling and State Tracking | 2026 | [arXiv](https://arxiv.org/abs/2602.10743) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
