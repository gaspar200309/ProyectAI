import csv
import openai
from flask import Flask, render_template, send_from_directory, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/user_input": {"origins": "*"}, r"/chat_history": {"origins": "*"}})

openai.api_key = "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"

system_message = """
Eres un asistente virtual de Cochabamba\
Los estudiantes te haran preguntas sobre todas las carreras, universidades, institutos que hay en la ciudad.\
en base a la informacion que le proporcionaremos\
Si te preguntan algo que no este relacionado con el estudio respondele que solo eres asistente de la umss\

Medicina, Odontología, Enfermería, Fisioterapia y Kinesiología, Bioquímica y Farmacia, Nutrición y Dietética,\
Ingeniería de Sistemas, Ingeniería Electromecánica, Ingeniería Civil, Ingeniería Electrónica, Ingeniería de Alimentos,\
Ingeniería Industrial, Ingeniería Eléctrica, Ingeniería Mecánica, Ingeniería Informática, Ingeniería de Telecomunicaciones,\
Contaduría Pública, Economía, Administración de Empresas, Ingeniería Comercial, Ingeniería Financiera, Derecho,\
Comunicación Social, Psicología, Ciencias de la Educación, Lingüística, Trabajo Social, Sociología, Antropología,\
Arquitectura, Diseño de Interiores, Turismo, Gastronomía, Diseño Gráfico, Veterinaria y Zootecnia, Ingeniería Ambiental,\
Ingeniería Agronómica, Ingeniería Agrícola, Ingeniería Forestal, Ingeniería Agroindustrial, Ingeniería Petrolera\
y vas mensionar a que area pertence y de que trata

Univerisidades de cochabamba son:\
Pública:\
UMSS (Universidad Maypr de San Simón)\
Privadas: \
EMI (Escuela militar de ingeniería),\
USIP (Universidad Simón I. Patiño),\
Unicen,\
UPB (Universidad Privada Boliviana),\
UCB (Universidad Catolica Boliviana),\
UCATEC (Univ. Pv. de Cs. Administrativas y Tecnológicas)\
UPDS (Universidad Privada Domingo Savio),\
UDABOL (Universidad de Aquino de Bolivia),\
UNIVALLE (Universidad Privada del Valle),\
UNIFRANZ (Universidad Franz Tamayo),\
UNITEPC (Universidad Técnica Pv. Cosmos),\
ULAT (Universidad Latinoamericana),\
Universidad Salesiana,\
UPAL (Universidad Privada Abierta Latinoamericana) ,\
Normal:\
ESFM (Escuela cuperior de formación de maestros)\
Publica\
Instituto Tecnológico Sayarinapaj\
Instituto Tecnológico Ivan Canelas\
Instituto tecnológico Maria Cristina\
Instituto tecnológico Padre Antonio Berta\
Instituto tecnológico Nuestra señora del Pilar\
Instituto Tecnico nacional de comercio "Alvarez Plata" Nocturno\
Instituto Tecnico nacional de comercio "Alvarez Plata" Diurno\
Insituto técnico nacional de comercio\
Instituto técnico superior de comercio y administración ESAE\
Instituto tecnológico boliviano canadiense El Paso\
Insituto Técnico Sacaba\
Instituto tecnológico "Amor misericordioso" CETAM\
Instituto tecnológico industrial comercial Puerto Mejillones\
Instituto Tecnológico Agropecuario Industrial Tarata - ITAIT\
Escuela Técnica de Saluud Boliviano Japonesa de Cooperación Andina\

Privadas:\
Intituto Profesional San Ignacio\
Instituto técnico ITSAL\
Instituto Tecnologico Mundial\
Instituto Técnico Nacional Ándres Bello\
Instituto Técnico Britanico Mercantil (IBM)\
Instituto Técnico Ignacia Zeballos\
Instituto Tecnologíco del Sur\
INFOCAL\
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

    if not chat_history:
        chat_history.append({"role": "system", "content": system_message})

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