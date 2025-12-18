//PROJECTE FIANAL BIANCA I MARTINA

//Nom i cognom: 
// function validarNomCognom() {
//     let nomCognom = document.getElementById("name").value.trim(); //amb el value.trim() eliminem espais innecessaris
//     let paraules = nomCognom.split(" "); //separem les paraules
//     let resultat = "";
//     for (let i = 0; i < paraules.length; i++) {
//         let paraula = paraules[i];
//         resultat += paraula.charAt(0).toUpperCase() + paraula.slice(1).toLowerCase() + " "; //convertim la primera lletra en majuscula i la resta en minuscula
//     }
//     document.getElementById("name").value = resultat.trim(); //retornem el nom i cognom corregit
//     if (nomCognom === "") return "El nom i cognoms no pot estar buit.";
//     return "";
// }

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
    let edatSeleccionada = document.querySelector('input[name="rang_edat"]:checked');
    if (!edatSeleccionada) {
        return "Si us plau, selecciona un rang d'edat.";
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
// function validarEmail() {
//     const email = document.getElementById("email").value;
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //expressió regular bàsica per validar email


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


