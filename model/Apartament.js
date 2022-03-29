
class Apartament{
      

    constructor(id,tip,nrCam,pret,status){
           this.id=id;
           this.tip=tip;
           this.nrCam=nrCam;
           this.pret=pret;
           this.status=status;
    }

     descriere=()=>{
         let descriere="";
         descriere+=" Id Apartament: "+this.id+",";
         descriere+=" Tip Apartament: "+this.tip+",";
         descriere+=" Numar Camere: "+this.nrCam+",";
         descriere+=" Pret Inchiriere: "+this.pret+",";
         descriere+=" Status Inchiriere: "+this.status+";";
         
         return descriere;
     }


}





export default Apartament;