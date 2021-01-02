# Startup-Success-Predictor-v2

### By: Shiyan Boxer
### Last Updated: January 2nd, 2021

- #### [Documentation](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/tree/master/Documentation)
- #### [Heroku API Link](https://startup-success-predictor-api.herokuapp.com)
- #### [Website Repository](https://github.com/shiyanboxer/Startup-Success-Predictor-Site/tree/master/my-app)
- #### [Website Link](https://startup-success-predictor.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/586844c1-91fa-46d5-a162-364a75f6697b/deploy-status)](https://app.netlify.com/sites/startup-success-predictor/deploys)

![Website Screenshot](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Images/WebsiteScreenshot.jpg)

### **Quickstart**
```
npm install
pip install -r requirements.txt
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
  - [Axios](https://www.npmjs.com/package/axios)
  - Bootstrap [Cards](https://mdbootstrap.com/docs/react/components/cards/) and [Forms](https://mdbootstrap.com/docs/react/forms/basic/)
- **[Python](https://www.python.org/downloads/release/python-370/)** in **[Jupyter Notebook](https://jupyter.org/)** to build the model and clean
  - [Sklean](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html)
  - [Numpy](https://numpy.org/doc/stable/reference/generated/numpy.array.html)
  - [Pandas](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html)
- **[Flask](https://flask.palletsprojects.com/en/1.1.x/)** to build the API
  - [Guicorn server](https://gunicorn.org/)
- **MongoDB** to build the database

### **Demo**

### **Learnings**

### **Challenges**

### **What I Would Do Differently**

### **Next Steps**
The following is a list of features that are out of scope for this project but would be worthwhile exploring in future iterations. These features would provide a more comprehensive and desirable user experience.
- Train dataset on multiple datasets
- Add additional criteria
- Explore other models
- Add authentication
