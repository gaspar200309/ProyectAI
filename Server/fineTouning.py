import openai
import os

openai.api_key = "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"

dir_path = os.path.dirname(os.path.realpath(__file__))
file_path = os.path.join(dir_path, 'finetunes_prepared.jsonl')

with open(file_path, 'rb') as f:
    train_full_response_file = openai.File.create(
        file=f,
        purpose='fine-tune'
    )

print(f'id: {train_full_response_file.id}')


response = openai.FineTuningJob.create(training_file=train_full_response_file.id,
                                       model="gpt-3.5-turbo",
                                       suffix='Asistente ',
                                       hyperparameters={'n_epochs':4})
print(response)

openai.FineTuningJob.retrieve(response.id)

response = openai.FineTuningJob.list_events(id=response.id)

events = response["data"]
events.reverse()

for event in events:
    print(event["message"])
    
