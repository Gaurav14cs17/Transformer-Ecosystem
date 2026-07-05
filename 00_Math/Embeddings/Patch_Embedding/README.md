# Patch Embedding

Converts image patches into token embeddings for Vision Transformers.

## Architecture
- Split image (H×W) into non-overlapping patches of size P×P
- Each patch is flattened to P²·C dimensions
- Linear projection to model dimension d
- Equivalent to a Conv2d with kernel_size=P, stride=P

## Key Properties
- Number of tokens: (H/P) × (W/P)
- Standard patch size: 16×16 (ViT) or 14×14 (SigLIP/EVA)
- Overlapping patches possible with smaller stride

## Used In
- ViT, DeiT, BEiT, MAE, DINO, SAM, SigLIP

## Reference
| Paper | Year | Link |
|-------|------|------|
| An Image is Worth 16x16 Words | 2020 | [arXiv](https://arxiv.org/abs/2010.11929) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
