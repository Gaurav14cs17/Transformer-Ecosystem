# LM-Infinite (Length Generalization for LLMs)

A simple and training-free method that enables pre-trained LLMs to generalize to sequences much longer than their training context without fine-tuning.

## Architecture

LM-Infinite applies a Λ-shaped attention mask and distance capping:

```
Λ-shaped mask: Each token attends to:
  1. The first n_global tokens (global beginning tokens)
  2. The most recent n_local tokens (local context window)

Distance limit: Positional distances are capped at L_pretrain
  pos_effective(i, j) = min(|i - j|, L_pretrain)

No tokens receive position IDs beyond what the model saw during training.
```

This ensures:
- Position encodings remain within their trained range
- Attention scores remain well-calibrated
- No fine-tuning or architectural changes needed

## Key Innovations

- **Training-free**: No additional training or fine-tuning required
- **Λ-shaped attention**: Combines global prefix attention with local sliding window
- **Distance capping**: Prevents out-of-distribution positional encodings
- **Universal**: Works with any existing pre-trained LLM (LLaMA, GPT-NeoX, etc.)
- **Fluency preservation**: Maintains generation quality at arbitrary lengths
- **Diagnostic framework**: Provides analysis of why LLMs fail on longer sequences

## Performance

- Enables LLaMA (2K context) to generate fluent text at 32K+ tokens
- Maintains stable perplexity even at 200K tokens (vs. explosion in vanilla models)
- Works across multiple model families (LLaMA, GPT-J, MPT)
- Negligible computational overhead

## Usage

LM-Infinite is useful for:
- Extending any pre-trained model to longer sequences without fine-tuning
- Generating long-form text beyond training context
- Serving as a baseline for length generalization methods
- Understanding failure modes of positional encodings

## Reference

| Paper | Year | Link |
|-------|------|------|
| LM-Infinite: Zero-Shot Extreme Length Generalization for Large Language Models | 2023 | [arXiv](https://arxiv.org/abs/2308.16137) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
