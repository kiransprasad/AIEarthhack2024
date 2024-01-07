# AIEarthhack2024

# TODO:
- Create Frontend
  - Will discuss basic idea
  - React vs Angular
  - Communicating with backend
- Sort via text-based search on front-end
- Complete Submission Info
- Generate solutions given a problem
  - Uses GPT or another NLP model trained on the dataset
  - Inputs: problems
  - Solutions: answers
  - Possible Applications:
    - Using AI to generate solutions to the problem the user is looking at / has clicked on
    - Using AI to generate solutions to a problem the user enters themselves
- Generate a relevant problem/solution pairs given a user's keyword
  - Arjun is very confident in his ability to make this happen
  - I believe in him
  - Good luck


# Submission Info

What kind of algorithmic tool did you build?
- Idea Validator
- Moonshot Finder
- Idea Filter
- We Built Something Else!

> Idea Filter (TBD Discuss but this is kinda the main function)

Provide Github Repo

> https://github.com/kiransprasad/AIEarthhack2024

<span style="color: red">
Upload the walk-through demo in a format of your choice, whether that be a video, presentation, or other. (Max. 100 MB)
<br />
Please keep demo video under 5 mins and presentation deck under 10 slides.
</span>

> TBD

Pitch us your project in ONE sentence

> An app for finding the best circular economy problems and solutions measured by relevance, feasibility, innovation and scalability.

Provide a longer description, an abstract, of your project in 6-8 sentences.

> This application sorts through the problem/solution submissions from the D^3 Institute's "Creating a Sustainable Future" challenge and uses Zero-Shot Classification AI to measure their relevance, feasibility, innovation and scalability, and pertinence to circular economies. The AI filters out any results it deems irrelevant, and provides the rest to the frontend, where users can seach by keywords and sort the results by the above metrics. (TBD explain the other AI features if we get to them)

Your task for this hackathon was to "develop an algorithmic tool that features generative AI to assist in the evaluation of ideas."  How does your project augment human experiences in evaluation of innovative ideas? (Max. 150 words)

Elaborate on the ways your tool delivers value to human evaluators by either automatically screening, highlighting solutions, or working with them to make more fair, accurate, and efficient evaluations.

> The AI automatically measures each idea on multiple metrics, making it easy for human users to sort through the ideas based on topics or qualities they are interested in. The AI filters out ideas that are not well-formed or not relevant to circular economies, showing only the best ideas. The app also allows users to generate new solutions given a problem.

What is the most innovative aspect of your project? (Max. 100 words)

> The Zero-Shot Classification of different metrics for the ideas is the most innovative aspect of our project. The AI gives every idea a percentage rating for each of relevance, feasibility, innovation and scalability, and pertinence to circular economies. This was done using a classification-oriented model of Google's LLM T5, which was given prompts for or against each metric as classification categories. Using this approach, these types of metrics can be applied to any dataset or text.

Can you describe the process of training the model? Describe any data sources used as well as the rationale behind the methods used to develop your tool. (Max. 250 words)

> When we saw the database did not give any "pre-classified" results, we decided we had to make an AI that could classify these results itself, without relying on an expansive training set. We found AI transfer learning to be a clear solution to this issue. Through research, we found Zero-Shot Classification, a subset of Zero-Shot Learning in which an AI classifies data into one of several classes, without any prior training or knowledge of the classes. We took several open-source large language models and tried to have them categorize the dataset into moonshot ideas, relevant ideas (for the sake of the context), and irrelevant ideas. This approach was met with very little success, no matter how detailed the prompts for each class were. However, Google's T5 model seemed to be the best at categorizing the dataset given large, descriptive class prompts. Using this, we decided to simplify the categorization task to two categories: relevant and irrelevant. With an exhaustive description of what was considered "relevant", the AI model was able to categorize the data with a significant amount of success, enough so that we continued to refine the prompts, and add more seperate classification tasks for other metrics. All other uses of AI text generation were performed using GPT-2 in this demo, for the sake of both time and money, and were mainly included as a proof of concept.

How did you validate the accuracy and reliability of your tool? Describe any evaluation framework or metrics used to test the performance of your tool. (Max. 150 words)

> When running the AI on different metrics, we manually confirmed that outliers in each metric were being assessed correctly, and continuously fine-tuned the classification parameters until we were satisfied with the sample data we tested on. However, given the largely subjective nature of the data and metrics, these are not something that could necessarily be "confirmed" by an external tool or algorithm.

Which of the following GenAI tools did you use in creating your project?
- Closed-source model, e.g., GPT-3.5/4, OpenAI's Assistant API, Claude 2, Gemini
- Open-source model, e.g., Llama 2, Mistral 7B, MPT 7B
- GitHub Copilot
- AlphaCode
- My team did not use GenAI
- Other:

> Open-source models

If applicable, how does your tool use generative AI innovatively? Were there any unexpected outcomes or surprising findings when applying generative AI to your solution? (Max. 100 words)

> TBD

What other technologies, tools, or platforms did you use for your project, e.g., external APIs, SDKs, frontend cloud. <br />
If this question does not apply to your project, please feel free to write "NA".

> We used a Python backend and React for the frontend of our applications. We used the HuggingFace transformers library alongside TensorFlow/Pytorch in order to use both Google's T5 LLM for ZSC (Zero-Shot Classification), and OpenAI's GPT-2 LLM for the generation of solutions given a problem query.

How do you plan to implement or deploy this tool? Describe the technical and logistical requirements for your tool’s deployment.

> Since this is a React Web Application, we intend to deploy this tool as an online web app using a hosting service such as GoDaddy. Additionally, with some modifications to the frontend, this application can be translated from React to React Native, where we could release it as a mobile application on the Apple App Store and Google Play Store.

If you were to be selected as a finalist in this hackathon, what are your plans for further development or improvement before the in-person presentation on January 18th, 2024 at Microsoft Toronto?

> TBD

Would you consider allowing others to contribute to your project by making certain elements of it open-source approach?

> Hell yeah

Provide an overview of your team’s development process. How did your team approach aspects such as the division of work, and completion of major milestones?

> TBD

What challenges did you face and how they were overcome?

> TBD
