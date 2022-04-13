
import Home from "../view/Home.js";
import Data from "../Api.js";


class AddFlat{
    constructor(){
    this.containerAddApart=document.querySelector(".container");
    this.createPageAddApart();
    // luam un obiect gol de tip apartament pt a adauga valorile din api in obiect;
    this.apartament= {};

    this.inputFlats= document.querySelector(".inputAddApart");
    this.inputFlats.addEventListener("input",this.handleChangeApart);

    this.add=document.querySelector(".newApart");
    this.add.addEventListener("click",this.handleClickAdd);

    this.cancelBtn=document.querySelector(".anuleaza");
    this.cancelBtn.addEventListener("click",this.handleClickCancel);
    
    
    
    }


    createPageAddApart=()=>{

this.containerAddApart.innerHTML=`
<div class="inputAddApart">
            <h3>Apartament Nou</h3>

            <label for="text">Tip<label>
            <input type="text" class="tipApart"></input>

            <label for="text">Nr Camere</label>
            <input type="text" class="nrCamApart"></input>

            <label for="text">Pret<label>
            <input type="text" class="pretApart"></input>
            
            <label for="text">Status<label>
            <input type="text" class="statusApart"></input>
        </div>

        <div class="buttonsAddApart">
            <input type="submit" value="Add new flat" class="newApart">
            <button class="anuleaza">Cancel</button>
        </div>

`
    }

    handleChangeApart=(e)=>{

        let obj=e.target;

        /*if(obj.classList.contains("idApart")){
           this.apartament.id=obj.value;
          
       }*/


        if(obj.classList.contains("tipApart")){

           this.apartament.tip=obj.value;
         
        }
        if(obj.classList.contains("nrCamApart")){
            this.apartament.nrcam=obj.value;
           
        }

        if(obj.classList.contains("pretApart")){
           this.apartament.pret=obj.value;
           
       }

       if(obj.classList.contains("statusApart")){
        this.apartament.status=obj.value;
        
       }

       



       //console.log(this.apartament);

    }

    handleClickAdd=()=>{
        console.log(this.apartament);
        let d= new Data();
        d.addFlat(this.apartament);
       
        new Home();
       
    }
    handleClickCancel=()=>{
        new Home();

  }  

}

export default AddFlat;