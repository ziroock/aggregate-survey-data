# AGGREGATE SURVEY DATA

## DIRECTIONS
### Installation
1. Run `npm install`inside the root folder.
2. Run `npm install` inside /client.
3. Run `npm run dev` from root folder.

- To run just the back end run `npm run server` from root folder.
- To run just the front end run `npm run client` from root folder.

#### NPM & Node:
- npm v6.14.11
- node v12.20.2
- <b>IMPORTANT: </b> These are the versions used to create and test; however,   
    they are not specified in package.json, so other versions might be used.

## GAME-PLAN
#### I. Set up Back End - [ Node.js + Express ]
1. Basic Set up:
-   [DONE] Create & Test home route '/'
    - REQ: NA
    - RES: str HelloWorld
-   [DONE] Create & Test Survey '/postSurvey' to GET CSV
    - REQ: CSV
    - RES: str 'GotSurvey'/'There was a problem getting the survey'
-   [DONE] Create & Test function csvToJSON()
    - IN: CSV
    - OUT: JSON
2. DB Set up:
-   [DONE] Create DB Schema
```
    --- SurveySchema ---
    
    _id: (autoGenId)
    name: str (CSV File name)
    surveyData: [UserSchema]
    
    
    --- UserSchema --- (SubDocument)
    userID: int
    questions: [{question: str, answer: str}] 
```
-   [DONE] Update & Test '/postSurvey' to POST to DB
    - REQ: CSV formData
    - RES: 'uploaded to DB successful' / 'there was a problem'
-   [DONE] Create & Test '/deleteSurvey' to DELETE from DB given surveyID
    - REQ: {str: surveyID}
    - RES: 'survey deleted successful' / 'there was a problem deleting the survey'
3. Final Steps
-   [DONE] Create & Test '/getSurveys'
    - REQ: NA
    - RES: JSON with all Survey IDs and Names
-   [DONE] Update & Test '/postSurvey' to return Object with all surveys IDs and Names
    - REQ: CSV formData
    - RES: JSON with all Survey ID's and Names
-   [DONE] Update & Test '/deleteSurvey' to POST updated list of all Survey Names and IDs
    - REQ: {str: surveyID, str: surveyName}
    - RES: JSON with all Survey ID's and Names
-   [DONE] Create & Test function getAggregateData()
    - IN: JSON with Survey results
    - OUT: JSON with the aggregate data
-   [DONE] Create & Test '/getAggregateSurvey' to POST survey results
    - REQ: {str: surveyID}
    - RES: JSON with the aggregate data

#### II. Set up Front End - [ React ]
1. Basic Front End Set Up
-   [DONE] Get concurrently to run both front and back ends
-   [DONE] Get redux, react-redux, react-router-dom, http-proxy-middleware
-   [DONE] Set up Proxy
-   [DONE] Wire up Redux
2. Functionality on HOME page
-   [DONE] Create home page
    1. [DONE] Wire up & Test Upload
    2. [DONE] Wire up & Test Survey List
    3. [DONE] Wire up & Test Delete Survey
    -  [DONE] Upload Button
        -   [DONE] OnCLick for upload Button
            -   [DONE] Need to upload and send formData
    -   [DONE] I will also have the table/ list of surveys
        -   [DONE] OnClick for delete Button
            - [DONE] Need to send a request to the server with the selected Survey Name and ID
        -   [DONE] OnClick on Survey Name
            - [DONE] Need to open a new page containing the aggregate data in tables
```
                ---------------------
                |   Upload Button   |
                ---------------------

        #      Name
        1.     FavoriteAnimals.csv       delete
        2.     FavoriteAnimals.csv       delete
        3.     FavoriteAnimals.csv       delete
                        .
                        .
                        .
```
3. [DONE] Functionality on AGGREGATE DATA Page
- [DONE] Create Page containing aggregate data
    - [DONE] Needs to have dynamic table ( Depending on the different aggregate data for each question )
    - [DONE] Needs to have dynamic amount of tables ( Depending on the number of questions )
- [DONE] First need to make sure that the data flow is consistent
- [DONE] Once Everything is wired up, create a functional component Dynamic Table

Planning 45 minutes