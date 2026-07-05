# Wanda — Pruning by Weights and Activations

## Overview

Wanda (Pruning by Weights AND Activations) is an extremely simple pruning method for LLMs that requires no weight updates, no retraining, and no gradient computation. It prunes weights based on the product of weight magnitude and input activation norm, achieving competitive sparsity with SparseGPT while being orders of magnitude faster and simpler to implement.

## Architecture & Mechanism

Wanda uses a minimal pruning criterion:

1. **Pruning metric**: For each weight `w_ij`, compute the importance score: `S_ij = |w_ij| · ‖X_j‖₂`, where `‖X_j‖₂` is the L2 norm of the corresponding input activation feature across a small calibration set.
2. **Per-row pruning**: Within each output row of the weight matrix, prune the weights with the smallest importance scores to achieve the target sparsity.
3. **No weight updates**: Unlike SparseGPT or OBS, Wanda does not update the remaining weights after pruning. The pruned weights are simply set to zero.
4. **One forward pass**: Only requires a single forward pass through a small calibration dataset (~128 sequences) to collect activation statistics.

## Key Innovations

- **Extreme simplicity**: The entire method is essentially one line: prune weights with smallest `|w| · ‖activation‖`.
- **No weight update needed**: Surprisingly, the Hessian-based weight updates in SparseGPT provide marginal benefit at 50% unstructured sparsity.
- **Fast execution**: Orders of magnitude faster than SparseGPT (minutes vs. hours for large models).
- **Activation awareness**: The key insight is that weight magnitude alone is insufficient; activation magnitude reveals which weight columns are actually important during inference.
- **Competitive accuracy**: Matches SparseGPT at 50% sparsity and N:M structured sparsity on LLaMA and OPT models.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| A Simple and Effective Pruning Approach for Large Language Models (Sun et al.) | 2023 | [arXiv:2306.11695](https://arxiv.org/abs/2306.11695) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
