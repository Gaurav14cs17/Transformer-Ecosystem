# LongRoPE — Extended Context via Progressive Interpolation

## Overview

LongRoPE extends the context window of pre-trained LLMs to 2048k (2 million) tokens by combining non-uniform positional interpolation with a progressive extension strategy. It identifies and exploits the observation that different RoPE dimensions have vastly different sensitivities to interpolation, enabling extreme context extension with minimal performance degradation.

## Architecture & Mechanism

LongRoPE uses a three-stage approach:

1. **Search for optimal rescale factors**: An evolutionary search finds per-dimension interpolation factors that minimize perplexity on validation data. Each RoPE dimension `i` gets its own rescaling factor `λ_i` rather than using a uniform scale.
2. **Progressive extension**: Instead of jumping directly to the target length, the context is extended progressively (e.g., 4k → 64k → 256k → 2048k), with fine-tuning at each stage.
3. **Short context recovery**: A second set of rescale factors is searched to maintain performance on short sequences, preventing degradation on the original context length.

## Key Innovations

- **Non-uniform interpolation**: Different RoPE dimensions are scaled by different factors, discovered through search rather than hand-designed heuristics.
- **Progressive extension**: Gradual context scaling is more stable than one-shot extension.
- **Dual rescale factors**: Separate factors for short and long contexts preserve performance across all lengths.
- **2M token context**: Achieves the largest context window reported at the time of publication.
- **Minimal fine-tuning**: Only 1000 steps needed at each progressive stage.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| LongRoPE: Extending LLM Context Window Beyond 2 Million Tokens (Ding et al.) | 2024 | [arXiv:2402.13753](https://arxiv.org/abs/2402.13753) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
