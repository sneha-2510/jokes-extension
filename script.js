
fetch('https://icanhazdadjoke.com/slack')
  .then(data => data.json())
  .then(jokeData => {

    const jokeText = jokeData.attachments[0].text; //get joke text from data in jokedata
    const jokeElement = document.getElementById('jokeElement'); //access the p tag 

    jokeElement.innerHTML = jokeText; // set its inner html by joke data
  })