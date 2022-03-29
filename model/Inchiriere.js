class Inchiriere{
    constructor(idInchiriere,idApartament,idUser){
        this.idInchiriere=idInchiriere;
        this.idApartament=idApartament;
        this.idUser=idUser;
    
        
    }

    descriereInchiriere=()=>{
        let descriereInch="";
        descriereInch+=" ID inchiriere: "+this.idInchiriere+",";
        descriereInch+=" ID apartament: "+this.idApartament+",";
        descriereInch+=" ID user: "+this.idUser+",";
      
        return descriereInch;

        }
    }

    export default Inchiriere;