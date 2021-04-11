# AGGREGATE SURVEY DATA

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
-   [] Create home page
    1. [DONE] Wire up & Test Upload
    2. [DONE] Wire up & Test Survey List
    3. [] Wire up & Test Delete Survey
    -  [DONE] Upload Button
        -   [DONE] OnCLick for upload Button
            -   [DONE] Need to upload and send formData
    -   [] I will also have the table/ list of surveys
        -   [] OnClick for delete Button
            - [] Need to send a request to the server with the selected Survey Name and ID
        -   [] OnClick on Survey Name
            - [] Need to open a new page containing the aggregate data in tables
```html
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
3. [] Functionality on AGGREGATE DATA Page
- [] Create Page containing aggregate data
    - [] Needs to have dynamic table ( Depending on the different aggregate data for each question )
    - [] Needs to have dynamic amount of tables ( Depending on the number of questions )
- [] First need to make sure that the data flow is consistent
- [] Once Everything is wired up, create a functional component Dynamic Table

Planning 45 minutes