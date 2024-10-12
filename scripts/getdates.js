// Get the current year
const yearElement = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Get the last modified date
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = 'Last Updated: ' + document.lastModified;
