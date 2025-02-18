function volume_sphere(event) {
	//write your code here
    // Prevent the form from submitting
    event.preventDefault();

    // Retrieve the radius value from the input field
    const radiusInput = document.getElementById('radius').value;

    // Convert the input value to a number
    const radius = parseFloat(radiusInput);

    // Validate the input: check if it's a non-negative number
    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN';
        return;
    }

    // Calculate the volume of the sphere using the formula: V = (4/3) * π * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round the volume to four decimal places
    const roundedVolume = volume.toFixed(4);

    // Display the calculated volume in the designated output field
    document.getElementById('volume').value = roundedVolume;
}

// Attach the volume_sphere function to the form's submit event
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};