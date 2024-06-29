from inertia import inertia  
from openai import OpenAI
import os

from dotenv import load_dotenv
load_dotenv()



@inertia('Home/Index')
def index(request):        
        try:
            prompt = 'Please write a short story of 150 to 200 words about kid stories, The story should be converted into an array of sentences, where each sentence or clause (sentence break points) is placed in a separate element of the array. The array should be presented in a clear format.'
            # Call the OpenAI API
            client = OpenAI(
            # This is the default and can be omitted
                api_key=os.getenv('OPENAI_KEY', ''),
            )
            completion = client.chat.completions.create(
                model="gpt-4o",
                messages=[
                #     {"role": "system", "content": "You are a helpful assistant."},
                    {"role": "user", "content": prompt},
                ]
            )

             # Get the text from the response
            generated_text = completion.choices[0].message.content

            # Extract the array from the response
            array_start = generated_text.find('[')
            array_end = generated_text.find(']') + 1
            story_array = generated_text[array_start:array_end]

            # Extract the full story by removing array formatting and joining sentences
            story_elements = eval(story_array)  # Convert string representation of array to actual array
            full_story = ' '.join(story_elements)

            return {
               'arrayStory': story_array,
               'fullStory': full_story,
            }

        except Exception as e:
            # Handle API errors
            return {
                   'error':  str(e)
            }
    