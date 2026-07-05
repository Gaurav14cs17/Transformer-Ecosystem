# Mistral Large 3: Open-Weight Frontier MoE Model

## Overview

Mistral Large 3, released by Mistral AI in 2025 under the Apache 2.0 license, is a 675B parameter Mixture-of-Experts model that represents one of the largest open-weight models available. It achieves frontier-level performance competitive with proprietary models while being fully open for commercial use, marking a significant milestone for open AI development.

## Architecture Details

- **Type:** Decoder-only Sparse Mixture-of-Experts Transformer
- **Total Parameters:** 675B
- **Active Parameters:** ~100B per token (estimated)
- **Context Length:** 128K tokens
- **Vocabulary:** Tekken tokenizer (optimized multilingual BPE)
- **Attention:** GQA with sliding window attention
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** RoPE
- **License:** Apache 2.0

## Key Innovations

1. **Open Frontier Model:** Largest open-weight model with Apache 2.0 license at release
2. **Optimized MoE Routing:** Advanced load balancing and expert specialization
3. **Tekken Tokenizer:** Improved tokenizer with better compression for 100+ languages
4. **Function Calling:** Native structured output and tool-use capabilities
5. **Long Context:** 128K token context with maintained performance throughout

## Performance Highlights

- Competitive with GPT-4o and Claude 3.5 on reasoning benchmarks
- State-of-the-art among open models on MMLU, MATH, and HumanEval
- Excellent multilingual capabilities across 100+ languages
- Strong code generation and analysis performance
- Efficient inference through sparse activation

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Mistral Large 3 |
| Authors | Mistral AI |
| Year | 2025 |
| Institution | Mistral AI |
| Link | [Mistral AI Blog](https://mistral.ai/) |
