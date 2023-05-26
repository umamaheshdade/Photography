let nameele = document.getElementById("name");
let mailele = document.getElementById("mail");
let Eventele = document.getElementById("Event");
let addressele = document.getElementById("address")
let responseele = document.getElementById("response");
let spinner = document.getElementById("spinner");
let btnele = document.createElement("button");

function display() { // displaying the result..to the customer....
    responseele.textContent = "We got your details and our assistant will call you within 2 hours for further procedures";
    spinner.classList.toggle("d-none");
    card33.appendChild(btnele);
    btnele.textContent = "go back";
    btnele.classList.add("btn", "btn-info", "backbutton");
}


function savedetails() {
    if (nameele.value === "") {
        nameeleerror.textContent = "Required*";
    } else if (mailele.value === "") {
        maileleerror.textContent = "Required*";
    } else if (Eventele.value === "") {
        eventeleerror.textContent = "Required*";
    } else if (addressele.value === "") {
        addresseleerror.textContent = "Required*";
    } else {
        let count = 0;
        let uniqueid = setTimeout(function() { // for the spinner timings.....
            spinner.classList.toggle("d-none");
        }, 0);
        let uniqueid2 = setInterval(function() {
            count = count + 1;
            if (count === 3) {
                clearInterval(uniqueid2);
                clearTimeout(uniqueid);
                display();
            }
        }, 1000);
    }

}
let nameeleerror = document.getElementById("nameerror");
nameele.addEventListener("blur", function(Event) {
    if (Event.target.value === "") {
        nameeleerror.textContent = "Required*";
    } else {
        nameeleerror.textContent = "";
    }

});
let maileleerror = document.getElementById("mailerror");
mailele.addEventListener("blur", function(Event) {
    if (Event.target.value === "") {
        maileleerror.textContent = "Required*";
    } else {
        maileleerror.textContent = "";
    }

})
let eventeleerror = document.getElementById("eventerror");
Eventele.addEventListener("blur", function(Event) {
    if (Event.target.value === "") {
        eventeleerror.textContent = "Required*";
    } else {
        eventeleerror.textContent = "";
    }
});
let addresseleerror = document.getElementById("addresserror");
addressele.addEventListener("blur", function(Event) {
    if (Event.target.value === "") {
        addresseleerror.textContent = "Required*";
    } else {
        addresseleerror.textContent = "";
    }
});
btnele.onclick = function() {
    nameele.value = "";
    mailele.value = "";
    Eventele.value = "";
    addressele.value = "";
    card33.removeChild(btnele);
    responseele.textContent = "";
}