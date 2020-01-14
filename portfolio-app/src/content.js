/* This is a javascript file that will contain all the textual content in the portfolio */

const content = {

    //Header section (the navbar content)
    "header" : [
        "Home",
        "About",
        "Resume",
        "Projects",
        "Contact",
    ],

    //About section (Greeting texts composed of big text and small texts + intro texts)
    "home" : {
        "bigText" : "I'm Johnatan,",
        "introText1" : "Front-End Web Developper",
        "introText2" : "Software Engineering Student",
        "socialMedia" : [
            {
                "name" : "Github",
                "link" : "https://github.com/johnatangao",
            },
            {
                "name" : "Linkedin",
                "link" : "https://www.linkedin.com/in/johnatangao/",
            },
            {
                "name" : "Facebook",
                "link" : "https://www.facebook.com/johnatangao",
            },
        ],
    },

    "about" : "Hi! I'm Johnatan, a front-end developer aiming to become a fullstack developer by Summer 2020. I love technology, and eventually I would love to get into Mobile Development, AI/Machine Learning & Data Science ",

    "resume": {
        "education" : [
            {
                "name" : "Montreal Polytechnic",
                "year" : "2019-2023",
                "title" : "B.Ing Software Engineering",
            },
            {
                "name" : "Maisonneuve College",
                "year" : "2017-2019",
                "title" : "DEC Computer Sci. and Math",
            }
        ],

        "experience" : [
            {
                "name" : "Maisonneuve College",
                "year" : "2018-2019",
                "title" : "Computer Science Tutor",
            },
            {
                "name": "Ludex Technologies",
                "year" : "2019-2020",
                "title" : "Web Developer Intern",
            }
        ],

        "certificates" : [
            {
                "name": "FreeCodeCamp",
                "title" : "Responsive Web Design",
                "year" : "2019",
                "link" : "https://www.freecodecamp.org/certification/johnatangao/responsive-web-design",
            },
            {
                "name": "FreeCodeCamp",
                "title" : "Javascript Algo & D.S",
                "year" : "2019",
                "link" : "https://www.freecodecamp.org/certification/johnatangao/javascript-algorithms-and-data-structures"
            }
        ],

    },

    "portfolio" : [
        {
            "name" : "Connect 4",
            "description" : "something something",
            "Github" : "https://github.com/johnatangao/connect4-JS"
        }
    ],

};

export default content;