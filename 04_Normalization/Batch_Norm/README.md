# Batch Normalization

## Overview

Batch Normalization (BatchNorm) normalizes activations across the batch dimension during training, reducing internal covariate shift. It was one of the first normalization techniques to dramatically accelerate deep network training and enable the use of higher learning rates. BatchNorm computes mean and variance statistics over the mini-batch for each feature/channel.

## Architecture & Mechanism

For a mini-batch `B = {x_1, ..., x_m}` of activations at a given layer:

1. **Compute batch statistics**: `μ_B = (1/m) Σ x_i` and `σ²_B = (1/m) Σ (x_i - μ_B)²`
2. **Normalize**: `x̂_i = (x_i - μ_B) / √(σ²_B + ε)`
3. **Scale and shift**: `y_i = γ x̂_i + β`, where `γ` and `β` are learned affine parameters.
4. **Inference**: Running averages of `μ` and `σ²` are maintained via exponential moving average during training and used at inference time.

## Key Innovations

- **Reduced internal covariate shift**: Stabilizes the distribution of layer inputs, making optimization landscapes smoother.
- **Higher learning rates**: Enables much larger learning rates without divergence, speeding up convergence.
- **Regularization effect**: The noise from batch statistics acts as implicit regularization, sometimes replacing the need for Dropout.
- **Enabled deeper networks**: Made training of very deep networks (e.g., ResNets) practical.

## Limitations

- **Batch size dependency**: Performance degrades with small batch sizes due to noisy statistics.
- **Not suitable for sequence models**: Batch statistics across variable-length sequences are problematic, making BatchNorm uncommon in Transformers.
- **Train/test discrepancy**: Running statistics may not match test data distributions.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift (Ioffe & Szegedy) | 2015 | [arXiv:1502.03167](https://arxiv.org/abs/1502.03167) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
