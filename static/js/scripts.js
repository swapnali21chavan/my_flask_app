// Assume you have a function to handle file upload on form submit
function handleFileUpload(event) {
    event.preventDefault(); // Prevent default form submission

    // Replace with actual JWT token obtained during login/authentication
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODUyNzg2NywianRpIjoiMDExNGI0NDItOGExYi00OGZjLWI2ZDItZTQyNTM0OGE0ZjQ1IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InRlc3QiLCJuYmYiOjE3MTg1Mjc4NjcsImNzcmYiOiI4MjMzYjFiNi0zYjJhLTQ5ZjUtOTczOS0wZTlkNGFlYzQ3NjciLCJleHAiOjE3MTg1Mjg3Njd9.bb2_DcUfUzBe7QlNxQuv1Xf2zJCuCQCFf19R1Rki5o4';

    // Assuming you have a file input with id 'fileInput'
    const fileInput = document.getElementById('fileInput');

    // Create a FormData object to store the file data
    const formData = new FormData();
    formData.append('image', fileInput.files[0]); // Assuming single file upload

    // Make a POST request to the /upload endpoint
    fetch('/upload', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`, // Include JWT in Authorization header
        },
        body: formData  // Pass FormData object containing the file
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse response as JSON
    })
    .then(data => {
        console.log('Success:', data); // Handle successful response
    })
    .catch(error => {
        console.error('Error:', error); // Handle errors
    });
}

// Example: Add event listener to form submission
const form = document.getElementById('uploadForm');
form.addEventListener('submit', handleFileUpload);

