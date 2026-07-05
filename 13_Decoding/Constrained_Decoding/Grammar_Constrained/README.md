# Grammar-Constrained Decoding

Forces LLM output to conform to a formal grammar (e.g., context-free grammars, regular expressions) without finetuning. At each decoding step, the valid next-token set is computed from the grammar's state, and invalid tokens are masked out of the logits before sampling. Enables guaranteed-valid structured outputs such as JSON, SQL, or code.

## Reference
| Paper | Year | Link |
|-------|------|------|
| Grammar-Constrained Decoding for Structured NLP Tasks without Finetuning | 2023 | [arXiv](https://arxiv.org/abs/2305.13971) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
