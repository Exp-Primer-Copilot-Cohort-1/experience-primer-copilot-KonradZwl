function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("member-skills");
    var memberSkillsButton = document.getElementById("member-skills-button");
    var memberSkillsButtonIcon = document.getElementById("member-skills-button-icon");

    if (memberSkills.style.display === "none") {
        memberSkills.style.display = "block";
        memberSkillsButton.style.backgroundColor = "#f5f5f5";
        memberSkillsButtonIcon.style.color = "#000";
    } else {
        memberSkills.style.display = "none";
        memberSkillsButton.style.backgroundColor = "#fff";
        memberSkillsButtonIcon.style.color = "#000";
    }
}