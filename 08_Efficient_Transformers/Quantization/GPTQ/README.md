# GPTQ — Accurate Post-Training Quantization for Generative Pre-trained Transformers

## Overview

GPTQ is a one-shot post-training quantization method that compresses LLM weights to 3-4 bits with minimal accuracy loss. It builds on the Optimal Brain Quantization (OBQ) framework but introduces key optimizations — lazy batch updates and Cholesky-based reformulation — that make it practical for models with billions of parameters, quantizing a 175B-parameter model in approximately 4 GPU hours.

## Architecture & Mechanism

GPTQ quantizes weights layer-by-layer using second-order information:

1. **Layer-wise quantization**: Each weight matrix is quantized independently while minimizing the layer-wise output reconstruction error.
2. **Column-by-column processing**: Weights are quantized one column at a time. After quantizing a column, the remaining unquantized weights are updated to compensate for the quantization error.
3. **Hessian-based updates**: The compensation uses the inverse Hessian (H⁻¹) of the layer's input activations to determine optimal weight adjustments: `δ_F = -w_q / [H⁻¹]_{qq} · (H⁻¹)_{:,q}`
4. **Lazy batch updates**: Instead of updating after every column, updates are batched (e.g., 128 columns at a time), improving GPU utilization via matrix operations.
5. **Cholesky decomposition**: The inverse Hessian is computed once using Cholesky decomposition, avoiding repeated matrix inversions.

## Key Innovations

- **One-shot quantization**: No retraining or fine-tuning needed — quantization takes hours, not days.
- **3-4 bit quantization**: Achieves near-lossless quality at 4-bit and usable quality at 3-bit for LLMs.
- **Scalable**: Practical for 175B+ parameter models, unlike OBQ which only works for small models.
- **Arbitrary grouping**: Supports group-wise quantization for better accuracy (e.g., groups of 128 weights share a scale factor).

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| GPTQ: Accurate Post-Training Quantization for Generative Pre-Trained Transformers (Frantar et al.) | 2022 | [arXiv:2210.17323](https://arxiv.org/abs/2210.17323) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
