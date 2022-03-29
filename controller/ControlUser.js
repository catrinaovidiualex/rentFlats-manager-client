import User from "../model/User.js";

class ControlUser{
    constructor(){
        this.list=[];
        
        this.load();            
        }
        
        load=()=>{
        let items=localStorage.getItem("useri");
        
        JSON.parse(items).forEach(user => {
            this.list.push(new User(user.idUser,user.tipUser,user.nume,user.prenume,user.user,user.parola));
            
        });
        
        }
        
        afisare=()=>{
        this.list.forEach((e)=>{
            console.log(e);
        });
        }

        //CRUD

        adaugareUser=(user)=>{

            this.list.push(user);
            localStorage.removeItem("useri");
            localStorage.setItem('useri',JSON.stringify(this.list));
            
            
            }
            
            updateUser=(user)=>{ 
            
                let pozitie=this.pozitieUser(user);
                    
                    if(pozitie!=-1){
                        
                        if(user.tipUser!=""&&user.tipUser){
                            this.list[pozitie].tipUser=user.tipUser;
                        }
                        if(user.nume!=""&&user.nume){
                            this.list[pozitie].nume=user.nume;
                        }
                        if(user.prenume!=""&&user.prenume){
                            this.list[pozitie].prenume=user.prenume;
                        }
                    
                                        
                        if(user.user!=""&&user.user){
                            this.list[pozitie].user=user.user;
                        }
                        if(user.parola!=""&&user.parola){
                            this.list[pozitie].parola=user.parola;
                        }
                    
                        
                        this.save();
                    }
            }
            
            
            
            
            pozitieUser=(user)=>{
            
            for(let i=0;i<this.list.length;i++){
                if(this.list[i].idUser==user.idUser){
                    return i;
                }
            }
            
            return -1;
            
            }
            
            save=()=>{
            localStorage.removeItem("useri");
            localStorage.setItem('useri',JSON.stringify(this.list));
            }
            
            stergeUser=(user)=>{
            let vec=this.list.filter((e)=>e.idUser!=user.idUser);
            this.list=vec;
            this.save();
            
            } 
            
            //todo functie ce  primeste ca  parametru username si parola si returneaza userul daca exista
            
            checkUserDetails(username, pass){
              
                let arr=this.list.filter(e=>e.user===username&&e.parola===pass);
            
                console.log(arr);
                return arr;
            
            }
            

    }

    export default ControlUser;