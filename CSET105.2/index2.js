// const prompt = require('prompt-sync')();


function multi(){
    let num1 = Number(prompt('Enter a number:'))
    let para = document.getElementById("div")
   
   

for( let num2 = 1; num2<=10; num2++){
     //let ele = document.createElement("tr")

    let  mult = document.createElement('p')
    // let  result =document.createElement('td')
    mult.innerHTML = `${num1}*${num2} = ${num1*num2}`
    // result.textContent = num1 * num2
    // row.appendChild(mult)
    // row.appendChild(result)
    para.appendChild(mult)
}

}
// multi()

 


let initialColors = [];

    window.onload = function() {
        let buttons = document.getElementsByClassName('button');
        let defaultColors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "cyan", "magenta"]; // Array of initial colors

        // Set the initial colors of all buttons and store them
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = defaultColors[i];
            initialColors.push(defaultColors[i]); // Save the initial color
        }
    }

    function randomcolor() {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }

    function reset() {
        let buttons = document.getElementsByClassName('button');
        // Restore the initial colors of all buttons
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = initialColors[i];
        }
    }

    function changepara(x) {
        let selectcolor = document.getElementById('color').value;
        let buttons = document.getElementsByClassName('button');

        for (let i = 0; i < buttons.length; i++) {
            if (selectcolor === "red") {
                buttons[i].style.backgroundColor = "red";
            } else if (selectcolor === "green") {
                buttons[i].style.backgroundColor = "green";
            } else if (selectcolor === "blue") {
                buttons[i].style.backgroundColor = "blue";
            } else if (selectcolor === "random") {
                buttons[i].style.backgroundColor = randomcolor();
            } else if (selectcolor === "reset") {
                reset();
            }
        }
    }


