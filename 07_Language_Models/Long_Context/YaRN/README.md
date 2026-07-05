# YaRN: Yet another RoPE extensioN method

## Overview

YaRN (Yet another RoPE extensioN method), released in 2023, is a compute-efficient method for extending the context window of RoPE-based Transformer models (like LLaMA) beyond their original training length. By combining NTK-aware interpolation with attention scaling, YaRN requires only ~400 training steps to extend a model's context by 4×, making it one of the most practical context extension methods available.

## Architecture Details

- **Type:** Context extension method for RoPE-based Transformers
- **Applicable Models:** LLaMA, Llama 2, Mistral, and any RoPE-based model
- **Original Context:** 4K tokens (LLaMA/Llama 2)
- **Extended Context:** 16K, 32K, 64K, 128K tokens
- **Method:** Modified RoPE with NTK-aware frequency scaling + attention temperature
- **Training Cost:** ~400 steps of continued pre-training
- **Compute:** 0.1% of original pre-training compute

## Key Innovations

1. **NTK-Aware Interpolation:** Non-uniform interpolation of RoPE frequencies based on wavelength
2. **Attention Scaling:** Temperature correction factor to account for entropy changes at longer sequences
3. **Dynamic NTK:** Can be applied dynamically at inference without any fine-tuning
4. **Compute Efficiency:** Only 400 steps to extend context 4× (vs. thousands for other methods)
5. **Theoretical Foundation:** Grounded in analysis of RoPE frequency distribution and information loss
6. **No Architecture Changes:** Pure modification of positional encoding computation

## Performance Highlights

- Extends LLaMA 2 from 4K to 128K context with minimal perplexity degradation
- Only 0.1% of original pre-training compute required
- Maintains short-context performance while enabling long context
- Better perplexity than linear interpolation and NTK methods alone
- Passkey retrieval successful at 128K context length
- Widely adopted in the open-source community

## Paper Reference

| Field | Details |
|-------|---------|
| Title | YaRN: Efficient Context Window Extension of Large Language Models |
| Authors | Bowen Peng, Jeffrey Quesnelle, Honglu Fan, Enrico Shippole |
| Year | 2023 |
| Institution | Nous Research |
| arXiv | [2309.00071](https://arxiv.org/abs/2309.00071) |
