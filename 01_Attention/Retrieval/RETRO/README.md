# RETRO (Retrieval-Enhanced Transformer)

A retrieval-augmented language model that conditions on document chunks retrieved from a large external database, achieving strong performance with significantly fewer parameters.

## Architecture

RETRO retrieves and conditions on external text chunks during generation:

```
Input: Split into chunks of length l (e.g., 64 tokens)
For each chunk C_i:
  1. Retrieve: top-k neighbors N(C_i) from database using frozen BERT embeddings
  2. Encode neighbors: E_ret = Encoder(N(C_i))
  3. Cross-attend: H_i = CrossAttention(H_i, E_ret)

Chunked Cross-Attention (CCA):
  Q = H_i (decoder hidden states)
  K, V = Enc(retrieved_neighbors)
  Output = Attend(Q, K, V) integrated at specific layers
```

Where:
- Database contains ~2 trillion tokens split into chunks
- Retrieval uses approximate kNN with frozen BERT embeddings
- CCA layers are interleaved with standard self-attention layers
- Only CCA layers see the retrieved information

## Key Innovations

- **Scalable retrieval**: Retrieves from a 2T+ token database using efficient approximate kNN
- **Chunked cross-attention**: Novel attention mechanism for integrating retrieved chunks
- **Parameter efficiency**: A 7.5B RETRO matches a 280B model (25× fewer parameters)
- **Frozen retrieval**: Uses pre-computed embeddings — no need to fine-tune the retriever
- **Updatable knowledge**: Can refresh the database without retraining the model

## Performance

- 7.5B RETRO ≈ 280B Transformer (25× parameter reduction)
- State-of-the-art perplexity on Pile, C4, and other benchmarks (at time of publication)
- Performance scales with both model size and database size
- Retrieval benefits persist across diverse domains

## Usage

RETRO is useful for:
- Knowledge-intensive language modeling
- Reducing model size while maintaining quality
- Applications requiring updatable world knowledge
- Factual text generation

## Reference

| Paper | Year | Link |
|-------|------|------|
| Improving Language Models by Retrieving from Trillions of Tokens | 2022 | [arXiv](https://arxiv.org/abs/2112.04426) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
