# Kosmos-2 — Grounding Multimodal Large Language Models to the World

## Overview

Kosmos-2 extends Kosmos-1 with grounding capabilities, enabling the model to generate text that references specific regions in images through bounding boxes. By training on a large-scale dataset of grounded image-text pairs (GrIT), Kosmos-2 can perform phrase grounding, referring expression comprehension, and grounded visual question answering, bridging the gap between language understanding and spatial visual reasoning.

## Architecture & Mechanism

Kosmos-2 extends the Kosmos-1 architecture with spatial grounding:

1. **Location tokens**: The vocabulary is extended with special location tokens representing discretized bounding box coordinates. Coordinates are quantized into bins (e.g., 1000 bins per dimension).
2. **Grounded text format**: Text output can include bounding box references: `"A <phrase>dog</phrase><box>(x1,y1),(x2,y2)</box> playing in the <phrase>park</phrase><box>(x1,y1),(x2,y2)</box>."`
3. **GrIT dataset**: Grounded Image-Text dataset (~91M image-text-bounding box triplets) created by combining existing datasets and generating new grounding annotations.
4. **Architecture**: Same decoder-only Transformer as Kosmos-1, with CLIP vision encoder, but trained on grounded data.
5. **Multi-task capability**: Handles both grounded and non-grounded tasks in a unified text generation framework.

## Key Innovations

- **Grounded generation**: The model generates text with explicit spatial references (bounding boxes), connecting language to specific image regions.
- **Location tokens**: Discrete coordinate tokens enable spatial reasoning within the standard autoregressive text generation framework.
- **GrIT dataset**: Large-scale grounded image-text data enabling training at scale.
- **Unified framework**: Referring expression comprehension, phrase grounding, and grounded captioning all use the same architecture and generation approach.
- **Zero-shot grounding**: Can ground novel concepts without specific training.

## Paper Reference

| **Paper** | **Year** | **Link** |
|-----------|----------|----------|
| Kosmos-2: Grounding Multimodal Large Language Models to the World (Peng et al.) | 2023 | [arXiv:2306.14824](https://arxiv.org/abs/2306.14824) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
