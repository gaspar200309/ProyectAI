import gradio as gr

def chat_with_model(user_message):
    # Importa y configura tu modelo de chat aquí
    from langchain_community.chat_models import ChatOpenAI
    from langchain.schema import HumanMessage, SystemMessage
    
    model_name = "ft:gpt-3.5-turbo-0613:personal:asistente:8pdAxeBr"
    openai_api_key = "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"
    
    chat = ChatOpenAI(model=model_name, openai_api_key=openai_api_key, temperature=0.0)
    
    system_message = "UniBot es un chatbot que proporciona información educativa. Responderá preguntas relacionadas únicamente con estudios académicos, carreras universitarias, instituciones educativas en Cochabamba. Por favor, evita preguntar sobre temas no relacionados, como cocina, alimentos, deportes, personas y otros temas fuera del ámbito educativo. ¡Gracias por tu comprensión!"
    
    user_message = HumanMessage(content=user_message)
    
    messages = [SystemMessage(content=system_message), user_message]
    response = chat(messages)
    
    return response.content

iface = gr.Interface(
    fn=chat_with_model,
    inputs="text",
    outputs="text",
    title="Chat con UniBot",
)
iface.launch()
