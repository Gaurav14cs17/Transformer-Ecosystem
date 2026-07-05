# Pix2Struct — Screenshot Parsing as Pre-training for Visual Language Understanding

## Overview

Pix2Struct is a pre-trained image-to-text model designed for visually-situated language understanding. It is pre-trained by learning to parse masked website screenshots into simplified HTML, creating a pre-training objective that naturally combines visual understanding, text recognition, and spatial layout comprehension. This single pre-training task produces a versatile model for document understanding, chart comprehension, and UI understanding.

## Architecture & Mechanism

Pix2Struct uses a Vision Transformer encoder-decoder architecture:

- **Variable-resolution input**: Images are processed at their native aspect ratio using a variable number of fixed-size patches (rather than resizing to a square).
- **Encoder**: A ViT encoder processes image patches with 2D absolute positional embeddings.
- **Decoder**: An autoregressive Transformer decoder generates text output.
- **Pre-training task**: Given a screenshot of a web page with randomly masked elements, the model generates the underlying simplified HTML. This teaches text reading, layout understanding, and visual element recognition simultaneously.
- **Warm-up from screenshot parsing**: The pre-trained model is fine-tuned on downstream tasks like chart QA, document QA, and widget captioning.

## Key Innovations

- **Screenshot parsing pre-training**: A single, naturally multimodal pre-training task that teaches reading, layout, and visual understanding.
- **Variable-resolution patches**: Processes images at native aspect ratio, critical for documents, charts, and mobile screenshots.
- **Unified architecture**: The same model handles charts (ChartQA), documents (DocVQA), infographics (InfographicVQA), and UI elements.
- **Strong out-of-the-box**: Fine-tunes well on many visual language understanding tasks with minimal task-specific modifications.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Pix2Struct: Screenshot Parsing as Pretraining for Visual Language Understanding (Lee et al.) | 2022 | [arXiv:2210.03347](https://arxiv.org/abs/2210.03347) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
