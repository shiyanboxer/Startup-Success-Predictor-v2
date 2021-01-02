## Testing
The application is thoroughly tested using Jest and Supertest.
CodeCov is used to validate the 92% code coverage, and CirclCI is used to run all tests before a branch is merged to master.
This ensures the build isn't broken by changes in code logic.

### How the tests work
An in-memory MongoDB database is built when Jest starts up, the database is seeded before every test, and the database is destroyed when all tests are completed.

### Running the tests
npm install
Ensure that all packages are installed

npm test OR npm run test:watch
Run all suites of tests

npm run test:watch runs Jest in watch mode, where individual tests can be viewed. Type in p to filter tests by filename regex, then v2 and press Enter to view the tests for version 2 of the API.

## Contributing
1. Submit an issue (feature request or bug)
2. Create a branch: git checkout -b feature/feature-implementing
3. Commit changes to the branch: git add . && git commit -m "Present tense commit message"
4. Push the changes: git push -u origin feature/feature-implementing
5. Submit a pull request

## Versioning
As of January 2nd, 2021, there is only 1 version of the API available for use.

### Version 1
**Requirements**
- Enter numbers (type float) into the "Total Funding" and "Founding Year" box
- Press "Enter Details" to see results

**Endpoints**
- POST https://startup-success-predictor-api.herokuapp.com/predict
- GET https://startup-success-predictor-api.herokuapp.com/

## Learning Resources
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