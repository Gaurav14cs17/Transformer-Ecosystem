# DoRA — Weight-Decomposed Low-Rank Adaptation

## Overview

DoRA (Weight-Decomposed Low-Rank Adaptation) improves upon LoRA by decomposing pre-trained weights into magnitude and direction components and applying LoRA only to the directional component. This decomposition bridges the gap between LoRA and full fine-tuning by enabling the model to make both magnitude and directional weight updates, consistently outperforming LoRA across tasks without additional inference overhead.

## Architecture & Mechanism

DoRA decomposes the weight update differently from standard LoRA:

1. **Weight decomposition**: The pre-trained weight matrix `W₀` is decomposed into:
   - **Magnitude**: `m = ‖W₀‖_c` (column-wise norms, a vector)
   - **Direction**: `V = W₀ / ‖W₀‖_c` (normalized weight matrix)

2. **LoRA on direction**: A low-rank update `ΔV = BA` is applied to the directional component:
   - `W' = m · (V + ΔV) / ‖V + ΔV‖_c`

3. **Trainable parameters**: Both the magnitude vector `m` and the low-rank matrices `B, A` are trainable. The original weight `W₀` is frozen.

4. **Inference merging**: Like LoRA, the updated weight can be pre-computed and merged, adding no inference latency.

## Key Innovations

- **Magnitude-direction decomposition**: Inspired by weight normalization, this decomposition allows separate learning of "how much" (magnitude) and "which direction" (direction) to update weights.
- **Closer to full fine-tuning**: Analysis shows that full fine-tuning predominantly updates weight direction with proportionally small magnitude changes — DoRA captures this pattern while LoRA cannot.
- **Consistent improvement**: Outperforms LoRA across commonsense reasoning, visual instruction tuning, and image/video generation tasks.
- **Same parameter budget**: At the same rank `r`, DoRA adds only a negligible number of extra parameters (the magnitude vector `m`).
- **Drop-in replacement**: Can replace LoRA in any existing pipeline with minimal code changes.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| DoRA: Weight-Decomposed Low-Rank Adaptation (Liu et al.) | 2024 | [arXiv:2402.09353](https://arxiv.org/abs/2402.09353) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
