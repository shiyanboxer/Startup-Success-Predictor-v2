# 2. Background Knowledge

## **Model**
This project uses a classification model, specifically random forest. It puts data in categories based on what it learns from historical data. Classification models are best to answer yes or no questions, providing broad analysis that’s helpful for guiding decisive action [(types of models).](https://www.logianalytics.com/predictive-analytics/predictive-algorithms-and-models/) Will this startup be successful (operating or acquired)? 

The dataset was split up into 70% training and 30% testing. 

Random Forest Random forests or random decision forests are an ensemble learning method for classification, regression and other tasks that operate by constructing a multitude of decision trees at training time and outputting the class that is the mode of the classes (classification) or mean prediction (regression) of the individual trees.[1][2] Random decision forests correct for decision trees' habit of overfitting to their training set [(The Elements of Statistical Learning)](https://web.stanford.edu/~hastie/ElemStatLearn/).

### **Random Forest Model**

Diagram by: [Medium](https://medium.com/analytics-vidhya/machine-learning-decision-trees-and-random-forest-classifiers-81422887a544

I evaluated the model using Mean Absolute Error (MAE) which is easy to interpret and a good choice since outliers aren’t too bad for this type of model.

## **Dataset**
The [Crunchbase](https://www.kaggle.com/arindam235/startup-investments-crunchbase/data) dataset consists of 39 categories with 5000 companies recorded up until 2015

## **REST API**