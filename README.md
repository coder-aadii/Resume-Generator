# Resume Generator

### A web application that allows users to create resumes based on their domain, select from pre-designed templates, and generate their resume in PDF or DOC format.

---

## Features
- **Domain Selection**: Users can select their domain (e.g., Technical, Management, Medicine).
- **Template Selection**: Based on the domain, users are shown different resume templates to choose from.
- **Dynamic Form**: Users enter their personal and professional details in a form. Fields can be skipped if not applicable.
- **Resume Generation**: After filling in the details, users can generate their resume.
- **Download Options**: Resumes can be downloaded in **PDF** or **DOC** format.

---

## Tech Stack
- **HTML5**: Structuring the web page and form.
- **CSS3**: Styling the UI elements.
- **JavaScript**: Handling interactivity, loading templates, and generating the resume.
- **Libraries**: (To be integrated) jsPDF for PDF generation, DOCX.js for DOC file creation.

---

## Folder Structure
```
resume-generator/
│
├── index.html               # Main HTML page
├── style.css                # Custom styles for the project
├── script.js                # Main logic for form handling and resume generation
└── templates/               # Template files for different domains
    ├── technical-template.html
    ├── management-template.html
    └── medicine-template.html
```

---

## How to Run the Project

1. **Download or Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/resume-generator.git
   ```

2. **Open the Project**:
   Open the `index.html` file in any browser to start the application.

3. **Choose Your Domain**:
   Select a domain (e.g., Technical, Management, Medicine) from the dropdown.

4. **Select a Template**:
   Choose a resume template to customize your resume.

5. **Fill Out the Form**:
   Enter your details in the form. You can skip fields if not applicable.

6. **Generate and Download Resume**:
   After filling in the required details, click the "Generate Resume" button. You will be given the option to download your resume as a **PDF** or **DOC** file.

---

## Future Improvements
- **Dynamic Template Rendering**: Customize templates based on the domain and form data.
- **Backend Integration**: Store user data and provide login functionality for returning users.
- **Additional Templates**: Expand the available templates for more domains and professions.
- **Responsive Design**: Improve the design to work better on mobile and smaller screens.
- **Live Preview**: Show a live preview of the resume as the user fills out the form.

---

## Technologies Used
- **HTML5**: For the structure and form elements.
- **CSS3**: For layout and styling.
- **JavaScript**: For interactivity and logic.
- **jsPDF (Planned)**: For generating PDF files.
- **DOCX.js (Planned)**: For generating DOC files.

---

## Contribution
If you'd like to contribute to this project, feel free to submit a pull request or report issues. Suggestions and feedback are highly appreciated!