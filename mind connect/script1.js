document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const occupation = document.getElementById('occupation').value;
    const email = document.getElementById('email').value;

    console.log('Age:', age);
    console.log('Gender:', gender);
    console.log('Occupation:', occupation);
    console.log('Email:', email);

    alert('Form submitted successfully!');
});
