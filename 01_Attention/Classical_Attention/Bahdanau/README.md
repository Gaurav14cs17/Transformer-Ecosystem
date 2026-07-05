# Bahdanau Attention

Additive attention mechanism that learns alignment between encoder and decoder states using a feed-forward network.

score(s_t, h_i) = v^T · tanh(W_s · s_t + W_h · h_i)

The first neural attention mechanism for sequence-to-sequence models.

## Reference

| Paper | Year | Link |
|-------|------|------|
| Neural Machine Translation by Jointly Learning to Align and Translate | 2014 | [arXiv](https://arxiv.org/abs/1409.0473) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
