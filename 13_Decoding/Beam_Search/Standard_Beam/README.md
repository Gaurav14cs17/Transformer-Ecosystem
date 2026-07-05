# Standard Beam Search

The original beam search algorithm for sequence-to-sequence models. Maintains a fixed-size set (beam) of the highest-scoring partial hypotheses at each time step. At each step, each hypothesis is expanded with all possible next tokens, scored, and only the top beam_width candidates are kept.

## Reference
| Paper | Year | Link |
|-------|------|------|
| Sequence to Sequence Learning with Neural Networks | 2014 | [arXiv](https://arxiv.org/abs/1409.3215) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
