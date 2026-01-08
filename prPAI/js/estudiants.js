// Treballarem sempre amb una variable global, obj, què és una taula on estan 
// guardats tots els accidents de l'any. Qualsevol altre variable que necessitem
// haurà de ser, necessàriament, una variable local.

// Com que al document html no hi ha controladors d'esdeveniments, els haurem de crear aquí:

document.getElementById("exer01").addEventListener("click", exercici01); 
document.getElementById("exer02").addEventListener("click", exercici02); 
document.getElementById("exer03").addEventListener("click", exercici03); 
document.getElementById("exer04").addEventListener("click", exercici04);

// Teniu ja definides les funcions de cada exercici (menys del cinquè), només cal
// que ompliu el codi necessari.

function exercici01() {
    // obj és global i conté totes les files del CSV 
    const total = obj.length; 
   
    // Agafem la zona on hem d’escriure el resultat 
    const zona = document.getElementById("resultats"); 
    
    // Escrivim el resultat 
    zona.innerHTML = `<p>Total d'accidents: <strong>${total}</strong></p>`;
}

function exercici02() {

    const zona = document.getElementById("resultats");
    zona.innerHTML = ""; 

    // Comptador per dies de la setmana
    const comptador = {};

    obj.forEach(acc => {
        const dia = acc.diaSet;
        if (!comptador[dia]) comptador[dia] = 0;
        comptador[dia]++;
    });

    // Trobar el dia amb més accidents
    let diaMax = "";
    let maxAcc = 0;

    for (let dia in comptador) {
        if (comptador[dia] > maxAcc) {
            maxAcc = comptador[dia];
            diaMax = dia;
        }
    }

    zona.innerHTML = `<p>El dia amb més accidents és <strong>${diaMax}</strong> (${maxAcc} accidents)</p>`;

}


function exercici03() {
    const zona = document.getElementById("resultats");
    zona.innerHTML = "";

    // Comptador de districtes (-1, 1...10)
    const comptador = {};

    obj.forEach(acc => {
        const d = acc.nDist;
        if (!comptador[d]) comptador[d] = 0;
        comptador[d]++;
    });

    // Crear la llista
    const ul = document.createElement("ul");

    for (let d in comptador) {
        const li = document.createElement("li");

        // Nom del districte
        let nom = "";
        if (d == -1) nom = "Altres";
        else nom = obj.find(e => e.nDist == d).districte;

        li.textContent = `${nom} → ${comptador[d]} accidents`;
        ul.appendChild(li);
    }

    zona.appendChild(ul);
}


// Funció per crear el formulari
function exercici04() {
    creaFormulari();

    const zona = document.getElementById("resultats");

    // Afegim l'escoltador al select
    const select = document.getElementById("districtes");

    select.addEventListener("change", function () {
        const districteSeleccionat = select.value;

        // Comptar accidents del districte
        let total = 0;

        obj.forEach(acc => {
            if (acc.districte === districteSeleccionat) {
                total++;
            }
        });

        // Mostrar resultat
        const p = document.createElement("p");
        p.innerHTML = `Accidents al districte <strong>${districteSeleccionat}</strong>: ${total}`;
        zona.appendChild(p);
    });
}
