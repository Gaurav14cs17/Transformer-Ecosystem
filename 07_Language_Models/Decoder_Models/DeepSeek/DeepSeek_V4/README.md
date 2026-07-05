# DeepSeek-V4: Compressed Sparse Attention for Million-Token Context

## Overview

DeepSeek-V4, released in 2026, pushes the frontier of efficient long-context processing with its novel Compressed Sparse Attention mechanism. Building on the MLA and MoE innovations of previous versions, V4 achieves native million-token context windows while maintaining competitive training and inference costs through architectural innovations in attention sparsity.

## Architecture Details

- **Type:** Decoder-only Transformer with MoE and Compressed Sparse Attention
- **Parameters:** ~800B total, ~40B active per token
- **Context Length:** 1M tokens (native), extendable further
- **Attention:** Compressed Sparse Attention (CSA) + MLA
- **MoE:** Enhanced routing with auxiliary-loss-free balancing
- **Normalization:** RMSNorm
- **Activation:** SwiGLU
- **Position Encoding:** Enhanced RoPE for million-token scale

## Key Innovations

1. **Compressed Sparse Attention (CSA):** Novel attention pattern that achieves sub-quadratic complexity through learned compression of attention maps
2. **Million-Token Native Context:** Processes 1M+ tokens in a single forward pass without approximation
3. **Hierarchical KV Cache:** Multi-resolution cache strategy reducing memory by 10-20× for long contexts
4. **Improved MoE Routing:** Next-generation expert routing with better specialization
5. **Efficient Long-Context Training:** Novel training recipe that scales to million-token documents

## Performance Highlights

- State-of-the-art on long-context benchmarks (RULER, InfiniteBench)
- Maintains strong short-context performance competitive with frontier models
- Near-perfect needle-in-a-haystack at 1M token context
- Efficient inference at scale with compressed attention
- Training efficiency improvements over DeepSeek-V3

## Paper Reference

| Field | Details |
|-------|---------|
| Title | DeepSeek-V4 Technical Report |
| Authors | DeepSeek AI |
| Year | 2026 |
| Institution | DeepSeek AI |
| Link | [DeepSeek](https://www.deepseek.com/) |
