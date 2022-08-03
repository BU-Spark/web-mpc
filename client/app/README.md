# WEB-MPC client

This application has a survey which for users to answer.

## Survey

Survey is a data stored in JSON format at `./data/mmf.js`. Format of the survey is structured to work with `SurveyJS` library.

`./data/mmf.js` contains two instances of surveys constructed according to questions provided by MMF. The keys in `./data/mmf.js` are  `regular` and `hr-only`.

Questions are shown according to URL query on survey page. Default is `regular` which is when argument is not given or there is some kind of error.
 - `http://localhost:8080/?survey=1` for `regular` survey questions
 - `http://localhost:8080/?survey=2` for `hr-only` survey questions

Future questions can be constructed at https://surveyjs.io/.

### Requirements

 - SurveyJS library - `surveyjs-jquery`