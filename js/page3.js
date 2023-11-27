"use strict"

let userWins = 0;
let computerWins = 0;

function play(userChoice)
{
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('rock').style.display = 'none';
    document.getElementById('paper').style.display = 'none';
    document.getElementById('scissors').style.display = 'none';

    document.getElementById(userChoice.toLowerCase()).style.display = 'block';

    document.getElementById('roundResult').innerText = `User choice: ${userChoice}, Computer choice: ${computerChoice}`;

    let result;
    if (userChoice === computerChoice)
    {
        result = 'It\'s a tie!';
    }
    else if 
    (
    
        (userChoice.toLowerCase() === 'rock' && computerChoice === 'Scissors') ||
        (userChoice.toLowerCase()=== 'paper' && computerChoice === 'Rock') ||
        (userChoice.toLowerCase() === 'scissors' && computerChoice === 'Paper')
    )
    {
        result = 'You win!';
        userWins++;
    }
    else
    {
        result = 'Computer wins!';
        computerWins++;
    }

    document.getElementById('userWins').innerText = userWins;
    document.getElementById('computerWins').innerText = computerWins;
    document.getElementById('roundResult').innerText += `\n${result}`;

    setTimeout(clearChoicesAndImages, 5000)
}

function clearChoicesAndImages()
{
    document.getElementById('roundResult').innerText = '';
    document.getElementById('rock').style.display = 'none';
    document.getElementById('paper').style.display = 'none';
    document.getElementById('scissors').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () 
    {
        navLinks.classList.toggle('active');
    });
});