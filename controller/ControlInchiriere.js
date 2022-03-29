import Inchiriere from "../model/Inchiriere.js";

class ControlInchiriere{

    constructor (){

    this.list=[];
    this.load();

    }

    load=()=>{

        let items=localStorage.getItem("inchirieri");
        JSON.parse(items).forEach(inch => {
        this.list.push(new Inchiriere(inch.idInchiriere,inch.idApartament,inch.idUser));
            
        });

    }

    afisare=()=>{
        this.list.forEach((e)=>{
            console.log(e);
        });
    }

    //CRUD

    adaugareInchiriere=(inch)=>{

        this.list.push(inch);
        localStorage.removeItem("inchirieri");
        localStorage.setItem('inchirieri',JSON.stringify(this.list));
      
        
    }

    updateInchiriere=(inch)=>{

      let pozitie=this.pozitieInchiriere(inch);

      if(pozitie!=-1){
          // daca idApartament nu se modifica si daca aceasta exista
          if(inch.idApartament!=""&&inch.idApartament){
              this.list[pozitie].idApartament=inch.idApartament;
          }

          if(inch.idUser!=""&&inch.idUser){
            this.list[pozitie].idUser=inch.idUser;
        }

       
        this.save();

      }
        
    }


    pozitieInchiriere=(inch)=>{

        for(let i=0;i<this.list.length;i++){
            if(this.list[i].idInchiriere==inch.idInchiriere){
                return i;
            }
        }

        return -1;

    }



    stergeInchiriere=(inch)=>{
        let vec=this.list.filter((e)=>e.idInchiriere!=inch.idInchiriere);
        this.list=vec;
        this.save();

    }

    save=()=>{
        localStorage.removeItem("inchirieri");
        localStorage.setItem('inchirieri',JSON.stringify(this.list));
    }



}


export default ControlInchiriere;