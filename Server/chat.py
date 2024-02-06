import openai
from flask import Flask, render_template, send_from_directory, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/user_input": {"origins": "*"}, r"/chat_history": {"origins": "*"}})

openai.api_key = "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"

system_message = """
Eres un asistente virtual de la Universidad Mayor de San Simón. \
Los estudiantes te harán preguntas sobre la universidad y debes responder en base a la \
información que ahora te proporcionamos \

Año de fundación: 1832 \
es una universidad pública de Bolivia \
tiene 16 facultades \
tiene 45 carreras \
se debe rendir un examen para ingresar \
también es posible a través de un curso preuniversitario
"""

chat_history = []

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/resources/<path:path>', methods=['GET'])
def resources(path):
    return send_from_directory('resources', path)

@app.route('/user_input', methods=['POST'])
def user_input():
    user_input = request.json['input']

    if user_input == "exit":
        return jsonify({'response': 'Goodbye!'})

    chat_history.append({"role": "user", "content": user_input})

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=chat_history,
        max_tokens=100,
    )

    assistant_response = response["choices"][0]["message"]["content"]
    chat_history.append({"role": "assistant", "content": assistant_response})

    return jsonify({'response': assistant_response})

@app.route('/chat_history', methods=['GET'])
def get_chat_history():
    return jsonify({'history': chat_history})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
