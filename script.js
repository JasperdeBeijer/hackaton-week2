'use strict';  // use strict zorgt ervoor dat er meer errors voorkomen als ik iets doe wat niet kan. dit maakt de code cleaner en het debugging proces makkelijker

// Hier gebruik ik de document.queryselector functie om de 'submit' knop van de login.html pagina te vinden. 
// Hier voeg ik een eventlistener functie aan toe zodat het programma code kan uitvoeren wanneer de gebruiker op de knop drukt
document.querySelector("#submit").addEventListener('click', function()
{
    // Variabelen voor het wachtwoord en gebruikersnaam
    let gebruikersnaam_var = document.querySelector('#gebruikersnaam').value;
    let wachtwoord_var = document.querySelector("#wachtwoord").value;

    // Als de gebruikersnaam niet overeen komt met 'John Doe', en het wachtwoord niet lang genoeg is, dan komt er een negatieve log in de console.
    // Als alles in orde is, dan komt er een positieve log in the console
    // In de toekomst zouden de logs kunnen vervangen met een echt validatiesysteem
    if (gebruikersnaam_var = "John Doe" & wachtwoord_var.length > 9)
    {
        console.log("Je bent ingelogd");
    }
    else {
        console.log("Er is iets misgegaan, je bent niet ingelogd")
    }
});