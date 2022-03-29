import Apartament from "../model/Apartament.js"

class ControlApartament{
    constructor(){

        this.list=[];

        this.load();
     }


     load=()=>{
        let items=localStorage.getItem("apartamente");
        
        JSON.parse(items).forEach(apart => {
        
        this.list.push(new Apartament(apart.id,apart.tip,apart.nrCam,apart.pret,apart.status));
            
        });
     }

     afisare=()=>{



        this.list.forEach((e)=>{

             console.log(e);
        })
     }

     //CRUD

     adaugareApartamentNou=(apartament)=>{
        this.list.push(apartament);
      
        localStorage.removeItem("apartamente");
        
        localStorage.setItem('apartamente',JSON.stringify(this.list));
     }

     updateApartament=(apartament)=>{

        let poz=this.pozitieApartament(apartament);

        if(poz!=-1){
  
  
             if(apartament.tip!=""&&apartament.tip){
                 this.list[poz].tip=apartament.tip;
                
             }

             if(apartament.nrCam!=""&&apartament.nrCam){
                this.list[poz].nrCam=apartament.nrCam;
               
            }

            if(apartament.pret!=""&&apartament.pret){
                this.list[poz].pret=apartament.pret;
               
            }

            if(apartament.status!=""&&apartament.status){
                this.list[poz].status=apartament.status;
               
            }
  
             
          
          this.save();
        }
  

     }

     pozitieApartament=(apartament)=>{     
        for(let i=0;i<this.list.length;i++){
            if(this.list[i].id==apartament.id){
               return i;
            }
         }
        return -1;
     }

     stergeApartament=(apartament)=>{

    
      
    let vec=this.list.filter((e)=>e.id!=apartament.id);
    this.list=vec;
    this.save();
  
     }


     save=()=>{

        localStorage.removeItem("apartamente");
        localStorage.setItem('apartamente',JSON.stringify(this.list));
        

     
     }

     getApartamentById=(id)=>{

       
        for(let i=0;i<this.list.length;i++){
           if(this.list[i].id==id){
              return this.list[i];
           }
        }
       return -1;
     }




}

export default ControlApartament;