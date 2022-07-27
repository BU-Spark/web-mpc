if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define([], function () {
  return {
    tables: [
      {
        name: 'Table 1',
        element: 'number-paintings', //TODO: what does this element do?
        operations: {SUM: true, STD: true},
        cohortOperations: {SUM: true},
        hot_parameters: {
          rowHeaderWidth: 150,
          height: 230,
          colWidths: [150],
          stretchH: 'none'
        },
        rows: [
          {
            key: 'local',
            label: 'Number of paintings'
          }
        ],
        cols: [
          [
            {
              key: 'value',
              label: 'Test'
            }
          ]
        ],
        types: [
          {
            range: {
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
        ],
        tooltips: [
          {
            range: {
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