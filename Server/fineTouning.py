import csv
import openai
import os
import tiktoken
import json
import numpy as np
from flask import Flask, render_template, send_from_directory, request, jsonify
from flask_cors import CORS
from collections import defaultdict

app = Flask(__name__)
CORS(app, resources={r"/user_input": {"origins": ""}, r"/chat_history": {"origins": ""}})

openai.api_key = "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"

with open('finetunes_prepared.jsonl','rb') as f:
    train_full_response_file = openai.File.create(
        file=f,
        purpose='fine-tune'
    )


print(f'id: {train_full_response_file.id}')

response = open.FineTuningJob.create()

