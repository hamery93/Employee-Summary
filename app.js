const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const jest = require("jest");
const generateHTML = require("./generateHTML")
const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
  return inquirer.prompt([

    //manager
      {
          type: "input",
          name: "nameManager",
          message: "Enter manager name: "
      },
      {
          type: "input",
          name: "idManager",
          message: "Enter manager ID: "
      },
      {
          type: "input",
          name: "emailManager",
          message: "Enter manager email: "
      },
      {
          type: "input",
          name: "officeManager",
          message: "Enter manager office number: "
      },

      //engineer
      {
          type: "input",
          name: "nameEng",
          message: "Enter name of engineer: "
      },
      {
          type: "input",
          name: "idEng",
          message: "Enter ID of engineer: "
      },
      {
          type: "input",
          name: "emailEng",
          message: "Enter email of engineer: "
      },
      {
          type: "input",
          name: "gitEng",
          message: "Enter GitHub Username of engineer: "
      },
          

      {
          type: "input",
          name: "nameIntern",
          message: "Enter name of Intern: "
      },
      {
          type: "input",
          name: "idIntern",
          message: "Enter ID of Intern: "
      },
      {
          type: "input",
          name: "emailIntern",
          message: "Enter email of Intern:"
      },
      {
          type: "input",
          name: "schoolIntern",
          message: "Enter school that intern attended: "
      },
     
  ]);
}


async function init() {
  console.log("hi")
  try {
      const answers = await promptUser();

      const html = generateHTML(answers);
    //writeFile will creat html page with the answers
      await writeFileAsync("index.html", html);

      console.log("Successfully wrote to index.html");
  } catch (err) {
      console.log(err);
  }
}

init();