document.addEventListener('DOMContentLoaded', () => {
    const dice1Element = document.getElementById('dice1');
    const dice2Element = document.getElementById('dice2');
    const totalElement = document.getElementById('total');
    const rollButton = document.querySelector('button'); // Get the button element

    // Function to roll the dice
    function rollDice() {
        // Add rolling animation classes
        dice1Element.classList.add('rolling');
        dice2Element.classList.add('rolling');

        // Disable the button during animation to prevent multiple clicks
        rollButton.disabled = true;

        // Set a timeout to simulate the rolling duration and then display results
        setTimeout(() => {
            const roll1 = Math.floor(Math.random() * 6) + 1; // Generate random number for dice 1 (1-6)
            const roll2 = Math.floor(Math.random() * 6) + 1; // Generate random number for dice 2 (1-6)
            const total = roll1 + roll2; // Calculate the total

            // Update the dice display with the new numbers
            dice1Element.textContent = roll1;
            dice2Element.textContent = roll2;
            // Update the total display
            totalElement.textContent = `Total: ${total}`;

            // Remove rolling animation classes
            dice1Element.classList.remove('rolling');
            dice2Element.classList.remove('rolling');

            // Re-enable the button after the animation finishes
            rollButton.disabled = false;
        }, 1000); // The duration of the rolling animation (1 second)
    }

    // Attach the rollDice function to the button's click event
    rollButton.addEventListener('click', rollDice);

    // Initial state: set dice to '?' and total to 0 when the page loads
    dice1Element.textContent = '?';
    dice2Element.textContent = '?';
    totalElement.textContent = 'Total: 0';
});