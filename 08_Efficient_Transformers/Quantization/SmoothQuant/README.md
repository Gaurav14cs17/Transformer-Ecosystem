# SmoothQuant — Accurate and Efficient Post-Training Quantization for LLMs

## Overview

SmoothQuant enables W8A8 (8-bit weight, 8-bit activation) quantization of LLMs by addressing the fundamental challenge that activations have large outlier channels. It "smooths" the activation outliers by mathematically migrating the quantization difficulty from activations to weights through a per-channel scaling transformation, making both weights and activations easier to quantize.

## Architecture & Mechanism

SmoothQuant applies a mathematically equivalent transformation before quantization:

1. **Problem**: LLM activations have extreme outlier values in specific channels (e.g., some channels are 100× larger than others), making activation quantization very difficult.
2. **Smoothing transformation**: For a linear layer `Y = XW`, apply a per-channel scaling:
   - `Y = (X · diag(s)⁻¹) · (diag(s) · W) = X̂ · Ŵ`
   - `s_j = max(|X_j|)^α / max(|W_j|)^(1-α)`, where `α ∈ [0, 1]` controls the migration strength.
3. **Effect**: Activation outlier channels are scaled down (easier to quantize), while the corresponding weight channels are scaled up (weights are naturally easier to quantize, so this is acceptable).
4. **Migration strength α**: Typically `α = 0.5`, balancing the difficulty equally between activations and weights. Tuned per-layer for optimal results.
5. **W8A8 quantization**: After smoothing, both weights and activations are quantized to INT8 using standard per-tensor or per-token quantization.

## Key Innovations

- **Activation smoothing**: Elegant mathematical insight that quantization difficulty can be redistributed between activations and weights.
- **W8A8 enabling**: First method to achieve competitive W8A8 quantization for LLMs (previously, activation quantization was the bottleneck).
- **Hardware-friendly**: INT8 matrix multiplication is natively supported by GPUs (INT8 Tensor Cores), offering ~2× speedup.
- **No training**: Fully post-training; only requires a small calibration set.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| SmoothQuant: Accurate and Efficient Post-Training Quantization for Large Language Models (Xiao et al.) | 2022 | [arXiv:2211.10438](https://arxiv.org/abs/2211.10438) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
