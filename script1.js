document.addEventListener('DOMContentLoaded', () => {
    const notificationButton = document.getElementById('notification-btn');
    const notificationCount = document.getElementById('notification-count');

    notificationButton.addEventListener('click', () => {
        alert('You have new notifications!');
    });

    // Here you can add further functionality or fetch data dynamically
});
