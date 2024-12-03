// Wait until the DOM (HTML structure) is fully loaded before running any JavaScript code
document.addEventListener("DOMContentLoaded", () => {
	// **Header Scroll Effect**
	// This changes the background of the header when the user scrolls down the page
	const header = document.querySelector("header");
	if (header) {
		// Listen for the scroll event on the window (the browser viewport)
		window.addEventListener("scroll", () => {
			// Check if the user has scrolled down (scrollY > 0)
			if (window.scrollY > 0) {
				header.classList.add("scrolled"); // Add a CSS class to style the header
			} else {
				header.classList.remove("scrolled"); // Remove the class if the user scrolls back to the top
			}
		});
	}

	// **Navbar Toggle Functionality**
	// This controls the mobile navigation menu and changes the menu icon
	const mobileNav = document.querySelector("nav"); // The navigation menu
	const navbarToggle = document.querySelector("#navbarToggle"); // The
	const navbarToggleIcon = document.querySelector("#navbarToggle i"); // The menu toggle icon
	if (navbarToggle && mobileNav) {
		navbarToggle.addEventListener("click", () => {
			// Check if the current icon is the menu icon (fa-bars)
			if (navbarToggleIcon.classList.contains("fa-bars")) {
				mobileNav.classList.add("active"); // Show the mobile menu
				navbarToggleIcon.classList.remove("fa-bars");
				navbarToggleIcon.classList.add("fa-times"); // Change icon to "X" (fa-times)
			} else {
				mobileNav.classList.remove("active"); // Hide the mobile menu
				navbarToggleIcon.classList.remove("fa-times");
				navbarToggleIcon.classList.add("fa-bars"); // Change icon back to menu (fa-bars)
			}
		});
	}

	// **Turtle Dropdown Filter**
	// Allows users to filter turtles by type (Sea Turtle, Freshwater Turtle, etc.)
	const turtleType = document.querySelector("#turtle-type"); // Dropdown for turtle type
	const resultsDiv = document.getElementById("results"); // Area to display the filtered results

	if (turtleType && resultsDiv) {
		// Array of turtle species
		const turtles = [
			{
				name: "Leatherback Turtle",
				type: "Sea Turtle",
				description: "The largest sea turtle species, known for its soft, leathery shell.",
			},
			{
				name: "Green Sea Turtle",
				type: "Sea Turtle",
				description: "Named for the greenish fat under its shell.",
			},
			{
				name: "Red-Eared Slider",
				type: "Freshwater Turtle",
				description: "A popular pet turtle with red markings near its ears.",
			},
			{
				name: "Painted Turtle",
				type: "Freshwater Turtle",
				description: "Known for its colorful shell and markings.",
			},
			{
				name: "Galápagos Tortoise",
				type: "Tortoise",
				description: "One of the largest tortoise species, native to the Galápagos Islands.",
			},
			{
				name: "Desert Tortoise",
				type: "Tortoise",
				description: "A land-dwelling tortoise adapted to desert climates.",
			},
		];

		// **Function to display turtles based on filter**
		function displayResults(filter) {
			resultsDiv.innerHTML = ""; // Clear the results area

			// Filter the turtles array to match the selected type
			const filteredTurtles = turtles.filter((turtle) => filter === "all" || turtle.type === filter);

			if (filteredTurtles.length > 0) {
				// Loop through the filtered turtles and create HTML for each turtle
				filteredTurtles.forEach((turtle) => {
					const turtleCard = `
                        <div class="turtle-card">
                            <h3>${turtle.name}</h3>
                            <div class="turtle-card-info">
                                <p><strong>Type:</strong> ${turtle.type}</p>
                                <p class="description">${turtle.description}</p>
                            </div>
                        </div>
                    `;
					resultsDiv.innerHTML += turtleCard; // Add the turtle's HTML to the results area
				});
			} else {
				resultsDiv.innerHTML = "<p>No turtles found for the selected type.</p>";
			}
		}

		// **Dropdown Change Event**
		// Listen for when the user selects a different type of turtle
		turtleType.addEventListener("change", (event) => {
			const selectedType = event.target.value; // Get the selected value
			displayResults(selectedType); // Display the turtles that match the selection
		});

		// Show all turtles by default when the page loads
		displayResults("all");
	}

	// **Fun Facts Section**
	// Displays a random turtle fun fact, and allows the user to generate a new one
	const turtleFunFacts = [
		"Turtles have existed for over 200 million years, surviving the extinction of dinosaurs.",
		"The Leatherback Turtle is the largest turtle species, growing up to 7 feet long.",
		"Sea turtles can hold their breath for several hours, depending on their activity.",
		"Tortoises can live over 150 years, making them some of the longest-living animals on Earth.",
		"The Red-Eared Slider is one of the most popular pet turtle species in the world.",
		"Turtles do not have teeth but use their sharp beaks to tear food.",
		"Some species of turtles can breathe through their butts—this is called cloacal respiration!",
		"The Galápagos Tortoise can weigh over 900 pounds.",
	];

	const funFactElement = document.querySelector(".fun-fact"); // Area to display the fun fact
	const funFactButton = document.querySelector(".btn"); // Button to generate a new fun fact

	if (funFactElement && funFactButton) {
		// **Function to get a random fun fact**
		function getRandomFunFact() {
			const randomIndex = Math.floor(Math.random() * turtleFunFacts.length); // Get a random index
			return turtleFunFacts[randomIndex]; // Return the fun fact at that index
		}

		// **Function to display a fun fact**
		function displayFunFact() {
			funFactElement.textContent = getRandomFunFact(); // Update the text content with a fun fact
		}

		displayFunFact(); // Show a fun fact when the page loads

		// **Button Click Event**
		// Generate a new fun fact when the user clicks the button
		funFactButton.addEventListener("click", () => {
			displayFunFact();
		});
	} else {
		console.error("Fun Fact element or button not found.");
	}

	// **Footer Year**
	// Automatically updates the footer to show the current year
	const footerYear = document.querySelector(".footer-year");
	if (footerYear) {
		footerYear.textContent = new Date().getFullYear(); // Set the text content to the current year
	}

	// **Contact Form**
	// Handles form submissions and logs the data (for testing purposes)
	const contactForm = document.getElementById("contactForm");

	if (contactForm) {
		contactForm.addEventListener("submit", (event) => {
			event.preventDefault(); // Prevent the form from reloading the page

			// Gather the form data into an object
			const formData = {
				name: contactForm.name.value,
				email: contactForm.email.value,
				subject: contactForm.subject.value,
				message: contactForm.message.value,
			};

			console.log("Form Submitted:", formData); // Log the form data to the console

			alert("Thank you for contacting us! We'll get back to you soon."); // Show a success message

			contactForm.reset(); // Clear the form inputs
		});
	}
});
