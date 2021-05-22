import requests
from app import app
import flask.app as app
import unittest
from flask import Flask

# https://docs.python.org/3/library/unittest.html
# https://www.youtube.com/watch?v=iQVvpnRYl-w
# https://www.geeksforgeeks.org/get-post-requests-using-python/
# https://www.ontestautomation.com/writing-tests-for-restful-apis-in-python-using-requests-part-1-basic-tests/

API_URL_HELLO = "http://127.0.0.1:5000/"
API_URL_PREDICT = "http://127.0.0.1:5000/predict"
class TestCase(unittest.TestCase):
    # HELLO - status code - 200 (ok)
    def test_hello_status(self):
        response = requests.get(API_URL_HELLO)
        self.assertEqual(response.status_code, 200)
    
    # HELLO - checking request url
    def test_url(self):
        response = requests.get(API_URL_HELLO)
        self.assertEqual(response.url, API_URL_HELLO)

    # HELLO - request type
    def test_hello_status(self):
        response = requests.get(API_URL_HELLO)
        self.assertTrue(str(response.request), "[GET]")

    # HELLO - read contents type
    def test_hello_readcontent(self):
        response = requests.get(API_URL_HELLO)
        self.assertEqual(response.headers["Content-Type"], "text/html; charset=utf-8")
    
    # HELLO - check for data returned
    def test_read_content(self):
        expectedResult = {"response": "hello world"}
        response = requests.get(API_URL_HELLO).json()
        self.assertEqual(response, expectedResult)
    
    # -------------------------------------------------

    # PREDICT - status code - 200 (ok) with parameters
    def test_predict_status200(self):
        parameter = {"total_funding": 100, "founded_year": 100}
        response = requests.get(url = API_URL_PREDICT, params = parameter)
        self.assertEqual(response.status_code, 200)

    # PREDICT - status code - 405 (method not allowed) without parameters
    def test_predict_status(self):
        response = requests.get(API_URL_PREDICT)
        self.assertEqual(response.status_code, 405)
      
    # PREDICT - check status code if only one paramters is passed in
    def test_predict_status(self):
        parameter_1 = {"total_funding": 100}
        parameter_2 = {"founded_year": 100}
        response_1 = requests.get(url = API_URL_PREDICT, params = parameter_1)
        response_2 = requests.get(url = API_URL_PREDICT, params = parameter_2)
        self.assertEqual(response_1.status_code, 200)
        self.assertEqual(response_2.status_code, 200)

    # PREDICT - read contents type
    def test_predict_readcontent(self):
        response = requests.get(API_URL_PREDICT)
        self.assertEqual(response.headers["Content-Type"], "text/html; charset=utf-8")
    

    # PREDICT - checking request url 
    def test_url(self):
        response = requests.get(API_URL_PREDICT)
        self.assertEqual(response.url, API_URL_PREDICT)

    # PREDICT - read contents type
    def test_hello_readcontent(self):
        response = requests.get(API_URL_PREDICT)
        self.assertEqual(response.headers["Content-Type"], "text/html; charset=utf-8")
    
    # PREDICT - check for data returned
    def test_read_content(self):
        parameter = {"total_funding": 100, "founded_year": 100}
        expectedResult = {"total_funding": 100, "founded_year": 100}
        response = requests.get(url = API_URL_HELLO, params= parameter)
        self.assertEqual(response.json(), expectedResult)

    # PREDICT - check response is between 0-1
    def test_respones_01(self):
        response = requests.get(API_URL_PREDICT)
        self.assertLessEqual(response.json(), 1)

if __name__ == '__main__':
    unittest.main()