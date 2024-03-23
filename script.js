// Function to handle sending messages in the chatbox
function sendMessage() {
    var userInput = document.getElementById("userInput");
    var message = userInput.value;

    if (message.trim() !== "") {
        var conversation = document.querySelector(".conversation");
        conversation.innerHTML += "<p><strong>You:</strong> " + message + "</p>";
        userInput.value = "";

        // Simulate response from AI assistant
        setTimeout(function() {
            conversation.innerHTML += "<p><strong>AI Assistant:</strong> Thank you for your message! How can I assist you further?</p>";
        }, 1000);
    }
}

// to handle map selection
var mapSelector = document.getElementById("mapSelector");

mapSelector.addEventListener("click", function() {

    var mapContainer = document.createElement("div");
    mapContainer.setAttribute("id", "map");
    mapContainer.style.height = "400px"; // adjust height as needed
    mapContainer.style.width = "100%"; // adjust width as needed
    document.body.appendChild(mapContainer);
    alert("Map Selector clicked!");

    // Initialize map
    var map = new google.maps.Map(mapContainer, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8


    });
});




// Function to initialize Google Map
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}

// Add event listener to map selector button
var mapSelector = document.getElementById("mapSelector");

mapSelector.addEventListener("click", function() {
    // Open map
    if (typeof google === 'object' && typeof google.maps === 'object') {
        initMap(); // Initialize the map
    } else {
        alert("Google Maps API is not loaded. Please try again later."); // Handle error if Google Maps API is not loaded
    }
});

// Add event listeners to book hotel and cab buttons
var hotelButtons = document.querySelectorAll(".hotel");
var cabButtons = document.querySelectorAll(".cab");

hotelButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var placeName = this.parentElement.id;
        alert("You clicked Book Hotel for " + placeName);
        // Implement logic to book hotel for the selected place
    });
});

cabButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var placeName = this.parentElement.id;
        alert("You clicked Book Cab for " + placeName);
        // Implement logic to book cab for the selected place
    });
});

// Initialize Google Maps for each location
function initMap() {
    var delhiMap = new google.maps.Map(document.getElementById('delhiMap'), {
        center: { lat: 28.6139, lng: 77.209 },
        zoom: 12
    });
    // Add markers or other customizations as needed

    var mumbaiMap = new google.maps.Map(document.getElementById('mumbaiMap'), {
        center: { lat: 19.076, lng: 72.8777 },
        zoom: 12
    });
    // Add markers or other customizations as needed

    var goaMap = new google.maps.Map(document.getElementById('goaMap'), {
        center: { lat: 15.2993, lng: 74.124 },
        zoom: 12
    });
    // Add markers or other customizations as needed

    var rajasthanMap = new google.maps.Map(document.getElementById('rajasthanMap'), {
        center: { lat: 27.0238, lng: 74.2179 },
        zoom: 8
    });
    // Add markers or other customizations as needed

    var himachalMap = new google.maps.Map(document.getElementById('himachalMap'), {
        center: { lat: 31.1048, lng: 77.1734 },
        zoom: 8
    });
}