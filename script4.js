// script.js

// Sample assignments data
const assignments = [
    { id: 1, title: "Build a Responsive Navbar", description: "Create a responsive navigation bar using HTML, CSS, and JavaScript." },
    { id: 2, title: "Create a To-Do List", description: "Develop a to-do list application with add, delete, and edit functionalities." }
];

// Function to display the list of assignments
function loadAssignments() {
    const assignmentList = document.getElementById('assignments');
    assignmentList.innerHTML = assignments.map(assignment => `
        <li>
            <h3>${assignment.title}</h3>
            <button onclick="viewAssignment(${assignment.id})">View Assignment</button>
        </li>
    `).join('');
}

// Function to display the details of an assignment
function viewAssignment(id) {
    const assignment = assignments.find(a => a.id === id);
    const assignmentInfo = document.getElementById('assignment-info');
    const assignmentDetail = document.getElementById('assignment-detail');
    const assignmentList = document.getElementById('assignment-list');

    assignmentList.style.display = 'none';
    assignmentDetail.style.display = 'block';

    assignmentInfo.innerHTML = `
        <h3>${assignment.title}</h3>
        <p>${assignment.description}</p>
    `;

    const editor = ace.edit('code-editor');
    editor.setTheme('ace/theme/monokai');
    editor.session.setMode('ace/mode/javascript');
}

// Function to handle code submission
function handleSubmission() {
    const editor = ace.edit('code-editor');
    const code = editor.getValue();
    const feedback = document.getElementById('feedback');

    // For demonstration purposes, we'll just log the code
    console.log('Submitted Code:', code);

    // Simple feedback mechanism (replace with server-side logic if needed)
    feedback.textContent = 'Your code has been submitted successfully!';
}

// Function to go back to the assignment list
function goBack() {
    const assignmentDetail = document.getElementById('assignment-detail');
    const assignmentList = document.getElementById('assignment-list');

    assignmentList.style.display = 'block';
    assignmentDetail.style.display = 'none';
}

// Event listeners
document.getElementById('submit-code').addEventListener('click', handleSubmission);
document.getElementById('back-button').addEventListener('click', goBack);

// Initial setup
document.addEventListener('DOMContentLoaded', loadAssignments);
