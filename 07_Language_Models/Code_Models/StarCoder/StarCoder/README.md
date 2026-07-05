# StarCoder: A State-of-the-Art Code LLM

## Overview

StarCoder, released by the BigCode project (a collaboration between Hugging Face and ServiceNow) in May 2023, is a 15.5B parameter code LLM trained on permissively licensed data from GitHub (The Stack). It features an 8K context window with infilling capabilities and was trained with a strong focus on responsible AI practices and data governance.

## Architecture Details

- **Type:** Decoder-only Transformer
- **Parameters:** 15.5B
- **Layers:** 40
- **Hidden Size:** 6144
- **Attention Heads:** 48
- **Context Length:** 8192 tokens
- **Vocabulary:** Custom BPE (49,152 tokens)
- **Attention:** Multi-Query Attention (MQA)
- **Normalization:** LayerNorm
- **Activation:** GELU
- **Training Data:** The Stack v1.2 (1T tokens, 86 languages, permissive licenses only)

## Key Innovations

1. **Permissively Licensed Data:** Trained only on code with permissive licenses (ethical data sourcing)
2. **The Stack Dataset:** Curated from GitHub with opt-out mechanism for developers
3. **Fill-in-the-Middle (FIM):** Native infilling support for code completion
4. **Multi-Query Attention:** Single KV head for efficient inference
5. **Responsible AI:** Comprehensive data governance, PII removal, and attribution
6. **8K Context:** Enables multi-file code understanding

## Performance Highlights

- HumanEval: 33.6% (base), 40.8% (prompted)
- Outperforms all open code models at time of release
- Strong on 86 programming languages
- Matches or exceeds closed models like code-cushman-001
- Good infilling performance for IDE use cases

## Paper Reference

| Field | Details |
|-------|---------|
| Title | StarCoder: May the Source Be with You! |
| Authors | Raymond Li, Loubna Ben Allal, Yangtian Zi, et al. |
| Year | 2023 |
| Institution | BigCode (Hugging Face + ServiceNow) |
| arXiv | [2305.06161](https://arxiv.org/abs/2305.06161) |
