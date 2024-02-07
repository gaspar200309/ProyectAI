import gradio as gr
import openai
import os
import csv
import pandas as pd 

from openai.embeddings_utils import get_embedding
from openai.embeddings_utils import cosine_similarity

openai.api_key = "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"

def embed_text(path="texto.csv"):
    conocimiento_df = pd.read_csv(path, encoding='latin1')
    conocimiento_df['Embedding'] = conocimiento_df['texto'].apply(lambda x: get_embedding(x, engine='text-embedding-ada-002'))
    conocimiento_df.to_csv('embeddings.csv')
    return conocimiento_df

def buscar(busqueda, datos, n_resultados=5):
    busqueda_embed = get_embedding(busqueda, engine="text-embedding-ada-002")
    datos["Similitud"] = datos['Embedding'].apply(lambda x: cosine_similarity(x, busqueda_embed))
    datos = datos.sort_values("Similitud", ascending=False)
    return datos.iloc[:n_resultados][["texto", "Similitud", "Embedding"]]

dir_path = os.path.dirname(os.path.realpath(__file__))
file_path = os.path.join(dir_path, 'chatbot.csv')

with open(file_path) as f:
    reader = csv.reader(f)
    texto_emb = embed_text(f)


with gr.Blocks() as demo:
    busqueda = gr.Textbox(label="Buscar")
    output = gr.DataFrame(headers=['texto'])
    greet_btn = gr.Button("Preguntar")
    greet_btn.click(fn=buscar, inputs=[busqueda, gr.DataFrame(texto_emb)], outputs=output)

demo.launch() 