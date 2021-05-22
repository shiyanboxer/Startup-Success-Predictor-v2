from app import app
import flask.app as app
import unittest
import json
from flask import Flask, jsonify

# https://docs.python.org/3/library/unittest.html

class TestCase(unittest.TestCase):
    def test_read(self):
        tester = app.test_client(self)
        response = tester.get("/predict")
        self.assertEqual(response.status_code, 200) # ok status 

    def test_read_contentType(self):
        tester = app.test_client(self)
        response = tester.get("/predict")
        # print(response.content_type)
        self.assertEqual(response.content_type, "application/json")
    
    # check for data returned
    def test_read_content(self):
        tester = app.test_client(self)
        response = tester.get("/predict")
        self.assertTrue(b'response' in response.data)

if __name__ == '__main__':
    unittest.main()
