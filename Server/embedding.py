import gradio as gr
import openai
import pandas as pd 

from openai.embeddings_utils import get_embedding
from openai.embeddings_utils import cosine_similarity

openai.api_key = "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"

palabras = ["casa", "perro", "gato", "lobo", "leon", "zebra", "tigre"]

diccionario = {}
for i in palabras:
    diccionario[i] = get_embedding(i, engine="text-embedding-ada-002")


diccionario.keys()

palabra = "gato"
print("Primeros 10 valores de {}:\n".format(palabra), diccionario[palabra][:10])
print("\n")
print("Número de dimensiones del dato embebido\n", len(diccionario[palabra]))

n_palabra = "agujero negro" # Palabra nueva a comparar
palabra_comparar = "perro" # Palabra del diccionario con la que compararemos la nueva palabra
n_palabra_embed = get_embedding(n_palabra, engine="text-embedding-ada-002")
similitud = cosine_similarity(diccionario[palabra_comparar], n_palabra_embed)
print(similitud)

# Suma dos listas usando pandas
sumados = (pd.DataFrame(diccionario["leon"])) + (pd.DataFrame(diccionario["zebra"]))
len(sumados)

for key, value in diccionario.items():
    print(key, ":", cosine_similarity(diccionario[key], sumados))



def embed_text(path="texto.csv"):
    conocimiento_df = pd.read_csv(path)
    conocimiento_df['Embedding'] = conocimiento_df['texto'].apply(lambda x: get_embedding(x, engine='text-embedding-ada-002'))
    conocimiento_df.to_csv('embeddings.csv')
    return conocimiento_df

def buscar(busqueda, datos, n_resultados=5):
    busqueda_embed = get_embedding(busqueda, engine="text-embedding-ada-002")
    datos["Similitud"] = datos['Embedding'].apply(lambda x: cosine_similarity(x, busqueda_embed))
    datos = datos.sort_values("Similitud", ascending=False)
    return datos.iloc[:n_resultados][["texto", "Similitud", "Embedding"]]

texto_emb = embed_text("./chatbot_qa.csv")

with gr.Blocks() as demo:
    busqueda = gr.Textbox(label="Buscar")
    output = gr.DataFrame(headers=['texto'])
    greet_btn = gr.Button("Preguntar")
    greet_btn.click(fn=buscar, inputs=[busqueda, gr.DataFrame(texto_emb)], outputs=output)

demo.launch()