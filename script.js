document.addEventListener('DOMContentLoaded', () => {
    const adviceIdElement = document.getElementById('advice-id');
    const adviceTextElement = document.getElementById('advice-text');
    const diceButton = document.getElementById('dice-button');
  
    const fetchAdvice = async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        adviceIdElement.textContent = `ADVICE #${data.slip.id}`;
        adviceTextElement.textContent = `"${data.slip.advice}"`;
      } catch (error) {
        console.error('Error fetching advice:', error);
      }
    };
  
    diceButton.addEventListener('click', fetchAdvice);
  
    fetchAdvice();
  });
  