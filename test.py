# import torch
# import torchvision
# print(f"PyTorch: {torch.__version__}")
# print(f"Torchvision: {torchvision.__version__}")
# print(f"CUDA available: {torch.cuda.is_available()}")
 
from transformers import AutoTokenizer, AutoModelForCausalLM
from peft import PeftModel
print("✓ Imports successful")
