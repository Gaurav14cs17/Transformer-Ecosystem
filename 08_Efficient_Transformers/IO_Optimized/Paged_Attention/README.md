# PagedAttention — Efficient Memory Management for LLM Serving

## Overview

PagedAttention introduces virtual memory paging concepts from operating systems to manage the key-value (KV) cache in LLM serving. Instead of allocating a contiguous block of memory for each sequence's KV cache (which leads to severe fragmentation and waste), PagedAttention stores KV cache in non-contiguous fixed-size pages, enabling near-zero memory waste and efficient memory sharing across requests.

## Architecture & Mechanism

PagedAttention adapts OS virtual memory management to KV cache:

1. **Pages (blocks)**: The KV cache is divided into fixed-size blocks (pages), each holding KV vectors for a fixed number of tokens (e.g., 16 tokens per block).
2. **Page table**: Each sequence maintains a page table mapping logical KV positions to physical memory blocks, similar to virtual-to-physical address translation in OS page tables.
3. **Non-contiguous storage**: Pages for a single sequence can be scattered across GPU memory, eliminating the need for pre-allocated contiguous buffers.
4. **Copy-on-write**: For beam search or parallel sampling, pages are shared between sequences and only copied when modified, dramatically reducing memory for shared prefixes.
5. **Dynamic allocation**: Pages are allocated on demand as new tokens are generated and freed when sequences complete.

## Key Innovations

- **Near-zero waste**: Memory waste is reduced from 60-80% (pre-allocated buffers) to <4% (only last-block internal fragmentation).
- **Higher throughput**: By fitting more sequences in memory, vLLM (which implements PagedAttention) achieves 2-4× higher throughput than HuggingFace Transformers and 2.2× over FasterTransformer.
- **Efficient sharing**: Copy-on-write enables memory-efficient beam search and parallel sampling.
- **Foundation of vLLM**: PagedAttention is the core innovation behind the vLLM serving engine.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Efficient Memory Management for Large Language Model Serving with PagedAttention (Kwon et al.) | 2023 | [arXiv:2309.06180](https://arxiv.org/abs/2309.06180) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
