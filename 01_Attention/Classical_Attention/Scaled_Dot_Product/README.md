# Scaled Dot-Product Attention

Attention(Q, K, V) = softmax(QK^T / √d_k) · V

The core attention computation from "Attention Is All You Need." Scaling by √d_k prevents dot products from growing too large for high-dimensional keys.

## Reference

| Paper | Year | Link |
|-------|------|------|
| Attention Is All You Need | 2017 | [arXiv](https://arxiv.org/abs/1706.03762) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
