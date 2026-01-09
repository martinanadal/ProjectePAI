//PROJECTE FIANAL BIANCA I MARTINA

function validarNomCognom() {
    let nomCognom = document.getElementById("name").value.trim();
    if (nomCognom === "") return "El nom i cognoms no pot estar buit.";
    let paraules = nomCognom.split(" ");
    let resultat = "";

    for (let i = 0; i < paraules.length; i++) {
        let paraula = paraules[i];
        resultat += paraula.charAt(0).toUpperCase() + paraula.slice(1).toLowerCase() + " ";
    }

    document.getElementById("name").value = resultat.trim();
    return "";
}





//Rang d'edat:
function validarEdat() {
    let selectEdat = document.getElementById("edat"); // Recordeu canviar l'HTML!
    if (selectEdat.value === "") { // La primera opció ha de tenir value=""
        return "Selecciona una opció d'edat vàlida.";
    }
    return "";
}

//Codi Postal:
function validarCodiPostal() {
    let codiPostal = document.getElementById("cp").value.trim(); //dins de getE... li posem id o for=""?????????
    if (codiPostal.length !== 5 || isNaN(codiPostal)) {
        return "El codi postal ha de tenir exactament 5 dígits.";
    }
    return "";
}

//validar email:
function validarEmail() {
    let email = document.getElementById("email").value;
    let posArrova = email.indexOf("@");
    let posPunt = email.lastIndexOf(".");

    // Comprovacions:
    // 1. Ha de tenir @ (posArrova no pot ser -1)
    // 2. Només una @ (indexOf i lastIndexOf han de coincidir)
    // 3. Ha d'haver-hi un punt DESPRÉS de l'arroba (posPunt > posArrova)
    // 4. L'arroba no pot ser el primer caràcter (posArrova > 0)
    
    if (posArrova === -1 || email.indexOf("@") !== email.lastIndexOf("@")) {
        return "El correu ha de contenir una única '@'.";
    }
    if (posPunt < posArrova) {
        return "El correu ha de tenir un punt després de l'@'.";
    }
    if (posArrova === 0 || posPunt === email.length - 1) {
        return "El correu no és vàlid.";
    }
    return "";
}

//Contrasenya que contingui tot:

function validaContrasenya() {
    let pwd = document.getElementById("contrasenya").value;

    if (pwd.length < 8) {
        return "La contrasenya ha de tenir almenys 8 caràcters.";
    }

    let majuscules = 0;
    let minuscules = 0;
    let digits = 0;
    let especials = 0;

    const especialsPermesos = "!@#$%^&*()_+[]={}\\|,.<>/?";

    for (let i = 0; i < pwd.length; i++) {
        const c = pwd[i];

        if (c >= "A" && c <= "Z") majuscules++;
        else if (c >= "a" && c <= "z") minuscules++;
        else if (c >= "0" && c <= "9") digits++;
        else if (especialsPermesos.includes(c)) especials++;
    }

    if (majuscules < 1) return "La contrasenya ha de tenir almenys una majúscula.";
    if (minuscules < 1) return "La contrasenya ha de tenir almenys una minúscula.";
    if (digits < 2) return "La contrasenya ha de tenir almenys dos dígits.";
    if (especials < 1) return "La contrasenya ha de tenir almenys un caràcter especial.";

    return ""; // cap error
}

//Comprovar que les contrasenyes coincideixin:
function comprovaContrasenyes() {
    let pwd = document.getElementById("contrasenya").value;
    let pwdConfirm = document.getElementById("comprovar").value;
    if (pwd !== pwdConfirm) {
        return "Les contrasenyes no coincideixen.";
    }   
    return "";
}

//Mostrar/ocultar contrasenya:
function mostrarOcultarContrasenya(idInput) {
    let input = document.getElementById(idInput);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

//Política de privacitat:
function validarPolitica() {
    let check = document.getElementById("politica");
    if (!check.checked) return "Has d’acceptar la política de privacitat.";
    return "";
}

//Validació al botó esborrar:  
function onreset() {
    let confirmacio = confirm("Segur que vols esborrar totes les dades del formulari?");

    if (confirmacio) {
        document.getElementById("formulari").reset();
    }
}  

//Validació al botó enviar:
function validarFormulari() {
    let errors = [];    
    let errorNomCognom = validarNomCognom();
    if (errorNomCognom) errors.push(errorNomCognom);
  
    let errorEdat = validarEdat();
    if (errorEdat) errors.push(errorEdat);
  
    let errorCodiPostal = validarCodiPostal();
    if (errorCodiPostal) errors.push(errorCodiPostal);
  
    let errorContrasenya = validaContrasenya();
    if (errorContrasenya) errors.push(errorContrasenya);
  
    let errorComprovaContrasenyes = comprovaContrasenyes();
    if (errorComprovaContrasenyes) errors.push(errorComprovaContrasenyes);   
    
    let errorPolitica = validarPolitica();
    if (errorPolitica) errors.push(errorPolitica);
   
    if (errors.length > 0) {
        alert("Si us plau, corregeix els següents errors:\n" + errors.join("\n"));
        return false; //prevenir l'enviament del formulari
    }
    return true; //permetre l'enviament del formulari
}


