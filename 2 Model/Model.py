import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import accuracy_score
import pickle

# Read file into DataFrame
df = pd.read_excel('C://Users//shiya//Documents//FF//Startup-Success-Predictor-v2//after.xlsx')

# Choose relevant columns (funding_total_usd, success, country_code, founded_year) and assign the filtered dataset to a variable called "df_model"
df_model = df[['success','funding_total_usd','founded_year']]

# Get dummy data on  df_model using the get_dummies()
df_dummie = pd.get_dummies(df_model)

# Create x and y variables
X = df_dummie.drop('success', axis =1) # axis = 1 means drop column
y = df_dummie.success.values

# Create train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

## Linear Regression
model = LinearRegression()

# Fit linear model fit(X, y[, sample_weight])
model.fit(X_train, y_train) 

# Test accuracy (0.9437570303712036)
accuracy_score(y_test, np.around(model.predict(X_test),0))

# Pickle the model so it can be loaded in the Flask API
pickl = {'model': model.fit(X_train, y_train)}
pickle.dump( pickl, open( 'model_file' + ".p", "wb" ) )

file_name = "model_file.p"
with open(file_name, 'rb') as pickled:
    data = pickle.load(pickled)
    model = data['model']
