'use strict';

document.querySelector("#submit").addEventListener('click', function()
{
    let gebruikersnaam_var = document.querySelector('#gebruikersnaam').value;
    let wachtwoord_var = document.querySelector("#wachtwoord").value;

    if (gebruikersnaam_var = "John Doe" & wachtwoord_var.length > 9)
    {
        console.log("Je bent ingelogd");
    }
    else {
        console.log("Er is iets misgegaan, je bent niet ingelogd")
    }
});