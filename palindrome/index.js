

    function checkPalindrome() {

        const input = document.getElementById('inputText').value;

        const normalizedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

     
        const reversedInput = normalizedInput.split('').reverse().join('');
 
        const resultDiv = document.getElementById('result');

        if (normalizedInput === reversedInput) {
            resultDiv.textContent = `"${input}" is a palindrome!`;
            resultDiv.className = 'result success';
        } else {
            resultDiv.textContent = `"${input}" is not a palindrome.`;
            resultDiv.className = 'result failure';
        }
    }

