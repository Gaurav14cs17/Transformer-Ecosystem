# SparseGPT — Massive Language Models Can Be Accurately Pruned in One-Shot

## Overview

SparseGPT is a one-shot pruning method that can remove 50-60% of weights from LLMs with billions of parameters in a single pass, with minimal accuracy loss and no retraining. It extends the Optimal Brain Surgeon (OBS) framework with efficient approximate solvers that scale to models with hundreds of billions of parameters, producing unstructured sparse models that maintain most of the original model's quality.

## Architecture & Mechanism

SparseGPT prunes weights layer-by-layer using second-order information:

1. **Layer-wise pruning**: Each weight matrix is pruned independently to minimize the layer output reconstruction error.
2. **Row-by-row processing**: For each row of the weight matrix, determine which weights to prune based on a pruning criterion (magnitude + Hessian-based cost).
3. **Weight update**: After pruning a weight, remaining weights in the same row are updated to compensate: `δ_w = -w_p / [H⁻¹]_{pp} · (H⁻¹)_{:,p}` (same framework as GPTQ but for pruning).
4. **Adaptive mask selection**: Unlike fixed magnitude pruning, the pruning mask is chosen jointly considering both weight magnitude and the Hessian-based reconstruction cost.
5. **Efficient Hessian**: Uses the same Cholesky-based inverse Hessian computation as GPTQ, making it practical for large models.

## Key Innovations

- **One-shot pruning**: No iterative retraining needed — a single pass through the calibration data is sufficient.
- **50-60% sparsity**: Achieves high sparsity with minimal perplexity increase (e.g., 60% sparsity on OPT-175B with <1 perplexity increase).
- **Scalable**: Prunes 175B-parameter models in approximately 4 GPU hours.
- **Semi-structured compatibility**: Supports N:M sparsity patterns (e.g., 2:4) for hardware-accelerated inference on NVIDIA GPUs.
- **Complementary to quantization**: Can be combined with quantization (e.g., 50% sparsity + 4-bit) for compounding compression.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| SparseGPT: Massive Language Models Can Be Accurately Pruned in One-Shot (Frantar & Alistarh) | 2023 | [arXiv:2301.00774](https://arxiv.org/abs/2301.00774) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
