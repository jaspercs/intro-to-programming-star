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
