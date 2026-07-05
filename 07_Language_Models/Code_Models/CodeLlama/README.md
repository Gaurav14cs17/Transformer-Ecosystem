# Code Llama: Open Foundation Models for Code

## Overview

Code Llama, released by Meta in August 2023, is a family of code-specialized large language models built on top of Llama 2. Available in 7B, 13B, and 34B parameter sizes with variants for general code, Python-specific, and instruction-following tasks, Code Llama supports infilling and extends context to 100K tokens through continued training with longer sequences.

## Architecture Details

- **Type:** Decoder-only Transformer (code-specialized)
- **Parameters:** 7B, 13B, 34B
- **Context Length:** 16K (base), extended to 100K tokens
- **Vocabulary:** Llama 2 tokenizer (32,000 tokens)
- **Attention:** GQA (34B), MHA (7B/13B)
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** RoPE with extended frequency base
- **Variants:** Code Llama, Code Llama - Python, Code Llama - Instruct
- **Training:** Continued pre-training from Llama 2 on 500B+ code tokens

## Key Innovations

1. **Infilling Capability:** Causal infilling (fill-in-the-middle) for code completion
2. **Long Context Fine-Tuning:** Extended from 4K to 100K tokens through progressive training
3. **Instruction Tuning:** Self-instruct with execution feedback for the Instruct variant
4. **Specialization Pipeline:** Base → Code → Python → Instruct progression
5. **Multi-Size Family:** 7B for real-time completion, 34B for complex reasoning

## Performance Highlights

- HumanEval: 53.7% (34B), 67.8% (34B-Python)
- MBPP: 56.2% (34B)
- Outperforms all other open code models at time of release
- 100K context enables repository-level understanding
- Free for research and commercial use

## Paper Reference

| Field | Details |
|-------|---------|
| Title | Code Llama: Open Foundation Models for Code |
| Authors | Baptiste Rozière, Jonas Gehring, Fabian Gloeckle, et al. |
| Year | 2023 |
| Institution | Meta AI |
| arXiv | [2308.12950](https://arxiv.org/abs/2308.12950) |
