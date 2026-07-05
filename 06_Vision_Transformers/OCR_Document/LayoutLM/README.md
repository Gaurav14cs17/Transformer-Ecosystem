# LayoutLM — Pre-training of Text and Layout for Document AI

## Overview

LayoutLM is a pre-trained model for document understanding that jointly models text content, 2D layout position, and optionally image features. By incorporating spatial layout information (bounding box coordinates) into the BERT pre-training framework, LayoutLM captures the relationship between textual content and its spatial arrangement in documents, excelling at tasks like form understanding, receipt parsing, and document classification.

## Architecture & Mechanism

LayoutLM extends BERT with spatial awareness:

- **Text embeddings**: Standard WordPiece tokenization and token embeddings (same as BERT).
- **2D position embeddings**: Each token is associated with its bounding box coordinates (x0, y0, x1, y1) from OCR. These are embedded as four separate learned embeddings and added to the token representation.
- **1D position embeddings**: Standard sequential position embeddings are retained.
- **Pre-training objectives**:
  - **Masked Visual-Language Model (MVLM)**: Mask tokens and predict them using both text context and spatial layout.
  - **Multi-label Document Classification (MDC)**: Predict document type tags.
- **Image features (optional)**: In later versions, image region features from a pre-trained Faster R-CNN can be incorporated.

## Key Innovations

- **Layout-aware pre-training**: First to incorporate 2D spatial position into BERT-style pre-training for documents.
- **OCR integration**: Seamlessly uses OCR bounding boxes as a source of structural information.
- **Strong document AI**: Achieves significant improvements on FUNSD (form understanding), SROIE (receipt parsing), and RVL-CDIP (document classification).
- **Foundation for LayoutLMv2/v3**: Spawned a series of improved models with tighter multimodal integration.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| LayoutLM: Pre-training of Text and Layout for Document Image Understanding (Xu et al.) | 2019 | [arXiv:1912.13318](https://arxiv.org/abs/1912.13318) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
