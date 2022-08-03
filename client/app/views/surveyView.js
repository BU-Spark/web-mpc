define(["survey-jquery", "jquery", "table_template"], function (
    Survey,
    $,
    table_template
  ) {
    return function (survey_id) {
      $("#additional-questions").hide();
      if (
        !(survey_id in table_template) ||
        Object.keys(table_template[survey_id]).length === 0
      ) {
        return;
      }

      const json = table_template[survey_id];
  
      Survey.StylesManager.applyTheme("winter");
      
      const survey = new Survey.Model(json);
      window.survey = survey;
      window.surveyData = null;
      survey.onComplete.add(function (sender) {
        // console.log("Survey results: ", sender.data);
        window.surveyData = sender.data;
  
      });
      $("#additional-questions").Survey({ model: survey });
  
      $("#additional-questions").show();
    };
  });
  