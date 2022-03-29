class User{
    constructor(idUser,tipUser, nume, prenume,user, parola){
           this.idUser=idUser;
           this.tipUser=tipUser;
           this.nume=nume;
           this.prenume=prenume;
           this.user=user;
           this.parola=parola;
    }

    descrierePersoana=()=>{
           let descriereP="";
           descriereP+=" ID user: "+this.idUser+",";
           descriereP+=" Tip user:"+this.tipUser+",";
           descriereP+=" Nume persoana: "+this.nume+",";
           descriereP+=" Prenume persoana: "+this.prenume+",";
           descriereP+=" User: "+this.user+";";
           descriereP+=" Parola: "+this.parola+";"

           return descriereP;
    }

}

export default User;