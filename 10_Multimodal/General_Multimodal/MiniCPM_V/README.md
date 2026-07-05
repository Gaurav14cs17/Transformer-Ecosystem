# MiniCPM-V — Efficient Multimodal LLM for Mobile Devices

## Overview

MiniCPM-V is a series of efficient multimodal language models designed to run on end-side devices including smartphones. Despite their small size (2B-8B parameters), MiniCPM-V models achieve performance competitive with much larger models by employing efficient architectures, high-quality training data, and innovative techniques like dynamic resolution processing and cross-image understanding.

## Architecture & Mechanism

MiniCPM-V uses an optimized VLM design for efficiency:

1. **Vision encoder**: SigLIP-400M serves as the vision backbone, balancing quality and efficiency.
2. **Dynamic resolution**: Images are processed at their native aspect ratio by dividing them into variable-sized tiles, each processed by the vision encoder. This enables high-resolution understanding without resizing.
3. **Token compression**: Visual tokens are compressed via a perceiver-like module to reduce the number of tokens sent to the LLM, critical for on-device efficiency.
4. **LLM backbone**: MiniCPM (2.4B) or similar small language models.
5. **Cross-image understanding**: Supports multiple images in a single conversation, enabling multi-image reasoning.

## Key Innovations

- **On-device deployment**: Small enough to run on smartphones (e.g., Qualcomm Snapdragon), enabling private, offline multimodal AI.
- **Dynamic resolution**: Processes images at native resolution without fixed-size constraints.
- **Token efficiency**: Aggressive visual token compression maintains quality while reducing LLM input length.
- **OCR and document understanding**: Strong performance on text-heavy images (receipts, documents, charts).
- **Bilingual**: Supports both English and Chinese multimodal understanding.
- **Competitive performance**: MiniCPM-V 2.6 (8B) matches or exceeds GPT-4V on several benchmarks.

## References

| **Paper/Model** | **Year** | **Link** |
|-----------|----------|----------|
| MiniCPM-V: A GPT-4V Level MLLM on Your Phone (Yao et al.) | 2024 | [arXiv:2408.01800](https://arxiv.org/abs/2408.01800) |
| MiniCPM (OpenBMB) | 2024-2025 | [GitHub](https://github.com/OpenBMB/MiniCPM-V) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
