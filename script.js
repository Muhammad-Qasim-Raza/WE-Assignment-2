function addComputerSkill() {
    const computerSkillsDiv = document.getElementById('computerSkills');
    const newSkillInput = document.createElement('input');
    newSkillInput.type = 'text';
    newSkillInput.placeholder = 'Programming Language';
    computerSkillsDiv.appendChild(newSkillInput);

    const skillLevelSelect = document.createElement('select');
    skillLevelSelect.innerHTML = '<option value="beginner">Beginner</option><option value="programmer">Programmer</option><option value="ninja">Ninja</option>';
    computerSkillsDiv.appendChild(skillLevelSelect);
}

function removeComputerSkill() {
    const computerSkillsDiv = document.getElementById('computerSkills');
    if (computerSkillsDiv.childElementCount > 0) {
        computerSkillsDiv.removeChild(computerSkillsDiv.lastChild);
        computerSkillsDiv.removeChild(computerSkillsDiv.lastChild);
    }
}

function addOtherSkill() {
    const otherSkillsDiv = document.getElementById('otherSkills');
    const newLanguageInput = document.createElement('input');
    newLanguageInput.type = 'text';
    newLanguageInput.placeholder = 'Language';
    otherSkillsDiv.appendChild(newLanguageInput);

    const skillLevelSelect = document.createElement('select');
    skillLevelSelect.innerHTML = '<option value="beginner">Beginner</option><option value="intermediate">Intermediate</option><option value="advanced">Advanced</option>';
    otherSkillsDiv.appendChild(skillLevelSelect);
}

function removeOtherSkill() {
    const otherSkillsDiv = document.getElementById('otherSkills');
    if (otherSkillsDiv.childElementCount > 0) {
        otherSkillsDiv.removeChild(otherSkillsDiv.lastChild);
        otherSkillsDiv.removeChild(otherSkillsDiv.lastChild);
    }
}

function generateCV() {
    // Get form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const birthDate = document.getElementById('birthDate').value;
    const nationality = document.getElementById('nationality').value;
    const company = document.getElementById('company').value;
    const fromDate = document.getElementById('fromDate').value;
    const toDate = document.getElementById('toDate').value;

    const computerSkills = [];
    const computerSkillsInputs = document.querySelectorAll('#computerSkills input');
    const computerSkillsSelects = document.querySelectorAll('#computerSkills select');
    computerSkillsInputs.forEach((input, index) => {
        const language = input.value;
        const skillLevel = computerSkillsSelects[index].value;
        computerSkills.push({ language, skillLevel });
    });

    const otherSkills = [];
    const otherSkillsInputs = document.querySelectorAll('#otherSkills input');
    const otherSkillsSelects = document.querySelectorAll('#otherSkills select');
    otherSkillsInputs.forEach((input, index) => {
        const language = input.value;
        const skillLevel = otherSkillsSelects[index].value;
        otherSkills.push({ language, skillLevel });
    });

    const licenseA = document.getElementById('licenseA').checked;
    const licenseB = document.getElementById('licenseB').checked;
    const licenseC = document.getElementById('licenseC').checked;

    // Generate CV content
    const cvContent = `
        <h2>${firstName} ${lastName}'s CV</h2>
        <p><strong>Personal Information:</strong></p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Gender: ${gender}</p>
        <p>Birth Date: ${birthDate}</p>
        <p>Nationality: ${nationality}</p>

        <p><strong>Last Work Position:</strong></p>
        <p>Company: ${company}</p>
        <p>From: ${fromDate}</p>
        <p>To: ${toDate}</p>

        <p><strong>Computer Skills:</strong></p>
        <ul>
            ${computerSkills.map(skill => `<li>${skill.language} - ${skill.skillLevel}</li>`).join('')}
        </ul>

        <p><strong>Other Skills:</strong></p>
        <ul>
            ${otherSkills.map(skill => `<li>${skill.language} - ${skill.skillLevel}</li>`).join('')}
        </ul>

        <p><strong>Driver's License:</strong></p>
        <p>License A: ${licenseA ? 'Yes' : 'No'}</p>
        <p>License B: ${licenseB ? 'Yes' : 'No'}</p>
        <p>License C: ${licenseC ? 'Yes' : 'No'}</p>
    `;

    // Create a new page to display the CV
    const cvPage = window.open();
    cvPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <title>${firstName} ${lastName}'s CV</title>
        </head>
        <body>
            <div class="container">
                ${cvContent}
            </div>
        </body>
        </html>
    `);
}