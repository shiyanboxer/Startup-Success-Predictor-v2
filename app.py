import flask
from flask import Flask, jsonify, request
import pickle
import json
import numpy as np
from flask_cors import CORS

# cd C:\Users\shiya\Documents\Startup-Success-Predictor-v2\API
# conda activate flask_env
# python wsgi.py
# curl -X GET http://127.0.0.1:5000/predict


app = Flask(__name__)
cors = CORS(app)
def load_models():
    file_name = "models/model_file.p"
    with open(file_name, 'rb') as pickled:
        data = pickle.load(pickled)
        model = data['model']
    return model


@app.route('/predict', methods=['POST'])
def predict():
    
    model = load_models()
    data = json.loads(request.data)

    total_funding = float(data['total_funding'])
    founded_year = float(data['founded_year'])
    x_test = np.array([total_funding, founded_year])
    prediction = model.predict(x_test.reshape(1,-1))
    response = json.dumps({'response': np.around(prediction[0],0)})
    
    return response, 200

if __name__ == '__main__':
    app.run(debug=True)