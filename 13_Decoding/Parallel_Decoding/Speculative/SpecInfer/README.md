# SpecInfer

Accelerates generative LLM serving using tree-based speculative inference. Multiple small speculative models (SSMs) propose candidate token sequences organized as a token tree. The target LLM verifies all candidates in a single forward pass using a novel tree-based parallel decoding mechanism, achieving significant speedups over autoregressive decoding.

## Reference
| Paper | Year | Link |
|-------|------|------|
| SpecInfer: Accelerating Generative LLM Serving with Tree-based Speculative Inference and Verification | 2023 | [arXiv](https://arxiv.org/abs/2305.09781) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
