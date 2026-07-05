# BigBird (Random + Window + Global Attention)

Combines random attention, local sliding window, and global tokens to achieve a sparse attention mechanism that is a universal approximator of sequence functions.

## Architecture

BigBird's attention pattern is a union of three components:

```
A(i) = A_random(i) ∪ A_window(i) ∪ A_global(i)

A_random(i): Each token attends to r randomly selected tokens
A_window(i): Each token attends to w/2 neighbors on each side
A_global(i): g designated tokens attend to (and are attended by) all tokens

Total attention per token: O(r + w + g) = O(1) per token → O(n) total
```

The combination is proven to be:
- A universal approximator of sequence-to-sequence functions
- Turing complete (can simulate any Turing machine)

## Key Innovations

- **Theoretical guarantees**: Proven that sparse attention with random + local + global is a universal approximator
- **Random attention**: Provides connectivity between distant tokens (graph-theoretic small-world property)
- **Three-pattern union**: Each pattern serves a distinct purpose — local captures syntax, random ensures reachability, global aggregates
- **Extended Transformer Construction (ETC)**: Efficient implementation using block-sparse operations
- **Scalability**: Handles sequences up to 4096+ tokens with linear memory

## Performance

- Matches or exceeds BERT/RoBERTa on GLUE, SQuAD, and document QA
- State-of-the-art on long-document tasks: Natural Questions, TriviaQA, WikiHop
- Handles patent documents, scientific papers, and other long texts
- Up to 8× longer sequences than BERT with similar memory

## Usage

BigBird is used for:
- Genomics (DNA sequence classification)
- Long-document NLP (summarization, QA, classification)
- Tasks requiring both local patterns and long-range dependencies

## Reference

| Paper | Year | Link |
|-------|------|------|
| Big Bird: Transformers for Longer Sequences | 2020 | [arXiv](https://arxiv.org/abs/2007.14062) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
