/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * This sample shows how to create a simple Trivia skill with a multiple choice format. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */

'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
 */
var questions = [
    {
      "According to Swami, how did Buddha attain the appellation Buddha - the enlightened one?" :
      [
        "By transcending body consciousness",
        "By undergoing great suffering in his personal relationships",
        "By enlightening all his followers",
        "By giving up all his luxurious possessions"
      ],
    },
    {
      "According to Sikhism, what causes people to suffer, thereby creating dualism in human behaviour?" :
      [
        "Identifying oneself as an individual",
        "The human desire to have power",
        "Not surrendering to God",
         "Lack of discrimination",
      ]
    },
    {
      "Jains are the followers of the Jinas. Jina literally means conqueror. According to the Jain philosophy, how does a Jain become a Jina?" :
      [
       "By freeing the soul from karmas",
       "By strict observance of dietary habits",
       "By severing all bonds and relationships",
       "By practicing non-violence"
     ]
    },
    {
      "What is the inner meaning of the Sankranti (Pongal) festival which falls usually in the month of January?":
        [
          "That we should transform ourselves",
          "That we should celebrate with dancing and feasting",
          "That we should give thanks to the moon",
          "That we should stay in the home and read the scriptures"
        ]
    },
    {
      "Swami mentions a well known and apposite saying from China in one Chinese New Year discourse. Can you complete it? The most delicious food is that which is":
        [
        "Acquired by hard work",
        "Good for health and the mind",
        "From ones parents",
        "Hot and nutritious"
      ]
    },
    {
      "Why is Shivarathri considered so auspicious?":
        [
         "Because the moon is waning and the mind\'s power is weak",
          "Because Lord Shiva does not sleep this night",
         "Because Lord Shiva vanquished the demon Naraka",
         "Because Lord Shiva saved the Himalayas from destruction on this night"
      ]
    },
    {
      "What miraculous event happened to Easwaramma during her pregnancy?":
        [
          "She was visited by a dazzling light",
         "cobra danced before her",
         "holy man gave her some pudding as Prasad",
        "She and her husband had a very revealing dream"
        ]
    },
    {
      "According to Swami what did the Buddha conquer?":
      [
        "Desire",
        "A group of pundits who were criticizing him",
        "His fathers kingdom",
        "The need for sleep and food"
      ]
    },
    {
      "Guru Poornima has many significances. One of them is to commemorate Sage Vyasa finishing a well-known scripture. Which one is this?":
        [
          "The Brahma Sutra",
        "The Ramayana",
       "The Bhagavad Gita",
       "The Vedas"
       ]
    },
    {
      "Why Ayudha Puja, Worship of Tools or Weapons is performed ?":
      [
        "To worship the divine powers in man",
        "To give thanks to the army",
        "To commemorate Krishnas victory over the demons",
        "To contemplate on Ahimsa"
      ]
    },
    {
      "The festival of Lights Deepavali commemorates which event in the life of Sri Rama?":
        [
          "The day when He was coronated in Ayodhya after returning from exile",
          "The day when He entered the forest for 14 years of exile",
         "The day when He lifted the bow of Lord Shiva",
         "The day when He helped sage Viswamitra to complete a Yagna, protecting him from the demons"
       ]
    },
    {
      "Ramadan is the holy month of fasting in Islam. How does Swami define the meaning of Islam? Is it":
      [
        "Surrender to God",
        "Knowledge of the scriptures",
       "Love all",
       "Joyfulness"
     ]
   },
   {
     "What day does Swami consider as His real birthday?":
       [
         "The day when God comes into our life",
        "The day Prasanthi Nilayam was inaugurated",
        "The day when India gained freedom from foreign rule",
        "He does not consider that He has a birthday"
      ]
   },
   {
     "Jesus life was one of exemplary service to the poor and suffering. Who inspired this spirit of service in him?":
       [
        "His mother",
        "The priests",
        "A mystical brotherhood called the Essenes",
        "The Jewish scriptures"
        ]
    },
    {
      "Who was the founder of the Hare Krishna movement?":
      [
        "Swami Prabhupada",
        "Swami Nikhilananda",
        "Swami Muktananda",
        "Meher Baba"
      ]
    },
    {
      "Who was the founding father of the Jewish nation? ":
      [
        "Abraham",
        "Moses",
        "Ishmael",
        "Israel"
      ]
    },
    {
      "What does Swami advise us to do when we are angry? ":
      [
        "Avoid the anger through various means",
        "Express it, as we should not suppress our emotions",
        "Express it sometimes, suppress it sometimes",
        "Shout out aloud if need be and let the pent up energy go"
      ]
    },
    {
      "Which religions holy book explicitly prohibits the consumption of alcohol?":
      [
        "Islam",
       "Judaism",
        "Christianity",
        "Hinduism"
      ]
    },
    {
      "How should a Zoroastrian behave if he sees a dead body in a river?":
      [
        "Retrieve the dead body",
        "Make suitable prayers for its journey into the next world",
         "Say some prayers for self-purification",
         "Attempt to sink it underwater"
      ]
    },
    {
      "What one thing does Swami say characterizes the difference between a jnani and an ajnani - or a knower of the truth and an ignorant person?":
      [
        "jnani will remember that he is the not the doer",
        "jnani will give away everything to the poor",
        "jnani will sing the glories of the Lord",
        "jnani will always chant His name no matter what"
      ]
    },
    {
      "Lord Rama had three enemies embodying the three gunas. Kumba Karna, Ravana and Vali. Which guna did Vali symbolise?":
      [
        "The Sathwic guna",
        "The Rajasic guna",
        "The Tamasic guna",
        "mixture of the three gunas"
      ]
    },
    {
      "In Buddhism what is the meaning of the word koan?":
      [
        "Dialogue or story that attempts to awaken the students intuitional understanding of the truth",
        "The traditional simple meal taken by practicing monks",
         "A bell that is tolled during prayer services",
         "The last testament and instructions of the Buddha"
      ]
    },
    {
      "In what context does Swami use the example of a registered letter to teach us an important lesson?":
      [
        "When we have been insulted by someone",
        "When we are unhappy over a lost article",
        "When we are missing our friends and family",
        "When we want a reply from God to our prayers"
      ]
    },
    {
      "In the Bhagavad Gita, Lord Krishna elucidates the seven divine qualities of women. Among women I am fame, fortune, fine speech, memory, intelligence, steadfastness and,  What is the missing quality?":
      [
        "Patience",
        "Love",
        "Generosity",
        "Truth"
      ]
    },
    {
      "Swami tells us that there are the five Ds that students have to cultivate in order to become successful in life. Four of them are dedication, devotion, discipline and discrimination - what is the missing?":
      [
        "Determination",
        "Duty",
        "Desirelessness",
        "Dynamism"
      ]
    },
    {
      "Who was the last of the ten Sikh Gurus?":
      [
        "Guru Gobind Singh",
        "Guru Teg Bahadur",
        "Guru Arjun Dev",
        "Guru Hargobind"
      ]
    },
    {
      "What are the gods known as, in the Shinto religion of Japan?":
      [
        "Samurai",
       	"Kimono",
       	"Kami",
       	"Matsuri"
      ]
    },
    {
      "Which religion teaches the principle of Yin and Yang?":
      [
        "Confucianism",
   		 "Shinto",
   		 "Taoism",
   		 "Buddhism"
      ]
    },
    {
    "How did Lord Krishna leave this world?":
      [
        "By natural means - old age",
    		"Through deathly combat with a demon",
    		"By disappearing into thin air",
    		"Through a poisoned arrow"
      ]
    },
    {
      "The Jewish faith has one day set aside each week for rest and spiritual pursuits. What is the name of this day?":
      [
        "Torah",
       "Sabbath",
       "Bar Mitzvah",
       "Kosher"
      ]
    }
];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

     if (event.session.application.applicationId !== "amzn1.ask.skill.1341e6b3-3f53-4cbe-b84b-714c71cdac6a") {
         context.fail("Invalid Application ID");
      }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
          console.log("onlaunchinmain" + event.request);
          console.log("onlaunchevent session" + event.session);
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
          //console.log("inmain" + event.request);
          //console.log("event session" + event.session);
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;
    //console.log("intent = " + intent);
    //console.log("intentName = " + intentName);
    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "multi faith for sse";

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "Sai Ram, Welcome to Multi Faith For SSE. You'll guess the answer for " + GAME_LENGTH.toString()
            + " questions related to different faiths. Just say the number of the answer.",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = " Multi Faith  Question 1 " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
    // only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "You finished the game ";
            if (currentScore.toString() == 0) {
                speechOutput += "without no score. Better luck next time, Sai Ram.";
            }
            else if (currentScore.toString() == 1) {
                speechOutput += "with a very low score. I'm sure you can do better, Sai Ram.";
            }
            else if (currentScore.toString() == 2) {
                speechOutput += "with a double kill. Your support would be proud, Sai Ram.";
            }
            else if (currentScore.toString() == 3) {
                speechOutput += "with a triple. Way to clean up!";
            }
            else if (currentScore.toString() == 4) {
                speechOutput += "with a quadra score. So close. Sai Ram, Go for the penta!";
            }
            else if (currentScore.toString() == 5) {
                speechOutput += "with a penta full score. Sai Ram, You're going to hit challenger in no time!";
            }
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Multi Faith Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
            }
            speechOutput += userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "Sai Ram, I will ask " + GAME_LENGTH + " multi faith questions. Respond with the number of the correct answer. "
        + "For example, say one, two, three, or four. To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Sai Ram, Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
