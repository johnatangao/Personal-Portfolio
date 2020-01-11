/* This is a javascript file that will contain all the textual content in the portfolio */

const content = {

    //Header section (the navbar content)
    "header" : [
        "About",
        "Resume",
        "Projects",
        "Contact",
    ],

    //About section (Greeting texts composed of big text and small texts + intro texts)
    "about" : {
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

    "resume": {
        "education" : [
            {
                "name" : "Montreal Polytechnic",
                "year" : "2019-2023",
                "major" : "Software Engineering",
            },
            {
                "name" : "Maisonneuve College",
                "year" : "2017-2019",
                "major" : "Computer Science and Mathematics"
            }
        ],

        "experience" : [
            {
                "company" : "Maisonneuve College",
                "year" : "2018-2019",
                "title" : "Computer Science Tutor",
            },
            {
                "company": "Ludex Inc",
                "year" : "2019-2020",
                "title" : "Web Developer Intern",
            }
        ],

        "certificates" : [
            {
                "provider": "FreeCodeCamp",
                "name" : "Responsive Web Design",
                "Date" : "2019",
                "link" : "https://www.freecodecamp.org/certification/johnatangao/responsive-web-design",
            },
            {
                "provider": "FreeCodeCamp",
                "name" : "Javascript Algorithms and Data Structures",
                "Date" : "2019",
                "link" : "https://www.freecodecamp.org/certification/johnatangao/javascript-algorithms-and-data-structures"
            }
        ],

    }

};

export default content;