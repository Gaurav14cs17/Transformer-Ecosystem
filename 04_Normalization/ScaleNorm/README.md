# ScaleNorm

## Overview

ScaleNorm is a simplified normalization technique that replaces LayerNorm's mean-centering and variance-based normalization with a pure L2-norm scaling. It normalizes vectors to unit length and then applies a single learned scalar, reducing the number of parameters and computational cost compared to LayerNorm while achieving comparable or better performance.

## Architecture & Mechanism

For an input vector `x ∈ ℝ^d`:

1. **L2 normalize**: `x̂ = x / ‖x‖₂`
2. **Scale**: `y = g · x̂`, where `g` is a single learned scalar parameter (shared across all dimensions).

This is dramatically simpler than LayerNorm, which requires:
- Computing mean (d additions)
- Computing variance (d multiplications + additions)
- Subtracting mean and dividing by std (2d operations)
- Applying per-element affine (2d parameters: γ and β)

ScaleNorm requires only an L2 norm computation and a scalar multiplication.

## Key Innovations

- **Minimal parameters**: Only 1 learned parameter per normalization layer (vs. 2d for LayerNorm).
- **Computational efficiency**: Avoids mean and variance computation; L2 norm can be computed efficiently.
- **Direction-only normalization**: By projecting onto the unit sphere, ScaleNorm focuses on the direction of the representation, discarding magnitude information.
- **Competitive performance**: Matches or exceeds LayerNorm on machine translation and other tasks.

## Limitations

- Less widely adopted than LayerNorm or RMSNorm in practice.
- The single scalar may be too restrictive for some tasks that benefit from per-dimension scaling.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Transformers without Tears: Improving the Normalization of Self-Attention (Nguyen & Salazar) | 2019 | [arXiv:1910.05895](https://arxiv.org/abs/1910.05895) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
