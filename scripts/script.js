const mainProjet = document.querySelector("#mainProjets");
const divsProjets = document.querySelectorAll(".divProjet");

/*Initialisation des descriptions et de la liste de compétence en display : none*/
for(let divProjet of divsProjets){
    divProjet.classList.remove("affichage");
    divProjet.classList.add("notFocus");
    for(let child of divProjet.children){
        if(child.tagName=="P" || child.tagName=="UL"){
            child.classList.add("invisible");
        }
    }
}

/*Listener pour mettre au sommet le projet cliqué et rendre visible la description et la liste de compétence + ajouter le défilement des illustrations quand le projet est affiché en grand*/
mainProjet.addEventListener("click",(ev)=>{
    const projet = ev.target.closest(".divProjet");
    if(projet){
        for(let divProjet of divsProjets){
            divProjet.classList.remove("affichage");
            divProjet.classList.remove("slider");
            divProjet.classList.add("notFocus");
            for(let child of divProjet.children){
                if(child.tagName=="P" || child.tagName=="UL"){
                    child.classList.add("invisible");
                }
            }
        }
        projet.classList.add("affichage");
        projet.classList.add("slider");
        projet.classList.remove("notFocus");
        for(let child of projet.children){
            if(child.tagName=="P" || child.tagName=="UL"){
                child.classList.remove("invisible");
            }
        }

        /*Remonter douce au click sur un projet*/
        window.scrollTo({
            top: projet.offsetTop,
            behavior: "smooth"
          });
    
        // const sliderProjet = document.querySelector(".sliderContainer>div");
        // sliderProjet.addEventListener("click",(event)=>{
            
        //     const slider = event.currentTarget.cloneNode(true);
        //     slider.removeChild(slider.children[slider.children.length-1]);

        //     const divImage = document.createElement("div");
        //     divImage.classList.add("affichageImage");

        //     let img = event.target.cloneNode(true);
        //     let indexImg = Array.from(slider.children).indexOf(img);
        //     console.log(indexImg);

        //     /*<i class="fa-solid fa-chevron-right"></i>*/
        //     /*Ajout chevrons pour navigation*/

        //     const divChevrons = document.createElement("div");

        //     const chevronGauche = document.createElement("i");
        //     chevronGauche.classList.add("fa-solid");
        //     chevronGauche.classList.add("fa-chevron-left");
        //     divChevrons.appendChild(chevronGauche);

        //     const chevronDroit = document.createElement("i");
        //     chevronDroit.classList.add("fa-solid");
        //     chevronDroit.classList.add("fa-chevron-right");
        //     divChevrons.appendChild(chevronDroit);
            
        //     divImage.appendChild(img);
        //     divImage.appendChild(divChevrons);
        //     mainProjet.appendChild(divImage);

        //     divChevrons.addEventListener("click",(e)=>{
        //         if(e.target==chevronGauche){
        //             if(indexImg==0){
        //                 indexImg=slider.children.length-1;
        //             }else{
        //                 indexImg--;
        //             }
        //         }else if(e.target==chevronDroit){
        //             indexImg=(indexImg+1)%slider.children.length;
        //         }
        //         console.log(indexImg);
        //         const newImg = slider.children[indexImg].cloneNode(true);
        //         divImage.replaceChild(newImg,img);
        //         img=newImg;
        //     })
            
        // })
    
    }
})


