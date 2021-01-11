# Startup Success Predictor v2

- **By: Shiyan Boxer**
- **Last Updated: January 17th, 2021**
- **[Documentation](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/tree/master/Documentation)**
  - **[1 Project Overview](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Documentation/1_Project_Overview.md)**
  - **[2 Background Knowledge](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Documentation/2_Background_Knowledge.md)**
  - **[3 Software Architecture](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Documentation/3_Software_Architecture.md)**
  - **[4 Steps](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Documentation/4_Steps.md)**
  - **[5 Test, Contribute, Version, and Learning Resources](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Documentation/5_Test_Contribute_Version.md)**

- **[Heroku API Link](https://startup-success-predictor-api.herokuapp.com/)**
- **[Website Link](https://startup-success-predictor.netlify.app/)**

[![Netlify Status](https://api.netlify.com/api/v1/badges/d94e1949-ad8e-456b-a2b0-7049dc10ea58/deploy-status)](https://app.netlify.com/sites/startup-success-predictor/deploys)

### **Demo**

### **Quickstart**
```
npm install
pip install -r requirements.txt
```

### [Getting Started Locally](https://uoa-eresearch.github.io/eresearch-cookbook/recipe/2014/11/26/python-virtual-env/)
```
cd C:\Users\shiya\Documents\FF\Startup-Success-Predictor-v2\API
conda activate flask_env
python app.py
curl -X GET http://127.0.0.1:5000/predict

cd 
npm start
```

### **About**
This web application leverages data science, machine learning, and business principles to predict the success of startups based on common characteristics. The goals throughout the development process are to ensure reliability, scalability, and ease of use. The program is an end to end solution consisting of five parts: 

1. **Clean** cleans dataset before building the model
2. **Model** predicts success 
3. **API** allows requests to the model
4. **Database** stores company data (not built yet)
5. **Frontend** allows user to inputs criteria

### **Technologies** 
- **[React](https://reactjs.org/docs/create-a-new-react-app.html)** to build the frontend
  - **[Axios](https://www.npmjs.com/package/axios)**
  - MDBReact **[Cards](https://mdbootstrap.com/docs/react/components/cards/)** and **[Forms](https://mdbootstrap.com/docs/react/forms/basic/)**
- **[Python 3.7](https://www.python.org/downloads/release/python-370/)** in **[Jupyter Notebook](https://jupyter.org/)** to build the model and clean
  - **[Sklean](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html)** to fit, split, and test the model 
  - **[Numpy](https://numpy.org/doc/stable/reference/generated/numpy.array.html)** to round result values
  - **[Pandas](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html)** to manipulate the dataset
  - **[Pickle](https://docs.python.org/3/library/pickle.html)** to transfer the model
- **[Flask](https://flask.palletsprojects.com/en/1.1.x/)** to build the API
  - **[Guicorn server](https://gunicorn.org/)**
  - **CORS** to run seprate local hosts
  - **JSON** to load and dump data
- **[MongoDB](https://www.mongodb.com/2)** to build the database
- **[Postman](https://www.postman.com/)** and **[CircleCI](https://circleci.com/)** for testing
- **[Netlify](https://www.netlify.com/)** and **[Heroku](https://dashboard.heroku.com/)** to deploy the React App and Flask API


### **Next Steps**
The following is a list of features that are out of scope for this project but would be worthwhile exploring in future iterations. These features would provide a more comprehensive and desirable user experience.
- Create and connect a database, instead of using an excel sheet to hold company info 
- Train and test on multiple datasets, not just [Crunchbase](https://www.kaggle.com/arindam235/startup-investments-crunchbase/data)
- Add additional parameters such as country, number of rounds raised, number of founders
- Explore and compare other models such as random forest
- Explore other methods of validating the results of the model such as MSE and MAE
- Add a database to store company info that can be updated by Crunchbase or VCs
