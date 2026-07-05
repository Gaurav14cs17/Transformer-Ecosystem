# DeepSeek Coder: Code Intelligence Language Models

## Overview

DeepSeek Coder, released by DeepSeek AI in late 2023, is a series of code language models ranging from 1.3B to 33B parameters trained from scratch on 2T tokens with a composition of 87% code and 13% natural language. The models support project-level code completion through a 16K context window and fill-in-the-middle capabilities, achieving state-of-the-art performance among open code models.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 1.3B, 6.7B, 33B
- **Context Length:** 16K tokens
- **Vocabulary:** Custom BPE (32,000 tokens, code-optimized)
- **Attention:** GQA (33B), MHA (smaller)
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** RoPE
- **Training Data:** 2T tokens (87% code in 86 languages, 13% NL)
- **Variants:** Base, Instruct

## Key Innovations

1. **Code-First Training:** Trained from scratch with 87% code data (not adapted from general LLM)
2. **86 Programming Languages:** Broad language coverage from Python to Haskell
3. **Fill-in-the-Middle (FIM):** Native support for code infilling
4. **Repository-Level Context:** 16K context window for cross-file understanding
5. **Project-Level Completion:** Trained on repository-structured data for holistic code understanding

## Performance Highlights

- HumanEval: 79.3% (33B-Instruct)
- MBPP: 70.0% (33B-Instruct)
- Outperforms GPT-3.5 Turbo on code generation tasks
- Strong performance across multiple programming languages
- Best open-source code model at time of release (2023)

## Paper Reference

| Field | Details |
|-------|---------|
| Title | DeepSeek-Coder: When the Large Language Model Meets Programming |
| Authors | DeepSeek AI |
| Year | 2024 |
| Institution | DeepSeek AI |
| arXiv | [2401.14196](https://arxiv.org/abs/2401.14196) |
