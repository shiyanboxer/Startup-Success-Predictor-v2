# Startup Success Predictor v2

- **By: Shiyan Boxer**
- **Last Updated: January 2nd, 2021**
- **[Website Link](https://startup-success-predictor.netlify.app/)**
- **[Heroku API Link](https://startup-success-predictor-api.herokuapp.com)**
- **[Demo Video](https://www.youtube.com/watch?v=399VnVBpyb0)**
- **[Documentation](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/tree/master/Documentation)**
    - **[Project Overview](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Documentation/1_Project_Overview.md)**
    - **[Background Knowledge](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Documentation/2_Background_Knowledge.md)**
    - **[Software Architecture](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Documentation/3_Software_Architecture.md)**
    - **[Steps](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Documentation/4_Steps.md)**
    - **[Test, Contribute, Version](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Documentation/5_Test_Contribute_Version.md)**
            
[![Netlify Status](https://api.netlify.com/api/v1/badges/d94e1949-ad8e-456b-a2b0-7049dc10ea58/deploy-status)](https://app.netlify.com/sites/startup-success-predictor/deploys)

[![Website Screenshot](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Images/WebsiteScreenshot.png)](https://www.youtube.com/watch?v=399VnVBpyb0)

### **Quickstart**

```
npm install
pip install -r requirements.txt
```

### **About**

This web application leverages data science, machine learning, and business principles to predict the success of
startups based on common characteristics. The goals throughout the development process are to ensure reliability,
scalability, and ease of use. The program is an end to end solution consisting of five parts:

1. **Clean** cleans dataset before building the model
2. **Model** predicts success
3. **API** allows requests to the model
4. **Database** stores company data (not built yet)
5. **Frontend** allows user to inputs criteria

### **Technologies**

- **[React](https://reactjs.org/docs/create-a-new-react-app.html)** to build the frontend
    - **[Axios](https://www.npmjs.com/package/axios)**
    - Bootstrap **[Cards](https://mdbootstrap.com/docs/react/components/cards/)**
      and **[Forms](https://mdbootstrap.com/docs/react/forms/basic/)**
- **[Python 3.7](https://www.python.org/downloads/release/python-370/)** in **[Jupyter Notebook](https://jupyter.org/)**
  to build the model and clean
    - **[Sklean](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html)**
    - **[Numpy](https://numpy.org/doc/stable/reference/generated/numpy.array.html)**
    - **[Pandas](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html)**
    - **[Pickle](https://docs.python.org/3/library/pickle.html)**
- **[Flask](https://flask.palletsprojects.com/en/1.1.x/)** to build the API
    - **[Guicorn server](https://gunicorn.org/)**
- **[MongoDB](https://www.mongodb.com/2)** to build the database
