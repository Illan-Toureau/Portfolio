// import * as Projet from './projet.js';

class Projets{

    /*Initialisation de la liste de tous les projets*/
    constructor(){
        this.listeProjets = [];
    }

    /*Ajouter un objet Projet*/
    ajouterProjet(projet){
        this.listeProjets.push(projet);
    }

    /*Tri par date, asc par défaut*/
    trierParDate(sensTri="asc"){
        this.listeProjets.sort((a,b)=>{
            const dateA = a.dateDebut;
            const dateB = b.dateDebut;
            return sensTri === "asc" ? dateA - dateB : dateB - dateA;
        });
    }

    /*Retourne une liste des projets selon le statut, en cours par défaut*/
    recupProjetStatut(statut="en cours"){
        const projetsEnCours=[];
        for(let projet of this.listeProjets){
            if(projet.statut===statut){
                projetsEnCours.push(projet);
            }
        }
        return projetsEnCours;
    }

    /*Retourne une liste de projet selon son domaine*/
    recupProjetDomaine(domaine){
        const projetsDomaine=[];
        for(let projet of this.listeProjets){
            if(projet.domaine===domaine){
                projetsDomaine.push(projet);
            }
        }
        return projetsDomaine;
    }

    recupProjetCompetence(competence){
        const projetsCompetence=[];
        for(let projet of this.listeProjets){
            if(projet.contientCompetence(competence)){
                projetsCompetence.push(projet);
            }
        }
        return projetsCompetence;
    }



}
