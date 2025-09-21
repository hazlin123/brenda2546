const displayElement = document.getElementById('days-together');

// Set your anniversary date here (1 week ago)
const anniversary = new Date();
anniversary.setDate(anniversary.getDate() - 7);

function updateDaysTogether() {
    const now = new Date();
    const diffTime = now - anniversary;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    document.getElementById('days-count').textContent = `${diffDays} day${diffDays > 1 ? 's' : ''}`;
    document.getElementById('since-date').textContent = anniversary.toLocaleDateString(undefined, {
        year: 'numeric', month: 'long', day: 'numeric'
    });
}

// Function to update the display
function updateDisplay() {
    displayElement.textContent = `You and Brenda have been together for ${daysTogether} days!`;
}

// Initialize the display when the page loads
window.onload = () => {
    updateDisplay();
    updateDaysTogether();
};