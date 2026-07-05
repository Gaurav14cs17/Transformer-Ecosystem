# Constrained Decoding
Forces the model output to conform to structural constraints such as valid JSON, code syntax, or grammar rules. Typically implemented by masking logits at each step to only allow tokens consistent with the constraint specification.

## Sub-directories
| Directory | Description |
|-----------|-------------|
| [NeuroLogic](NeuroLogic/) | Predicate logic constraints via CNF clauses |
| [NeuroLogic_Astar](NeuroLogic_Astar/) | Lookahead heuristics for constraint satisfaction |
| [Grammar_Constrained](Grammar_Constrained/) | CFG / regex-based output enforcement without finetuning |
| [Outlines](Outlines/) | FSM-compiled structured generation library |
| [Guidance](Guidance/) | Template-based language for controlling LLM output |

## Papers
| Paper | Year | Link |
|-------|------|------|
| Neurologic Decoding: (Un)supervised Neural Text Generation with Predicate Logic Constraints | 2021 | [arXiv](https://arxiv.org/abs/2010.12884) |
| NeuroLogic A*esque Decoding: Constrained Text Generation with Lookahead Heuristics | 2022 | [arXiv](https://arxiv.org/abs/2112.08726) |
| Grammar-Constrained Decoding for Structured NLP Tasks without Finetuning | 2023 | [arXiv](https://arxiv.org/abs/2305.13971) |
| Outlines: Structured Text Generation | 2023 | [GitHub](https://github.com/outlines-dev/outlines) |
| Guidance: A Language for Controlling Large Language Models | 2023 | [GitHub](https://github.com/guidance-ai/guidance) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
