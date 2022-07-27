define([
  "mpc",
  "pki",
  "BigNumber",
  "jiff",
  "jiff_bignumber",
  "jiff_client_restful",
  "table_template",
], function (
  mpc,
  pki,
  BigNumber,
  JIFFClient,
  jiff_bignumber,
  jiff_client_restful,
  table_template
) {
  var cryptoHooks = {
    encryptSign: function (jiff, message, receiver_public_key) {
      // Analyst never encrypts anything
      if (jiff.id === 1) {
        return message;
      }

      // Submitters only encrypt analyst share
      if (
        receiver_public_key == null ||
        receiver_public_key === "" ||
        receiver_public_key === "s1"
      ) {
        return message;
      }

      return pki.encrypt(message, receiver_public_key);
    },
    decryptSign: function (jiff, cipher, secret_key, sender_public_key) {
      // Submitters never decrypt anything
      if (jiff.id !== 1) {
        return cipher;
      }

      // Analyst only decrypts shares from submitters
      if (sender_public_key === "s1") {
        // Do not decrypt messages from the server
        return cipher;
      }

      return pki.decrypt(cipher, secret_key);
    },
    parseKey: function (jiff, keyString) {
      // We really parse just one key, the analyst key
      if (keyString == null || keyString === "" || keyString === "s1") {
        return keyString;
      }

      return pki.parsePublicKey(keyString);
    },
    dumpKey: function (jiff, key) {
      // No one cares about the submitters keys, dump the empty defaults
      if (jiff.id !== 1) {
        return key;
      }

      // Analyst public key will never be dumped except by the analyst
      // do not return anything (undefined) so that the public key
      // is never modified.
    },
  };

  // initialize jiff instance
  var initialize = function (session, role, options) {
    var baseOptions = {
      autoConnect: false,
      sodium: false,
      hooks: {
        createSecretShare: [
          function (jiff, share) {
            share.refresh = function () {
              return share;
            };
            return share;
          },
        ],
      },
      public_keys: {
        s1: `
        -----BEGIN PGP PUBLIC KEY BLOCK-----
        
        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
        0R+O33I=
        =kOyg
        -----END PGP PUBLIC KEY BLOCK-----`,
      },
    };
    baseOptions = Object.assign(baseOptions, options);
    baseOptions.hooks = Object.assign({}, baseOptions.hooks, cryptoHooks);
    var bigNumberOptions = {
      Zp: "618970019642690137449562111", // Must be set to a prime number! Currently 2^89-1
      safemod: false,
    };

    var restOptions = {
      flushInterval: 0,
      pollInterval: 0,
      maxBatchSize: 5000,
    };
    if (role === "analyst") {
      restOptions["flushInterval"] = 6000; // 6 seconds
    }

    var port = window.location.port === "8080" ? ":8080" : "";
    var instance = new JIFFClient(
      window.location.protocol + "//" + window.location.hostname + port,
      session,
      baseOptions
    );
    instance.apply_extension(jiff_bignumber, bigNumberOptions);
    instance.apply_extension(jiff_client_restful, restOptions);

    instance.connect();
    return instance;
  };

  // Client side stuff
  var clientSubmit = function (
    sessionkey,
    userkey,
    dataSubmission,
    callback,
    cohort
  ) {
    var ordering = mpc.consistentOrdering(table_template);
    var values = [];
    // List values according to consistent ordering
    for (var i = 0; i < ordering.tables.length; i++) {
      var t = ordering.tables[i];
      values.push(Math.round(dataSubmission[t.table][t.row][t.col]));
    }

    // Map
    // key - question id
    // value - Map of choice answers to the question
    const answersToQuestions = dataSubmission["questions"];
    if (answersToQuestions) {
      console.log(answersToQuestions);
      ordering.questions.forEach((question, id) => {
        if (answersToQuestions.has(id)) {
          answersToQuestions.get(id).forEach((answer) => {
            values.push(answer);
          });
        }
      });
    }

    for (var k = 0; k < ordering.usability.length; k++) {
      var m = ordering.usability[k].metric;
      var f = ordering.usability[k].field;

      if (f != null && f !== "") {
        values.push(dataSubmission.usability[m][f]);
      } else {
        values.push(dataSubmission.usability[m]);
      }
    }

    // Handle jiff errors returned from server
    var options = {
      onError: function (errorString) {
        callback(null, JSON.stringify({ status: false, error: errorString }));
      },
      initialization: {
        userkey: userkey,
        cohort: cohort,
      },
      party_id: null,
    };

    // Initialize and submit
    var jiff = initialize(sessionkey, "client", options);
    jiff.wait_for([1, "s1"], function () {
      // After initialization
      jiff.restReceive = function () {
        jiff.disconnect(false, false);
        callback.apply(null, arguments);
      };
      // first share table values
      for (var i = 0; i < ordering.tables.length; i++) {
        jiff.share(values[i], null, [1, "s1"], [jiff.id]);
      }
      // then share table values squared (for deviations)
      for (i = 0; i < ordering.tables.length; i++) {
        jiff.share(new BigNumber(values[i]).pow(2), null, [1, "s1"], [jiff.id]);
      }
      // then share the rest
      for (i = ordering.tables.length; i < values.length; i++) {
        const share = jiff.share(values[i], null, [1, "s1"], [jiff.id]);
        console.log({ share, value: values[i] });
      }
      jiff.restFlush();
    });
  };

  // Analyst side stuff
  var computeAndFormat = function (
    sessionkey,
    password,
    secretkey,
    progressBar,
    error,
    callback
  ) {
    var options = {
      onError: error,
      secret_key: pki.parsePrivateKey(secretkey),
      party_id: 1,
      initialization: {
        password: password,
      },
    };

    // Initialize
    var jiff = initialize(sessionkey, "analyst", options);
    // Listen to the submitter ids from server
    jiff.listen("compute", function (party_id, msg) {
      jiff.remove_listener("compute");

      if (party_id !== "s1") {
        return;
      }

      // Meta-info
      var ordering = mpc.consistentOrdering(table_template);
      var submitters = JSON.parse(msg);

      // Compute and Format
      var promise = mpc.compute(jiff, submitters, ordering, progressBar);
      promise
        .then(function (result) {
          jiff.disconnect(false, false);
          callback(mpc.format(result, submitters, ordering));
        })
        .catch(function (err) {
          error(err.toString());
        });
    });
  };

  // Exports
  return {
    client: {
      submit: clientSubmit,
    },
    analyst: {
      computeAndFormat: computeAndFormat,
    },
  };
});
