from transformers import GPT2LMHeadModel, GPT2Tokenizer

from flask import Flask, render_template, request,json
import requests

def get_answer(prompt):
    # Load pre-trained GPT-2 model and tokenizer
    model_name = 'gpt2'
    tokenizer = GPT2Tokenizer.from_pretrained(model_name)
    model = GPT2LMHeadModel.from_pretrained(model_name)

    def generate_solution(problem):
        # Tokenize the input problem
        input_ids = tokenizer.encode(problem, return_tensors='pt')

        # Generate a solution using the GPT-2 model
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
    if (prompt!=None):
        problem = "Give a solution: " + str(prompt)
        solution = generate_solution(problem)
        return solution
    return 


main = Flask(__name__)

@main.route('/', methods=['POST','GET'])
def index():
    text = request.values.get("thetext") #thetext = HTML name tag of input box
    # print("hi")
    if request.method=="GET":
        answer = get_answer(text)
        json_string = json.dumps(answer)
        
        return render_template('index.html',data=json_string)
    return render_template('index.html', data='nothing to see')
    

if __name__=='__main__':
    main.run()