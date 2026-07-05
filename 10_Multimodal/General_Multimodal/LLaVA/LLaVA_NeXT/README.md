# LLaVA-NeXT — Improved Reasoning, OCR, and World Knowledge

## Overview

LLaVA-NeXT advances the LLaVA series with dynamic high-resolution image processing, improved training data, and stronger LLM backbones. It significantly improves performance on tasks requiring OCR, detailed visual reasoning, and world knowledge while maintaining the simplicity of the LLaVA architecture.

## Architecture & Mechanism

LLaVA-NeXT introduces several improvements:

1. **Dynamic high-resolution**: Instead of resizing all images to 336px, images are processed at higher resolutions by:
   - Selecting the optimal grid configuration (e.g., 1×2, 2×1, 2×2) based on the image's aspect ratio.
   - Splitting the image into tiles at 336px each.
   - Processing each tile through the vision encoder independently.
   - Including a downsampled global image view alongside the tiles.
2. **Stronger LLMs**: Supports multiple LLM backbones including Vicuna-13B, Mistral-7B, Nous-Hermes-Yi-34B, and LLaMA-3-70B.
3. **Improved training data**: Higher-quality instruction-following data with better coverage of OCR, chart/diagram understanding, and multi-step reasoning.
4. **AnyRes (Any Resolution)**: The dynamic resolution approach is called AnyRes, adaptively choosing the resolution grid.

## Key Innovations

- **Dynamic resolution**: AnyRes enables processing images at resolutions up to 672×672 (or higher with more tiles), critical for document and chart understanding.
- **Improved OCR**: Significantly better at reading text in images, enabling document QA and receipt parsing.
- **Scaling LLM backbone**: Moving to 34B and 70B LLMs shows continued scaling benefits for visual understanding.
- **Zero-shot performance**: Strong zero-shot results on real-world tasks without task-specific training.
- **Open-source ecosystem**: Continues LLaVA's tradition of fully open weights and code.

## References

| **Paper/Model** | **Year** | **Link** |
|-----------|----------|----------|
| LLaVA-NeXT: Improved reasoning, OCR, and world knowledge | 2024 | [Blog Post](https://llava-vl.github.io/blog/2024-01-30-llava-next/) |
| LLaVA-NeXT: Stronger LLMs Supercharge Multimodal Capabilities | 2024 | [Blog Post](https://llava-vl.github.io/blog/2024-05-10-llava-next-stronger-llms/) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
