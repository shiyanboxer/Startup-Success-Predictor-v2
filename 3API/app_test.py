from app import app
import flask.app as app
import pytest
import unittest
import json
from flask import Flask, jsonify
import requests

# https://docs.python.org/3/library/unittest.html
# https://www.youtube.com/watch?v=iQVvpnRYl-w
# class TestCase(unittest.TestCase):

API_URL_HELLO = "http://127.0.0.1:5000/"
API_URL_PREDICT = "http://127.0.0.1:5000/predict"
class TestCase(unittest.TestCase):
    # status code - 200 (ok)
    def test_hello_status(self):
        response = requests.get(API_URL_HELLO)
        self.assertEqual(response.status_code, 200)
        
    # status code - 405 (method not allowed) without parameters
    def test_predict_status(self):
        response = requests.get(API_URL_PREDICT)
        self.assertEqual(response.status_code, 405)
    
    # status code - 200 (ok) with parameters
    # def test_predict_status200(self):
    #     parameter = {"total_funding": 100, "founded_year": 100}
    #     response = requests.get(API_URL_PREDICT) + parameter
    #     self.assertEqual(response.status_code, 200)
    
    # # read contents - type = (requests.models.Response)
    # def test_hello_readcontent(self):
    #     response = requests.get(API_URL_HELLO)
    #     self.assertEqual(response.headers["Content-Type"], "application/json")

    # # read contents - type = (requests.models.Response)
    # def test_hello_readcontent(self):
    #     response = requests.get(API_URL_PREDICT)
    #     self.assertEqual(response.headers["Content-Type"], "application/json")

    # check for data returned
    # def test_read_content(self):
    #     response = requests.get(API_URL_PREDICT)
    #     self.assertTrue(b'response' in response.data)
    
    # check response is between 0-1
    # check status code if only one paramters is passed in
    

if __name__ == '__main__':
    unittest.main()