let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

function handleCellClick() {
    if (!this.textContent) {
        this.textContent = currentPlayer;
        if (checkWin()) {
            alert(`${currentPlayer} wins!`);
            reset();
        } else if (checkDraw()) {
            alert("It's a draw!");
            reset();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            if (currentPlayer === 'O') {
                setTimeout(computerMove, 500);
            }
        }
    }
}

function computerMove() {
    const emptyCells = Array.from(cells).filter(cell => !cell.textContent);
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    emptyCells[randomIndex].textContent = 'O';
    if (checkWin()) {
        alert('Computer wins!');
        reset();
    } else if (checkDraw()) {
        alert("It's a draw!");
        reset();
    } else {
        currentPlayer = 'X';
    }
}

function checkWin() {
    const winningCombos = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
    ];

    return winningCombos.some(combo => {
        return combo.every(pos => {
            return document.getElementById(pos).textContent === currentPlayer;
        });
    });
}

function checkDraw() {
    return Array.from(cells).every(cell => {
        return cell.textContent;
    });
}

function reset() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
}

/*Function to display tic tac toe*/
 
function displayTicTacToe() {
    /* Logic to get table only when hidden */
        if ($(".container").is(':hidden')) {
            $(".container").slideDown(300);
        } else {
            $(".container").slideUp(300);
        }
}   
/* Read the JSON from the HTML container element */
       /* const rawData = document.getElementById('joke-data').textContent;
        const responseJson = JSON.parse(rawData);*/

        /* Extract the array of jokes */
        /*const jokes = responseJson.data.data;*/
        const $jokeBox = $('#joke-box');

        /* Function to display random joke */
        async function displayRandomJoke() {
            /* Logic to get new joke only when hidden */
            if ($jokeBox.is(':hidden')) {
                /*const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];*/
                try {
                    const response = await fetch('https://api.freeapi.app/api/v1/public/randomjokes/random/positive');
                    const responseJson = await response.json();
                    
                    const randomJoke = responseJson.data.content;
                
                }
                catch (error) {
                console.error("Error fetching joke:", error);
                $jokeBox.text("Unfortunately, I could not load a joke at this time.");
                $jokeBox.slideDown(300);
                }
            } 
            else {
                $jokeBox.slideUp(300);
            }
}


/*Functions for Forms "Let's learn more about each other"*/
/*Submission blocker if forms are not filled out*/
    function validateForm() {
        let x = document.forms["myForm"]["choice"].value;
        if (x == "") {
            alert("Your choice must be filled out to proceed!");
            return false;
        }
        else if (document.getElementById('color').value == "#000000") {
            alert("Your eye colour must be filled out to proceed!");
            return false;
        }
    }

/*Summary function*/
    function mySummary() {
        if (document.getElementById('choice1').checked) { 
            document.getElementById('summary').innerHTML = document.getElementById('choice1').value + ", they are really pretty!";
        } else if (document.getElementById('choice2').checked) {
            document.getElementById('summary').innerHTML = document.getElementById('choice2').value + ", we will get along well!";
        } else if (document.getElementById('choice3').checked) {
            document.getElementById('summary').innerHTML = document.getElementById('choice3').value + ", how can I blame you!";
        } else {
            document.getElementById('summary').innerHTML = "What will you select?";
        } 
    }

/* Toggle to show forms*/
function toggleForm() {
    const form = document.getElementById('myForm');
        if (form.style.display === 'none' || form.style.display === '') {
            form.style.display = 'block';
            mySummary(); 
        } else {
            form.style.display = 'none';
        }
}

