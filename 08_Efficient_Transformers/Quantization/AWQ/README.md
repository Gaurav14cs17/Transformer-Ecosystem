# AWQ — Activation-Aware Weight Quantization

## Overview

AWQ (Activation-Aware Weight Quantization) is a post-training quantization method for LLMs that identifies and protects the most important weights based on activation magnitudes rather than weight magnitudes. By observing that a small fraction of weights (corresponding to salient activation channels) disproportionately affect model quality, AWQ applies per-channel scaling to reduce the quantization error of these critical weights.

## Architecture & Mechanism

AWQ uses a simple yet effective approach:

1. **Salience identification**: For each weight column, the corresponding input activation channel's average magnitude indicates the weight's importance. Channels with large activations are salient.
2. **Per-channel scaling**: Instead of keeping salient weights in higher precision (which complicates hardware), AWQ scales up the salient weight channels before quantization and scales down the corresponding activations:
   - `W_scaled = W · diag(s)`, where `s` is a per-channel scale factor.
   - Activations are scaled by `diag(s)⁻¹` to maintain mathematical equivalence.
   - The scaled weights have a better range for quantization (salient channels are amplified, reducing their relative quantization error).
3. **Optimal scale search**: The scale factors `s` are optimized to minimize the quantization error on a small calibration set.
4. **Standard quantization**: After scaling, weights are quantized using standard uniform quantization (e.g., INT4).

## Key Innovations

- **Activation-aware**: Uses activation statistics (not just weight statistics) to guide quantization, identifying the 1% of weights that matter most.
- **Hardware-friendly**: No mixed-precision or special formats needed — just standard INT4 with pre-computed scales.
- **No backpropagation**: Purely analytical optimization, no gradient-based fine-tuning required.
- **Generalization**: Works well across LLM families (LLaMA, OPT, BLOOM) and tasks (language modeling, QA, summarization).

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration (Lin et al.) | 2023 | [arXiv:2306.00978](https://arxiv.org/abs/2306.00978) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
