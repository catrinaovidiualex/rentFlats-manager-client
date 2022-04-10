


import Home from "../view/Home.js";

export default class UpdateFlat{

    constructor(id){
        this.container=document.querySelector(".container");

        this.createUpdatePage();

      

        /*this.apartament=this.controllerApartamente.getApartById(id);*/
      
       
      
        this.populateInputs();

        this.ap={id};

        this.container=document.querySelector(".updateApart");

        this.container.addEventListener('input',this.handleUpdateOfInputs);

        this.btnModif=document.querySelector(".modifApart");
        this.btnModif.addEventListener("click",this.handleModificaApartament);

        this.btnDeleteAp=document.querySelector(".stergeApartament");
        this.btnDeleteAp.addEventListener("click",this.handleStergeApartament);

        this.btnExitChange=document.querySelector(".anuleazaApart");
        this.btnExitChange.addEventListener("click",this.handleAnuleazaModificare);
       
        
    }

    

    createUpdatePage=()=>{
    
     this.container.innerHTML=`
     <form class="containerModif">
   

     <div class="updateApart">
 
         <h3>Modificare apartament</h3>
     
      
         <label for="text">ID</label>
         <input type="text" class="idApart"></input>
 
         <label for="text">Tip<label>
         <input type="text" class="tipApart"></input>
 
         <label for="text">Nr Camere</label>
         <input type="text" class="nrCamApart"></input>
 
         <label for="text">Pret<label>
         <input type="text" class="pretApart"></input>
         
         <label for="text">Status<label>
         <input type="text" class="statusApart"></input>
     </div>
     
     <div class="buttonsUpdateApart">
         <button class="modifApart">Modifica apartament</button>
         <button class="stergeApartament">Sterge apartament</button>
         <button class="anuleazaApart">Anuleaza</button>
        
     </div> 
 
   
 </form>

     `

    }

    handleUpdateOfInputs=(e)=>{


        let obj=e.target;

        if(obj.classList.contains('tipApart')){

            this.ap.tip=obj.value;
          
        }

        if (obj.classList.contains("nrCamApart")){
            this.ap.nrCam=obj.value;
           
        }

        if (obj.classList.contains("pretApart")){
            this.ap.pret=obj.value;

            
        }

        if (obj.classList.contains("statusApart")){
            this.ap.status=obj.value;

            
        }

        

        

    }

  
    populateInputs=()=>{

        let idApart=document.querySelector(".idApart");
        idApart.value=this.ap.id;

        let tipApart=document.querySelector(".tipApart");
        tipApart.value=this.ap.tip;

        let nrCamApart=document.querySelector(".nrCamApart");
        nrCamApart.value=this.ap.nrCam;
        
        let pretApart=document.querySelector(".pretApart");
        pretApart.value=this.ap.pret;

        let statusApart=document.querySelector(".statusApart");
        statusApart.value=this.ap.status;

    }

    handleModificaApartament=(e)=>{

        e.preventDefault();

        console.log("Modificare apartament");

         this.ControlApartament.updateApartament(this.ap);

       
         new Home();

         
    }

    handleStergeApartament=(e)=>{
        e.preventDefault();
         console.log("Stergere apartament");
         this.ControlApartament.stergeApartament(this.ap);
         new Home();
    }

    handleAnuleazaModificare=(e)=>{
        e.preventDefault();
        new Home();
    }

}
