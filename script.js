document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { title: 'Introduction to Programming', description: 'Learn the basics of programming.', instructor: 'John Doe' },
        { title: 'Advanced Web Development', description: 'Dive deeper into web development techniques.', instructor: 'Jane Smith' },
        { title: 'Data Science Fundamentals', description: 'Understand the basics of data science.', instructor: 'Alice Johnson' }
    ];

    const courseList = document.querySelector('.course-list');

    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course');
        courseItem.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <p><strong>Instructor:</strong> ${course.instructor}</p>
        `;
        courseList.appendChild(courseItem);
    });
});

function searchCourses() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const courses = document.querySelectorAll('.course');

    courses.forEach(course => {
        const title = course.querySelector('h3').textContent.toLowerCase();
        const description = course.querySelector('p').textContent.toLowerCase();

        if (title.includes(query) || description.includes(query)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}
