export const treeData = {
  name: "Transformer\nEcosystem",
  id: "root",
  children: [
    {
      name: "Math &\nFoundations",
      id: "00_math",
      children: [
        {
          name: "Sigmoid Family",
          id: "sigmoid_family",
          children: [
            { name: "Sigmoid Function (Logistic)", id: "sigmoid_fn", url: "https://en.wikipedia.org/wiki/Sigmoid_function", year: 1845 },
            { name: "Swish: A Self-Gated Activation", id: "swish", url: "https://arxiv.org/abs/1710.05941", year: 2017, month: 10 },
            { name: "Mish: Self Regularized Non-Monotonic", id: "mish", url: "https://arxiv.org/abs/1908.08681", year: 2019, month: 8 }
          ]
        },
        {
          name: "ReLU Family",
          id: "relu_family",
          children: [
            { name: "ReLU (Restricted Boltzmann Machines)", id: "relu", url: "https://www.cs.toronto.edu/~hinton/absps/reluICML.pdf", year: 2010 },
            { name: "Leaky ReLU", id: "leaky_relu", url: "https://ai.stanford.edu/~amaas/papers/relu_hybrid_icml2013_final.pdf", year: 2013, month: 6 },
            { name: "PReLU (Delving Deep into Rectifiers)", id: "prelu", url: "https://arxiv.org/abs/1502.01852", year: 2015, month: 2 },
            { name: "ELU (Exponential Linear Units)", id: "elu", url: "https://arxiv.org/abs/1511.07289", year: 2015, month: 11 },
            { name: "SELU (Self-Normalizing Neural Networks)", id: "selu", url: "https://arxiv.org/abs/1706.02515", year: 2017, month: 6 }
          ]
        },
        {
          name: "Softmax Family",
          id: "softmax_family",
          children: [
            { name: "Softmax in Attention (Attention Is All You Need)", id: "softmax_fn", url: "https://arxiv.org/abs/1706.03762", year: 2017, month: 6 },
            { name: "Sparse Softmax", id: "sparse_softmax", url: "https://arxiv.org/abs/1805.04106", year: 2018, month: 5 },
            { name: "Log-Softmax", id: "log_softmax", url: "https://pytorch.org/docs/stable/generated/torch.nn.LogSoftmax.html", year: 2019 },
            { name: "Softmax1: Safe Softmax — A Debiased Softmax", id: "safe_softmax", url: "https://arxiv.org/abs/2310.03430", year: 2023, month: 10 },
            { name: "Quiet Attention (QA-Softmax)", id: "quiet_attn", url: "https://arxiv.org/abs/2403.01643", year: 2024, month: 3 }
          ]
        },
        {
          name: "GELU Family",
          id: "gelu_family",
          children: [
            { name: "Gaussian Error Linear Units (GELUs)", id: "gelu_fn", url: "https://arxiv.org/abs/1606.08415", year: 2016, month: 6 },
            { name: "SiLU / Swish", id: "silu", url: "https://arxiv.org/abs/1710.05941", year: 2017, month: 10 },
            { name: "GLU Variants (GEGLU, SwiGLU)", id: "geglu_swiglu", url: "https://arxiv.org/abs/2002.05202", year: 2020, month: 2 }
          ]
        },
        {
          name: "Embeddings",
          id: "embeddings",
          children: [
            { name: "Word2Vec", id: "word2vec", url: "https://arxiv.org/abs/1301.3781", year: 2013, month: 1 },
            { name: "Token Embedding (Attention Is All You Need)", id: "token_embed", url: "https://arxiv.org/abs/1706.03762", year: 2017, month: 6 },
            { name: "Patch Embedding (An Image is Worth 16x16 Words)", id: "patch_embed", url: "https://arxiv.org/abs/2010.11929", year: 2020, month: 10 }
          ]
        },
        {
          name: "Loss Functions",
          id: "loss_functions",
          children: [
            { name: "Cross-Entropy Loss", id: "cross_entropy", url: "https://en.wikipedia.org/wiki/Cross-entropy" },
            { name: "KL Divergence", id: "kl_divergence", url: "https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence" },
            { name: "SimCLR Contrastive Loss", id: "simclr_loss", url: "https://arxiv.org/abs/2002.05709", year: 2020, month: 2 }
          ]
        },
        {
          name: "Normalization Math",
          id: "norm_math",
          children: [
            { name: "Batch Normalization", id: "batchnorm_math", url: "https://arxiv.org/abs/1502.03167", year: 2015, month: 3 },
            { name: "Layer Normalization", id: "layernorm_math", url: "https://arxiv.org/abs/1607.06450", year: 2016, month: 7 },
            { name: "Group Normalization", id: "groupnorm_math", url: "https://arxiv.org/abs/1803.08494", year: 2018, month: 3 },
            { name: "RMSNorm", id: "rmsnorm_math", url: "https://arxiv.org/abs/1910.07467", year: 2019, month: 10 },
            { name: "ScaleNorm (Transformers without Tears)", id: "scalenorm_math", url: "https://arxiv.org/abs/1910.05895", year: 2019, month: 10 },
            { name: "DeepNorm (DeepNet: Scaling to 1,000 Layers)", id: "deepnorm_math", url: "https://arxiv.org/abs/2203.00555", year: 2022, month: 3 }
          ]
        },
        {
          name: "Rotary & Positional Math",
          id: "pos_math",
          children: [
            { name: "Sinusoidal PE (Attention Is All You Need)", id: "sinusoidal_math", url: "https://arxiv.org/abs/1706.03762", year: 2017, month: 6 },
            { name: "Relative Position Representations", id: "relative_math", url: "https://arxiv.org/abs/1803.02155", year: 2018, month: 3 },
            { name: "RoPE (RoFormer)", id: "rope_math", url: "https://arxiv.org/abs/2104.09864", year: 2021, month: 4 },
            { name: "ALiBi (Train Short, Test Long)", id: "alibi_math", url: "https://arxiv.org/abs/2108.12409", year: 2021, month: 8 },
            { name: "xPos (Length-Extrapolatable Transformer)", id: "xpos_math", url: "https://arxiv.org/abs/2212.10554", year: 2022, month: 12 },
            { name: "YaRN: Efficient Context Window Extension", id: "yarn_math", url: "https://arxiv.org/abs/2309.00071", year: 2023, month: 8 },
            { name: "LongRoPE: Beyond 2 Million Tokens", id: "longrope_math", url: "https://arxiv.org/abs/2402.13753", year: 2024, month: 2 }
          ]
        }
      ]
    },
    {
      name: "Attention",
      id: "01_attention",
      children: [
        {
          name: "Classical Attention",
          id: "classical_attn",
          children: [
            { name: "Bahdanau / Additive Attention", id: "bahdanau", url: "https://arxiv.org/abs/1409.0473", year: 2014, month: 9 },
            { name: "Luong / Dot-Product Attention", id: "luong", url: "https://arxiv.org/abs/1508.04025", year: 2015, month: 8 },
            { name: "Scaled Dot-Product (Attention Is All You Need)", id: "scaled_dot", url: "https://arxiv.org/abs/1706.03762", year: 2017, month: 6 }
          ]
        },
        {
          name: "Self-Attention",
          id: "self_attn",
          children: [
            { name: "Attention Is All You Need", id: "self_attn_paper", url: "https://arxiv.org/abs/1706.03762", year: 2017, month: 6 }
          ]
        },
        {
          name: "Cross-Attention",
          id: "cross_attn",
          children: [
            { name: "Attention Is All You Need", id: "cross_attn_paper", url: "https://arxiv.org/abs/1706.03762", year: 2017, month: 6 },
            { name: "Perceiver: General Perception with Iterative Attention", id: "perceiver", url: "https://arxiv.org/abs/2103.03206", year: 2021, month: 3 },
            { name: "Perceiver IO", id: "perceiver_io", url: "https://arxiv.org/abs/2107.14795", year: 2021, month: 7 }
          ]
        },
        {
          name: "Multi-Head Variants",
          id: "multihead_variants",
          children: [
            { name: "Multi-Head Attention (Attention Is All You Need)", id: "mha_orig", url: "https://arxiv.org/abs/1706.03762", year: 2017, month: 6 },
            { name: "Multi-Query Attention (One Write-Head)", id: "mqa_paper", url: "https://arxiv.org/abs/1911.02150", year: 2019, month: 11 },
            { name: "Talking-Heads Attention", id: "talking_heads", url: "https://arxiv.org/abs/2003.02436", year: 2020, month: 3 },
            { name: "GQA: Grouped-Query Attention", id: "gqa_paper", url: "https://arxiv.org/abs/2305.13245", year: 2023, month: 5 },
            { name: "DeepSeek-V2 (Multi-Latent Attention)", id: "mla_paper", url: "https://arxiv.org/abs/2405.04434", year: 2024, month: 5 },
            { name: "LUCID: Attention with Preconditioned Representations", id: "lucid", url: "https://arxiv.org/abs/2602.10410", year: 2026, month: 2 },
            { name: "Affine-Scaled Attention", id: "affine_scaled", url: "https://arxiv.org/abs/2602.23057", year: 2026, month: 2 },
            { name: "Keyless Attention: Value-Space Routing", id: "keyless_attn", url: "https://arxiv.org/abs/2606.21848", year: 2026, month: 6 }
          ]
        },
        {
          name: "Sparse Attention",
          id: "sparse_attn",
          children: [
            { name: "Image Transformer (Local Attention)", id: "local_attn", url: "https://arxiv.org/abs/1802.05751", year: 2018, month: 2 },
            { name: "Generating Long Sequences with Sparse Transformers", id: "sparse_transformers", url: "https://arxiv.org/abs/1904.10509", year: 2019, month: 4 },
            { name: "Longformer (Sliding Window + Global)", id: "longformer_sparse", url: "https://arxiv.org/abs/2004.05150", year: 2020, month: 4 },
            { name: "LongNet: Scaling to 1B Tokens (Dilated)", id: "longnet", url: "https://arxiv.org/abs/2307.02486", year: 2023, month: 7 },
            { name: "Mistral 7B (Sliding Window)", id: "mistral_sparse", url: "https://arxiv.org/abs/2310.06825", year: 2023, month: 10 },
            { name: "Native Sparse Attention (NSA)", id: "nsa", url: "https://arxiv.org/abs/2502.11089", year: 2025, month: 2 },
            { name: "Gated Attention: Non-linearity & Sparsity", id: "gated_attn_sparse", url: "https://arxiv.org/abs/2505.06708", year: 2025, month: 5 },
            { name: "DashAttention: Differentiable Adaptive Sparse Hierarchical", id: "dash_attn", url: "https://arxiv.org/abs/2605.18753", year: 2025, month: 5 },
            { name: "SparDA: Sparse Decoupled Attention", id: "sparda_sparse", url: "https://arxiv.org/abs/2606.04511", year: 2026, month: 6 }
          ]
        },
        {
          name: "Linear Attention",
          id: "linear_attn",
          children: [
            { name: "Reformer: LSH Attention", id: "reformer_lsh", url: "https://arxiv.org/abs/2001.04451", year: 2020, month: 1 },
            { name: "Transformers are RNNs (Linear Attention)", id: "linear_attn_paper", url: "https://arxiv.org/abs/2006.16236", year: 2020, month: 6 },
            { name: "Linformer: Linear Complexity", id: "linformer_paper", url: "https://arxiv.org/abs/2006.04768", year: 2020, month: 6 },
            { name: "Performers (FAVOR+)", id: "performer_paper", url: "https://arxiv.org/abs/2009.14794", year: 2020, month: 9 },
            { name: "Nyströmformer", id: "nystromformer", url: "https://arxiv.org/abs/2102.03902", year: 2021, month: 2 },
            { name: "CosFormer: Rethinking Softmax in Attention", id: "cosformer", url: "https://arxiv.org/abs/2202.08791", year: 2022, month: 2 },
            { name: "Lightning Attention-2", id: "lightning2", url: "https://arxiv.org/abs/2401.04658", year: 2024, month: 1 },
            { name: "Based: Simple Linear Attention LMs", id: "based", url: "https://arxiv.org/abs/2402.18668", year: 2024, month: 2 },
            { name: "GLA: Gated Linear Attention Transformers", id: "gla", url: "https://arxiv.org/abs/2312.06635", year: 2024, month: 5 },
            { name: "DeltaNet: Conditional SSMs with Selective Retrieval", id: "deltanet", url: "https://arxiv.org/abs/2406.06484", year: 2024, month: 6 },
            { name: "Kimi Linear Attention (Kimi-VL)", id: "kimi_linear", url: "https://kimi.moonshot.cn/", year: 2024 },
            { name: "Gated Delta Networks (GDN)", id: "gdn_linear", url: "https://arxiv.org/abs/2501.06252", year: 2025, month: 1 },
            { name: "Kalman Linear Attention (KLA)", id: "kla_linear", url: "https://arxiv.org/abs/2602.10743", year: 2026, month: 2 }
          ]
        },
        {
          name: "IO-Efficient Attention",
          id: "io_efficient_attn",
          children: [
            { name: "FlashAttention", id: "flash1", url: "https://arxiv.org/abs/2205.14135", year: 2022, month: 5 },
            { name: "FlashAttention-2", id: "flash2", url: "https://arxiv.org/abs/2307.08691", year: 2023, month: 7 },
            { name: "FlashAttention-3", id: "flash3", url: "https://arxiv.org/abs/2407.08608", year: 2024, month: 7 },
            { name: "FlexAttention", id: "flex_attn", url: "https://pytorch.org/blog/flexattention/", year: 2024, month: 8 },
            { name: "SparDA: Forecast Projection", id: "sparda_io", url: "https://arxiv.org/abs/2606.04511", year: 2026, month: 6 }
          ]
        },
        {
          name: "Long Context Attention",
          id: "long_context_attn",
          children: [
            { name: "Transformer-XL", id: "transformer_xl_attn", url: "https://arxiv.org/abs/1901.02860", year: 2019, month: 1 },
            { name: "Longformer: The Long-Document Transformer", id: "longformer_long", url: "https://arxiv.org/abs/2004.05150", year: 2020, month: 4 },
            { name: "Big Bird: Transformers for Longer Sequences", id: "bigbird_long", url: "https://arxiv.org/abs/2007.14062", year: 2020, month: 7 },
            { name: "Memorizing Transformers", id: "memorizing_transformers", url: "https://arxiv.org/abs/2203.08913", year: 2022, month: 3 },
            { name: "LM-Infinite: On-the-Fly Length Generalization", id: "lm_infinite", url: "https://arxiv.org/abs/2308.16137", year: 2023, month: 8 },
            { name: "Infini-Attention (Leave No Context Behind)", id: "infini_attn", url: "https://arxiv.org/abs/2404.07143", year: 2024, month: 4 }
          ]
        },
        {
          name: "Retrieval-Augmented Attention",
          id: "retrieval_attn",
          children: [
            { name: "RAG: Retrieval-Augmented Generation", id: "rag", url: "https://arxiv.org/abs/2005.11401", year: 2020, month: 5 },
            { name: "RETRO: Retrieving from Trillions of Tokens", id: "retro", url: "https://arxiv.org/abs/2112.04426", year: 2021, month: 12 }
          ]
        },
        {
          name: "Hybrid Attention",
          id: "hybrid_attn",
          children: [
            { name: "Hyena Hierarchy", id: "hyena_hybrid", url: "https://arxiv.org/abs/2302.10866", year: 2023, month: 2 },
            { name: "RWKV: Reinventing RNNs for Transformer Era", id: "rwkv_hybrid", url: "https://arxiv.org/abs/2305.13048", year: 2023, month: 5 },
            { name: "RetNet: Retentive Network", id: "retnet_hybrid", url: "https://arxiv.org/abs/2307.08621", year: 2023, month: 7 },
            { name: "Mamba: Selective State Spaces", id: "mamba_hybrid", url: "https://arxiv.org/abs/2312.00752", year: 2023, month: 12 },
            { name: "Jamba: Hybrid Transformer-Mamba", id: "jamba_hybrid", url: "https://arxiv.org/abs/2403.19887", year: 2024, month: 3 },
            { name: "Eagle and Finch (RWKV v5/v6)", id: "eagle_finch_hybrid", url: "https://arxiv.org/abs/2404.05892", year: 2024, month: 4 },
            { name: "Gated Delta Networks (GDN)", id: "gdn_hybrid", url: "https://arxiv.org/abs/2501.06252", year: 2025, month: 1 }
          ]
        },
        {
          name: "Differential Attention",
          id: "diff_attn",
          children: [
            { name: "Differential Transformer", id: "diff_transformer", url: "https://arxiv.org/abs/2410.05258", year: 2024, month: 10 }
          ]
        }
      ]
    },
    {
      name: "Positional\nEncoding",
      id: "02_positional",
      children: [
        {
          name: "Absolute / Sinusoidal",
          id: "absolute_pe",
          children: [
            { name: "Sinusoidal (Attention Is All You Need)", id: "sinusoidal_pe", url: "https://arxiv.org/abs/1706.03762", year: 2017, month: 6 },
            { name: "Learned (Conv Seq2Seq)", id: "learned_conv", url: "https://arxiv.org/abs/1705.03122", year: 2017, month: 5 },
            { name: "Learned (BERT)", id: "learned_bert", url: "https://arxiv.org/abs/1810.04805", year: 2018, month: 10 }
          ]
        },
        {
          name: "Relative",
          id: "relative_pe",
          children: [
            { name: "Shaw: Relative Position Representations", id: "shaw_rel", url: "https://arxiv.org/abs/1803.02155", year: 2018, month: 3 },
            { name: "Music Transformer", id: "music_transformer", url: "https://arxiv.org/abs/1809.04281", year: 2018, month: 9 },
            { name: "Transformer-XL", id: "txl_rel", url: "https://arxiv.org/abs/1901.02860", year: 2019, month: 1 },
            { name: "T5 Relative Bias", id: "t5_rel_bias", url: "https://arxiv.org/abs/1910.10683", year: 2019, month: 10 }
          ]
        },
        {
          name: "Rotary (RoPE Family)",
          id: "rope_family",
          children: [
            { name: "RoFormer (RoPE)", id: "roformer", url: "https://arxiv.org/abs/2104.09864", year: 2021, month: 4 },
            { name: "xPos (Length-Extrapolatable)", id: "xpos", url: "https://arxiv.org/abs/2212.10554", year: 2022, month: 12 },
            { name: "YaRN: Efficient Context Window Extension", id: "yarn_rope", url: "https://arxiv.org/abs/2309.00071", year: 2023, month: 8 },
            { name: "Code Llama (NTK-Aware Scaling)", id: "ntk_aware", url: "https://arxiv.org/abs/2308.12950", year: 2023, month: 8 },
            { name: "LongRoPE: Beyond 2 Million Tokens", id: "longrope", url: "https://arxiv.org/abs/2402.13753", year: 2024, month: 2 }
          ]
        },
        {
          name: "Bias-Based",
          id: "bias_based_pe",
          children: [
            { name: "ALiBi (Train Short, Test Long)", id: "alibi", url: "https://arxiv.org/abs/2108.12409", year: 2021, month: 8 }
          ]
        },
        {
          name: "Contextual",
          id: "contextual_pe",
          children: [
            { name: "CoPE: Contextual Position Encoding", id: "cope", url: "https://arxiv.org/abs/2405.18719", year: 2024, month: 5 }
          ]
        },
        {
          name: "No Position Encoding",
          id: "no_position_pe",
          children: [
            { name: "NoPE: Impact of Positional Encoding on Length Generalization", id: "nope", url: "https://arxiv.org/abs/2305.19466", year: 2023, month: 5 }
          ]
        }
      ]
    },
    {
      name: "MLP /\nFeed Forward",
      id: "03_mlp",
      children: [
        {
          name: "Standard FeedForward",
          id: "standard_ffn",
          children: [
            { name: "Position-wise FFN (Attention Is All You Need)", id: "ffn_paper", url: "https://arxiv.org/abs/1706.03762", year: 2017, month: 6 }
          ]
        },
        {
          name: "Gated FFN",
          id: "gated_ffn",
          children: [
            { name: "GLU (Gated Convolutional Networks)", id: "glu", url: "https://arxiv.org/abs/1612.08083", year: 2017, month: 9 },
            { name: "GLU Variants (SwiGLU, GEGLU, ReGLU)", id: "glu_variants", url: "https://arxiv.org/abs/2002.05202", year: 2020, month: 2 },
            { name: "PaLM (SwiGLU adoption)", id: "palm_swiglu", url: "https://arxiv.org/abs/2204.02311", year: 2022, month: 4 },
            { name: "LLaMA (SwiGLU adoption)", id: "llama_swiglu", url: "https://arxiv.org/abs/2302.13971", year: 2023, month: 2 }
          ]
        },
        {
          name: "Mixture of Experts (MoE)",
          id: "moe",
          children: [
            { name: "Sparsely-Gated Mixture-of-Experts", id: "moe_orig", url: "https://arxiv.org/abs/1701.06538", year: 2017, month: 1 },
            { name: "GShard", id: "gshard", url: "https://arxiv.org/abs/2006.16668", year: 2020, month: 6 },
            { name: "Switch Transformers", id: "switch_moe", url: "https://arxiv.org/abs/2101.03961", year: 2021, month: 1 },
            { name: "Expert Choice Routing", id: "expert_choice", url: "https://arxiv.org/abs/2202.09368", year: 2022, month: 2 },
            { name: "Soft Mixtures of Experts", id: "soft_moe", url: "https://arxiv.org/abs/2308.00951", year: 2023, month: 8 },
            { name: "Mixtral of Experts", id: "mixtral_moe", url: "https://arxiv.org/abs/2401.04088", year: 2024, month: 1 },
            { name: "DeepSeek-MoE", id: "deepseek_moe", url: "https://arxiv.org/abs/2401.06066", year: 2024, month: 1 },
            { name: "DirMoE: Dirichlet-Routed MoE", id: "dirmoe", url: "https://arxiv.org/abs/2602.09001", year: 2026, month: 2 },
            { name: "PathMoE: Path-Constrained MoE", id: "pathmoe", url: "https://arxiv.org/abs/2603.18297", year: 2026, month: 3 },
            { name: "ProbMoE: Differentiable Probabilistic Routing", id: "probmoe", url: "https://arxiv.org/abs/2606.01509", year: 2026, month: 6 }
          ]
        },
        {
          name: "KAN (Kolmogorov-Arnold Networks)",
          id: "kan",
          children: [
            { name: "KAN: Kolmogorov-Arnold Networks", id: "kan_paper", url: "https://arxiv.org/abs/2404.19756", year: 2024, month: 4 }
          ]
        }
      ]
    },
    {
      name: "Normalization",
      id: "04_normalization",
      children: [
        {
          name: "Batch Normalization",
          id: "batch_norm",
          children: [
            { name: "Batch Normalization: Accelerating Deep Network Training", id: "batchnorm", url: "https://arxiv.org/abs/1502.03167", year: 2015, month: 3 }
          ]
        },
        {
          name: "Layer Normalization",
          id: "layer_norm",
          children: [
            { name: "Layer Normalization", id: "layernorm", url: "https://arxiv.org/abs/1607.06450", year: 2016, month: 7 }
          ]
        },
        {
          name: "Instance Normalization",
          id: "instance_norm",
          children: [
            { name: "Instance Normalization: Fast Stylization", id: "instancenorm", url: "https://arxiv.org/abs/1607.08022", year: 2016, month: 7 }
          ]
        },
        {
          name: "Group Normalization",
          id: "group_norm",
          children: [
            { name: "Group Normalization", id: "groupnorm", url: "https://arxiv.org/abs/1803.08494", year: 2018, month: 3 }
          ]
        },
        {
          name: "RMSNorm",
          id: "rmsnorm_cat",
          children: [
            { name: "Root Mean Square Layer Normalization", id: "rmsnorm", url: "https://arxiv.org/abs/1910.07467", year: 2019, month: 10 }
          ]
        },
        {
          name: "ScaleNorm",
          id: "scalenorm_cat",
          children: [
            { name: "Transformers without Tears", id: "scalenorm", url: "https://arxiv.org/abs/1910.05895", year: 2019, month: 10 }
          ]
        },
        {
          name: "DeepNorm",
          id: "deepnorm_cat",
          children: [
            { name: "DeepNet: Scaling Transformers to 1,000 Layers", id: "deepnorm", url: "https://arxiv.org/abs/2203.00555", year: 2022, month: 3 }
          ]
        },
        {
          name: "QK-Norm",
          id: "qknorm_cat",
          children: [
            { name: "Query-Key Normalization for Transformers", id: "qknorm", url: "https://arxiv.org/abs/2010.04245", year: 2020, month: 10 },
            { name: "Scaling ViTs to 22B Parameters", id: "vit22b_qknorm", url: "https://arxiv.org/abs/2302.05442", year: 2023, month: 2 },
            { name: "Enhanced QKNorm with the Lp Norm", id: "lp_qknorm", url: "https://arxiv.org/abs/2602.05006", year: 2026, month: 2 },
            { name: "QK-Normed MLA: Without Full Key Caching", id: "qknorm_mla", url: "https://arxiv.org/abs/2606.16310", year: 2026, month: 6 }
          ]
        },
        {
          name: "Sandwich Normalization",
          id: "sandwich_norm",
          children: [
            { name: "CogView: Sandwich LayerNorm", id: "sandwich_ln", url: "https://arxiv.org/abs/2105.13290", year: 2021, month: 5 }
          ]
        },
        {
          name: "HybridNorm & DyT",
          id: "hybridnorm_dyt",
          children: [
            { name: "Peri-LN: Stable Large-Scale Training", id: "peri_ln", url: "https://arxiv.org/abs/2502.02732", year: 2025, month: 2 },
            { name: "HybridNorm: Stable & Efficient Training", id: "hybridnorm", url: "https://arxiv.org/abs/2503.04598", year: 2025, month: 3 },
            { name: "Dynamic Tanh — DyT (Transformers without Normalization)", id: "dyt", url: "https://arxiv.org/abs/2503.10622", year: 2025, month: 3 }
          ]
        }
      ]
    },
    {
      name: "Transformer\nBlock",
      id: "05_block",
      children: [
        {
          name: "Encoder Block",
          id: "encoder_block",
          children: [
            { name: "Original / PostNorm (Attention Is All You Need)", id: "enc_postnorm", url: "https://arxiv.org/abs/1706.03762", year: 2017, month: 6 },
            { name: "BERT (Encoder)", id: "bert_enc", url: "https://arxiv.org/abs/1810.04805", year: 2018, month: 10 },
            { name: "PreNorm (On Layer Normalization)", id: "enc_prenorm", url: "https://arxiv.org/abs/2002.04745", year: 2020, month: 2 }
          ]
        },
        {
          name: "Decoder Block",
          id: "decoder_block",
          children: [
            { name: "Original (Attention Is All You Need)", id: "dec_orig", url: "https://arxiv.org/abs/1706.03762", year: 2017, month: 6 },
            { name: "GPT-2 Style", id: "gpt2_dec", url: "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf", year: 2019, month: 2 },
            { name: "GPT-J (Parallel Attention + FFN)", id: "gptj_dec", url: "https://github.com/kingoflolz/mesh-transformer-jax", year: 2021, month: 5 },
            { name: "LLaMA (RMSNorm + SwiGLU + RoPE)", id: "llama_dec", url: "https://arxiv.org/abs/2302.13971", year: 2023, month: 2 }
          ]
        },
        {
          name: "Encoder-Decoder Block",
          id: "encdec_block",
          children: [
            { name: "Attention Is All You Need", id: "encdec_orig", url: "https://arxiv.org/abs/1706.03762", year: 2017, month: 6 },
            { name: "T5 Block", id: "t5_block", url: "https://arxiv.org/abs/1910.10683", year: 2019, month: 10 },
            { name: "BART", id: "bart_block", url: "https://arxiv.org/abs/1910.13461", year: 2019, month: 10 }
          ]
        },
        {
          name: "Parallel Block",
          id: "parallel_block",
          children: [
            { name: "GPT-J (Parallel Attention + FFN)", id: "gptj_parallel", url: "https://github.com/kingoflolz/mesh-transformer-jax", year: 2021, month: 5 },
            { name: "PaLM: Scaling Language Modeling", id: "palm_parallel", url: "https://arxiv.org/abs/2204.02311", year: 2022, month: 4 }
          ]
        },
        {
          name: "Deep Transformers",
          id: "deep_transformers",
          children: [
            { name: "DeepNet: Scaling to 1,000 Layers (DeepNorm)", id: "deepnet_block", url: "https://arxiv.org/abs/2203.00555", year: 2022, month: 3 }
          ]
        },
        {
          name: "Prefix LM Block",
          id: "prefix_lm",
          children: [
            { name: "UniLM: Unified Language Model Pre-training", id: "unilm", url: "https://arxiv.org/abs/1905.03197", year: 2019, month: 5 },
            { name: "PaLM: Scaling Language Modeling", id: "palm_prefix", url: "https://arxiv.org/abs/2204.02311", year: 2022, month: 4 }
          ]
        }
      ]
    },
    {
      name: "Vision\nTransformers",
      id: "06_vision",
      children: [
        {
          name: "Vanilla ViT",
          id: "vanilla_vit",
          children: [
            { name: "ViT: An Image is Worth 16x16 Words", id: "vit", url: "https://arxiv.org/abs/2010.11929", year: 2020, month: 10 },
            { name: "DeiT: Data-Efficient Image Transformers", id: "deit", url: "https://arxiv.org/abs/2012.12877", year: 2020, month: 12 },
            { name: "BEiT: BERT Pre-Training of Image Transformers", id: "beit", url: "https://arxiv.org/abs/2106.08254", year: 2021, month: 6 },
            { name: "DeiT III: Revenge of the ViT", id: "deit3", url: "https://arxiv.org/abs/2204.07118", year: 2022, month: 4 },
            { name: "BEiT v2: Masked Image Modeling with VQ", id: "beitv2", url: "https://arxiv.org/abs/2208.06366", year: 2022, month: 8 },
            { name: "BEiT-3: Image as a Foreign Language", id: "beit3", url: "https://arxiv.org/abs/2208.10442", year: 2022, month: 8 },
            { name: "FlexiViT: One Model for All Patch Sizes", id: "flexivit", url: "https://arxiv.org/abs/2212.08013", year: 2022, month: 12 }
          ]
        },
        {
          name: "Hierarchical ViT",
          id: "hierarchical_vit",
          children: [
            { name: "Pyramid Vision Transformer (PVT)", id: "pvt", url: "https://arxiv.org/abs/2102.12122", year: 2021, month: 2 },
            { name: "Swin Transformer", id: "swin", url: "https://arxiv.org/abs/2103.14030", year: 2021, month: 3 },
            { name: "CvT: Convolutions to Vision Transformers", id: "cvt", url: "https://arxiv.org/abs/2103.15808", year: 2021, month: 3 },
            { name: "Twins: Spatial Attention in ViTs", id: "twins", url: "https://arxiv.org/abs/2104.13840", year: 2021, month: 4 },
            { name: "Swin Transformer V2", id: "swinv2", url: "https://arxiv.org/abs/2111.09883", year: 2021, month: 11 },
            { name: "PVT v2", id: "pvtv2", url: "https://arxiv.org/abs/2106.13797", year: 2022, month: 1 },
            { name: "MaxViT: Multi-Axis Vision Transformer", id: "maxvit", url: "https://arxiv.org/abs/2204.01697", year: 2022, month: 4 },
            { name: "EfficientViT: Memory Efficient with Cascaded Group Attention", id: "efficientvit", url: "https://arxiv.org/abs/2305.07027", year: 2023, month: 5 }
          ]
        },
        {
          name: "Hybrid CNN + ViT",
          id: "hybrid_cnn_vit",
          children: [
            { name: "ConViT: Soft Convolutional Inductive Biases", id: "convit", url: "https://arxiv.org/abs/2103.10697", year: 2021, month: 3 },
            { name: "CoAtNet: Marrying Convolution and Attention", id: "coatnet", url: "https://arxiv.org/abs/2106.04803", year: 2021, month: 6 },
            { name: "ConvNeXt: A ConvNet for the 2020s", id: "convnext", url: "https://arxiv.org/abs/2201.03545", year: 2022, month: 1 },
            { name: "ConvNeXt V2", id: "convnextv2", url: "https://arxiv.org/abs/2301.00808", year: 2023, month: 1 }
          ]
        },
        {
          name: "Self-Supervised Vision",
          id: "self_supervised_vision",
          children: [
            { name: "DINO: Self-Supervised Vision Transformers", id: "dino", url: "https://arxiv.org/abs/2104.14294", year: 2021, month: 4 },
            { name: "MAE: Masked Autoencoders", id: "mae", url: "https://arxiv.org/abs/2111.06377", year: 2021, month: 11 },
            { name: "iBOT: Image BERT with Online Tokenizer", id: "ibot", url: "https://arxiv.org/abs/2111.07832", year: 2021, month: 11 },
            { name: "SimMIM: Simple Masked Image Modeling", id: "simmim", url: "https://arxiv.org/abs/2111.09886", year: 2021, month: 11 },
            { name: "I-JEPA: Joint-Embedding Predictive Architecture", id: "ijepa", url: "https://arxiv.org/abs/2301.08243", year: 2023, month: 1 },
            { name: "DINOv2: Robust Visual Features", id: "dinov2", url: "https://arxiv.org/abs/2304.07193", year: 2023, month: 4 },
            { name: "V-JEPA: Feature Prediction from Video", id: "vjepa", url: "https://arxiv.org/abs/2404.08471", year: 2024, month: 2 }
          ]
        },
        {
          name: "Foundation Vision Models",
          id: "foundation_vision",
          children: [
            { name: "EVA: Masked Visual Representation Learning", id: "eva", url: "https://arxiv.org/abs/2211.07636", year: 2022, month: 11 },
            { name: "EVA-02: Visual Representation for Neon Genesis", id: "eva02", url: "https://arxiv.org/abs/2303.11331", year: 2023, month: 3 },
            { name: "SigLIP: Sigmoid Loss for Language Image Pre-Training", id: "siglip_vit", url: "https://arxiv.org/abs/2303.15343", year: 2023, month: 3 },
            { name: "Segment Anything (SAM)", id: "sam", url: "https://arxiv.org/abs/2304.02643", year: 2023, month: 4 },
            { name: "PaLI-3 (SigLIP-ViT)", id: "pali3", url: "https://arxiv.org/abs/2310.09199", year: 2023, month: 10 },
            { name: "Florence-2", id: "florence2", url: "https://arxiv.org/abs/2311.06242", year: 2023, month: 11 },
            { name: "InternVL", id: "internvl_vision", url: "https://arxiv.org/abs/2312.14238", year: 2023, month: 12 },
            { name: "InternVL2", id: "internvl2_vision", url: "https://arxiv.org/abs/2407.21783", year: 2024, month: 7 },
            { name: "SAM 2: Segment Anything in Images and Videos", id: "sam2", url: "https://arxiv.org/abs/2408.00714", year: 2024, month: 7 },
            { name: "SAM 3: Segment Anything with Concepts", id: "sam3", url: "https://arxiv.org/abs/2511.16719", year: 2025, month: 11 }
          ]
        },
        {
          name: "Segmentation",
          id: "segmentation",
          children: [
            { name: "SETR: Semantic Segmentation from Seq2Seq", id: "setr", url: "https://arxiv.org/abs/2012.15840", year: 2020, month: 12 },
            { name: "SegFormer", id: "segformer", url: "https://arxiv.org/abs/2105.15203", year: 2021, month: 5 },
            { name: "Mask2Former", id: "mask2former", url: "https://arxiv.org/abs/2112.01527", year: 2021, month: 12 }
          ]
        },
        {
          name: "OCR / Document",
          id: "ocr_document",
          children: [
            { name: "LayoutLM", id: "layoutlm", url: "https://arxiv.org/abs/1912.13318", year: 2019, month: 12 },
            { name: "Donut: OCR-free Document Understanding", id: "donut", url: "https://arxiv.org/abs/2111.15664", year: 2021, month: 11 },
            { name: "Pix2Struct", id: "pix2struct", url: "https://arxiv.org/abs/2210.03347", year: 2023, month: 2 }
          ]
        },
        {
          name: "Medical Vision Transformers",
          id: "medical_vit",
          children: [
            { name: "UNETR: 3D Medical Image Segmentation", id: "unetr", url: "https://arxiv.org/abs/2103.10504", year: 2021, month: 10 },
            { name: "Swin UNETR: Brain Tumors in MRI", id: "swin_unetr", url: "https://arxiv.org/abs/2201.01266", year: 2022, month: 1 }
          ]
        }
      ]
    },
    {
      name: "Language\nModels",
      id: "07_language",
      children: [
        {
          name: "Encoder Models",
          id: "encoder_models",
          children: [
            { name: "BERT", id: "bert", url: "https://arxiv.org/abs/1810.04805", year: 2018, month: 10 },
            { name: "XLNet", id: "xlnet", url: "https://arxiv.org/abs/1906.08237", year: 2019, month: 6 },
            { name: "RoBERTa", id: "roberta", url: "https://arxiv.org/abs/1907.11692", year: 2019, month: 7 },
            { name: "ALBERT", id: "albert", url: "https://arxiv.org/abs/1909.11942", year: 2019, month: 9 },
            { name: "ELECTRA", id: "electra", url: "https://arxiv.org/abs/2003.10555", year: 2020, month: 3 },
            { name: "DeBERTa", id: "deberta", url: "https://arxiv.org/abs/2006.03654", year: 2020, month: 6 },
            { name: "ModernBERT", id: "modernbert", url: "https://arxiv.org/abs/2412.13663", year: 2024, month: 12 }
          ]
        },
        {
          name: "GPT Family",
          id: "gpt_family",
          children: [
            { name: "GPT-1", id: "gpt1", url: "https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf", year: 2018, month: 6 },
            { name: "GPT-2", id: "gpt2", url: "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf", year: 2019, month: 2 },
            { name: "GPT-3", id: "gpt3", url: "https://arxiv.org/abs/2005.14165", year: 2020, month: 5 },
            { name: "GPT-4", id: "gpt4", url: "https://arxiv.org/abs/2303.08774", year: 2023, month: 3 },
            { name: "GPT-4o", id: "gpt4o", url: "https://openai.com/index/gpt-4o-system-card/", year: 2024, month: 8 }
          ]
        },
        {
          name: "LLaMA Family",
          id: "llama_family",
          children: [
            { name: "LLaMA", id: "llama1", url: "https://arxiv.org/abs/2302.13971", year: 2023, month: 2 },
            { name: "Llama 2", id: "llama2", url: "https://arxiv.org/abs/2307.09288", year: 2023, month: 7 },
            { name: "Llama 3", id: "llama3", url: "https://arxiv.org/abs/2407.21783", year: 2024, month: 7 },
            { name: "Llama 4: Scout & Maverick (MoE, 10M Context)", id: "llama4", url: "https://ai.meta.com/blog/llama-4-multimodal-intelligence/", year: 2025, month: 4 }
          ]
        },
        {
          name: "Qwen Family",
          id: "qwen_family",
          children: [
            { name: "Qwen", id: "qwen1", url: "https://arxiv.org/abs/2309.16609", year: 2023, month: 9 },
            { name: "Qwen2", id: "qwen2", url: "https://arxiv.org/abs/2407.10671", year: 2024, month: 7 },
            { name: "Qwen2.5", id: "qwen25", url: "https://arxiv.org/abs/2501.15451", year: 2025, month: 1 },
            { name: "Qwen3", id: "qwen3", url: "https://arxiv.org/abs/2505.09388", year: 2025, month: 5 },
            { name: "Qwen3.5 (Hybrid Linear-Attention + GDN)", id: "qwen35", url: "https://qwenlm.github.io/", year: 2026, month: 2 }
          ]
        },
        {
          name: "DeepSeek Family",
          id: "deepseek_family",
          children: [
            { name: "DeepSeek LLM", id: "deepseek1", url: "https://arxiv.org/abs/2401.02954", year: 2024, month: 1 },
            { name: "DeepSeek-V2 (MoE + MLA)", id: "deepseekv2", url: "https://arxiv.org/abs/2405.04434", year: 2024, month: 5 },
            { name: "DeepSeek-V3", id: "deepseekv3", url: "https://arxiv.org/abs/2412.19437", year: 2024, month: 12 },
            { name: "DeepSeek-V4 (Million-Token Context)", id: "deepseekv4", url: "https://www.deepseek.com/", year: 2026 }
          ]
        },
        {
          name: "Gemma Family",
          id: "gemma_family",
          children: [
            { name: "Gemma", id: "gemma1", url: "https://arxiv.org/abs/2403.08295", year: 2024, month: 2 },
            { name: "Gemma 2", id: "gemma2", url: "https://arxiv.org/abs/2408.00118", year: 2024, month: 6 },
            { name: "Gemma 3", id: "gemma3", url: "https://arxiv.org/abs/2503.19786", year: 2025, month: 3 },
            { name: "Gemma 4: Multimodal MoE with Thinking", id: "gemma4", url: "https://blog.google/technology/developers/gemma-4/", year: 2026, month: 6 }
          ]
        },
        {
          name: "Mistral Family",
          id: "mistral_family",
          children: [
            { name: "Mistral 7B", id: "mistral7b", url: "https://arxiv.org/abs/2310.06825", year: 2023, month: 10 },
            { name: "Mixtral of Experts", id: "mixtral", url: "https://arxiv.org/abs/2401.04088", year: 2024, month: 1 },
            { name: "Mistral Large 3 (675B MoE)", id: "mistral_large3", url: "https://mistral.ai/", year: 2025 }
          ]
        },
        {
          name: "Phi Family",
          id: "phi_family",
          children: [
            { name: "Phi-1 (Textbooks Are All You Need)", id: "phi1", url: "https://arxiv.org/abs/2306.11644", year: 2023, month: 6 },
            { name: "Phi-2", id: "phi2", url: "https://www.microsoft.com/en-us/research/blog/phi-2-the-surprising-power-of-small-language-models/", year: 2023, month: 12 },
            { name: "Phi-3", id: "phi3", url: "https://arxiv.org/abs/2404.14219", year: 2024, month: 4 },
            { name: "Phi-4", id: "phi4", url: "https://arxiv.org/abs/2412.08905", year: 2024, month: 12 }
          ]
        },
        {
          name: "Falcon Family",
          id: "falcon_family",
          children: [
            { name: "Falcon", id: "falcon1", url: "https://arxiv.org/abs/2311.16867", year: 2023, month: 6 },
            { name: "Falcon2-11B", id: "falcon2", url: "https://arxiv.org/abs/2407.14885", year: 2024, month: 7 }
          ]
        },
        {
          name: "Others",
          id: "other_decoders",
          children: [
            { name: "Yi: Open Foundation Models (01.AI)", id: "yi", url: "https://arxiv.org/abs/2403.04652", year: 2024, month: 3 },
            { name: "InternLM2", id: "internlm2", url: "https://arxiv.org/abs/2403.17297", year: 2024, month: 3 },
            { name: "GLM-4", id: "glm4", url: "https://arxiv.org/abs/2406.12793", year: 2024, month: 6 },
            { name: "GLM-5 (744B on Huawei Ascend)", id: "glm5", url: "https://www.zhipuai.cn/", year: 2025 },
            { name: "Kimi K2", id: "kimi_k2", url: "https://arxiv.org/abs/2507.04205", year: 2025, month: 7 },
            { name: "MiniMax-M2.5", id: "minimax_m25", url: "https://www.minimaxi.com/", year: 2025 }
          ]
        },
        {
          name: "Encoder-Decoder Models",
          id: "enc_dec_models",
          children: [
            { name: "T5: Exploring Limits of Transfer Learning", id: "t5", url: "https://arxiv.org/abs/1910.10683", year: 2019, month: 10 },
            { name: "BART: Denoising Sequence-to-Sequence", id: "bart", url: "https://arxiv.org/abs/1910.13461", year: 2019, month: 10 },
            { name: "PEGASUS: Abstractive Summarization", id: "pegasus", url: "https://arxiv.org/abs/1912.08777", year: 2019, month: 12 },
            { name: "mBART: Multilingual Denoising Pre-training", id: "mbart", url: "https://arxiv.org/abs/2001.08210", year: 2020, month: 1 },
            { name: "mT5: Massively Multilingual", id: "mt5", url: "https://arxiv.org/abs/2010.11934", year: 2020, month: 10 },
            { name: "UL2: Unifying Language Learning Paradigms", id: "ul2", url: "https://arxiv.org/abs/2205.05131", year: 2022, month: 5 },
            { name: "Flan-T5: Scaling Instruction-Finetuned LMs", id: "flant5", url: "https://arxiv.org/abs/2210.11416", year: 2022, month: 10 }
          ]
        },
        {
          name: "Mixture of Experts Models",
          id: "moe_models",
          children: [
            { name: "Switch Transformers", id: "switch_lm", url: "https://arxiv.org/abs/2101.03961", year: 2021, month: 1 },
            { name: "Mixtral of Experts", id: "mixtral_lm", url: "https://arxiv.org/abs/2401.04088", year: 2024, month: 1 },
            { name: "DeepSeek-MoE", id: "deepseek_moe_lm", url: "https://arxiv.org/abs/2401.06066", year: 2024, month: 1 }
          ]
        },
        {
          name: "Reasoning Models",
          id: "reasoning_models",
          children: [
            { name: "Kimi k1.5: Scaling RL with LLMs", id: "kimi_k15", url: "https://arxiv.org/abs/2501.12599", year: 2025, month: 1 },
            { name: "DeepSeek-R1: Reasoning via RL", id: "deepseek_r1", url: "https://arxiv.org/abs/2501.12948", year: 2025, month: 1 },
            { name: "QwQ: Reflect Deeply on the Unknown", id: "qwq", url: "https://arxiv.org/abs/2503.18223", year: 2025, month: 3 }
          ]
        },
        {
          name: "Code Models",
          id: "code_models",
          children: [
            { name: "StarCoder: May the Source Be with You", id: "starcoder", url: "https://arxiv.org/abs/2305.06161", year: 2023, month: 5 },
            { name: "Code Llama", id: "code_llama", url: "https://arxiv.org/abs/2308.12950", year: 2023, month: 8 },
            { name: "DeepSeek-Coder", id: "deepseek_coder", url: "https://arxiv.org/abs/2401.14196", year: 2024, month: 1 },
            { name: "StarCoder2: The Stack v2", id: "starcoder2", url: "https://arxiv.org/abs/2402.19173", year: 2024, month: 2 },
            { name: "Codestral", id: "codestral", url: "https://mistral.ai/news/codestral/", year: 2024, month: 5 },
            { name: "Qwen2.5-Coder", id: "qwen25_coder", url: "https://arxiv.org/abs/2409.12186", year: 2024, month: 9 }
          ]
        },
        {
          name: "Long Context Models",
          id: "long_context_models",
          children: [
            { name: "LongLLaMA: Focused Transformer Training", id: "longllama", url: "https://arxiv.org/abs/2307.03170", year: 2023, month: 7 },
            { name: "YaRN: Efficient Context Window Extension", id: "yarn_lc", url: "https://arxiv.org/abs/2309.00071", year: 2023, month: 8 }
          ]
        }
      ]
    },
    {
      name: "Efficient\nTransformers",
      id: "08_efficient",
      children: [
        {
          name: "Sparse Attention",
          id: "eff_sparse",
          children: [
            { name: "Longformer", id: "longformer_eff", url: "https://arxiv.org/abs/2004.05150", year: 2020, month: 4 },
            { name: "ETC: Encoding Long and Structured Inputs", id: "etc", url: "https://arxiv.org/abs/2004.08483", year: 2020, month: 4 },
            { name: "Big Bird", id: "bigbird_eff", url: "https://arxiv.org/abs/2007.14062", year: 2020, month: 7 }
          ]
        },
        {
          name: "Linear Complexity",
          id: "eff_linear",
          children: [
            { name: "Reformer: The Efficient Transformer", id: "reformer_eff", url: "https://arxiv.org/abs/2001.04451", year: 2020, month: 1 },
            { name: "Linformer: Linear Complexity", id: "linformer_eff", url: "https://arxiv.org/abs/2006.04768", year: 2020, month: 6 },
            { name: "Performers (FAVOR+)", id: "performer_eff", url: "https://arxiv.org/abs/2009.14794", year: 2020, month: 9 }
          ]
        },
        {
          name: "IO-Optimized",
          id: "eff_io",
          children: [
            { name: "FlashAttention", id: "flash_eff", url: "https://arxiv.org/abs/2205.14135", year: 2022, month: 5 },
            { name: "Continuous Batching (Orca)", id: "orca", url: "https://www.usenix.org/conference/osdi22/presentation/yu", year: 2022, month: 6 },
            { name: "FlashAttention-2", id: "flash2_eff", url: "https://arxiv.org/abs/2307.08691", year: 2023, month: 7 },
            { name: "RetNet: Retentive Network", id: "retnet_eff", url: "https://arxiv.org/abs/2307.08621", year: 2023, month: 7 },
            { name: "PagedAttention (vLLM)", id: "paged_eff", url: "https://arxiv.org/abs/2309.06180", year: 2023, month: 9 },
            { name: "Ring Attention", id: "ring_eff", url: "https://arxiv.org/abs/2310.01889", year: 2023, month: 10 },
            { name: "FlashAttention-3", id: "flash3_eff", url: "https://arxiv.org/abs/2407.08608", year: 2024, month: 7 }
          ]
        },
        {
          name: "Low-Rank Adaptation",
          id: "eff_lowrank",
          children: [
            { name: "Adapters (Parameter-Efficient Transfer Learning)", id: "adapters", url: "https://arxiv.org/abs/1902.00751", year: 2019, month: 6 },
            { name: "LoRA: Low-Rank Adaptation", id: "lora", url: "https://arxiv.org/abs/2106.09685", year: 2021, month: 6 },
            { name: "QLoRA: Efficient Finetuning of Quantized LLMs", id: "qlora", url: "https://arxiv.org/abs/2305.14314", year: 2023, month: 5 },
            { name: "DoRA: Weight-Decomposed Low-Rank Adaptation", id: "dora", url: "https://arxiv.org/abs/2402.09353", year: 2024, month: 2 },
            { name: "HiRA: Hadamard High-Rank Adaptation", id: "hira", url: "https://arxiv.org/abs/2501.11440", year: 2025 },
            { name: "LoRDS: Continuous Low-Rank Decomposed Scaling", id: "lords", url: "https://arxiv.org/abs/2601.22716", year: 2026, month: 1 }
          ]
        },
        {
          name: "Quantization",
          id: "eff_quantization",
          children: [
            { name: "LLM.int8() (BitsAndBytes)", id: "bitsandbytes", url: "https://arxiv.org/abs/2208.07339", year: 2022, month: 8 },
            { name: "FP8 Formats for Deep Learning", id: "fp8", url: "https://arxiv.org/abs/2209.05433", year: 2022, month: 9 },
            { name: "GPTQ: Post-Training Quantization", id: "gptq", url: "https://arxiv.org/abs/2210.17323", year: 2022, month: 10 },
            { name: "SmoothQuant", id: "smoothquant", url: "https://arxiv.org/abs/2211.10438", year: 2022, month: 11 },
            { name: "AWQ: Activation-aware Weight Quantization", id: "awq", url: "https://arxiv.org/abs/2306.00978", year: 2023, month: 6 },
            { name: "GGML / GGUF Format", id: "gguf", url: "https://github.com/ggerganov/ggml", year: 2023 },
            { name: "SVDQuant: 4-Bit Diffusion Models", id: "svdquant", url: "https://arxiv.org/abs/2411.05007", year: 2024, month: 11 },
            { name: "CLAM: Chaining LLM Adapter Modules", id: "clam", url: "https://openreview.net/forum?id=1mKtFkElnu", year: 2025 },
            { name: "LoRaQ: Optimized Low Rank for 4-bit Quantization", id: "loraq", url: "https://arxiv.org/abs/2604.18117", year: 2026, month: 4 }
          ]
        },
        {
          name: "Pruning",
          id: "eff_pruning",
          children: [
            { name: "SparseGPT: One-Shot Pruning", id: "sparsegpt", url: "https://arxiv.org/abs/2301.00774", year: 2023, month: 1 },
            { name: "Wanda: Simple Effective Pruning", id: "wanda", url: "https://arxiv.org/abs/2306.11695", year: 2023, month: 6 }
          ]
        },
        {
          name: "Distillation",
          id: "eff_distillation",
          children: [
            { name: "TinyBERT", id: "tinybert", url: "https://arxiv.org/abs/1909.10351", year: 2019, month: 9 },
            { name: "DistilBERT", id: "distilbert", url: "https://arxiv.org/abs/1910.01108", year: 2019, month: 10 },
            { name: "MobileBERT", id: "mobilebert", url: "https://arxiv.org/abs/2004.02984", year: 2020, month: 4 }
          ]
        },
        {
          name: "KV Cache Optimization",
          id: "eff_kvcache",
          children: [
            { name: "MQA: One Write-Head is All You Need", id: "mqa_kv", url: "https://arxiv.org/abs/1911.02150", year: 2019, month: 11 },
            { name: "GQA: Generalized Multi-Query", id: "gqa_kv", url: "https://arxiv.org/abs/2305.13245", year: 2023, month: 5 },
            { name: "Attention Sinks (KV Cache Compression)", id: "attn_sinks", url: "https://arxiv.org/abs/2309.17453", year: 2023, month: 9 }
          ]
        },
        {
          name: "Speculative Decoding",
          id: "eff_speculative",
          children: [
            { name: "Fast Inference via Speculative Decoding", id: "spec_decode", url: "https://arxiv.org/abs/2211.17192", year: 2022, month: 11 },
            { name: "Speculative Sampling", id: "spec_sampling", url: "https://arxiv.org/abs/2302.01318", year: 2023, month: 2 },
            { name: "EAGLE: Feature-Level Speculation", id: "eff_eagle", url: "https://arxiv.org/abs/2401.15077", year: 2024, month: 1 },
            { name: "Medusa: Multiple Decoding Heads", id: "eff_medusa", url: "https://arxiv.org/abs/2401.10774", year: 2024, month: 1 },
            { name: "Multi-token Prediction (ICML'24)", id: "multi_token", url: "https://arxiv.org/abs/2404.19737", year: 2024, month: 4 },
            { name: "EAGLE-3: Training-Time Test (NeurIPS'25)", id: "eagle3", url: "https://arxiv.org/abs/2503.01840", year: 2025, month: 3 },
            { name: "Speculative Decoding and Beyond: In-Depth Review", id: "spec_survey", url: "https://arxiv.org/abs/2502.19732", year: 2025, month: 2 },
            { name: "SpecForge: Training Framework for Spec. Decoding", id: "specforge", url: "https://arxiv.org/abs/2603.18567", year: 2025 },
            { name: "DFlash: Block Diffusion for Flash Spec. Decoding", id: "dflash", url: "https://arxiv.org/abs/2602.06036", year: 2026, month: 2 },
            { name: "DSpark: Confidence-Scheduled Semi-AR Decoding (DeepSeek)", id: "dspark", url: "https://github.com/deepseek-ai/DeepSpec", year: 2026 }
          ]
        },
        {
          name: "Parallelism",
          id: "eff_parallelism",
          children: [
            { name: "Parameter Server: Data Parallelism", id: "data_parallel", url: "https://www.cs.cmu.edu/~muli/file/parameter_server_osdi14.pdf", year: 2014 },
            { name: "GPipe: Pipeline Parallelism", id: "gpipe", url: "https://arxiv.org/abs/1811.06965", year: 2019, month: 3 },
            { name: "Megatron-LM: Tensor Parallelism", id: "megatron", url: "https://arxiv.org/abs/1909.08053", year: 2019, month: 9 },
            { name: "ZeRO: Memory Optimizations Toward Training Trillion Parameters", id: "zero", url: "https://arxiv.org/abs/1910.02054", year: 2019, month: 10 },
            { name: "GShard: Expert Parallelism", id: "expert_parallel", url: "https://arxiv.org/abs/2006.16668", year: 2020, month: 6 },
            { name: "ZeRO-Infinity: Breaking the GPU Memory Wall", id: "zero_infinity", url: "https://arxiv.org/abs/2104.07857", year: 2021, month: 4 },
            { name: "Sequence Parallelism", id: "seq_parallel", url: "https://arxiv.org/abs/2105.13120", year: 2023, month: 5 },
            { name: "PyTorch FSDP: Fully Sharded Data Parallel", id: "fsdp", url: "https://arxiv.org/abs/2304.11277", year: 2023, month: 4 },
            { name: "ZeRO++: Efficient Collective Communication", id: "zero_pp", url: "https://arxiv.org/abs/2306.10209", year: 2023, month: 6 },
            { name: "Ring Attention: Context Parallelism", id: "context_parallel", url: "https://arxiv.org/abs/2310.01889", year: 2023, month: 10 }
          ]
        },
        {
          name: "Inference\nOptimization",
          id: "eff_inference",
          children: [
            { name: "Flash-Decoding for Long-Context Inference", id: "flash_decoding", url: "https://crfm.stanford.edu/2023/10/12/flashdecoding.html", year: 2023, month: 10 },
            { name: "FlashDecoding++: Faster LLM Inference", id: "flash_decoding_pp", url: "https://arxiv.org/abs/2311.01282", year: 2023, month: 11 },
            { name: "SGLang: RadixAttention / Prefix Caching", id: "prefix_caching", url: "https://arxiv.org/abs/2312.07104", year: 2023, month: 12 },
            { name: "ChunkAttention: Prefix-Aware KV Cache", id: "chunk_attention", url: "https://arxiv.org/abs/2402.15220", year: 2024, month: 2 }
          ]
        }
      ]
    },
    {
      name: "State Space\nModels",
      id: "09_ssm",
      children: [
        {
          name: "Classical SSM",
          id: "classical_ssm",
          children: [
            { name: "HiPPO: Recurrent Memory with Optimal Projections", id: "hippo", url: "https://arxiv.org/abs/2008.07669", year: 2020, month: 8 },
            { name: "S4: Structured State Spaces for Long Sequences", id: "s4", url: "https://arxiv.org/abs/2111.00396", year: 2021, month: 10 },
            { name: "S4D: Diagonal State Space Models", id: "s4d", url: "https://arxiv.org/abs/2206.11893", year: 2022, month: 6 },
            { name: "S5: Simplified State Space Layers", id: "s5", url: "https://arxiv.org/abs/2208.04933", year: 2022, month: 8 }
          ]
        },
        {
          name: "Selective SSM (Mamba Family)",
          id: "selective_ssm",
          children: [
            { name: "Mamba: Selective State Spaces", id: "mamba", url: "https://arxiv.org/abs/2312.00752", year: 2023, month: 12 },
            { name: "Jamba: Hybrid Transformer-Mamba", id: "jamba", url: "https://arxiv.org/abs/2403.19887", year: 2024, month: 3 },
            { name: "Mamba-2 (Transformers are SSMs)", id: "mamba2", url: "https://arxiv.org/abs/2405.21060", year: 2024, month: 5 }
          ]
        },
        {
          name: "Hybrid SSM",
          id: "hybrid_ssm",
          children: [
            { name: "MambaVision: Hybrid Mamba-Transformer", id: "mambavision", url: "https://arxiv.org/abs/2407.08083", year: 2024, month: 7 }
          ]
        },
        {
          name: "RNN-Like",
          id: "rnn_like",
          children: [
            { name: "RWKV: Reinventing RNNs for Transformer Era", id: "rwkv", url: "https://arxiv.org/abs/2305.13048", year: 2023, month: 5 },
            { name: "Eagle and Finch (RWKV v5/v6)", id: "eagle_finch", url: "https://arxiv.org/abs/2404.05892", year: 2024, month: 4 },
            { name: "xLSTM: Extended Long Short-Term Memory", id: "xlstm", url: "https://arxiv.org/abs/2405.04517", year: 2024, month: 5 }
          ]
        },
        {
          name: "Convolutional",
          id: "conv_ssm",
          children: [
            { name: "Hyena Hierarchy", id: "hyena", url: "https://arxiv.org/abs/2302.10866", year: 2023, month: 2 },
            { name: "StripedHyena", id: "stripedhyena", url: "https://www.together.ai/blog/stripedhyena-7b", year: 2023, month: 12 }
          ]
        },
        {
          name: "Gated Linear Recurrence",
          id: "gated_linear",
          children: [
            { name: "Griffin: Gated Linear Recurrences with Local Attention", id: "griffin", url: "https://arxiv.org/abs/2402.19427", year: 2024, month: 2 }
          ]
        },
        {
          name: "Linear RNN",
          id: "linear_rnn",
          children: [
            { name: "HGRN: Hierarchically Gated Recurrent NN", id: "hgrn", url: "https://arxiv.org/abs/2311.04823", year: 2024, month: 5 },
            { name: "minGRU (Were RNNs All We Needed?)", id: "mingru", url: "https://arxiv.org/abs/2410.01201", year: 2024, month: 10 },
            { name: "Gated Delta Networks (GDN)", id: "gdn_rnn", url: "https://arxiv.org/abs/2501.06252", year: 2025, month: 1 }
          ]
        },
        {
          name: "Bayesian Filtering",
          id: "bayesian_filtering",
          children: [
            { name: "Kalman Linear Attention (KLA)", id: "kla", url: "https://arxiv.org/abs/2602.10743", year: 2026, month: 2 }
          ]
        }
      ]
    },
    {
      name: "Multimodal",
      id: "10_multimodal",
      children: [
        {
          name: "Vision-Language Contrastive",
          id: "vl_contrastive",
          children: [
            { name: "CLIP", id: "clip", url: "https://arxiv.org/abs/2103.00020", year: 2021, month: 2 },
            { name: "ALIGN", id: "align", url: "https://arxiv.org/abs/2102.05918", year: 2021, month: 2 },
            { name: "OpenCLIP", id: "openclip", url: "https://github.com/mlfoundations/open_clip", year: 2022, month: 12 },
            { name: "SigLIP: Sigmoid Loss for Language Image Pre-Training", id: "siglip", url: "https://arxiv.org/abs/2303.15343", year: 2023, month: 3 }
          ]
        },
        {
          name: "Image Captioning (BLIP Family)",
          id: "blip_family",
          children: [
            { name: "BLIP", id: "blip", url: "https://arxiv.org/abs/2201.12086", year: 2022, month: 1 },
            { name: "BLIP-2", id: "blip2", url: "https://arxiv.org/abs/2301.12597", year: 2023, month: 1 },
            { name: "InstructBLIP", id: "instructblip", url: "https://arxiv.org/abs/2305.06500", year: 2023, month: 5 }
          ]
        },
        {
          name: "General Multimodal LLMs",
          id: "general_multimodal",
          children: [
            { name: "Flamingo", id: "flamingo", url: "https://arxiv.org/abs/2204.14198", year: 2022, month: 4 },
            { name: "Kosmos-1", id: "kosmos1", url: "https://arxiv.org/abs/2302.14045", year: 2023, month: 2 },
            { name: "LLaVA", id: "llava", url: "https://arxiv.org/abs/2304.08485", year: 2023, month: 4 },
            { name: "MiniGPT-4", id: "minigpt4", url: "https://arxiv.org/abs/2304.10592", year: 2023, month: 4 },
            { name: "Kosmos-2", id: "kosmos2", url: "https://arxiv.org/abs/2306.14824", year: 2023, month: 6 },
            { name: "Qwen-VL", id: "qwen_vl", url: "https://arxiv.org/abs/2308.12966", year: 2023, month: 8 },
            { name: "LLaVA-1.5", id: "llava15", url: "https://arxiv.org/abs/2310.03744", year: 2023, month: 10 },
            { name: "InternVL", id: "internvl", url: "https://arxiv.org/abs/2312.14238", year: 2023, month: 12 },
            { name: "LLaVA-NeXT", id: "llava_next", url: "https://llava-vl.github.io/blog/2024-01-30-llava-next/", year: 2024, month: 1 },
            { name: "Phi-3-Vision", id: "phi3_vision", url: "https://arxiv.org/abs/2404.14219", year: 2024, month: 4 },
            { name: "InternVL2", id: "internvl2", url: "https://arxiv.org/abs/2407.21783", year: 2024, month: 7 },
            { name: "Qwen2-VL", id: "qwen2_vl", url: "https://arxiv.org/abs/2409.12191", year: 2024, month: 9 },
            { name: "Molmo and PixMo", id: "molmo", url: "https://arxiv.org/abs/2409.17146", year: 2024, month: 9 },
            { name: "Qwen2.5-VL", id: "qwen25_vl", url: "https://arxiv.org/abs/2502.13923", year: 2025, month: 2 },
            { name: "InternVL3", id: "internvl3", url: "https://arxiv.org/abs/2504.10479", year: 2025, month: 4 },
            { name: "Pixtral Large", id: "pixtral", url: "https://mistral.ai/", year: 2025 },
            { name: "MiniCPM-V 3.0", id: "minicpm_v3", url: "https://arxiv.org/abs/2408.01800", year: 2025 },
            { name: "Qwen3.5-Omni: Fully Omnimodal", id: "qwen35_omni", url: "https://arxiv.org/abs/2604.15804", year: 2026, month: 4 },
            { name: "InternVL3.5", id: "internvl35", url: "https://arxiv.org/abs/2508.18265", year: 2026 }
          ]
        },
        {
          name: "Gemini / PaLI",
          id: "gemini_pali",
          children: [
            { name: "PaLI: Multilingual Language-Image Model", id: "pali", url: "https://arxiv.org/abs/2209.06794", year: 2022, month: 9 },
            { name: "Gemini: Highly Capable Multimodal Models", id: "gemini", url: "https://arxiv.org/abs/2312.11805", year: 2023, month: 12 },
            { name: "Gemini 1.5: Millions of Tokens of Context", id: "gemini15", url: "https://arxiv.org/abs/2403.05530", year: 2024, month: 3 },
            { name: "Gemini 2.5: Reasoning & Agentic", id: "gemini25", url: "https://arxiv.org/abs/2507.06261", year: 2025, month: 7 }
          ]
        },
        {
          name: "GPT-4V / GPT-4o",
          id: "gpt4v_4o",
          children: [
            { name: "GPT-4V(ision) System Card", id: "gpt4v", url: "https://openai.com/research/gpt-4v-system-card", year: 2023, month: 9 },
            { name: "GPT-4o System Card", id: "gpt4o_mm", url: "https://openai.com/index/gpt-4o-system-card/", year: 2024, month: 8 }
          ]
        },
        {
          name: "Video Understanding",
          id: "video_understanding",
          children: [
            { name: "Video Swin Transformer", id: "video_swin", url: "https://arxiv.org/abs/2106.13230", year: 2021, month: 6 },
            { name: "VideoMAE", id: "videomae", url: "https://arxiv.org/abs/2203.12602", year: 2022, month: 3 },
            { name: "InternVideo", id: "internvideo", url: "https://arxiv.org/abs/2212.03191", year: 2022, month: 12 }
          ]
        },
        {
          name: "Audio",
          id: "audio",
          children: [
            { name: "AudioLM", id: "audiolm", url: "https://arxiv.org/abs/2209.03143", year: 2022, month: 9 },
            { name: "Whisper: Robust Speech Recognition", id: "whisper", url: "https://arxiv.org/abs/2212.04356", year: 2022, month: 12 },
            { name: "MusicGen", id: "musicgen", url: "https://arxiv.org/abs/2306.05284", year: 2023, month: 6 }
          ]
        },
        {
          name: "Speech",
          id: "speech",
          children: [
            { name: "SpeechT5", id: "speecht5", url: "https://arxiv.org/abs/2110.07205", year: 2021, month: 10 },
            { name: "SeamlessM4T", id: "seamlessm4t", url: "https://arxiv.org/abs/2308.11596", year: 2023, month: 8 }
          ]
        }
      ]
    },
    {
      name: "Object\nDetection",
      id: "11_detection",
      children: [
        {
          name: "DETR Family",
          id: "detr_family",
          children: [
            { name: "DETR: End-to-End Object Detection", id: "detr", url: "https://arxiv.org/abs/2005.12872", year: 2020, month: 5 },
            { name: "Deformable DETR", id: "deformable_detr", url: "https://arxiv.org/abs/2010.04159", year: 2020, month: 10 },
            { name: "Conditional DETR", id: "conditional_detr", url: "https://arxiv.org/abs/2108.06152", year: 2021, month: 8 },
            { name: "Anchor DETR", id: "anchor_detr", url: "https://arxiv.org/abs/2109.07107", year: 2021, month: 9 },
            { name: "DAB-DETR: Dynamic Anchor Boxes", id: "dab_detr", url: "https://arxiv.org/abs/2201.12329", year: 2022, month: 1 },
            { name: "DN-DETR: Query DeNoising", id: "dn_detr", url: "https://arxiv.org/abs/2203.01305", year: 2022, month: 3 },
            { name: "Co-DETR: Collaborative Hybrid Assignments", id: "co_detr", url: "https://arxiv.org/abs/2211.12860", year: 2022, month: 11 }
          ]
        },
        {
          name: "DINO Family",
          id: "dino_family",
          children: [
            { name: "DINO: Improved DeNoising Anchor Boxes", id: "dino_det", url: "https://arxiv.org/abs/2203.03605", year: 2022, month: 3 },
            { name: "Grounding DINO", id: "grounding_dino", url: "https://arxiv.org/abs/2303.05499", year: 2023, month: 3 },
            { name: "Grounding DINO 1.5", id: "grounding_dino15", url: "https://arxiv.org/abs/2405.10300", year: 2024, month: 5 }
          ]
        },
        {
          name: "Real-Time (RT-DETR)",
          id: "rt_detr_family",
          children: [
            { name: "RT-DETR: DETRs Beat YOLOs", id: "rt_detr", url: "https://arxiv.org/abs/2304.08069", year: 2023, month: 4 },
            { name: "RT-DETRv2", id: "rt_detrv2", url: "https://arxiv.org/abs/2407.17140", year: 2024, month: 7 }
          ]
        },
        {
          name: "Open-Vocabulary Detection",
          id: "open_vocab_det",
          children: [
            { name: "OWL-ViT", id: "owl_vit", url: "https://arxiv.org/abs/2205.06230", year: 2022, month: 5 },
            { name: "YOLO-World", id: "yolo_world", url: "https://arxiv.org/abs/2401.17270", year: 2024, month: 1 }
          ]
        }
      ]
    },
    {
      name: "Diffusion\nTransformers",
      id: "12_diffusion",
      children: [
        {
          name: "Vision (Image Generation)",
          id: "diff_vision",
          children: [
            { name: "DALL-E 2 (Hierarchical CLIP Latents)", id: "dalle2", url: "https://arxiv.org/abs/2204.06125", year: 2022, month: 4 },
            { name: "Imagen: Photorealistic Text-to-Image", id: "imagen", url: "https://arxiv.org/abs/2205.11487", year: 2022, month: 5 },
            { name: "DiT: Scalable Diffusion Models with Transformers", id: "dit", url: "https://arxiv.org/abs/2212.09748", year: 2022, month: 12 },
            { name: "SDXL: Improving Latent Diffusion", id: "sdxl", url: "https://arxiv.org/abs/2307.01952", year: 2023, month: 7 },
            { name: "DALL-E 3: Better Captions", id: "dalle3", url: "https://cdn.openai.com/papers/dall-e-3.pdf", year: 2023, month: 9 },
            { name: "PixArt-\u03b1: Fast Training of Diffusion Transformer", id: "pixart_alpha", url: "https://arxiv.org/abs/2310.00426", year: 2023, month: 9 },
            { name: "PixArt-\u03a3: Weak-to-Strong Training", id: "pixart_sigma", url: "https://arxiv.org/abs/2403.02774", year: 2024, month: 3 },
            { name: "SD3 / Flux (Rectified Flow Transformers)", id: "sd3_flux", url: "https://arxiv.org/abs/2403.03206", year: 2024, month: 3 },
            { name: "FLUX.1: Flow Matching Image Generation", id: "flux1", url: "https://blackforestlabs.ai/flux-1/", year: 2024, month: 8 }
          ]
        },
        {
          name: "Video Generation",
          id: "diff_video",
          children: [
            { name: "CogVideo: Text-to-Video Generation", id: "cogvideo", url: "https://arxiv.org/abs/2205.15868", year: 2022, month: 5 },
            { name: "Sora: Video Generation Models as World Simulators", id: "sora", url: "https://openai.com/research/video-generation-models-as-world-simulators", year: 2024, month: 2 },
            { name: "Open-Sora: Democratizing Video Production", id: "open_sora", url: "https://github.com/hpcaitech/Open-Sora", year: 2024, month: 3 },
            { name: "Kling: High-Quality AI Video", id: "kling", url: "https://kling.kuaishou.com/", year: 2024 },
            { name: "HunyuanVideo", id: "hunyuanvideo", url: "https://arxiv.org/abs/2412.03603", year: 2024, month: 12 }
          ]
        },
        {
          name: "Multimodal Generation",
          id: "diff_multimodal",
          children: [
            { name: "Emu: Generative Pretraining in Multimodality", id: "emu", url: "https://arxiv.org/abs/2307.05222", year: 2023, month: 7 },
            { name: "Genie: Generative Interactive Environments", id: "genie", url: "https://arxiv.org/abs/2402.15391", year: 2024, month: 2 }
          ]
        },
        {
          name: "3D Generation",
          id: "diff_3d",
          children: [
            { name: "Point-E: 3D Point Clouds from Prompts", id: "pointe", url: "https://arxiv.org/abs/2212.08751", year: 2022, month: 12 },
            { name: "Shap-E: Conditional 3D Implicit Functions", id: "shape", url: "https://arxiv.org/abs/2305.02463", year: 2023, month: 5 }
          ]
        },
        {
          name: "Audio Generation",
          id: "diff_audio",
          children: [
            { name: "Stable Audio: Timing-Conditioned Latent Diffusion", id: "stable_audio", url: "https://arxiv.org/abs/2402.04825", year: 2024, month: 2 }
          ]
        }
      ]
    },
    {
      name: "Decoding",
      id: "13_decoding",
      children: [
        {
          name: "Greedy Search",
          id: "greedy_search",
          children: [
            { name: "Attention Is All You Need", id: "greedy_aiayn", url: "https://arxiv.org/abs/1706.03762", year: 2017, month: 6 },
            { name: "The Curious Case of Neural Text Degeneration", id: "text_degen", url: "https://arxiv.org/abs/1904.09751", year: 2019, month: 9 }
          ]
        },
        {
          name: "Beam Search",
          id: "beam_search",
          children: [
            { name: "Sequence to Sequence Learning with Neural Networks", id: "seq2seq", url: "https://arxiv.org/abs/1409.3215", year: 2014, month: 9 },
            { name: "Google NMT: Beam Search", id: "gnmt_beam", url: "https://arxiv.org/abs/1609.08144", year: 2016, month: 9 },
            { name: "Diverse Beam Search", id: "diverse_beam", url: "https://arxiv.org/abs/1611.08562", year: 2016, month: 11 }
          ]
        },
        {
          name: "Sampling",
          id: "dec_sampling",
          children: [
            {
              name: "Truncation",
              id: "dec_truncation",
              children: [
                { name: "Top-K Sampling (Hierarchical Story Generation)", id: "top_k", url: "https://arxiv.org/abs/1805.04833", year: 2018, month: 5 },
                { name: "Top-P / Nucleus Sampling", id: "top_p", url: "https://arxiv.org/abs/1904.09751", year: 2019, month: 9 },
                { name: "Typical Decoding", id: "typical", url: "https://arxiv.org/abs/2202.00666", year: 2022, month: 2 },
                { name: "Eta Sampling (Truncation Sampling)", id: "eta_sampling", url: "https://arxiv.org/abs/2210.15191", year: 2022, month: 10 },
                { name: "Min-p Sampling (ICLR'25)", id: "min_p", url: "https://arxiv.org/abs/2407.01082", year: 2024, month: 7 }
              ]
            },
            { name: "Temperature Scaling", id: "temperature", url: "https://arxiv.org/abs/1503.02531", year: 2015, month: 3 },
            { name: "Mirostat: Perplexity-Controlled Decoding", id: "mirostat", url: "https://arxiv.org/abs/2007.14966", year: 2020, month: 7 },
            { name: "Contrastive Search", id: "contrastive_search", url: "https://arxiv.org/abs/2202.06417", year: 2022, month: 2 },
            { name: "Contrastive Decoding", id: "contrastive_dec", url: "https://arxiv.org/abs/2210.15097", year: 2022, month: 10 }
          ]
        },
        {
          name: "Parallel\nDecoding",
          id: "parallel_decoding",
          children: [
            {
              name: "Speculative (Draft-Verify)",
              id: "dec_speculative",
              children: [
                { name: "Speculative Decoding", id: "dec_spec_decode", url: "https://arxiv.org/abs/2211.17192", year: 2022, month: 11 },
                { name: "Speculative Sampling", id: "dec_spec_sampling", url: "https://arxiv.org/abs/2302.01318", year: 2023, month: 2 },
                { name: "SpecInfer: Tree-based Speculative Inference", id: "specinfer", url: "https://arxiv.org/abs/2305.09781", year: 2023, month: 5 },
                { name: "Medusa: Multiple Decoding Heads", id: "medusa", url: "https://arxiv.org/abs/2401.10774", year: 2024, month: 1 },
                { name: "EAGLE: Feature-Level Speculation", id: "eagle", url: "https://arxiv.org/abs/2401.15077", year: 2024, month: 1 },
                { name: "Hydra: Sequentially-Dependent Draft Heads", id: "hydra", url: "https://arxiv.org/abs/2402.05109", year: 2024, month: 2 },
                { name: "Sequoia: Hardware-Aware Tree Decoding", id: "sequoia", url: "https://arxiv.org/abs/2402.12374", year: 2024, month: 2 },
                { name: "EAGLE-2: Dynamic Draft Trees", id: "eagle2", url: "https://arxiv.org/abs/2406.16858", year: 2024, month: 6 },
                { name: "EAGLE-3: Training-Time Test (NeurIPS'25)", id: "dec_eagle3", url: "https://arxiv.org/abs/2503.01840", year: 2025, month: 3 },
                { name: "SpecForge: Training Framework", id: "dec_specforge", url: "https://arxiv.org/abs/2603.18567", year: 2025 }
              ]
            },
            {
              name: "Multi-Token Generation",
              id: "dec_multi_token_family",
              children: [
                { name: "Blockwise Parallel Decoding", id: "blockwise", url: "https://arxiv.org/abs/1811.03115", year: 2018, month: 11 },
                { name: "Multi-token Prediction (ICML'24)", id: "dec_multi_token", url: "https://arxiv.org/abs/2404.19737", year: 2024, month: 4 }
              ]
            },
            { name: "Lookahead Decoding (Jacobi Iteration)", id: "lookahead", url: "https://arxiv.org/abs/2402.02057", year: 2023, month: 11 },
            { name: "Tree Decoding", id: "tree_decoding", url: "https://arxiv.org/abs/2305.09781", year: 2023, month: 5 },
            {
              name: "DeepSeek",
              id: "dec_deepseek",
              children: [
                { name: "DFlash: Block Diffusion Drafting (6x speedup)", id: "dec_dflash", url: "https://arxiv.org/abs/2602.06036", year: 2026, month: 2 },
                { name: "DSpark: Semi-AR Decoding", id: "dec_dspark", url: "https://github.com/deepseek-ai/DeepSpec", year: 2026 }
              ]
            }
          ]
        },
        {
          name: "Constrained\nDecoding",
          id: "constrained_decoding",
          children: [
            { name: "NeuroLogic Decoding: Predicate Logic Constraints", id: "neurologic", url: "https://arxiv.org/abs/2010.12884", year: 2021 },
            { name: "NeuroLogic A*esque: Lookahead Heuristics", id: "neurologic_astar", url: "https://arxiv.org/abs/2112.08726", year: 2022 },
            { name: "Grammar-Constrained Decoding", id: "grammar_constrained", url: "https://arxiv.org/abs/2305.13971", year: 2023, month: 5 },
            { name: "Outlines: Structured Text Generation", id: "outlines", url: "https://github.com/outlines-dev/outlines", year: 2023 }
          ]
        }
      ]
    }
  ]
};
