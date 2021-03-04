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
    name: "TrainingDiary",
    timeline: {
      start: "05/2020",
      end: "08/2020"
    },
    repoLink: "https://github.com/dcfernandez1023/training-diary",
    appLink: "https://training-diary-td.herokuapp.com/",
    description: `I built this application for fun during the summer of 2020.  It is a web application that allows users
      to track, analyze, visualize, and personalize their fitness data.  I was motivated to build this application
      because I am passionate about fitness and wanted to have an app where I could dynamically create my own custom fitness categories,
      add data and set goals under each of these categories, and visualize my progress with graphs and pie charts.  I plan to recreate this
      project in the near future as a mobile app.`,
    role: `I played the role of a full-stack developer in this project by coding both the front-end and back-end, handling user login/authentication,
    securing REST APIs, and configuring a NoSQL cloud database.`,
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
    description: `I built this application during the winter break of my sophomore year.
    It is a web application that allows users to add information about their automobiles including cost,
    maintenance, and scheduled services.  The application also displays the upcoming maintenance/services for
    the user's cars and warns users of overdue maintenance/services.  Though all of this information is user-defined,
    I am working on integrating data from a public car API to provide users with more information about their automobiles.
    `,
    role: ` I played the role of mainly a front-end developer on this project.  I did not need to code or setup a back-end server
    since I used Google Firebase as a serverless back-end.  Their services provided me with access to a real-time database, secure
    login/authentication, encryption over https, file storage, and deployment of the application.
    `,
    technologies: [
      "React",
      "JavaScript",
      "HTML/CSS",
      "Firebase",
      "Cloud Firestore"
    ]
  },
]
