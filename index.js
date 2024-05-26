document.addEventListener('DOMContentLoaded', () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1
  let attempts = 3

  const guessInput = document.getElementById('guessInput')
  const submitGuess = document.getElementById('submitGuess')
  const message = document.getElementById('message')

  submitGuess.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value)

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      message.textContent = 'Please enter a valid number between 1 and 100.'
      return
    }

    attempts--

    if (userGuess === randomNumber) {
      message.textContent = `Congratulations! You guessed the right number: ${randomNumber}`

      submitGuess.disabled = true
      guessInput.disabled = true
    } else if (attempts === 0) {
      message.textContent = `Sorry, you've run out of attempts! The number was: ${randomNumber}`

      submitGuess.disabled = true
      guessInput.disabled = true
    } else if (userGuess < randomNumber) {
      message.textContent = `Too low! You have ${attempts} ${
        attempts === 1 ? 'attempt' : 'attempts'
      } left.`
    } else {
      message.textContent = `Too high! You have ${attempts} ${
        attempts === 1 ? 'attempt' : 'attempts'
      } left.`
    }

    guessInput.value = ''
  })
})
