import flask
from flask import Flask, jsonify, request
import pickle
import json
import sklearn as sklearn
import numpy as np
from flask_cors import CORS

# TODO: 
# - Validate request parameters before throwing it into model, and send a 404
# - Add tests cases for valid input

app = Flask(__name__)
# Cors allows use to run frontend and backend on seprate local hosts 
cors = CORS(app) 


def load_models():
    """"
    Take the pickled model file, and open and load it into a variable called "model" 
    Return: "model", an object of our model
    """
    file_name = "models/model_file.p"
    with open(file_name, 'rb') as pickled:
        data = pickle.load(pickled)
        model = data['model']
    return model


@app.route('/', methods=['GET'])
def hello():
    """
    Tester function to see if the API is working
    Return: A string saying "hello world"
    """
    return "hello world"


@app.route('/predict', methods=['POST'])
def predict():
    """
    Predict the success of a company from the user's input
    Return: "response" which is a value either 1 or 0.
    """
    model = load_models() # Get an instance of the model calling the load_models()
    data = json.loads(request.data) # Load the request from the user and store in the variable "data"

    total_funding = float(data['total_funding']) # Break down each input into seprate variables 
    founded_year = float(data['founded_year'])


    X_test = np.array([total_funding, founded_year]) # Create a X_test variable of the user's input
    prediction = model.predict(X_test.reshape(1, -1)) # Use the the  X_test to to predict the success using the  predict()
    response = json.dumps({'response': np.around(prediction[0], 0)}) # Dump the result to be sent back to the frontend

    return response


if __name__ == '__main__':
    app.run(debug=True)