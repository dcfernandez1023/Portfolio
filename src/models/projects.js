export const projectModel = [
  {value: "name", type: "string"},
  {value: "timeline", type: "object"},
  {value: "repoLink", type: "link"},
  {value: "appLink", type: "link"},
  {value: "description", type: "string"},
  {value: "role", type: "string"},
  {value: "technologies", type: "array"},
]

export const projects = [
  {
    name: "Productivity Tracker",
    timeline: {
      start: "07/2021",
      end: "07/2021"
    },
    repoLink: "https://github.com/dcfernandez1023/productivity-tracker",
    appLink: "https://expo.io/artifacts/09315cfc-8e0f-49d7-9968-769eb1b77d1b",
    description: `This phone app allows users to set, complete, and view insights/progress
      on their daily goals. (Note: clicking on the 'Productivity Tracker' link above will
      download the Android APK for the phone app)`,
    role: `Built the application end-to-end.`,
    technologies: [
      "React Native",
      "Expo"
    ]
  },
  {
    name: "TrainingDiary",
    timeline: {
      start: "05/2020",
      end: "08/2020"
    },
    repoLink: "https://github.com/dcfernandez1023/training-diary",
    appLink: "https://training-diary-td.herokuapp.com/",
    description: `This application allows users
      to track, analyze, visualize, and personalize their fitness data.  I was motivated to build this application
      because I am passionate about fitness and wanted to have an app where I could dynamically create my own custom fitness categories,
      add data and set goals under each of these categories, and visualize my progress with graphs and pie charts.  I plan to recreate this
      project in the near future as both a web app and mobile app.`,
    role: `I built both the front-end and back-end, handled user login/authentication,
    secured the application's REST APIs, and configured a NoSQL cloud database.`,
    technologies: [
      "React",
      "JavaScript",
      "HTML/CSS",
      "Python",
      "Flask",
      "MongoDB",
      "Heroku"
    ]
  },
  {
    name: "AutoHub",
    timeline: {
      start: "12/2020",
      end: "01/2021"
    },
    repoLink: "https://github.com/dcfernandez1023/AutoHub",
    appLink: "https://auto-hub-car-management.web.app/",
    description: `This application allows users to add information about their automobiles including cost,
    maintenance, and scheduled services.  The application also displays the upcoming maintenance/services for
    the user's cars and warns users of overdue maintenance/services.`,
    role: `I built the front-end and created APIs to interface with Firebase's NoSQL cloud database.`,
    technologies: [
      "React",
      "JavaScript",
      "HTML/CSS",
      "Firebase",
      "Firebase Auth",
      "Firebase Hosting",
      "Cloud Firestore"
    ]
  },
  {
    name: "FernsBingo",
    timeline: {
      start: "12/20",
      end:"12/20"
    },
    repoLink: "https://github.com/dcfernandez1023/ferns-bingo",
    appLink: "https://ferns-bingo.web.app/",
    description: `This application generates unique Bingo cards for people to play Bingo.`,
    role: `I built the front-end and created APIs to interface with Firebase's NoSQL cloud database.`,
    technologies: [
      "React",
      "JavaScript",
      "HTML/CSS",
      "Firebase",
      "Firebase Hosting",
      "Cloud Firestore"
    ]
  }
]
