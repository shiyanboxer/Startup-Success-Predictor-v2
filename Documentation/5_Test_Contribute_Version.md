## **Testing**

The following types of test were preformed.
- **Component/subsystem testing:** each subcomponent needs to be thoroughly tested during the prototype stage
- **Integration testing** test to see if different components/subsystem communicate the way they should
- **Full system testing (unit testing):** how the entire system works after integration of all the components
- **Model Accuracy** Accuracy test using Sklearn module -> 94%

**Tools:**
- **Unit Tests:** unittest python framework
- **Postman:** Allows create, share, test and document APIs. create  HTTP/s requests, and read responses
- **Browser Console:** Checking HTTP requests was sent properly from the frontend and received by the backend 

**Future Testing:**
- **Beta release:** beta release are meant to flush out bugs that happen in scale or might have escaped previous rounds - fix before release
- **Iteration on user testing and feedback:** when the product is stable, more rounds of user testing might be required to understand if users want the product and how they would use it. Based on feedback minor changes
- **Field testing:** testing the product in scenarios very close to how the final product/system will be used.

**[app_test.py](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/3API/app_test.py)**: Unit test were written using the unittest module to test the hello() and predict() methods by checking:
- status code example
  
```
    # HELLO - status code - 200 (ok)
    def test_hello_status(self):
        response = requests.get(API_URL_HELLO)
        self.assertEqual(response.status_code, 200)
```   

- content type example


```   
    # PREDICT - read contents type
    def test_predict_readcontent(self):
        response = requests.get(API_URL_PREDICT)
        self.assertEqual(response.headers["Content-Type"], "text/html; charset=utf-8")
```

- response data

```
    # HELLO - check for data returned
    def test_read_content(self):
        expectedResult = {"response": "hello world"}
        response = requests.get(API_URL_HELLO).json()
        self.assertEqual(response, expectedResult)
```

- parameters
  
```
    # PREDICT - check for data returned
    def test_read_content(self):
        parameter = {"total_funding": 100, "founded_year": 100}
        expectedResult = {"total_funding": 100, "founded_year": 100}
        response = requests.get(url = API_URL_HELLO, params= parameter)
        self.assertEqual(response.json(), expectedResult)
```    

## **Next Steps**

The following is a list of features that are out of scope for this project but would be worthwhile exploring in future
iterations. These features would provide a more comprehensive and desirable user experience.

- Create and connect a database, instead of using an excel sheet to hold company info
- Train and test on multiple datasets, not
  just [Crunchbase](https://www.kaggle.com/arindam235/startup-investments-crunchbase/data)
- Add additional parameters such as country, number of rounds raised, number of founders
- Explore and compare other models such as random forest
- Explore other methods of validating the results of the model such as MSE and MAE

## **Contributing**

Submit an issue (feature request or bug)
Create a branch: git checkout -b feature/feature-implementing Commit changes to the branch: git add . && git commit -m "
Present tense commit message"
Push the changes: git push -u origin feature/feature-implementing Submit a pull request Versioning There are 2 versions
of the API available for use: Version 1 and Version 2.

### **Resources**

**VC**

- [How Other VC Firms are Looking at Data](https://medium.com/hackernoon/winning-by-eating-their-own-dogs-food-83-venture-capital-firms-using-data-ai-proprietary-da92b81b85ef)
- [Sample Project](https://github.com/PlayingNumbers/ds_salary_proj)
- [Raise of AI in VC](https://outsideinsight.com/insights/the-growing-focus-on-artificial-intelligence-in-venture-capital/)
- [Network Charts and Venture Capital](https://towardsdatascience.com/data-science-in-venture-capital-8c13ec0c8458)
- [Structure your data science project](https://www.youtube.com/watch?v=MpF9HENQjDo)

**Model**

- [Training a classifier with Pytorch](https://www.kaggle.com/danieldagnino/training-a-classifier-with-pytorch)
- [Types of Models](https://www.logianalytics.com/predictive-analytics/predictive-algorithms-and-models/)

**API**

- [Productionize a Machine Learning model with Flask and Heroku](https://towardsdatascience.com/productionize-a-machine-learning-model-with-flask-and-heroku-8201260503d2)

**Frontend**

- [Create react single-page app](https://reactjs.org/docs/create-a-new-react-app.html)

**Database**

- [MongoDB vs MySQL](https://www.mongodb.com/compare/mongodb-mysql#:~:text=MySQL%20is%20a%20relational%20database,(SQL)%20for%20database%20access.&text=MongoDB%20is%20a%20NoSQL%20database,data%20as%20JSON%2Dlike%20documents)
