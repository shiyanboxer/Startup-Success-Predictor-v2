import re
import json
from flask import request
import requests
import numpy as np
import sys
import pandas as pd

# URL = 'https://startup-success-predictor-api.herokuapp.com/'
URL = 'http://127.0.0.1:5000/predict'
r = requests.get(URL)  # Make a GET request to the given URL
r.json()
