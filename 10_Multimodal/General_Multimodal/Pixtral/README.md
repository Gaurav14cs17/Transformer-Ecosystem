# Pixtral — Frontier-Class Multimodal Model from Mistral

## Overview

Pixtral is Mistral AI's frontier-class multimodal model that processes images and text natively within the Mistral model family. It handles images at their native resolution and aspect ratio without resizing, supports multi-image inputs, and integrates visual understanding deeply into the language model, making it suitable for a wide range of vision-language tasks from document understanding to visual reasoning.

## Architecture & Mechanism

Pixtral integrates vision capabilities into Mistral's architecture:

1. **Native resolution processing**: Images are processed at their original resolution and aspect ratio, tokenized into a variable number of visual tokens proportional to image size.
2. **Vision encoder**: A custom ViT-based encoder processes image patches and produces visual tokens.
3. **Direct integration**: Visual tokens are inserted directly into the text token sequence at the position of the image in the input, maintaining the natural interleaved structure.
4. **Multi-image support**: Multiple images can be included in a single prompt, with each processed independently and inserted at the appropriate position.
5. **Language model**: Built on Mistral's LLM backbone, inheriting its strong language capabilities.

## Key Innovations

- **Native resolution**: No resizing or fixed-resolution constraints — the model sees images as they are.
- **Variable-length visual tokens**: Number of tokens scales with image resolution, enabling detailed analysis of high-resolution inputs.
- **Seamless integration**: Images are treated as "visual text" inserted directly into the token stream.
- **Production-ready**: Designed for deployment via Mistral's API platform (La Plateforme).
- **Broad capabilities**: Handles OCR, chart understanding, document analysis, visual QA, and creative tasks.

## References

| **Model** | **Year** | **Link** |
|-----------|----------|----------|
| Pixtral 12B | 2024 | [Mistral Blog](https://mistral.ai/news/pixtral-12b/) |
| Pixtral Large | 2025 | [Mistral Blog](https://mistral.ai/news/pixtral-large/) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
