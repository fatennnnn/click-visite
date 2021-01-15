let commercant = document.querySelector(".commerçant-p");
let btnchercher = document.querySelector(".btn-recherche");
let lescommercant = document.querySelector(".commerçant");
let coontain = document.querySelector(".response");
for (let i = 0; i < 12; i++) {
    console.log(commercant.length);
    btnchercher.addEventListener("click", function() {
        let namearechercher = document.querySelector(".input-a-rechercher");

        console.log(lescommercant.value);
        let input = namearechercher.value;
        console.log(input);
        // let titreRecherche = commercant.parentElement.children[2].innerHTML;
        // console.log(titreRecherche);
        namearechercher.innerHTML = "";
        let titreRecherches =
            lescommercant.parentElement.children[i].children[2].innerHTML;
        console.log(titreRecherches);

        lescommercant
            .filter((el) =>
                el.input.toUpperCase().includes(titreRecherches.toUpperCase())
            )
            .map((e) => {
                let cont = document.createElement("div");
                let titrecommerce = document.createElement("p");
                let pcommerce = document.createElement("p");
                let imgcommerce = document.createElement("img");

                cont.appendChild(imgcommerce);
                cont.appendChild(titrecommerce);
                cont.appendChild(pcommerce);
                coontain.prepend(cont);
                pcommerce.innerHTML = titreRecherches;
                titrecommerce.innerHTML =
                    lescommercant.parentElement.children[i].children[1].innerHTML;
                imgcommerce.src =
                    lescommercant.parentElement.children[i].children[0].innerHTML;
            });
    });
}