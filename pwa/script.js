// Register service worker
if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('service-worker.js')
			.then(function(registration) {
				// Registration successful
			}, function(err) {
				// Registration failed
				console.error('ServiceWorker registration failed:', err);
			});
	});
}

// Optional: Save form data to localStorage (basic example)
window.addEventListener('DOMContentLoaded', function() {
	const formInputs = document.querySelectorAll('input, textarea');
	formInputs.forEach(input => {
		// Load saved value
		if (input.type === 'checkbox') {
			input.checked = localStorage.getItem(input.title) === 'true';
			input.addEventListener('change', () => {
				localStorage.setItem(input.title, input.checked);
			});
		} else {
			input.value = localStorage.getItem(input.title) || '';
			input.addEventListener('input', () => {
				localStorage.setItem(input.title, input.value);
			});
		}
	});
});
