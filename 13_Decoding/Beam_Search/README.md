# Beam Search
Maintains a fixed number (beam width) of highest-scoring partial sequences at each step. Expands all candidates, scores them, and keeps only the top-k. Produces higher-quality outputs than greedy search but at increased computational cost.

## Sub-directories
| Directory | Description |
|-----------|-------------|
| [Standard_Beam](Standard_Beam/) | Original beam search for seq2seq models |
| [GNMT_Beam](GNMT_Beam/) | Length normalization and coverage penalty (Google NMT) |
| [Diverse_Beam_Search](Diverse_Beam_Search/) | Dissimilarity penalty for diverse output generation |

## Papers
| Paper | Year | Link |
|-------|------|------|
| Sequence to Sequence Learning with Neural Networks | 2014 | [arXiv](https://arxiv.org/abs/1409.3215) |
| Google's Neural Machine Translation System: Bridging the Gap Between Human and Machine Translation | 2016 | [arXiv](https://arxiv.org/abs/1609.08144) |
| A Simple, Fast Diverse Decoding Algorithm for Neural Generation (Diverse Beam Search) | 2016 | [arXiv](https://arxiv.org/abs/1611.08562) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
