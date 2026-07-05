# QLoRA — Efficient Finetuning of Quantized LLMs

## Overview

QLoRA combines 4-bit quantization of the base model with LoRA fine-tuning, enabling fine-tuning of 65B-parameter models on a single 48GB GPU. It introduces three key innovations — 4-bit NormalFloat (NF4) quantization, double quantization, and paged optimizers — that reduce memory usage by ~75% compared to standard 16-bit fine-tuning while preserving full 16-bit task performance.

## Architecture & Mechanism

QLoRA's memory-efficient fine-tuning pipeline:

1. **4-bit NormalFloat (NF4)**: A new quantization data type optimized for normally distributed weights. NF4 has equal-area quantization bins under a normal distribution, providing information-theoretically optimal 4-bit quantization for neural network weights.
2. **Double quantization**: The quantization constants (scale factors) themselves are quantized to 8-bit, saving ~0.37 bits per parameter. This second level of quantization reduces the overhead of storing many scale factors.
3. **Paged optimizers**: Uses NVIDIA unified memory to page optimizer states between GPU and CPU memory, preventing out-of-memory errors during gradient checkpointing spikes.
4. **LoRA on frozen 4-bit model**: The base model is frozen in NF4 precision. LoRA adapters (in BFloat16) are the only trainable parameters. During backpropagation, the 4-bit weights are dequantized to BF16 on the fly.

## Key Innovations

- **NF4 data type**: Information-theoretically optimal for normally distributed weights, better than standard INT4 or FP4.
- **65B on single GPU**: Fine-tunes 65B parameter models on a single 48GB GPU (previously required multiple GPUs).
- **No quality loss**: Matches full 16-bit fine-tuning performance across benchmarks.
- **Guanaco models**: QLoRA was used to train the Guanaco family, achieving 99.3% of ChatGPT performance on Vicuna benchmark.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| QLoRA: Efficient Finetuning of Quantized LLMs (Dettmers et al.) | 2023 | [arXiv:2305.14314](https://arxiv.org/abs/2305.14314) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
