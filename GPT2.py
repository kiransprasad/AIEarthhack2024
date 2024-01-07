from transformers import GPT2LMHeadModel, GPT2Tokenizer

# Load pre-trained GPT-2 model and tokenizer
model_name = 'gpt2'
tokenizer = GPT2Tokenizer.from_pretrained(model_name)
model = GPT2LMHeadModel.from_pretrained(model_name)

def generate_solution(problem):
    # Tokenize the input problem
    input_ids = tokenizer.encode(problem, return_tensors='pt')

    # Generate a solution using the GPT-2 model
    output = model.generate(input_ids, max_length=10000, num_return_sequences=1, no_repeat_ngram_size=2, top_k=50, top_p=0.95, temperature=0.7)

    # Decode the generated solution
    solution = tokenizer.decode(output[0], skip_special_tokens=True)
    return solution

# Example usage
problem = "Give a solution to the following problem: " + arg.variable
solution = generate_solution(problem)
print(solution)