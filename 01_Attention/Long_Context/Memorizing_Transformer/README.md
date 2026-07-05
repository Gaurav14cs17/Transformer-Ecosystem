# Memorizing Transformer (kNN Retrieval Augmented Attention)

Extends the Transformer with a non-differentiable external memory of past key-value pairs, retrieved via k-nearest-neighbor (kNN) lookup at attention time.

## Architecture

Each attention layer maintains an external memory and performs kNN retrieval:

```
Standard attention: A_local = softmax(Q * K_local^T / √d) * V_local
Memory retrieval:   top-k pairs (k_m, v_m) = kNN(Q, Memory_keys)
Memory attention:   A_mem = softmax(Q * K_mem^T / √d) * V_mem
Combined output:    O = gate * A_mem + (1 - gate) * A_local

Memory update: After processing each segment, append (K, V) to external memory
```

Where:
- External memory stores (key, value) pairs from all previous segments
- kNN lookup retrieves the top-k most relevant pairs per query
- A learned gate combines local and memory-based attention
- Memory can store up to 262K+ tokens from past context

## Key Innovations

- **Non-differentiable memory**: Avoids backpropagating through the full memory (scalable)
- **kNN retrieval**: Exact or approximate nearest-neighbor search for relevant past context
- **Gated combination**: Learns when to rely on local context vs. retrieved memory
- **Unbounded context**: Memory size can grow indefinitely (limited only by storage)
- **Simple integration**: Adds memory to only one attention layer (typically upper layers)

## Performance

- Significant perplexity improvements on long-range language modeling (Books, arXiv, Code)
- 262K token effective context window
- Larger memories consistently improve performance (log-linear scaling)
- Works well even with approximate kNN (FAISS)

## Usage

The Memorizing Transformer is applicable for:
- Processing book-length documents
- Code repositories requiring cross-file context
- Conversational AI with long interaction histories
- Any task where retrieving from past context improves predictions

## Reference

| Paper | Year | Link |
|-------|------|------|
| Memorizing Transformers | 2022 | [arXiv](https://arxiv.org/abs/2203.08913) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
