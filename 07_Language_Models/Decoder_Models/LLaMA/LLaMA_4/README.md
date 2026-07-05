# Llama 4: Scout and Maverick

## Overview

Llama 4, released by Meta in April 2025, introduces two Mixture-of-Experts (MoE) models: Scout (109B total, 17B active) and Maverick (400B total, 17B active). Scout features an unprecedented 10 million token context window, while Maverick delivers frontier-level performance with efficient inference. Both models are natively multimodal, processing text and images within a single architecture.

## Architecture Details

- **Type:** Decoder-only Transformer with Mixture-of-Experts
- **Scout:** 109B total parameters, 17B active, 16 experts
- **Maverick:** 400B total parameters, 17B active, 128 experts
- **Context Length:** 10M tokens (Scout), 1M tokens (Maverick)
- **Modalities:** Text + Image (native multimodal)
- **Attention:** Interleaved attention patterns for long-context efficiency
- **Training:** Trained on 30T+ tokens of multilingual and multimodal data

## Key Innovations

1. **10M Token Context:** Scout processes up to 10 million tokens in a single context window
2. **Efficient MoE:** Only 17B parameters active per token despite large total parameter count
3. **Native Multimodality:** Early fusion of text and image modalities during pre-training
4. **iRoPE Architecture:** Interleaved RoPE and no-position layers for superior length generalization
5. **MetaP:** Novel hyperparameter initialization method for training stability at scale

## Performance Highlights

- Maverick competitive with GPT-4o and Gemini 2.0 Flash on reasoning benchmarks
- Scout: best-in-class long-context performance with 10M context
- Strong multimodal understanding on image-based benchmarks
- Efficient inference: only 17B active parameters per forward pass

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Llama 4: Scout and Maverick |
| Authors | Meta AI |
| Year | 2025 |
| Institution | Meta AI |
| Link | [Meta AI Blog](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) |
