# UL2: Unifying Language Learning Paradigms

## Overview

UL2 (Unifying Language Learning), released by Google Research in 2022, proposes a unified pre-training framework that combines the strengths of different pre-training objectives — span corruption (T5-style), prefix language modeling (GPT-style), and long-span denoising. Through "Mixture-of-Denoisers" (MoD), UL2 creates a single model that excels at both understanding and generation tasks.

## Architecture Details

- **Type:** Encoder-Decoder Transformer
- **Parameters:** 20B
- **Architecture:** Based on T5 architecture
- **Context Length:** 512 tokens (input) + 512 tokens (output)
- **Vocabulary:** SentencePiece (32,000 tokens)
- **Normalization:** RMSNorm (pre-normalization)
- **Position Encoding:** Relative position bias
- **Training Data:** C4 corpus
- **Special Tokens:** Mode switching tokens ([R], [S], [X]) for denoiser selection

## Key Innovations

1. **Mixture-of-Denoisers (MoD):** Combines regular denoising [R], sequential denoising [S], and extreme denoising [X]
2. **Mode Switching:** Special tokens indicate which denoising mode to use, enabling task-specific behavior
3. **Unified Paradigm:** Subsumes causal LM, prefix LM, and span corruption in one framework
4. **X-Denoiser:** Extreme span denoising (50%+ corruption) for strong generative capability
5. **Architecture Agnostic:** Can be applied to encoder-decoder or decoder-only models

## Performance Highlights

- Outperforms T5 and GPT-3 on diverse benchmarks with unified training
- SuperGLUE: 90.7 (fine-tuned)
- Strong on both NLU (classification, QA) and NLG (summarization, generation) tasks
- 1-shot capabilities competitive with much larger models
- Flan-UL2 (instruction-tuned) further improves zero-shot performance

## Paper Reference

| Field | Details |
|-------|---------|
| Title | UL2: Unifying Language Learning Paradigms |
| Authors | Yi Tay, Mostafa Dehghani, Vinh Q. Tran, et al. |
| Year | 2022 |
| Institution | Google Research |
| arXiv | [2205.05131](https://arxiv.org/abs/2205.05131) |
