# Sparse Transformer (Original Sparse Attention Patterns)

Introduces factorized sparse attention patterns that reduce the O(n²) complexity of full attention to O(n√n), enabling Transformers to handle sequences of thousands of tokens.

## Architecture

The Sparse Transformer defines two factorized attention patterns:

```
Strided pattern (for data with spatial structure like images/audio):
  A_1(i) = {j : (i - j) mod stride = 0}     (attend every stride-th position)
  A_2(i) = {j : i - stride < j ≤ i}          (attend to local window)

Fixed pattern (for data without spatial structure like text):
  A_1(i) = {j : floor(j/stride) = floor(i/stride)}  (attend within block)
  A_2(i) = {j : j mod stride ∈ {stride-c, ..., stride-1}}  (attend to last c positions of each block)

Combined: Each layer uses either A_1 or A_2, alternating between layers.
Full connectivity in 2 layers: any token can attend to any other via 2 hops.
```

## Key Innovations

- **Factorized attention**: Decomposes full attention into two sparse patterns that together cover all positions
- **O(n√n) complexity**: Reduces from O(n²) while maintaining expressiveness
- **Two-hop connectivity**: Any two positions are connected within 2 layers
- **Strided + fixed patterns**: Different patterns for different data modalities
- **Scalability**: Enables training on sequences of length 16K+ (images, audio, text)

## Performance

- Generates high-fidelity images (64×64 ImageNet) and long audio sequences
- Models sequences 30× longer than previous dense Transformers
- State-of-the-art density estimation on CIFAR-10, Enwik8, and ImageNet 64×64
- Efficient custom CUDA kernels for block-sparse operations

## Usage

Sparse Transformer patterns are foundational and used in:
- Image generation (autoregressive pixel models)
- Audio generation (WaveNet-style)
- Long-sequence language modeling
- Basis for subsequent sparse attention work (Longformer, BigBird)

## Reference

| Paper | Year | Link |
|-------|------|------|
| Generating Long Sequences with Sparse Transformers | 2019 | [arXiv](https://arxiv.org/abs/1904.10509) |

---

**Author:** [Gaurav14cs17](https://github.com/Gaurav14cs17)
