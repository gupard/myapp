Survey
    .StylesManager
    .applyTheme("default");


var surveyJSON = {
    title: "Tell us, what technologies do you use?", pages: [
        {
            elements: [
                {
                    type: "html",
                    html: "You are about to start my quiz.  You will have to finish it in a short time. Please be ready to answer 10 questions in 2 minutes after clicking the start button."
                },
                {
                    type: "text",
                    name: "userName",
                    title: "Please enter your name:"
                }
            ]
        },
        {
            name: "page1", questions: [
                { type: "radiogroup", choices: ["Yes", "No"], isRequired: true, name: "frameworkUsing", title: "Do you use any front-end framework like Bootstrap?" },
                { type: "checkbox", choices: ["Bootstrap", "Foundation"], hasOther: true, isRequired: true, name: "framework", title: "What front-end framework do you use?", visibleIf: "{frameworkUsing} = 'Yes'" }
            ]
        },
        {
            name: "page2", questions: [
                { type: "radiogroup", choices: ["Yes", "No"], isRequired: true, name: "mvvmUsing", title: "Do you use any MVVM framework?" },
                { type: "checkbox", choices: ["AngularJS", "KnockoutJS", "React"], hasOther: true, isRequired: true, name: "mvvm", title: "What MVVM framework do you use?", visibleIf: "{mvvmUsing} = 'Yes'" }]
        },
        {
            name: "page3", questions: [
                { type: "comment", name: "about", title: "Please tell us about your main requirements for Survey library" }]
        }
    ]
};
var survey = new Survey.Model(surveyJSON);
survey.firstPageIsStarted=true;
survey.maxTimeToFinish=60;
survey.showTimerPanel="top";
survey.showTimerPanelMode="survey";
$("#surveyContainer").SurveyWindow({
    model: survey,
    onComplete: sendDataToServer
});
function sendDataToServer(survey) {
    var resultAsString = JSON.stringify(survey.data);
    alert(resultAsString); //send Ajax request to your web server.
}

SurveyEditor
.StylesManager
.applyTheme("bootstrap");

var editorOptions = {};
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);

// var json = {
//     questions: [
//         {
//             name: "name",
//             type: "text",
//             title: "Please enter your name:",
//             placeHolder: "Jon Snow",
//             isRequired: true
//         }, {
//             name: "birthdate",
//             type: "text",
//             inputType: "date",
//             title: "Your birthdate:",
//             isRequired: true
//         }, {
//             name: "color",
//             type: "text",
//             inputType: "color",
//             title: "Your favorite color:"
//         }, {
//             name: "email",
//             type: "text",
//             inputType: "email",
//             title: "Your e-mail:",
//             placeHolder: "jon.snow@nightwatch.org",
//             isRequired: true,
//             validators: [
//                 {
//                     type: "email"
//                 }
//             ]
//         }
//     ]
// };

// window.survey = new Survey.Model(json);

// survey
//     .onComplete
//     .add(function (result) {
//         document
//             .querySelector('#surveyResult')
//             .innerHTML = "result: " + JSON.stringify(result.data);
//     });

// $("#surveyElement").Survey({ model: survey });