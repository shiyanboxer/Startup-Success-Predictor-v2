# 4. **Steps**

## **Clean**

The first step was to clean the dataset so it could be used by the model. This code can be found in the Clean folder of the repository. I made the following changes:

1. Create a new excel sheet that will have changes “after.xlsx”
2. Remove companies with NA from dataset
3. Make new column for company “success” (0 = “operating or “acquired” and 1 = “closed”)

Dependencies for this step include:
*   pandas

## **Model**

The model was built by doing the following:

1. Choose relevant columns
2. Get dummy data
3. Split training and testing data
4. Multiple linear regression
6. Test accuracy

Dependencies for this step include:
*   pandas
*   sklearn
*   numpy 
*   pickle
*   [sklearn train test split](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html)
*   [sklearn RandomForestRegressor](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html)
*   [sklearn GridSearchCV](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html)
*   [sklearn mean_absolute_error](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.mean_absolute_error.html)

## **API**

In this step, I built a flask API endpoint that was hosted on a local webserver. 

1. **Pickle the model.** This converts the object into a byte stream which can be stored, transferred, and converted back to the original model at a later time. Pickles are one of the ways python lets you save just about any object out of the box.
2. **Build Flask API.** This allows other users and our frontend to send requests and receive a response (prediction).

### **Deploy API**

I deployed the API to Heroku. 

1. Create an app “create startup-success-predictor-api”
2. Push app to heroku “git push heroku master”
3. Get link to send API requests [https://startup-success-predictor-api.herokuapp.com/](https://startup-success-predictor-api.herokuapp.com/)


## **Frontend**

I created a simple website using React to interact with the API.

1. Make request to API curl -X GET https://flask-ml-api-123.herokuapp.com/predict
2. Connect API to frontend forms component 
3. Deploy website to Netlify

### **Deploy Frontend**

1. I connect frontend folder repo Netlify and deploy. 
