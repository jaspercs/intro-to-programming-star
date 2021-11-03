const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = "Jasper Wei @ " + thisYear;

footer.appendChild(copyright);

const skills = [
  "C# Windows Form",
  "Microsoft Office Certifications",
  "SQL",
  "PHP",
  "Import and export goods declaration",
];

const skillsSection = document.querySelector("#skills");

const skillsList = document.querySelector("#skills ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");

  skill.innerHTML = skills[i];

  skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName("leave_message")[0];

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fName = document.getElementById("name").value;
  const email = document.getElementById("mail").value;
  const message = document.getElementById("message").value;
  //console.log(fName, email, message);

  const messageSection = document.querySelector("#messages");
  const messageList = document.querySelector("#listMessages");
  const newMessage = document.createElement("li");
  newMessage.innerHTML =
    "<a href='mailto:" + email + "'>fName</a> wrote:<span>message</span>}";

  const removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", (e) => {
    const entry = removeButton.parentNode;
    remove(entry);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
  });

  messageForm.reset();
});
