
import AddFlat from "../view/AddFlat.js";
import Data from "../Api.js";
import UpdateFlat from "../view/UpdateFlat.js";


class Home{
    constructor(){
    this.data= new Data();

    this.container=document.querySelector(".container");
    this.createHomePage();
 
    this.populateTable();

    this.btnAddFlat=document.querySelector(".adaugareApart");
    this.btnAddFlat.addEventListener("click",this.handleClickApart);


    this.btnUpdateFlat=document.querySelector(".modificaApart");
    this.btnUpdateFlat.addEventListener("click",this.handleUpdateApart);
    this.user=user;




    }

    createHomePage=()=>{

        this.container.innerHTML=`
        <h3>Lista apartamente de inchiriat</h3>
        
        <button class="adaugareApart">Adaugare</button>
        <button class="stergeApart">Stergere</button>
        <button class="modificaApart">Modificare</button>
                    
        
        <table class="tableFlats">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Tip Apartament</th>
                    <th scope="col">Numar camere</th>
                    <th scope="col">Pret</th>
                    <th scope="col">Status</th>
                    <th scope="col">Detalii</th>
                    

                </tr>

            </thead>

            <tbody class="table">
                
            </tbody>

        </table>
        
        
        `

    }


    populateTable=()=>{


        let table=document.querySelector(".table");

        this.controlerApart.list.forEach((e)=>{

            table.innerHTML+=`
          
            <tr>
              <th scope="row">${e.id}</th>
              <td>${e.tip}</td>
              <td>${e.nrCam}</td>
              <td>${e.pret}</td>
              <td>${e.status}</td>
              <td><button class="inchiriazaApart">Inchiriaza</button></td>
            </tr>
                
            `
        })
     }

     handleClickApart=(e)=>{

        e.preventdefault;

        console.log("Adaugare apartament nou");


        new AddFlat();

     }

     // de verificat daca e ok 
     handleUpdateApart=(e)=>{

        let obj=e.target;
        new UpdateFlat(obj.id);
      
     }

     handleUpdateApart=(e)=>{
        let obj=e.target;

        console.log(obj);

     }






}

export default Home;