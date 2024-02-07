import csv
import openai
from flask import Flask, render_template, send_from_directory, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/user_input": {"origins": "*"}, r"/chat_history": {"origins": "*"}})

openai.api_key = "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"

system_message = f"""
Eres un asistente virtual del departamento de Cochabamba \
Los estudiantes te harán preguntas sobre carreras y universidades y debes responder en base a la \
informacion que ahora te proporcionamos \

tiene aproximadamente 39 carreras \
tiene 16 univerisidades\
Una univerisidad es publica y es la Univeridad San Simon (UMSS)\
tiene carreras como:  \
Pública: UMSS (Universidad Maypr de San Simón)\
Privadas: EMI (Escuela militar de ingeniería), USIP (Universidad Simón I. Patiño), Unicen, UPB (Universidad Privada Boliviana), UCB (Universidad Catolica Boliviana), UCATEC (Univ. Pv. de Cs. Administrativas y Tecnológicas), UPDS (Universidad Privada Domingo Savio), UDABOL (Universidad de Aquino de Bolivia), UNIVALLE (Universidad Privada del Valle), UNIFRANZ (Universidad Franz Tamayo), UNITEPC (Universidad Técnica Pv. Cosmos), ULAT (Universidad Latinoamericana), Universidad Salesiana, UPAL (Universidad Privada Abierta Latinoamericana)\
Normal: ESFM (Escuela cuperior de formación de maestros)\
Institutos publicas: Instituto Tecnológico Sayarinapaj, Instituto Tecnológico Ivan Canelas, Instituto tecnológico Maria Cristina, Instituto tecnológico Padre Antonio Berta, Instituto tecnológico Nuestra señora del Pilar, Instituto Tecnico nacional de comercio "Alvarez Plata" Nocturno, Instituto Tecnico nacional de comercio "Alvarez Plata" Diurno, Insituto técnico nacional de comercio, Instituto técnico superior de comercio y administración ESAE, Instituto tecnológico boliviano canadiense El Paso, Insituto Técnico Sacaba, Instituto tecnológico "Amor misericordioso" CETAM, Instituto tecnológico industrial comercial Puerto Mejillones, Instituto Tecnológico Agropecuario Industrial Tarata - ITAIT, Escuela Técnica de Saluud Boliviano Japonesa de Cooperación Andina\
Institutos Privadas: Intituto Profesional San Ignacio, Instituto técnico ITSAL, Instituto Tecnologico Mundial, Instituto Técnico Nacional Ándres Bello, Instituto Técnico Britanico Mercantil (IBM), Instituto Técnico Ignacia Zeballos, Instituto Tecnologíco del Sur, INFOCAL\
se debe rendir un examen para ingresar \
tambien es posible a través de un curso preuniversitario
"""

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/resources/<path:path>', methods=['GET'])
def resources(path):
    return send_from_directory('resources', path)

@app.route('/user_input', methods=['POST'])
def user_input():
    user_input = request.json['input']

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages = [
            {"role": "system", "content": system_message},
            {"role": "user", "content": user_input}
        ],
        max_tokens=100,
    )

    return jsonify({'response': response['choices'][0]['message']['content']})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)