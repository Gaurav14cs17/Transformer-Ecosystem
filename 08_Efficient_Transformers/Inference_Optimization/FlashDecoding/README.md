# FlashDecoding
Splits the KV cache across thread blocks along the sequence dimension during autoregressive decoding. Each block computes partial attention over its KV chunk, then results are reduced via a log-sum-exp correction — achieving near-full GPU utilization even for single-query decoding.
## Papers
| Paper | Year | Link |
|-------|------|------|
| Flash-Decoding for long-context inference | 2023 | [Blog](https://crfm.stanford.edu/2023/10/12/flashdecoding.html) |
| FlashDecoding++: Faster Large Language Model Inference on GPUs | 2023 | [arXiv](https://arxiv.org/abs/2311.01282) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
