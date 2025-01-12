// Load templates based on the selected color theme
function loadTemplates() {
    const theme = document.getElementById('theme-dropdown').value;
    const templateSelection = document.getElementById('template-selection');
    const templateList = document.getElementById('template-list');
    templateList.innerHTML = '';

    if (theme) {
        // Show template section
        templateSelection.style.display = 'block';

        // Dynamically add templates based on the selected theme
        let templates = [];
        if (theme === 'blue') {
            templates = ['Blue Template 1', 'Blue Template 2'];
        } else if (theme === 'green') {
            templates = ['Green Template 1', 'Green Template 2'];
        } else if (theme === 'black-white') {
            templates = ['Black and White Template 1', 'Black and White Template 2'];
        }

        // Create template cards
        templates.forEach(template => {
            const templateCard = document.createElement('div');
            templateCard.className = 'template-card';
            templateCard.innerText = template;
            templateCard.onclick = () => showForm();
            templateList.appendChild(templateCard);
        });
    }
}

// Show form for resume details
function showForm() {
    document.getElementById('resume-form').style.display = 'block';
}

// Generate resume
function generateResume() {
    // Collecting form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const companyName = document.getElementById('companyName').value;
    const duration = document.getElementById('duration').value;
    const skills = document.getElementById('skills').value;

    // Generate resume content
    const resumeContent = `
        <div class="resume">
            <h1>${name}</h1>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p><strong>Degree:</strong> ${degree}</p>
            <p><strong>Institution:</strong> ${institution}</p>
            <h3>Work Experience</h3>
            <p><strong>Job Title:</strong> ${jobTitle}</p>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><strong>Duration:</strong> ${duration}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        </div>
    `;

    // Display generated resume
    document.getElementById('resume-output').innerHTML = resumeContent;

    // Show download buttons
    document.getElementById('download-section').style.display = 'block';
}

// Download resume as PDF
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Capturing the resume content
    const resumeContent = document.getElementById('resume-output').innerHTML;

    doc.html(resumeContent, {
        callback: function (doc) {
            doc.save('resume.pdf');
        },
        x: 10,
        y: 10
    });
}

// Download resume as DOC
function downloadDOC() {
    const resumeContent = document.getElementById('resume-output').innerHTML;

    // Create a simple Word document content
    const docContent = `
        <html>
            <head><title>Resume</title></head>
            <body>
                ${resumeContent}
            </body>
        </html>
    `;
    
    // Create a Blob with MIME type for Word document
    const blob = new Blob([docContent], { type: 'application/msword' });

    // Create a link to trigger download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.doc';
    link.click();
}

 // Display the resume preview
 const resumePreview = document.getElementById('resume-preview');
 resumePreview.innerHTML = resumeContent;

 // Show the generated resume and download buttons
 document.getElementById('resume-output').style.display = 'block';
 document.getElementById('download-section').style.display = 'block';