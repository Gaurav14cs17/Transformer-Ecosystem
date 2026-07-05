# Codestral: Code Generation Model by Mistral AI

## Overview

Codestral, released by Mistral AI in May 2024, is a 22B parameter code generation model that supports over 80 programming languages. It is designed for both code generation and code-related chat, featuring a 32K context window and fill-in-the-middle capabilities. Codestral sets a new standard for medium-sized code models with exceptional performance across diverse programming tasks.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 22B
- **Context Length:** 32K tokens
- **Vocabulary:** Tekken tokenizer (code-optimized)
- **Attention:** GQA with sliding window attention
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** RoPE
- **Languages:** 80+ programming languages supported
- **Capabilities:** Code generation, completion, infilling, explanation

## Key Innovations

1. **Broad Language Coverage:** Trained on 80+ programming languages including rare ones
2. **Fill-in-the-Middle:** Native support for code infilling and completion
3. **Code + Chat:** Unified model for both generation and conversational code assistance
4. **Efficient Architecture:** 22B parameters with strong performance efficiency
5. **IDE Integration:** Designed for real-time code assistance in development environments

## Performance Highlights

- Outperforms Code Llama 70B on many code benchmarks
- HumanEval: 81.1%
- Strong on Python, JavaScript, TypeScript, Rust, Go, and more
- Competitive with GPT-4 on code generation at 22B parameters
- Low-latency inference suitable for IDE integration
- Excellent fill-in-the-middle performance

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Codestral |
| Authors | Mistral AI |
| Year | 2024 |
| Institution | Mistral AI |
| Link | [Mistral AI Blog](https://mistral.ai/news/codestral/) |
