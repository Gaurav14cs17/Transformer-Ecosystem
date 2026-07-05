# StarCoder2: The Stack v2 and Improved Code Models

## Overview

StarCoder2, released by the BigCode project in February 2024, is the next generation of open code LLMs available in 3B, 7B, and 15B sizes. Trained on The Stack v2 — a 4× larger and more diverse dataset than v1 — StarCoder2 introduces architectural improvements including GQA and sliding window attention. The 15B model achieves performance competitive with models 2-3× its size.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 3B, 7B, 15B
- **Context Length:** 16K tokens (with sliding window)
- **Vocabulary:** Custom BPE (49,152 tokens)
- **Attention:** GQA + Sliding Window Attention (4096 window)
- **Normalization:** RMSNorm (for 7B/15B)
- **Activation:** SwiGLU (for 7B/15B)
- **Position Encoding:** RoPE
- **Training Data:** The Stack v2 (3.3T+ tokens from 600+ languages)
- **FIM:** Fill-in-the-middle support

## Key Innovations

1. **The Stack v2:** 4× larger dataset from Software Heritage archive with full provenance
2. **GQA + Sliding Window:** Combines efficient attention with bounded memory usage
3. **Improved Data Mix:** Better balance of programming languages and natural language
4. **Modern Architecture:** RMSNorm, SwiGLU, RoPE (for 7B/15B) — modernized from StarCoder 1
5. **Data Provenance:** Full traceability of training data to original source repositories
6. **Multi-Tier Models:** 3B (edge), 7B (balanced), 15B (high-quality)

## Performance Highlights

- HumanEval: 46.3% (15B)
- StarCoder2-15B matches or exceeds Code Llama 34B
- StarCoder2-3B competitive with StarCoder 15.5B
- Strong multi-language performance (600+ languages in training)
- Best open code model per-parameter at release

## Paper Reference

| Field | Details |
|-------|---------|
| Title | StarCoder 2 and The Stack v2: The Next Generation |
| Authors | Anton Lozhkov, Raymond Li, Loubna Ben Allal, et al. |
| Year | 2024 |
| Institution | BigCode (Hugging Face + ServiceNow) |
| arXiv | [2402.19173](https://arxiv.org/abs/2402.19173) |
