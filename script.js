
// Get a reference to the button element
const button = document.getElementById('btn');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Replace this URL with the actual path to your PDF document
  const pdfUrl = 'cv.pdf';

  // Open the PDF in a new tab or window
  window.open(pdfUrl, '_blank');
});
const button2 = document.getElementById('openLinkButton');

// Add a click event listener to the button
button2.addEventListener('click', function() {
  // Replace this URL with the actual link you want to open
  const linkUrl = 'https://github.com/mtejal/';

  // Open the link in a new tab or window
  window.open(linkUrl, '_blank');
});
