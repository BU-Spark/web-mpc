# WEB-MPC client

This application has a survey which for users to answer.

## Survey

Survey is a data stored in JSON format at `./data/mmf.js`. Format of the survey is structured to work with `SurveyJS` library.

`./data/mmf.js` contains two instances of surveys constructed according to questions provided by MMF. The keys in `./data/mmf.js` are  `surveyjs-1` and `surveyjs-2`.

Future questions can be constructed at https://surveyjs.io/.

### Requirements

 - SurveyJS library - `surveyjs-jquery`