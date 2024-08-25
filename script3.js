function toggleDetails(memberId) {
    const details = document.getElementById(memberId);
    if (details.style.display === 'block') {
        details.style.display = 'none';
    } else {
        details.style.display = 'block';
    }
}
