# Longformer (Sliding Window + Global Attention)

Combines local sliding window attention with task-specific global attention to efficiently process long documents with O(n) complexity.

## Architecture

Longformer uses a combination of attention patterns:

```
Local attention: Each token attends to w/2 tokens on each side (sliding window)
Dilated attention: Optional dilated sliding window with gaps of size d
Global attention: Selected tokens (e.g., [CLS]) attend to all tokens and are attended by all

Effective receptive field after L layers: L × w (without dilation)
                                          L × w × d (with dilation)
```

Attention pattern per token:
- Most tokens: attend only within local window of size w
- Global tokens: full bidirectional attention to/from all positions
- Complexity: O(n × w) for local + O(n × g) for global (g = number of global tokens)

## Key Innovations

- **Sliding window**: Linear-complexity local attention captures most linguistic structure
- **Global attention**: Task-specific tokens (CLS, question tokens) maintain full sequence view
- **Dilated windows**: Increases receptive field without additional compute (optional)
- **Drop-in replacement**: Can initialize from RoBERTa weights and fine-tune
- **Linear scaling**: Memory and compute scale linearly with sequence length

## Performance

- Handles documents up to 4,096 tokens (extendable to 16K+)
- Matches or exceeds RoBERTa on document-level tasks
- State-of-the-art on WikiHop, TriviaQA, HotpotQA (long-document QA)
- Significantly less memory than full attention for long sequences

## Usage

Longformer is widely used for:
- Long-document classification and QA
- Summarization of lengthy texts
- Any NLP task requiring processing of full documents
- LED (Longformer Encoder-Decoder) variant for seq2seq tasks

## Reference

| Paper | Year | Link |
|-------|------|------|
| Longformer: The Long-Document Transformer | 2020 | [arXiv](https://arxiv.org/abs/2004.05150) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
