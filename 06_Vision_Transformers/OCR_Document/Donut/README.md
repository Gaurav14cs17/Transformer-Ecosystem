# Donut — Document Understanding Transformer

## Overview

Donut (Document Understanding Transformer) is an OCR-free document understanding model that directly processes document images without relying on external OCR engines. It uses a Swin Transformer encoder to read the document image and an autoregressive Transformer decoder to generate structured text output, eliminating the OCR pipeline and its associated errors.

## Architecture & Mechanism

Donut follows a simple encoder-decoder architecture:

1. **Visual Encoder**: A Swin Transformer processes the document image at high resolution (e.g., 2560×1920), producing a sequence of visual feature tokens.
2. **Textual Decoder**: A GPT-style autoregressive Transformer decoder generates the output as a structured text sequence (e.g., JSON format).
3. **No OCR**: The model directly reads text from pixels — no OCR engine, no bounding box annotations needed.
4. **Pre-training**: Trained on a reading task — given a document image, the model learns to generate all text visible in the document (pseudo-OCR via synthetic rendering).
5. **Fine-tuning**: For downstream tasks, the model generates task-specific structured outputs (e.g., JSON for form parsing, text for classification).

## Key Innovations

- **OCR-free**: Eliminates dependency on external OCR, avoiding error propagation and simplifying the pipeline.
- **End-to-end training**: The entire model is trained end-to-end from raw pixels to structured output.
- **Flexible output format**: Any downstream task can be formulated as structured text generation (JSON, XML, plain text).
- **Multilingual**: Works across languages without language-specific OCR engines.
- **Strong performance**: Matches or exceeds OCR-dependent methods on DocVQA, CORD, and other benchmarks.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| OCR-free Document Understanding Transformer (Kim et al.) | 2021 | [arXiv:2111.15664](https://arxiv.org/abs/2111.15664) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
