class Projet{

    /*Format de la date : "yyyy-mm-jj"
    dateFin = null par défaut
    */
    constructor(nom,description,images,competences,domaine,dateDebut,dateFin=null){
        this.nom=nom;
        this.description=description;
        this.images=images;
        this.competences=competences;
        this.domaine=domaine;
        this.dateDebut=dateDebut;
        this.dateFin=dateFin;
    }

    /*Retourne true si le projet contient la compétence passée en paramètre, false sinon*/
    contientCompetence(competence){
        for(let compe of this.competences){
            if(compe===competence){
                return true;
            }
        }
        return false;
    }

    convertirDateFormat(inputDate){
        const date = new Date(inputDate);
        const options = {year: "numeric", month: "long"};
        return date.toLocaleDateString("fr-FR", options );
    }

}