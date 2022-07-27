<<<<<<< HEAD
if (typeof define !== "function") {
  var define = require("amdefine")(module);
=======
if (typeof define !== 'function') {
  var define = require('amdefine')(module);
>>>>>>> 2ad0c18 (update packages)
}

define([], function () {
  return {
    tables: [
      {
<<<<<<< HEAD
        name: "Table 1",
        element: "number-paintings",
        //The format for linear regression is an array of pairs where each pair is an array of the independent variable
        //followed by the dependent variable. The independent variable and dependent variable are both arrays of two elements,
        //the first is the name of the row, the second is the name of the column
        operations: {
          SUM: true,
          STD: true,
          LIN: [
            [
              ["num_paintings", "value"],
              ["age", "value"],
            ],
          ],
        },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 150,
          height: 330,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
          {
            key: "num_paintings",
            label: "Number of paintings",
          },
          {
            key: "age",
            label: "Museum age",
          },
          {
            key: "num_statues",
            label: "Number of statues",
          },
          {
            key: "num_photos",
            label: "Number of photos",
          },
        ],
        cols: [
          [
            {
              key: "value",
              label: "Value",
            },
          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_warning: 200,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "Test",
            start: "B2",
            end: "B2",
            firstrow: "Test",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
      {
        name: "Table 2",
        element: "number-emps",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
=======
        name: 'Table 1',
        element: 'number-paintings', //TODO: what does this element do?
        operations: {SUM: true, STD: true},
        cohortOperations: {SUM: true},
>>>>>>> 2ad0c18 (update packages)
        hot_parameters: {
          rowHeaderWidth: 150,
          height: 230,
          colWidths: [150],
<<<<<<< HEAD
          stretchH: "none",
        },
        rows: [
          {
            key: "number_emp",
            label: "Number of employees",
          },
=======
          stretchH: 'none'
        },
        rows: [
          {
            key: 'local',
            label: 'Number of paintings'
          }
>>>>>>> 2ad0c18 (update packages)
        ],
        cols: [
          [
            {
<<<<<<< HEAD
              key: "value",
              label: "Value",
            },
          ],
=======
              key: 'value',
              label: 'Test'
            }
          ]
>>>>>>> 2ad0c18 (update packages)
        ],
        types: [
          {
            range: {
<<<<<<< HEAD
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_warning: 200,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "Test2",
            start: "B2",
            end: "B2",
            firstrow: "Test",
          },
=======
              row: '*',
              col: '*'
            },
            type: 'int',
            min: 0,
            max_warning: 200,
            empty: false
          }
        ],
        excel: [
          {
            sheet: 'Test',
            start: 'B2',
            end: 'B2',
            firstrow: 'Test'
          }
>>>>>>> 2ad0c18 (update packages)
        ],
        tooltips: [
          {
            range: {
<<<<<<< HEAD
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
    ],
    survey: {
      header: "Answer Additional Questions",
      directions: "Please answer the following questions.",
      questions: [
        {
          question_text: "Which department are you in?",
          input_type: "radio",
          inputs: [
            {
              label:
                "Human Resources (e.g. HR Manager, HRIS Manager, Compensation Manager, Talent &amp; Development)",
              value: "1",
            },
            {
              label: "Operations (e.g. Director of Operations)",
              value: "2",
            },
            {
              label: "Diversity (e.g. Chief Diversity Officer)",
              value: "3",
            },
            {
              label: "Upper Management (e.g. COO, CEO, Executive Director)",
              value: "4",
            },
          ],
        },
        {
          question_text:
            "How easy was it to understand what data was required given the template and instructions?",
          input_type: "radio",
          inputs: [
            {
              label: "Extremely easy",
              value: "1",
            },
            {
              label: "Moderately easy",
              value: "2",
            },
            {
              label: "Slightly easy",
              value: "3",
            },
            {
              label: "Neither easy nor difficult",
              value: "4",
            },
            {
              label: "Slightly difficult",
              value: "5",
            },
            {
              label: "Moderately difficult",
              value: "6",
            },
            {
              label: "Extremely difficult",
              value: "7",
            },
          ],
        },
      ],
    },
    "regular": {
      title: "Additional questions",
      logoPosition: "right",
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "multipletext",
              name: "question0",
              title:
                "Approximately how long have you been working in the art museum field?",
              defaultValue: {
                months: 0,
                years: 0,
              },
              isRequired: true,
              items: [
                {
                  name: "years",
                  isRequired: true,
                  inputType: "number",
                  title: "Years",
                },
                {
                  name: "months",
                  inputType: "number",
                  title: "Months",
                  validators: [
                    {
                      type: "expression",
                      text: "Months must be between 0 and 11",
                      expression:
                        "{question0.months} <= 11 and {question0.months} >= 0",
                    },
                  ],
                },
              ],
              itemSize: 0,
              colCount: 2,
            },
            {
              type: "multipletext",
              name: "question1",
              title:
                "And how long have you been working at your current museum (this could be the same as the previous question)?",
              defaultValue: {
                months: 0,
                years: 0,
              },
              isRequired: true,
              items: [
                {
                  name: "years",
                  isRequired: true,
                  inputType: "number",
                  title: "Years",
                },
                {
                  name: "months",
                  inputType: "number",
                  title: "Months",
                  validators: [
                    {
                      type: "expression",
                      text: "Months must be between 0 and 11",
                      expression:
                        "{question1.months} <= 11 and {question1.months} >= 0",
                    },
                  ],
                },
              ],
              itemSize: 0,
              colCount: 2,
            },
            {
              type: "radiogroup",
              name: "question2",
              title:
                "Which of the following best describes your current position level in the museum?",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Voluntary (including unpaid internship)",
                },
                {
                  value: "2",
                  text: "Entry-level",
                },
                {
                  value: "3",
                  text: "Associate/Experienced (non-manager)",
                },
                {
                  value: "4",
                  text: "Manager",
                },
                {
                  value: "5",
                  text: "Director",
                },
                {
                  value: "6",
                  text: "Executive",
                },
                {
                  value: "7",
                  text: "Prefer not to answer",
                },
              ],
            },
          ],
          title: "Page 1",
        },
        {
          name: "page2",
          elements: [
            {
              type: "radiogroup",
              name: "question3",
              title: "What type of position do you have at the museum?",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Full-time/ Permanent employee",
                },
                {
                  value: "2",
                  text: "Part-time employee",
                },
                {
                  value: "3",
                  text: "Temporary employee",
                },
                {
                  value: "4",
                  text: "Paid intern",
                },
                {
                  value: "5",
                  text: "Unpaid intern",
                },
                {
                  value: "6",
                  text: "Apprentice / Fellow",
                },
                {
                  value: "7",
                  text: "Freelancer/consultant/contractor who works across institutions",
                },
                {
                  value: "8",
                  text: "Prefer not to answer",
                },
              ],
            },
            {
              type: "checkbox",
              name: "question4",
              title:
                "Which of the following categories does your current museum position fall into? Pleaseselect ALL that apply.",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Conservation",
                },
                {
                  value: "2",
                  text: "Curatorial",
                },
                {
                  value: "3",
                  text: "Digital Strategy/Web Development (e.g., graphic design)",
                },
                {
                  value: "4",
                  text: "Diversity/Equity/Inclusion",
                },
                {
                  value: "5",
                  text: "Education",
                },
                {
                  value: "6",
                  text: "Exhibition Design and Construction (includes Fabrication)",
                },
                {
                  value: "7",
                  text: "Facilities / Operations",
                },
                {
                  value: "8",
                  text: "Finance / Accounting",
                },
                {
                  value: "9",
                  text: "Gardens/Grounds",
                },
                {
                  value: "10",
                  text: "Human Resources",
                },
                {
                  value: "11",
                  text: "Information Technology",
                },
                {
                  value: "12",
                  text: "Library",
                },
                {
                  value: "13",
                  text: "Marketing/Public Relations",
                },
                {
                  value: "14",
                  text: "Membership/Development (includes Event Planning)",
                },
                {
                  value: "15",
                  text: "Museum Leadership (includes executive positions)",
                },
                {
                  value: "16",
                  text: "Preparators/Art Handlers",
                },
                {
                  value: "17",
                  text: "Public Engagement",
                },
                {
                  value: "18",
                  text: "Publication/Editorial",
                },
                {
                  value: "19",
                  text: "Registration",
                },
                {
                  value: "20",
                  text: "Retail / Museum Store",
                },
                {
                  value: "21",
                  text: "Rights/Reproduction (includes Photography)",
                },
                {
                  value: "22",
                  text: "Security",
                },
                {
                  value: "23",
                  text: "Administration",
                },
                {
                  value: "24",
                  text: "Visitor Services",
                },
                {
                  value: "25",
                  text: "None of the above",
                },
              ],
            },
          ],
          title: "Page 2",
        },
        // {
        //   name: "page3",
        //   elements: [
        //     {
        //       type: "radiogroup",
        //       name: "question5",
        //       title: "How are you compensated in this position?",
        //       isRequired: true,
        //       choices: [
        //         {
        //           value: "1",
        //           text: "Annual salary",
        //         },
        //         {
        //           value: "2",
        //           text: "Hourly wage",
        //         },
        //         {
        //           value: "3",
        //           text: "Stipend",
        //         },
        //         {
        //           value: "4",
        //           text: "This is a voluntary (unpaid) position",
        //         },
        //       ],
        //     },
        //     {
        //       type: "panel",
        //       name: "panel1",
        //       elements: [
        //         {
        //           type: "text",
        //           name: "question6",
        //           title:
        //             "What is your approximate gross annual income (before taxes and deductions) from your current position in the museum? (If this changes from month to month, please provide an average). Report only your income from your museum job.",
        //           isRequired: true,
        //           inputType: "number",
        //           min: 0,
        //           step: 1000,
        //         },
        //         {
        //           type: "panel",
        //           name: "panel2",
        //           elements: [
        //             {
        //               type: "radiogroup",
        //               name: "question7",
        //               title:
        //                 "Compared to people at similar position levels (e.g., entry level, associate, manager,executive) in my institution, I think my salary is:",
        //               isRequired: true,
        //               choices: [
        //                 {
        //                   value: "1",
        //                   text: "Above others",
        //                 },
        //                 {
        //                   value: "2",
        //                   text: "About the same as others",
        //                 },
        //                 {
        //                   value: "3",
        //                   text: "Below others",
        //                 },
        //                 {
        //                   value: "4",
        //                   text: "N/A, there aren’t others in my institution with similar position level",
        //                 },
        //               ],
        //             },
        //             {
        //               type: "radiogroup",
        //               name: "question8",
        //               title:
        //                 "Compared to people at similar institutions with comparable position levels, I think mysalary is:",
        //               isRequired: true,
        //               choices: [
        //                 {
        //                   value: "1",
        //                   text: "Above others",
        //                 },
        //                 {
        //                   value: "2",
        //                   text: "About the same as others",
        //                 },
        //                 {
        //                   value: "3",
        //                   text: "Below others",
        //                 },
        //               ],
        //             },
        //           ],
        //           title:
        //             "Next, we have a few questions about how you think about your salary relative to others in your institution and across the field. If you feel unsure about how much others make, please make your best guess.",
        //         },
        //         {
        //           type: "panel",
        //           name: "panel3",
        //           elements: [
        //             {
        //               type: "radiogroup",
        //               name: "question9",
        //               visibleIf: "{question3} <> 5 and {question5} <> 4",
        //               title:
        //                 "Have you ever received a promotion (with title change and pay increase beyond cost of living) during your tenure in your current museum?",
        //               isRequired: true,
        //               choices: [
        //                 {
        //                   value: "1",
        //                   text: "Yes",
        //                 },
        //                 {
        //                   value: "2",
        //                   text: "No",
        //                 },
        //               ],
        //             },
        //             {
        //               type: "radiogroup",
        //               name: "question10",
        //               visibleIf: "{question9} = 1",
        //               title:
        //                 "How many times have you received a promotion (with title change and payincrease beyond cost of living) during your tenure in your current museum?",
        //               isRequired: true,
        //               choices: [
        //                 {
        //                   value: "1",
        //                   text: "1",
        //                 },
        //                 {
        //                   value: "2",
        //                   text: "2",
        //                 },
        //                 {
        //                   value: "3",
        //                   text: "3",
        //                 },
        //               ],
        //               //   choices: ["1", "2", "3"],
        //               hasOther: true,
        //               otherText: "More than 3 times (Please specify): ",
        //             },
        //             {
        //               type: "radiogroup",
        //               name: "question11",
        //               title:
        //                 "How well does your current compensation from the museum cover your living expenses(e.g., rent, utilities, food, childcare)? My salary is …",
        //               isRequired: true,
        //               choices: [
        //                 {
        //                   value: "1",
        //                   text: "Always enough to cover living expenses",
        //                 },
        //                 {
        //                   value: "2",
        //                   text: "Usually enough to cover expenses",
        //                 },
        //                 {
        //                   value: "3",
        //                   text: "Sometimes enough to cover expenses",
        //                 },
        //                 {
        //                   value: "4",
        //                   text: "Rarely or never enough to cover expenses",
        //                 },
        //               ],
        //             },
        //             {
        //               type: "checkbox",
        //               name: "question12",
        //               title:
        //                 "Which of the following statements best reflect what work will look like for you based onthe museum’s post-Covid return-to-work plans? Please select ALL that apply.",
        //               isRequired: true,
        //               choices: [
        //                 {
        //                   value: "1",
        //                   text: "I will be working in-person only",
        //                 },
        //                 {
        //                   value: "2",
        //                   text: "I will be working in a hybrid setup where the museum chooses which days to work from home and which days to work from the museum",
        //                 },
        //                 {
        //                   value: "3",
        //                   text: "I will be working in a hybrid setup where I get to choose which days to work from home and which days to work in the museum",
        //                 },
        //                 {
        //                   value: "4",
        //                   text: "I will be working from home only",
        //                 },
        //                 {
        //                   value: "5",
        //                   text: "I don’t know much about the museum’s return-to-work plans",
        //                 },
        //               ],
        //             },
        //           ],
        //           title:
        //             "We have just a few more questions about salary and promotions at your institution.",
        //         },
        //       ],
        //       visibleIf: "{question5} < 4",
        //       requiredIf: "{question5} < 4",
        //     },
        //   ],
        // },
        // {
        //   name: "page4",
        //   elements: [
        //     {
        //       type: "matrixdropdown",
        //       name: "question13",
        //       minWidth: "400px",
        //       title:
        //         "Please rate how much you agree or disagree with the following statements in relation to the culture of your current museum workplace.",
        //       isRequired: true,
        //       showHeader: false,
        //       verticalAlign: "top",
        //       alternateRows: true,
        //       columns: [
        //         {
        //           name: "rate",
        //           title: "Rate",
        //           cellType: "radiogroup",
        //           choices: [
        //             {
        //               value: "1",
        //               text: "Strongly Disagree",
        //             },
        //             {
        //               value: "2",
        //               text: "Disagree",
        //             },
        //             {
        //               value: "3",
        //               text: "Somewhat Disagree",
        //             },
        //             {
        //               value: "4",
        //               text: "Neutral",
        //             },
        //             {
        //               value: "5",
        //               text: "Somewhat Agree",
        //             },
        //             {
        //               value: "6",
        //               text: "Agree",
        //             },
        //             {
        //               value: "7",
        //               text: "Strongly Agree",
        //             },
        //           ],
        //         },
        //       ],
        //       cellType: "radiogroup",
        //       rows: [
        //         {
        //           value: "1",
        //           text: "I believe that I can learn and grow in this organization",
        //         },
        //         { value: "2", text: "I feel burned out in this organization" },
        //         {
        //           value: "3",
        //           text: "My manager is there for me and supports me",
        //         },
        //         {
        //           value: "4",
        //           text: "Diversity and difference are not celebrated in this organization",
        //         },
        //         {
        //           value: "5",
        //           text: "I believe that what I do here is meaningful",
        //         },
        //         {
        //           value: "6",
        //           text: "The culture of my workplace negatively affects my mental and/or physical health",
        //         },
        //         {
        //           value: "7",
        //           text: "Mistakes are held against you in this organization",
        //         },
        //         {
        //           value: "8",
        //           text: "I would recommend this workplace to friends and family",
        //         },
        //         {
        //           value: "9",
        //           text: "I don’t feel that I have a voice in decision making in this organization",
        //         },
        //         {
        //           value: "10",
        //           text: "I feel comfortable speaking up about unfairness, discrimination, and harassment without fear of retaliation in this organization",
        //         },
        //         {
        //           value: "11",
        //           text: "I feel like I have to hide some of who I am working in this organization",
        //         },
        //       ],
        //     },
        //   ],
        //   title: "WORKPLACE CLIMATE",
        //   description:
        //     "In this section, we will ask you some questions about your museum’s workplace conditions and\norganizational culture. Some of these questions might touch on sensitive topics such as discrimination or\nother negative instances. If you don’t feel comfortable answering any of these questions, please feel\nfree to skip them or select “prefer not to answer”.",
        // },
        // {
        //   name: "page5",
        //   elements: [
        //     {
        //       type: "checkbox",
        //       name: "question14",
        //       title:
        //         "Which of the following statements best reflect the salary sharing practices of your museum workplace? Select all that apply.",
        //       isRequired: true,
        //       choices: [
        //         {
        //           value: "1",
        //           text: "My workplace shares the salaries of all employees publicly",
        //         },
        //         {
        //           value: "2",
        //           text: "My workplace shares salary ranges for all positions or levels with employees",
        //         },
        //         {
        //           value: "3",
        //           text: "My workplace posts salary ranges for each open position ",
        //         },
        //         {
        //           value: "4",
        //           text: "My workplace actively discourages employees from discussing their salaries",
        //         },
        //         {
        //           value: "5",
        //           text: "None of the above ",
        //         },
        //         {
        //           value: "6",
        //           text: "I don’t know",
        //         },
        //       ],
        //       noneText: "None of the above",
        //     },
        //     {
        //       type: "checkbox",
        //       name: "question15",
        //       title:
        //         "In the past 12 months, have you experienced any of the following in your museum workplace? Please select all that apply.",
        //       isRequired: true,
        //       choices: [
        //         {
        //           value: "1",
        //           text: "I wasn’t given appropriate resources, materials, or time to execute a job task or responsibility",
        //         },
        //         {
        //           value: "2",
        //           text: "My major accomplishments have been acknowledged or recognized ",
        //         },
        //         {
        //           value: "3",
        //           text: "Someone took credit for my accomplishment ",
        //         },
        //         {
        //           value: "4",
        //           text: "I developed positive relationships with my coworkers",
        //         },
        //         {
        //           value: "5",
        //           text: "Someone I work with was unfairly blamed or criticized for something ",
        //         },
        //         {
        //           value: "6",
        //           text: "I was unfairly blamed or criticized for something ",
        //         },
        //         {
        //           value: "7",
        //           text: "I received a positive performance review ",
        //         },
        //         {
        //           value: "8",
        //           text: "Another employee yelled, raised their voice, or spoke to me in an unprofessional or disrespectful manner",
        //         },
        //         {
        //           value: "9",
        //           text: "None of these",
        //         },
        //       ],
        //     },
        //   ],
        // },
        // {
        //   name: "page6",
        //   elements: [
        //     {
        //       type: "radiogroup",
        //       name: "question16",
        //       title:
        //         "Have you ever considered leaving your current museum workplace?",
        //       isRequired: true,
        //       choices: [
        //         {
        //           value: "1",
        //           text: "Yes",
        //         },
        //         {
        //           value: "2",
        //           text: "No",
        //         },
        //         {
        //           value: "3",
        //           text: "Prefer not to answer",
        //         },
        //       ],
        //     },
        //     {
        //       type: "checkbox",
        //       name: "question17",
        //       visibleIf: "{question16} = 1",
        //       title:
        //         "Which of the following reasons made you consider leaving your current museum workplace? Please select ALL that apply.",
        //       isRequired: true,
        //       choices: [
        //         {
        //           value: "1",
        //           text: "Current pay is too low to cover my living expenses",
        //         },
        //         {
        //           value: "2",
        //           text: "Pay is better in other institutions for similar types of work ",
        //         },
        //         {
        //           value: "3",
        //           text: "No full-time work is available in this institution ",
        //         },
        //         {
        //           value: "4",
        //           text: "Experiences of discrimination or harassment ",
        //         },
        //         {
        //           value: "5",
        //           text: "Lack of opportunities for growth",
        //         },
        //         {
        //           value: "6",
        //           text: "Unsafe working conditions",
        //         },
        //         {
        //           value: "7",
        //           text: "Burnout",
        //         },
        //         {
        //           value: "8",
        //           text: "Toxic work environment",
        //         },
        //         {
        //           value: "9",
        //           text: "No longer interested in art / art museums ",
        //         },
        //         {
        //           value: "10",
        //           text: "I don’t believe my institution can change for the better",
        //         },
        //       ],
        //       hasOther: true,
        //       otherText: "Something else (Please specify):",
        //     },
        //   ],
        // },
        // {
        //   name: "page7",
        //   elements: [
        //     {
        //       type: "radiogroup",
        //       name: "question18",
        //       title: "Have you ever considered leaving the art museum field?",
        //       isRequired: true,
        //       choices: [
        //         {
        //           value: "1",
        //           text: "Yes",
        //         },
        //         {
        //           value: "2",
        //           text: "No",
        //         },
        //         {
        //           value: "3",
        //           text: "Prefer not to answer",
        //         },
        //       ],
        //     },
        //     {
        //       type: "checkbox",
        //       name: "question19",
        //       visibleIf: "{question18} = 1",
        //       title:
        //         "Which of the following reasons made you consider leaving the art museum field? Please select ALL that apply.",
        //       isRequired: true,
        //       choices: [
        //         {
        //           value: "1",
        //           text: "Current pay is too low to cover my living expenses",
        //         },
        //         {
        //           value: "2",
        //           text: "Pay is better in other fields for similar types of work ",
        //         },
        //         {
        //           value: "3",
        //           text: "No full-time work is available",
        //         },
        //         {
        //           value: "4",
        //           text: "Experiences of discrimination or harassment ",
        //         },
        //         {
        //           value: "5",
        //           text: "Lack of opportunities for growth",
        //         },
        //         {
        //           value: "6",
        //           text: "Unsafe working conditions",
        //         },
        //         {
        //           value: "7",
        //           text: "Burnout",
        //         },
        //         {
        //           value: "8",
        //           text: "Toxic work environment",
        //         },
        //         {
        //           value: "9",
        //           text: "No longer interested in art / art museums ",
        //         },
        //         {
        //           value: "10",
        //           text: "I don’t believe art museums can change for the better",
        //         },
        //       ],
        //       hasOther: true,
        //       otherText: "Something else (Please specify):",
        //     },
        //   ],
        // },
        // {
        //   name: "page8",
        //   elements: [
        //     {
        //       type: "radiogroup",
        //       name: "question20",
        //       title:
        //         "Have you felt discriminated against or harassed (e.g., due to your gender, sexual orientation, racial or ethnic background, social or economic status, age, disability…) while working in your current museum workplace?",
        //       isRequired: true,
        //       choices: [
        //         {
        //           value: "1",
        //           text: "Yes",
        //         },
        //         {
        //           value: "2",
        //           text: "No",
        //         },
        //         {
        //           value: "3",
        //           text: "Prefer not to answer",
        //         },
        //       ],
        //     },
        //     {
        //       type: "radiogroup",
        //       name: "question21",
        //       visibleIf: "{question20} = 1",
        //       title:
        //         "How often have you felt discriminated against and/or harassed while working in your current museum workplace?",
        //       isRequired: true,
        //       choices: [
        //         {
        //           value: "1",
        //           text: "Always (e.g., daily or almost daily)",
        //         },
        //         {
        //           value: "2",
        //           text: "Usually (e.g., a few times a month)",
        //         },
        //         {
        //           value: "3",
        //           text: "Sometimes (e.g., a few times a year) ",
        //         },
        //         {
        //           value: "4",
        //           text: "Rarely (e.g., one or two times total)",
        //         },
        //       ],
        //     },
        //     {
        //       type: "checkbox",
        //       name: "question22",
        //       visibleIf: "{question20} = 1",
        //       title:
        //         "Which of the following forms of discrimination and/or harassment, have you experienced in your current museum workplace? Please select ALL that apply.",
        //       isRequired: true,
        //       choices: [
        //         {
        //           value: "1",
        //           text: "Discrimination and/or harassment based on gender",
        //         },
        //         {
        //           value: "2",
        //           text: "Discrimination and/or harassment based on sexual orientation",
        //         },
        //         {
        //           value: "3",
        //           text: "Discrimination and/or harassment based on race and/or ethnicity",
        //         },
        //         {
        //           value: "4",
        //           text: "Discrimination and/or harassment based on social or economic status ",
        //         },
        //         {
        //           value: "5",
        //           text: "Discrimination and/or harassment based on age",
        //         },
        //         {
        //           value: "6",
        //           text: "Discrimination and/or harassment based on disability",
        //         },
        //         {
        //           value: "7",
        //           text: "Another form of discrimination and/or harassment",
        //         },
        //         {
        //           value: "8",
        //           text: "I don’t know ",
        //         },
        //       ],
        //     },
        //     {
        //       type: "checkbox",
        //       name: "question23",
        //       visibleIf: "{question20} = 1",
        //       title:
        //         "Have you taken any of the following actions in response to discrimination and/or harassment in your current museum workplace? Please select ALL that apply.",
        //       isRequired: true,
        //       choices: [
        //         {
        //           value: "1",
        //           text: "I filed an official complaint with the HR",
        //         },
        //         {
        //           value: "2",
        //           text: "I filed a grievance with my union",
        //         },
        //         {
        //           value: "3",
        //           text: "I talked to n HR staff member",
        //         },
        //         {
        //           value: "4",
        //           text: "I talked to a non-HR staff member who was in a position to address the situation",
        //         },
        //         {
        //           value: "5",
        //           text: "I did something else",
        //         },
        //         {
        //           value: "6",
        //           text: "I haven’t done anything in response",
        //         },
        //       ],
        //     },
        //     {
        //       type: "checkbox",
        //       name: "question24",
        //       visibleIf: "{question23} = [5]",
        //       title:
        //         "What was your reason for not taking any action in response to the discrimination and harassment you experienced? Please select ALL that apply.",
        //       isRequired: true,
        //       choices: [
        //         {
        //           value: "1",
        //           text: "I worried about retaliation",
        //         },
        //         {
        //           value: "2",
        //           text: "I didn’t think anything would be done about it",
        //         },
        //         {
        //           value: "3",
        //           text: "I didn’t know about what actions I could take",
        //         },
        //         {
        //           value: "4",
        //           text: "My workplace doesn’t provide any mechanisms to report discrimination and/or harassment ",
        //         },
        //       ],
        //     },
        //   ],
        // },
        // {
        //   name: "page9",
        //   elements: [
        //     {
        //       type: "radiogroup",
        //       name: "question25",
        //       title:
        //         "Think about your past 12 months in your workplace (or the timeframe you have worked in your workplace if less than 12 months). Which of the following emotions best describe how you feel about working in your place, overall? Please select the emotion you most associate with working in your workplace.",
        //       isRequired: true,
        //       choices: [
        //         {
        //           value: "1",
        //           text: "Content",
        //         },
        //         {
        //           value: "2",
        //           text: "Excited",
        //         },
        //         {
        //           value: "3",
        //           text: "Worried or afraid",
        //         },
        //         {
        //           value: "4",
        //           text: "Sad or depressed",
        //         },
        //         {
        //           value: "5",
        //           text: "Bored",
        //         },
        //         {
        //           value: "6",
        //           text: "Angry",
        //         },
        //         {
        //           value: "7",
        //           text: "Connected to others",
        //         },
        //         {
        //           value: "8",
        //           text: "Hopeful",
        //         },
        //         {
        //           value: "9",
        //           text: "Happy or joyful",
        //         },
        //         {
        //           value: "10",
        //           text: "Creative and inspired",
        //         },
        //         {
        //           value: "11",
        //           text: "Ambivalent/Unsure",
        //         },
        //       ],
        //     },
        //     {
        //       type: "checkbox",
        //       name: "question26",
        //       title:
        //         "What kind of role, if any, do you have in your museum’s diversity, equity, and inclusion efforts? Please select ALL that apply.",
        //       isRequired: true,
        //       choices: [
        //         {
        //           value: "1",
        //           text: "I personally incorporate principles of diversity, equity, and inclusion in my overall work",
        //         },
        //         {
        //           value: "2",
        //           text: "I am currently a member of a diversity, equity, and inclusion committee at work",
        //         },
        //         {
        //           value: "3",
        //           text: "I was previously a member of a diversity, equity, and inclusion committee at work",
        //         },
        //         {
        //           value: "4",
        //           text: "My position specifically focuses on diversity, equity, and inclusion",
        //         },
        //         {
        //           value: "5",
        //           text: "None of the above, I am not involved in my museum’s diversity, equity, and inclusion efforts",
        //         },
        //         {
        //           value: "6",
        //           text: "Not applicable, my museum does not have any efforts towards diversity, equity, and inclusion ",
        //         },
        //       ],
        //     },
        //   ],
        // },
        // {
        //   name: "page10",
        //   elements: [
        //     {
        //       type: "text",
        //       name: "question27",
        //       title: "In what year were you born?",
        //       isRequired: true,
        //       inputType: "number",
        //       autoComplete: "bday-year",
        //       min: 1900,
        //       max: 2022,
        //       step: 1,
        //     },
        //     {
        //       type: "radiogroup",
        //       name: "question28",
        //       title: "What is your gender? Please select all that apply.",
        //       isRequired: true,
        //       choices: [
        //         {
        //           value: "1",
        //           text: "Female",
        //         },
        //         {
        //           value: "2",
        //           text: "Male",
        //         },
        //         {
        //           value: "3",
        //           text: "Non-binary/genderqueer/third gender",
        //         },
        //         {
        //           value: "4",
        //           text: "Prefer not to answer",
        //         },
        //       ],
        //       hasOther: true,
        //       otherText: "Prefer to self-identify:",
        //     },
        //     {
        //       type: "radiogroup",
        //       name: "question29",
        //       title: "How would you define your sexual orientation?",
        //       isRequired: true,
        //       choices: [
        //         {
        //           value: "1",
        //           text: "Heterosexual  ",
        //         },
        //         {
        //           value: "2",
        //           text: "Lesbian ",
        //         },
        //         {
        //           value: "3",
        //           text: "Gay",
        //         },
        //         {
        //           value: "4",
        //           text: "Bisexual ",
        //         },
        //         {
        //           value: "5",
        //           text: "Pansexual ",
        //         },
        //         {
        //           value: "6",
        //           text: "Asexual",
        //         },
        //         {
        //           value: "7",
        //           text: "I don’t label myself as anything",
        //         },
        //         {
        //           value: "8",
        //           text: "Prefer not to answer",
        //         },
        //       ],
        //       hasOther: true,
        //       otherText: "Prefer to self-identify:",
        //     },
        //   ],
        //   title: "Section 3: DEMOGRAPHICS",
        //   description:
        //     "In this section, we will ask you some personal questions about who you are. We are asking these questions to make sure a diverse group of people participate in this survey. As a reminder, your responses to this survey, including personal information, will be kept anonymous. ",
        // },
        // {
        //   name: "page11",
        //   elements: [
        //     {
        //       type: "checkbox",
        //       name: "question30",
        //       title:
        //         "With which of the following racial and ethnic groups do you identify as? Please select all that apply.",
        //       isRequired: true,
        //       choices: [
        //         {
        //           value: "1",
        //           text: "Asian or Asian American",
        //         },
        //         {
        //           value: "2",
        //           text: "Black or African American",
        //         },
        //         {
        //           value: "3",
        //           text: "Latina, Latino, or Latinx ",
        //         },
        //         {
        //           value: "4",
        //           text: "Indigenous or Native Peoples",
        //         },
        //         {
        //           value: "5",
        //           text: "Middle Eastern or North African",
        //         },
        //         {
        //           value: "6",
        //           text: "Native Hawaiian or other Pacific Islander",
        //         },
        //         {
        //           value: "7",
        //           text: "Native American or Alaska Native",
        //         },
        //         {
        //           value: "8",
        //           text: "White ",
        //         },
        //         {
        //           value: "9",
        //           text: "Prefer not to answer",
        //         },
        //       ],
        //       hasOther: true,
        //       otherText: "Prefer to self-identify:",
        //     },
        //     {
        //       type: "radiogroup",
        //       name: "question31",
        //       title:
        //         "What is the highest level of education that you’ve completed?",
        //       isRequired: true,
        //       choices: [
        //         {
        //           value: "1",
        //           text: "Some high school ",
        //         },
        //         {
        //           value: "2",
        //           text: "High school graduate (high school diploma or the equivalent GED) ",
        //         },
        //         {
        //           value: "3",
        //           text: "Some college/Associates degree",
        //         },
        //         {
        //           value: "4",
        //           text: "Bachelor’s degree ",
        //         },
        //         {
        //           value: "5",
        //           text: "Master’s degree ",
        //         },
        //         {
        //           value: "6",
        //           text: "Professional or doctorate degree ",
        //         },
        //       ],
        //       hasOther: true,
        //       otherText: "Prefer to self-identify:",
        //     },
        //     {
        //       type: "radiogroup",
        //       name: "question32",
        //       title:
        //         "Do you have a long-lasting condition or identify as a person with a disability and/or as neuroatypical/neurodivergent?",
        //       isRequired: true,
        //       choices: [
        //         {
        //           value: "1",
        //           text: "Yes",
        //         },
        //         {
        //           value: "2",
        //           text: "No",
        //         },
        //         {
        //           value: "3",
        //           text: "Prefer not to answer",
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
      showPageTitles: false,
      clearInvisibleValues: "none",
      showPreviewBeforeComplete: "showAnsweredQuestions",
      widthMode: "responsive",
    },
    "hr-only": {
      title: "Additional questions",
      logoPosition: "right",
      completedHtml: "<h3>Thank you for your feedback.</h3>",
      completedHtmlOnCondition: [
        {
          html: "<h3>Thank you for your feedback.</h3><h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>",
        },
        {
          html: "<h3>Thank you for your feedback.</h3><h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5><br />",
        },
      ],
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "multipletext",
              name: "question1",
              title:
                "How many people are currently employed by your organization in each of the following categories? ",
              defaultValue: {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
              },
              items: [
                {
                  name: "1",
                  inputType: "number",
                  title: "Full-Time employee:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "2",
                  inputType: "number",
                  title: "Part-time/Temporary/Seasonal employee:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "3",
                  inputType: "number",
                  title: "Paid intern:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "4",
                  inputType: "number",
                  title: "Unpaid intern:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "5",
                  inputType: "number",
                  title: "Apprentice / Fellow:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "page2",
          elements: [
            {
              type: "multipletext",
              name: "question2",
              title:
                "In the past calendar year, how many part-time staff, temporary staff, and paid interns in your organization received an annual salary or total annual pay of…",
              defaultValue: {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
              },
              items: [
                {
                  name: "1",
                  inputType: "number",
                  title: "Less than $25,000:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "2",
                  inputType: "number",
                  title: "$25,000 – 49,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "3",
                  inputType: "number",
                  title: "$50,000 – 74,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "4",
                  inputType: "number",
                  title: "$75,000 – 99,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "5",
                  inputType: "number",
                  title: "$100,000 – 149,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "6",
                  inputType: "number",
                  title: "$150,000 – 199,000:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "7",
                  inputType: "number",
                  title: "$200,000 – 299,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "8",
                  inputType: "number",
                  title: "More than $300,000:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
              ],
            },
            {
              type: "multipletext",
              name: "question3",
              title:
                "In the past calendar year, how many full-time staff in your organization received an annual salary of…",
              defaultValue: {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
              },
              items: [
                {
                  name: "1",
                  inputType: "number",
                  title: "Less than $25,000:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "2",
                  inputType: "number",
                  title: "$25,000 – 49,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "3",
                  inputType: "number",
                  title: "$50,000 – 74,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "4",
                  inputType: "number",
                  title: "$75,000 – 99,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "5",
                  inputType: "number",
                  title: "$100,000 – 149,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "6",
                  inputType: "number",
                  title: "$150,000 – 199,000:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "7",
                  inputType: "number",
                  title: "$200,000 – 299,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "8",
                  inputType: "number",
                  title: "More than $300,000:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
              ],
            },
            {
              type: "multipletext",
              name: "question4",
              title:
                "In the past calendar year, how many staff received a promotion (with title change and pay increase beyond cost of living) starting at salary band…",
              defaultValue: {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0,
              },
              items: [
                {
                  name: "1",
                  inputType: "number",
                  title: "Less than $25,000:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "2",
                  inputType: "number",
                  title: "$25,000 – 49,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "3",
                  inputType: "number",
                  title: "$50,000 – 74,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "4",
                  inputType: "number",
                  title: "$75,000 – 99,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "5",
                  inputType: "number",
                  title: "$100,000 – 149,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "6",
                  inputType: "number",
                  title: "$150,000 – 199,000:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "7",
                  inputType: "number",
                  title: "$200,000 – 299,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "8",
                  inputType: "number",
                  title: "$300,000 – 399,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "9",
                  inputType: "number",
                  title: "More than $400,000:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "10",
                  inputType: "number",
                  title:
                    "If you don’t have this information by salary, please indicate how many staff in total received a promotion (with title change and pay increase beyond cost of living over the past calendar year:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
              ],
            },
          ],
          description:
            "In the next few questions, we will ask you to fill-in information about the past calendar year. Please consider the “past calendar year” to be the recently completed calendar year (2021).",
        },
        {
          name: "page3",
          elements: [
            {
              type: "multipletext",
              name: "question5",
              title:
                "In the past calendar year, how many staff received a promotion (with title change and pay increase beyond cost of living) starting at salary band…",
              defaultValue: {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0,
              },
              items: [
                {
                  name: "1",
                  inputType: "number",
                  title: "Less than $25,000:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "2",
                  inputType: "number",
                  title: "$25,000 – 49,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "3",
                  inputType: "number",
                  title: "$50,000 – 74,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "4",
                  inputType: "number",
                  title: "$75,000 – 99,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "5",
                  inputType: "number",
                  title: "$100,000 – 149,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "6",
                  inputType: "number",
                  title: "$150,000 – 199,000:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "7",
                  inputType: "number",
                  title: "$200,000 – 299,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "8",
                  inputType: "number",
                  title: "More than $300,000:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "9",
                  inputType: "number",
                  title:
                    "If you don’t have this information by salary, please indicate how many staff in total were hired by the organization over the past calendar year:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
              ],
            },
            {
              type: "text",
              name: "question6",
              title:
                "Thinking now about the past TWO calendar years (2020 and 2021), how many full-time employees have been hired by your organization?",
              defaultValue: 0,
              validators: [
                {
                  type: "numeric",
                  minValue: 0,
                  maxValue: 10000,
                },
              ],
              inputType: "number",
              min: 0,
            },
            {
              type: "text",
              name: "question8",
              visibleIf: "{question6} > 0",
              title:
                "You hired (fill in response from q6) employees over the past two years; how many of those full-time regular employees still work for your organization?",
              defaultValue: 0,
              validators: [
                {
                  type: "numeric",
                  minValue: 0,
                  maxValue: 10000,
                },
              ],
              inputType: "number",
              min: 0,
            },
          ],
        },
        {
          name: "page4",
          elements: [
            {
              type: "multipletext",
              name: "question7",
              title:
                "Over the past calendar year, how many staff members departed your organization (voluntary or involuntary) at salary band:",
              defaultValue: {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0,
              },
              items: [
                {
                  name: "1",
                  inputType: "number",
                  title: "Less than $25,000:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "2",
                  inputType: "number",
                  title: "$25,000 – 49,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "3",
                  inputType: "number",
                  title: "$50,000 – 74,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "4",
                  inputType: "number",
                  title: "$75,000 – 99,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "5",
                  inputType: "number",
                  title: "$100,000 – 149,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "6",
                  inputType: "number",
                  title: "$150,000 – 199,000:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "7",
                  inputType: "number",
                  title: "$200,000 – 299,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "8",
                  inputType: "number",
                  title: "$300,000 – 399,999:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "9",
                  inputType: "number",
                  title: "More than $400,000:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
                {
                  name: "10",
                  inputType: "number",
                  title:
                    "If you don’t have this information by salary, please indicate how many staff in total departed the organization over the past calendar year:",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
              ],
            },
            {
              type: "text",
              name: "question9",
              title:
                "How many of those who departed your organization (voluntary or involuntary) over the past calendar year signed NDAs (Non-disclosure Agreements)?",
              defaultValue: 0,
              validators: [
                {
                  type: "numeric",
                  minValue: 0,
                  maxValue: 10000,
                },
              ],
              inputType: "number",
              min: 0,
            },
          ],
        },
        {
          name: "page5",
          elements: [
            {
              type: "radiogroup",
              name: "question10",
              title: "Is any portion of your employee workforce unionized?",
              choices: [
                {
                  value: "1",
                  text: "Yes",
                },
                {
                  value: "2",
                  text: "No",
                },
                {
                  value: "3",
                  text: "We are currently negotiating our first union contract",
                },
              ],
            },
            {
              type: "text",
              name: "question11",
              visibleIf: "{question10} = 1",
              title: "In what year was your workforce unionized?",
              inputType: "number",
              min: 1900,
              max: 2023,
            },
          ],
        },
        {
          name: "page6",
          elements: [
            {
              type: "matrixdropdown",
              name: "question12",
              title:
                "Which of the following does your organization currently provide for the following types of employees? Please select all that apply.",
              columns: [
                {
                  name: "full-time",
                  title: "Full-time",
                  cellType: "checkbox",
                  choices: [
                    {
                      value: "1",
                      text: "Provided",
                    },
                  ],
                },
                {
                  name: "part-time",
                  title: "Part-time",
                  cellType: "checkbox",
                  choices: [
                    {
                      value: "1",
                      text: "Provided",
                    },
                  ],
                },
                {
                  name: "temporary",
                  title: "Temporary/Seasonal",
                  cellType: "checkbox",
                  choices: [
                    {
                      value: "1",
                      text: "Provided",
                    },
                  ],
                },
              ],
              rows: [
                {
                  value: "1",
                  text: "Health insurance (covered 100% by the employer)",
                },
                {
                  value: "2",
                  text: "Health insurance (covered partially by the employer)",
                },
                {
                  value: "3",
                  text: "Disability insurance (long and short-term)",
                },
                {
                  value: "4",
                  text: "Life insurance",
                },
                {
                  value: "5",
                  text: "Paid time-off",
                },
                {
                  value: "6",
                  text: "Paid sick leave",
                },
                {
                  value: "7",
                  text: "Paid family leave (equal to the city/state requirement)",
                },
                {
                  value: "8",
                  text: "Paid family leave (beyond to the city/state requirement)",
                },
                {
                  value: "9",
                  text: "Workplace safety protections",
                },
                {
                  value: "10",
                  text: "401k/ 403b/ other retirement funds (with employer contribution)",
                },
                {
                  value: "11",
                  text: "401k/ 403b/ other retirement funds (without employer contribution)",
                },
                {
                  value: "12",
                  text: "Mental health coverage ",
                },
                {
                  value: "13",
                  text: "Dental insurance",
                },
                {
                  value: "14",
                  text: "Vision insurance",
                },
                {
                  value: "15",
                  text: "Bereavement leave",
                },
                {
                  value: "16",
                  text: "Funding for professional development ",
                },
              ],
            },
          ],
        },
        {
          name: "page7",
          elements: [
            {
              type: "checkbox",
              name: "question13",
              title:
                "What kind of reporting mechanisms for workplace disputes, harassment, or discrimination are currently in place at your organization? Select all that apply.",
              choices: [
                {
                  value: "1",
                  text: "An HR grievance form",
                },
                {
                  value: "2",
                  text: "An HR staff member who is available to employees",
                },
                {
                  value: "3",
                  text: "A union-provided process for reporting",
                },
                {
                  value: "4",
                  text: "An anonymous reporting mechanism",
                },
                {
                  value: "5",
                  text: "A third-party reporting process (e.g., use of an ombudsman)",
                },
                {
                  value: "6",
                  text: "My organization doesn’t have any reporting mechanisms",
                },
              ],
              hasOther: true,
              noneText: "None",
              otherText: "Other (please specify): ",
            },
          ],
        },
        {
          name: "page8",
          elements: [
            {
              type: "multipletext",
              name: "question14",
              title:
                "In the past calendar year, how many staff (please consider ALL staff members, including Full-Time and Part-Time) have formally and/or informally expressed concern or dissatisfaction related to the following topics:",
              description:
                "If you don’t track informal complaints, please leave that section blank or make your best estimate.",
              defaultValue: {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0,
              },
              items: [
                {
                  name: "10",
                  inputType: "number",
                  title: "Some topic of dissatisfaction",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
              ],
            },
            {
              type: "multipletext",
              name: "question15",
              title:
                "In the previous question, you reported how many staff members made formal and/or informal complaints about various workplace issues in the past calendar year. How many of these complaints resulted in the following outcomes?",
              defaultValue: {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0,
              },
              items: [
                {
                  name: "10",
                  inputType: "number",
                  title: "outcomes",
                  validators: [
                    {
                      type: "numeric",
                      minValue: 0,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "page9",
          elements: [
            {
              type: "text",
              name: "question16",
              title:
                "How many claims were filed with EEOC (Equal Employment Opportunity Commission) last calendar year?",
              defaultValue: 0,
              validators: [
                {
                  type: "numeric",
                  minValue: 0,
                  maxValue: 10000,
                },
              ],
              inputType: "number",
              min: 0,
            },
          ],
        },
      ],
      showQuestionNumbers: "off",
      clearInvisibleValues: "none",
      showPreviewBeforeComplete: "showAnsweredQuestions",
      widthMode: "responsive",
    },
    // TODO: usability error after resolving mpc.compute() bug => takes too long to process jiff_instance.open()
    usability: [
      "data_prefilled",
      {
        time_spent: [
          "page",
          "session-area",
          "tables-area",
          "amount-spent",
          "number-MBEs",
          "addressable-spend",
          "review-and-submit",
        ],
      },
      {
        browser: [
          "chrome",
          "edge",
          "msie",
          "firefox",
          "opera",
          "other",
          "safari",
        ],
      },
      {
        validation_errors: [
          "SESSION_KEY_ERROR",
          "SESSION_INFO_ERROR",
          "PARTICIPATION_CODE_ERROR",
          "SESSION_PARTICIPATION_CODE_SERVER_ERROR",
          "UNCHECKED_ERR",
          "GENERIC_TABLE_ERR",
          "SERVER_ERR",
          "GENERIC_SUBMISSION_ERR",
          "NAN_EMPTY_CELLS",
          "SEMANTIC_CELLS",
          "CELL_ERROR",
        ],
      },
    ],
    cohort_selection: false,
    send_submitter_ids: true,
  };
});
=======
              row: '*',
              col: '*'

            },
            tooltip: {
              errorTitle: 'Invalid Data Entry',
              error: 'Please do not input any text or leave any cells blank. If the value is zero, please input zero.',
              warningTitle: 'Warning: Data is too big',
              warning: 'Are you sure this value is correct?'
            }
          }
        ]
      }
    ],
    survey: {
      header: 'Answer Additional Questions',
      directions: 'We have included these questions to get instant feedback as to how this process went in order to improve the process in future years. Please know that the answers to these questions will be anonymous, and they will be considered separately from the encrypted and aggregated data above.',
      questions: [
        {
          question_text: 'Which department are you in?',
          input_type: 'radio',
          inputs: [
            {
              label: 'Human Resources (e.g. HR Manager, HRIS Manager, Compensation Manager, Talent &amp; Development)',
              value: '1'
            },
            {
              label: 'Operations (e.g. Director of Operations)',
              value: '2'
            },
            {
              label: 'Diversity (e.g. Chief Diversity Officer)',
              value: '3'
            },
            {
              label: 'Upper Management (e.g. COO, CEO, Executive Director)',
              value: '4'
            },
            {
              label: 'Human Resources (e.g. HR Manager, HRIS Manager, Compensation Manager, Talent &amp; Development)',
              value: '5'
            }
          ]
        }
      ]
    },
    usability: [
      'data_prefilled',
        {time_spent: ['page', 'session-area', 'tables-area', 'amount-spent', 'number-MBEs', 'addressable-spend', 'review-and-submit']},
        {browser: ['chrome', 'edge', 'msie', 'firefox', 'opera', 'other', 'safari']},
      {validation_errors: [
        'SESSION_KEY_ERROR',
        'SESSION_INFO_ERROR',
        'PARTICIPATION_CODE_ERROR',
        'SESSION_PARTICIPATION_CODE_SERVER_ERROR',
        'UNCHECKED_ERR',
        'GENERIC_TABLE_ERR',
        'SERVER_ERR',
        'GENERIC_SUBMISSION_ERR',
        'NAN_EMPTY_CELLS',
        'SEMANTIC_CELLS',
        'CELL_ERROR'
      ]
      }
    ],
    cohort_selection: true,
    cohorts: [
            {name: 'Modern'},
            {name: 'Classical'},
    ],
    cohort_threshold: 0,
    send_submitter_ids: true
  };
});
>>>>>>> 2ad0c18 (update packages)
