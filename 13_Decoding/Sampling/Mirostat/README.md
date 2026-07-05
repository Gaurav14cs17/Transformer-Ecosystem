# Mirostat (Perplexity-Controlled Decoding)

A neural text decoding algorithm that directly controls the perplexity of generated text via a feedback mechanism. Instead of setting a fixed temperature, top-k, or top-p, Mirostat dynamically adjusts the truncation of the probability distribution at each step to maintain a target surprise value, avoiding both the boredom trap (repetitive text) and the confusion trap (incoherent text).

## Reference
| Paper | Year | Link |
|-------|------|------|
| Mirostat: A Neural Text Decoding Algorithm That Directly Controls Perplexity | 2020 | [arXiv](https://arxiv.org/abs/2007.14966) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
