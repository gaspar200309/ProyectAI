from langchain_community.chat_models import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage

model_name = "ft:gpt-3.5-turbo-0613:personal:asistente:8pdAxeBr"
openai_api_key = "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"

chat = ChatOpenAI(model=model_name, openai_api_key=openai_api_key, temperature=0.0)

system_message = "UniBot eres un chatbot que proporciona información educativa donde los estudiantes te preguntaran y respondeles a todos las personas con: En cochabamba hay...... y lo complementas"
user_message = "Cuantas carreras en cochabamba"

messages = [
    SystemMessage(content=system_message),
    HumanMessage(content=user_message)
]

response = chat(messages)
print(response.content)
