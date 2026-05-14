import torch
from transformers import AutoTokenizer, AutoModelForCausalLM
from peft import PeftModel

BASE = "FreedomIntelligence/Apollo-2B"
ADAPTER = "./model"

tok = AutoTokenizer.from_pretrained(BASE)
if tok.pad_token is None:
    tok.pad_token = tok.eos_token

# Load base model WITHOUT device_map (pure CPU)
base = AutoModelForCausalLM.from_pretrained(
    BASE,
    dtype=torch.float32,              # use 'dtype' instead of deprecated 'torch_dtype'
    trust_remote_code=True,
    low_cpu_mem_usage=True,
)

model = PeftModel.from_pretrained(base, ADAPTER).eval()

prompt = "Question: What is the capital of France?\nAnswer:"
inputs = tok(prompt, return_tensors="pt", truncation=True, max_length=512)

with torch.no_grad():
    out = model.generate(
        **inputs,
        max_new_tokens=128,
        temperature=0.7,
        top_p=0.9,
        do_sample=True,
        pad_token_id=tok.pad_token_id,
        eos_token_id=tok.eos_token_id,
    )

text = tok.decode(out[0], skip_special_tokens=True)
print(text.split("Answer:")[-1].strip())
