# Jamba — A Hybrid Transformer-Mamba Language Model

## Overview

Jamba is a hybrid architecture from AI21 Labs that interleaves Mamba (SSM) layers with Transformer attention layers and Mixture-of-Experts (MoE) modules. This combination leverages the strengths of each component: Mamba's efficient long-sequence processing, attention's strong in-context learning, and MoE's parameter efficiency, creating a model that handles 256K context lengths while fitting on a single 80GB GPU.

## Architecture & Mechanism

Jamba's architecture combines three building blocks:

- **Layer interleaving**: The model alternates between Mamba blocks and attention blocks in a configurable ratio (e.g., 7 Mamba : 1 Attention). Most layers are Mamba (efficient), with sparse attention layers for recall-intensive tasks.
- **MoE integration**: Some layers (both Mamba and attention) use Mixture-of-Experts FFN with top-2 routing, increasing total parameters while keeping active parameters manageable.
  - 52B total parameters, 12B active per token.
- **256K context**: The predominance of Mamba layers (O(1) state per layer) means KV cache memory is dominated by only a few attention layers, enabling very long contexts.
- **Architecture details**: 
  - 4 blocks of 8 layers each.
  - Attention appears every 8th layer (4 attention layers total).
  - MoE appears in alternating layers with 16 experts, top-2 routing.

## Key Innovations

- **Hybrid SSM-Attention**: Demonstrates that mixing Mamba and attention layers captures the best of both worlds.
- **Memory efficiency**: Only ~4 attention layers means minimal KV cache, enabling 256K context on a single GPU.
- **MoE scaling**: Expert parallelism enables large total parameter count with low inference cost.
- **Production-ready**: Fits on a single 80GB A100 GPU, practical for deployment.
- **Strong benchmarks**: Competitive with Mixtral 8x7B and Llama-2 70B while being more efficient.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Jamba: A Hybrid Transformer-Mamba Language Model (Lieber et al.) | 2024 | [arXiv:2403.19887](https://arxiv.org/abs/2403.19887) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
