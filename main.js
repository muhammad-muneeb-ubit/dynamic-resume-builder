// interface FormData {
//     name: string;
//     email: string;
//     phone: string;
//     linkedin?: string;
//     github?: string; 
//     address: string;
//     pic?: File; 
//     about: string;
//     schoolName: string;
//     schoolYear: any; 
//     schoolGrade: string;
//     collegeName?: string;
//     collegeYear: any; 
//     collegeGrade: string;
//     companyName: string;
//     description: string;
//     yearStart: any; 
//     yearEnd: any;  
//     skills: string[]; 
//     languages: string[];
//     reference?: string;
//   }
function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById("resume-form");
    const formData = {
        name: document.querySelector('input[name="name"]').value,
        email: document.querySelector('input[name="email"]').value,
        phone: document.querySelector('input[name="phone"]').value,
        address: document.querySelector('input[name="address"]').value,
        about: document.querySelector('textarea[name="about"]').value,
        schoolName: document.querySelector('input[name="schoolName"]').value,
        schoolYear: document.querySelector('input[name="schoolYear"]').value,
        schoolGrade: document.querySelector('input[name="schoolGrade"]').value,
        collegeName: document.querySelector('input[name="collegeName"]').value,
        collegeYear: document.querySelector('input[name="collegeYear"]').value,
        collegeGrade: document.querySelector('input[name="collegeGrade"]').value,
        companyName: document.querySelector('input[name="companyName"]').value,
        description: document.querySelector('textarea[name="description"]').value,
        yearStart: document.querySelector('input[name="yearStart"]').value,
        yearEnd: document.querySelector('input[name="yearEnd"]').value,
        skills: document.querySelector('textarea[name="skills"]').value.split(","),
        languages: document.querySelector('textarea[name="languages"]').value.split(","),
    };
    displayResume(formData);
}
function displayResume(formData) {
    document.getElementById("resume-name").textContent = formData.name;
    document.getElementById("resume-email").textContent = formData.email;
    document.getElementById("resume-phone").textContent = formData.phone;
    document.getElementById("resume-address").textContent = formData.address;
    document.getElementById("resume-about").textContent = formData.about;
    document.getElementById("resume-school").textContent = formData.schoolName;
    document.getElementById("resume-school-year").textContent = formData.schoolYear;
    document.getElementById("resume-school-grade").textContent = formData.schoolGrade;
    document.getElementById("resume-college").textContent = formData.collegeName || "N/A";
    document.getElementById("resume-college-year").textContent = formData.collegeYear || "N/A";
    document.getElementById("resume-college-grade").textContent = formData.collegeGrade || "N/A";
    document.getElementById("resume-company").textContent = formData.companyName;
    document.getElementById("resume-description").textContent = formData.description;
    document.getElementById("resume-year-start").textContent = formData.yearStart;
    document.getElementById("resume-year-end").textContent = formData.yearEnd;
    const skillsList = document.getElementById("resume-skills");
    skillsList.innerHTML = "";
    formData.skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });
    const languagesList = document.getElementById("resume-languages");
    languagesList.innerHTML = "";
    formData.languages.forEach(language => {
        const li = document.createElement("li");
        li.textContent = language;
        languagesList.appendChild(li);
    });
    document.getElementById("resume").style.display = "block";
    document.getElementById("resume-form").style.display = "none";
    document.getElementById("resume-form").style.opacity = "0";
}
document.getElementById("resume-form").addEventListener("submit", handleSubmit);
// export {};
