import flask
from flask import Flask, jsonify, request
import pickle
import json
import numpy as np

# cd C:\Users\shiya\Documents\Startup-Success-Predictor-v2\API
# conda activate flask_env
# python wsgi.py
# curl -X GET http://127.0.0.1:5000/predict

def load_models():
    file_name = "models/model_file.p"
    with open(file_name, 'rb') as pickled:
        data = pickle.load(pickled)
        model = data['model']
    return model

app = Flask(__name__)
@app.route('/predict', methods=['GET'])
def predict():
    # # stub input features
    # request_json = request.get_json()
    # x = request_json['input']
    # #print(x)
    # x_in = np.array(x).reshape(1,-1)
    # # load model
    # model = load_models()
    # # prediction = model.predict(x_in)[0]
    # response = json.dumps({'response': prediction})

    response = json.dumps({'response': "hi"})
    return response, 200

if __name__ == '__main__':
    application.run(debug=True)