# InternVL2

## Overview

InternVL2 is the second generation of the InternVL series, featuring a redesigned architecture with dynamic resolution support, an improved vision encoder, and tighter integration between the vision and language components. It achieves state-of-the-art results on multimodal understanding benchmarks while supporting a wider range of visual inputs including multi-image, video, and high-resolution documents.

## Architecture & Mechanism

InternVL2 improves on the original InternVL architecture:

- **Dynamic high-resolution**: Images are processed at their native resolution by dividing them into tiles (up to 12 tiles of 448×448), each processed independently by InternViT. This enables understanding of high-resolution documents, charts, and fine-grained visual content.
- **Improved InternViT**: Uses InternViT-300M to InternViT-6B variants, pre-trained with enhanced data and objectives.
- **Pixel shuffle downsampling**: Reduces the number of visual tokens after the vision encoder using pixel shuffle operations, maintaining spatial information while reducing sequence length for the LLM.
- **Direct LLM integration**: Replaces QLLaMA with direct projection into the LLM (InternLM2 or similar), simplifying the architecture.
- **Multi-modal support**: Handles single images, multi-image inputs, video frames, and text in a unified manner.

## Key Innovations

- **Dynamic resolution**: Handles arbitrary image resolutions without resizing to a fixed size, critical for document/chart understanding.
- **Scalable model family**: InternVL2-1B through InternVL2-76B span a wide range of compute budgets.
- **Strong benchmark results**: Top performance on OCRBench, DocVQA, ChartQA, MathVista, and other challenging benchmarks.
- **Open-source**: Fully open weights, enabling broad community adoption and research.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| InternVL2: Better than the Best — Expanding Performance Boundaries of Open-Source Multimodal Models | 2024 | [Technical Report](https://internvl.github.io/blog/2024-07-02-InternVL-2.0/) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
