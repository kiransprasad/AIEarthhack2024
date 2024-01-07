from transformers import GPT2LMHeadModel, GPT2Tokenizer

from flask import Flask, render_template, request,json, jsonify
import requests

def get_answer(prompt):
    from transformers import GPT2Tokenizer, GPT2LMHeadModel

    def generate_solution(problem):
        # Load pre-trained GPT-2 model and tokenizer inside the function
        model_name = 'gpt2'
        tokenizer = GPT2Tokenizer.from_pretrained(model_name)
        model = GPT2LMHeadModel.from_pretrained(model_name)

        # Tokenize the input problem
        input_ids = tokenizer.encode(problem, return_tensors='pt')

        # Generate a solution using the GPT-2 model
        output = model.generate(
            input_ids,
            max_length=10000,
            num_return_sequences=1,
            no_repeat_ngram_size=2,
            top_k=50,
            top_p=0.95,
            temperature=0.7,
            do_sample=True,
            pad_token_id=tokenizer.eos_token_id
        )

        # Decode the generated solution
        solution = tokenizer.decode(output[0], skip_special_tokens=True)
        return solution

    # Example usage
    if prompt is not None:
        problem = "Please provide a detailed solution to the following problem relating to circular economies and/or the environment, and discuss the scalability and feasibility of your approach " + str(prompt)
        solution = generate_solution(problem)
        return solution.replace(problem, "")
    return None


main = Flask(__name__)

@main.route('/', methods=['POST','GET'])
def index():
    if request.method=="POST":
        text = request.get_data(as_text=True)
        print(text)
        text = text.replace("\n","")
        answer = get_answer(text)
        json_string = json.dumps(answer)
        return jsonify({'problem':text, 'answer':answer})

if __name__=='__main__':
    main.run()