# LoRA — Low-Rank Adaptation of Large Language Models

## Overview

LoRA (Low-Rank Adaptation) is a parameter-efficient fine-tuning method that freezes pre-trained model weights and injects trainable low-rank decomposition matrices into each layer. By representing weight updates as low-rank matrices, LoRA reduces the number of trainable parameters by 10,000× while achieving performance comparable to full fine-tuning, with no additional inference latency.

## Architecture & Mechanism

LoRA modifies the forward pass of linear layers:

- **Frozen weights**: The original pre-trained weight matrix `W₀ ∈ ℝ^(d×k)` is frozen (no gradient computation).
- **Low-rank update**: A trainable update is parameterized as `ΔW = B · A`, where `B ∈ ℝ^(d×r)` and `A ∈ ℝ^(r×k)`, with rank `r << min(d, k)` (typically r = 4, 8, or 16).
- **Forward pass**: `h = W₀x + ΔWx = W₀x + BAx`
- **Initialization**: `A` is initialized with random Gaussian; `B` is initialized to zero, so `ΔW = 0` at the start.
- **Scaling factor**: The update is scaled by `α/r`, where `α` is a constant that controls the magnitude.
- **Merge at inference**: `W = W₀ + BA` can be pre-computed, so there is zero additional latency at inference time.

## Key Innovations

- **Extreme parameter efficiency**: With r=8, LoRA adds only ~0.01% trainable parameters for a 175B model.
- **No inference overhead**: Weight matrices can be merged, maintaining the same architecture and latency as the original model.
- **Task switching**: Different LoRA adapters can be swapped by simply changing the BA matrices, enabling efficient multi-task serving.
- **Composability**: Multiple LoRA adapters can be combined (summed) for multi-task or multi-skill models.
- **Broad adoption**: Widely used in LLaMA, Stable Diffusion, and virtually all modern fine-tuning workflows.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| LoRA: Low-Rank Adaptation of Large Language Models (Hu et al.) | 2021 | [arXiv:2106.09685](https://arxiv.org/abs/2106.09685) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
