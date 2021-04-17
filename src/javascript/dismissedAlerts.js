let dismissedAlerts = JSON.parse(localStorage.getItem('dismissedAlerts')) || [];

const alertBanner = document.querySelector('.alert');
if (alertBanner && dismissedAlerts.includes(alertBanner.id)) {
    alertBanner.style.display = 'none';
}

function dismissAlert() {
    alertBanner.style.display = 'none';
    dismissedAlerts.push(alertBanner.id);
    localStorage.setItem('dismissedAlerts', JSON.stringify(dismissedAlerts));
}