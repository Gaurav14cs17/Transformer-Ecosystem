# RAG (Retrieval-Augmented Generation)

Combines a parametric language model with a non-parametric retrieval component, allowing the model to access external knowledge at generation time.

## Architecture

RAG combines a retriever with a generator in an end-to-end framework:

```
Input query: x
Retriever: p(z|x) = softmax(BERT_q(x)^T · BERT_d(z))  (top-k documents)
Generator: p(y|x, z) = Seq2Seq(x, z₁, z₂, ..., z_k)

RAG-Sequence: p(y|x) = Σ_z p(z|x) · p(y|x, z)  (marginalizes per sequence)
RAG-Token:    p(y_t|x) = Σ_z p(z|x) · p(y_t|x, z, y_{<t})  (marginalizes per token)
```

Components:
- **Retriever**: DPR (Dense Passage Retrieval) using dual BERT encoders
- **Generator**: BART or similar seq2seq model
- **Knowledge source**: Wikipedia passages or custom document corpus
- Retrieved documents are prepended to the input for the generator

## Key Innovations

- **End-to-end training**: Both retriever and generator are jointly fine-tuned
- **Two marginalization strategies**: RAG-Sequence (consistent retrieval) vs RAG-Token (flexible retrieval)
- **Non-parametric memory**: Knowledge stored in retrievable documents, not just model weights
- **Updatable knowledge**: Swap the document index without retraining
- **Open-domain**: Works across diverse knowledge domains

## Performance

- State-of-the-art on open-domain QA (Natural Questions, TriviaQA, WebQuestions)
- Generates more factual and specific text than pure parametric models
- Competitive on knowledge-intensive NLG (Jeopardy, FEVER fact verification)
- More faithful to source documents than pure generation

## Usage

RAG is foundational for:
- Open-domain question answering
- Knowledge-grounded dialogue
- Fact-verified text generation
- Enterprise search and knowledge management

## Reference

| Paper | Year | Link |
|-------|------|------|
| Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | 2020 | [arXiv](https://arxiv.org/abs/2005.11401) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
