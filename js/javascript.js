grid = 16; //default
gridSetup(grid);

function gridSetup(grid){
    const container = document.querySelector("#container");
    container.innerHTML = "";

    for(let row = 1 ; row <= grid ; row++){
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row")
        for(let column = 1 ; column <= grid ; column++){
            const box = document.createElement("div");
            box.classList.add("box");

            box.addEventListener("mouseover", () => box.style.backgroundColor = "grey");

            rowDiv.appendChild(box);
        }
        container.appendChild(rowDiv);
    }
}

function newGrid(grid){
    if(grid > 100){
        alert("Max grid size is 100")
        gridSetup(100)
    } else{
        gridSetup(grid)
    }
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => newGrid(parseInt(prompt("Enter Grid Size\nLIMIT: 100 (For Your Sake)"))));
