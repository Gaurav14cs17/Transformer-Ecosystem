# Retrieval Transformer

A general framework for Transformer models that incorporate retrieval mechanisms directly into the attention computation, enabling access to external knowledge during both training and inference.

## Architecture

The Retrieval Transformer integrates retrieval into standard Transformer layers:

```
Standard path:  H = SelfAttention(X) + FFN(X)
Retrieval path: R = Retrieve(query=X, corpus=D)  → top-k relevant passages
Integration:    H_final = CrossAttention(H, Encode(R)) or Concatenate(H, R)

Query formation: q = W_q · h_i  (project hidden states to retrieval query space)
Retrieval:       top-k = argmax_d sim(q, embed(d))  for d ∈ Database
Cross-attention: O = softmax(Q_h · K_R^T / √d) · V_R
```

## Key Innovations

- **Attention-integrated retrieval**: Retrieved content participates directly in attention computation
- **Flexible integration**: Cross-attention, concatenation, or gated fusion of retrieved content
- **Multi-granularity retrieval**: Can retrieve tokens, sentences, passages, or documents
- **Joint training**: Retriever and reader can be trained end-to-end
- **Generalizable**: Framework applicable to encoder-only, decoder-only, and encoder-decoder models

## Performance

- Improved factuality and knowledge coverage over non-retrieval baselines
- Reduced hallucination in knowledge-intensive tasks
- Better sample efficiency (learns from fewer examples with retrieval support)
- Competitive performance with much larger non-retrieval models

## Usage

Retrieval Transformers are applicable for:
- Knowledge-intensive question answering
- Long-form factual generation
- Code generation with documentation lookup
- Multi-hop reasoning requiring external facts

## Reference

| Paper | Year | Link |
|-------|------|------|
| Improving Language Models by Retrieving from Trillions of Tokens (RETRO) | 2022 | [arXiv](https://arxiv.org/abs/2112.04426) |
| Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | 2020 | [arXiv](https://arxiv.org/abs/2005.11401) |
| REALM: Retrieval-Augmented Language Model Pre-Training | 2020 | [arXiv](https://arxiv.org/abs/2002.08909) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
