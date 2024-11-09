interface FormData {
    name: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    schoolName: string;
    schoolYear: string;
    schoolGrade: string;
    collegeName?: string;
    collegeYear?: string;
    collegeGrade: string;
    companyName: string;
    description: string;
    yearStart: string;
    yearEnd: string;
    skills: string[];
    languages: string[];
  }
  
  function handleSubmit(event: Event) {
    event.preventDefault();

    const form = document.getElementById("resume-form") as HTMLFormElement;
    const formData: FormData = {
        name: (document.querySelector('input[name="name"]') as HTMLInputElement).value,
        email: (document.querySelector('input[name="email"]') as HTMLInputElement).value,
        phone: (document.querySelector('input[name="phone"]') as HTMLInputElement).value,
        address: (document.querySelector('input[name="address"]') as HTMLInputElement).value,
        about: (document.querySelector('textarea[name="about"]') as HTMLTextAreaElement).value,
        schoolName: (document.querySelector('input[name="schoolName"]') as HTMLInputElement).value,
        schoolYear: (document.querySelector('input[name="schoolYear"]') as HTMLInputElement).value,
        schoolGrade: (document.querySelector('input[name="schoolGrade"]') as HTMLInputElement).value,
        collegeName: (document.querySelector('input[name="collegeName"]') as HTMLInputElement).value,
        collegeYear: (document.querySelector('input[name="collegeYear"]') as HTMLInputElement).value,
        collegeGrade: (document.querySelector('input[name="collegeGrade"]') as HTMLInputElement).value,
        companyName: (document.querySelector('input[name="companyName"]') as HTMLInputElement).value,
        description: (document.querySelector('textarea[name="description"]') as HTMLTextAreaElement).value,
        yearStart: (document.querySelector('input[name="yearStart"]') as HTMLInputElement).value,
        yearEnd: (document.querySelector('input[name="yearEnd"]') as HTMLInputElement).value,
        skills: (document.querySelector('textarea[name="skills"]') as HTMLInputElement).value.split(","),
        languages: (document.querySelector('textarea[name="languages"]') as HTMLInputElement).value.split(","),
      };
         
  
    displayResume(formData);
 
  }
  
  function displayResume(formData: FormData) {
    document.getElementById("resume-name")!.textContent = formData.name;
    document.getElementById("resume-email")!.textContent = formData.email;
    document.getElementById("resume-phone")!.textContent = formData.phone;
    document.getElementById("resume-address")!.textContent = formData.address;
    document.getElementById("resume-about")!.textContent = formData.about;
  
    document.getElementById("resume-school")!.textContent = formData.schoolName;
    document.getElementById("resume-school-year")!.textContent = formData.schoolYear;
    document.getElementById("resume-school-grade")!.textContent = formData.schoolGrade;
    document.getElementById("resume-college")!.textContent = formData.collegeName || "N/A";
    document.getElementById("resume-college-year")!.textContent = formData.collegeYear || "N/A";
    document.getElementById("resume-college-grade")!.textContent = formData.collegeGrade || "N/A";
  
    document.getElementById("resume-company")!.textContent = formData.companyName;
    document.getElementById("resume-description")!.textContent = formData.description;
    document.getElementById("resume-year-start")!.textContent = formData.yearStart;
    document.getElementById("resume-year-end")!.textContent = formData.yearEnd;
  
    const skillsList = document.getElementById("resume-skills")!;
    skillsList.innerHTML = "";
    formData.skills.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillsList.appendChild(li);
    });
  
    const languagesList = document.getElementById("resume-languages")!;
    languagesList.innerHTML = "";
    formData.languages.forEach(language => {
      const li = document.createElement("li");
      li.textContent = language;
      languagesList.appendChild(li);
    });
  
    document.getElementById("resume")!.style.display = "block";
    document.getElementById("resume-form")!.style.display = "none";
    document.getElementById("resume-form")!.style.opacity= "0";
  }
  
  document.getElementById("resume-form")!.addEventListener("submit", handleSubmit);


  