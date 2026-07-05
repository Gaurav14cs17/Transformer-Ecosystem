# Diverse Beam Search

Modifies standard beam search to produce a diverse set of outputs by dividing the beam into groups and adding a dissimilarity penalty between groups. At each step, later groups are penalized for selecting tokens similar to those chosen by earlier groups, encouraging exploration of different generation paths.

## Reference
| Paper | Year | Link |
|-------|------|------|
| A Simple, Fast Diverse Decoding Algorithm for Neural Generation | 2016 | [arXiv](https://arxiv.org/abs/1611.08562) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
