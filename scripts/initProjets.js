/*Init de la liste de projet*/
const projets = new Projets();

/*Init de chaque projet*/
const damsoV1Projet = new Projet(
    "Damso",
    "Mon premier projet web, réalisé en autonomie au lycée. À l'effigie d'un artiste musical, il était surtout un prétexte pour se lancer dans un projet web responsive, utilisant les technologies HTML et CSS uniquement.",
    ["./images/dems1.png","./images/dems2.png","./images/dems3.png"],
    ["Html","Css"],
    "Web",
    "2022-06-01",
    "2022-07-01"
);

const gestionEspaceAerienProjet = new Projet(
    "Gestion de l'espace aérien français",
    "Cette application en ligne de commande a été réalisée en C, elle visait à lire des fichiers contenant plusieurs informations sur une liste des vols et à les exploiter. Même si plusieurs fonctionnalités ne sont pas fonctionnelles, ce projet a été important dans mon apprentissage du C et des langages de programmation de façon générale.",
    ["./images/avion.png","./images/avion2.png","./images/avion3.png"],
    ["Java","Git"],
    "Java",
    "2023-11-01",
    "2024-01-01"
);

const aichikier = new Projet(
    "Aichikier",
    "Un site d'échecs en ligne utilisant les technologies PHP, JS, HTML, CSS ainsi qu'une base de données MySQL. Ce projet, réalisé par une équipe de 4 personnes, comprend la gestion d'utilisateur ainsi que 3 modes de jeux, le jeu en ligne étant en cours de développement.",
    ["./images/aichikier1.png","./images/aichikier2.png","./images/aichikier3.png"],
    ["Html","Css","JavaScript","Php","Git"],
    "Web",
    "2024-10-01",
    "2025-03-01"
);

const ciraTech = new Projet(
    "Stage chez Cira Technologie : Bora",
    "Dans ce projet, j'ai été le responsable de la création d'une application web. J'ai donc dû me charger de nombreux aspects du développement web, de la partie back-end à la partie front-end, en passant par la configuration du serveur, etc. Cette application est destinée aux employés de l'entreprise pour numériser l'ensemble des processus internes qui sont actuellement sur papier, ainsi que la centralisation de toutes les informations relatives à l'entreprise. Le projet a un véritable enjeu pour celle-ci, les traitements de formulaire papier, que ce soit pour les demandes de travaux ou encore la déclaration des heures de travail des employés, prennent énormément de temps à l'entreprise. Numériser ces processus est un besoin pour elle.",
    ["./images/bora.png","./images/bora2.png","./images/bora3.png"],
    ["Html","Css","JavaScript","Php","Git","PostgreSQL","C"],
    "Web",
    "2025-04-14",
);

/*Ajouts des projets dans la liste*/
projets.ajouterProjet(damsoV1Projet);
projets.ajouterProjet(gestionEspaceAerienProjet);
projets.ajouterProjet(aichikier);
projets.ajouterProjet(ciraTech);


const main = document.querySelector("main");
for(let projet of projets.listeProjets){
    const divProjet = document.createElement("div");
    divProjet.classList.add("divProjet");

    const divImg = document.createElement("div");
    divImg.classList.add("divImg");
    const sliderImg = document.createElement("div");
    for(let image of projet.images){
        const img = document.createElement("img");
        img.alt="Illustration du projet";
        img.src=image;
        sliderImg.appendChild(img);
    }
    /*Copie de la première image pour le slider*/
    sliderImg.appendChild(sliderImg.children[0].cloneNode(true));
    const sliderContainer = document.createElement("div");
    sliderContainer.classList.add("sliderContainer");
    sliderContainer.appendChild(sliderImg);
    divImg.appendChild(sliderContainer);

    const divComp = document.createElement("ul");
    for(competence of projet.competences){
        const comp = document.createElement("li");
        comp.textContent = competence.toUpperCase();
        divComp.appendChild(comp);
    }

    const desc = document.createElement("p");
    desc.textContent=projet.description;

    const date = document.createElement("h3");
    date.textContent=projet.convertirDateFormat(projet.dateDebut);
    projet.dateFin ? date.textContent+=" - " + projet.convertirDateFormat(projet.dateFin) : date.textContent+=" (En cours)";

    const titre = document.createElement("h2");
    titre.textContent="Projet " + projet.domaine + " : " + projet.nom;

    const divEntete= document.createElement("div");
    divEntete.classList.add("divEntete");
    divEntete.appendChild(titre);
    divEntete.appendChild(date);


    divProjet.appendChild(divImg);
    divProjet.appendChild(divEntete);
    divProjet.appendChild(desc);
    divProjet.appendChild(divComp);
    main.appendChild(divProjet);
}
