

let form = document.getElementById("form")
form.addEventListener("submit",runFunction)



function runFunction(e)
{
    e.preventDefault();

    let bill = document.getElementById("bill").value;
    let guest = document.getElementById("guest").value;
    let quality = document.getElementById("quality").value;

    if(guest==1){
        let tip = document.createElement("div");
        tip.innerHTML = "The total: $" + (1+rate(quality))*bill;
        let container = document.querySelector("#interface");
        container.appendChild(tip);
    }
    else if(guest>=2){
        let tip = document.createElement("div");
        let total = document.createElement("div");
        total.innerHTML = "Tip/person: $" + rate(quality)*bill/guest
        tip.innerHTML = "Total/person: $" + (1+rate(quality))*bill/guest;
        let container = document.querySelector("#interface");
        container.appendChild(total)
        container.appendChild(tip)
    }
}

function rate(quality)
{
    if(quality=="S"){
        return 0.25;
    }
    if(quality=="A"){
        return 0.20;
    }
    if(quality=="B"){
        return 0.15;
    }
    if(quality=="C"){
        return 0.10;
    }
    if(quality=="D"){
        return 0.05;
    }


}