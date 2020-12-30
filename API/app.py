import flask
from flask import Flask, jsonify, request
import json

app = Flask(__name__)
@app.route('/predict', methods=['GET'])
def predict():
    response = json.dumps({'response': 'hi there'})
    return response, 200

if __name__ == '__main__':
    application.run(debug=True)