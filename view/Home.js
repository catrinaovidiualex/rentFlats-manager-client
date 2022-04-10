
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


    /*this.btnUpdateFlat=document.querySelector(".modificaApart");
    this.btnUpdateFlat.addEventListener("click",this.handleUpdateApart);*/
    




    }

    createHomePage=()=>{

        this.container.innerHTML=`
        <h3>Rental list of flats</h3>
        
        <button class="adaugareApart">Add Flat</button>
        <label for="text" class="filterLabel">Filter by type<label>
        <input type="text" class="inputFilter"></input>
                           
        
        <table class="tableFlats">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Type flat</th>
                    <th scope="col">Number of rooms</th>
                    <th scope="col">Pice</th>
                    <th scope="col">Status</th>
                    <th scope="col">Info</th>
                    

                </tr>

            </thead>

            <tbody class="table">
                
            </tbody>

        </table>

    <div class="otherButtons">
        <button class="anuleaza">Cancel</button>
        <button class="sortare">Sort by price</button>
        <button class="sortAuthor">Sort by status</button>
        <button class="newestFlat">Newest Flat</button>
             
    </div>
        
        
        `

    }


    populateTable= async()=>{

        let flats= await this.data.flats();


        let table=document.querySelector(".table");
        table.innerHTML="";

        flats.forEach((e)=>{

            table.innerHTML+=`
          
            <tr>
              <th scope="row">${e.id}</th>
              <td class="linkFlats">${e.tip}</td>
              <td>${e.nrcam}</td>
              <td>${e.pret}</td>
              <td>${e.status}</td>
              <td><button class="inchiriazaApart">Rent</button></td>
              <td><button class="stergeApart">Delete</button></td>
              <td><button class="modificaApart">Update</button></td>
            </tr>
                
            `
        })
     }

     populateSortedTable=(arr)=>{
         console.log(arr);

        let table=document.querySelector(".table");
        table.innerHTML="";

        arr.forEach((e)=>{

            table.innerHTML+=`
          
            <tr>
              <th scope="row">${e.id}</th>
              <td class="linkFlats">${e.tip}</td>
              <td>${e.nrcam}</td>
              <td>${e.pret}</td>
              <td>${e.status}</td>
              <td><button class="inchiriazaApart">Rent</button></td>
              <td><button class="stergeApart">Delete</button></td>
              <td><button class="modificaApart">Update</button></td>
            </tr>
                
            `
        })
     }

     handleClickApart=(e)=>{

        e.preventdefault;

        console.log("Adaugare apartament nou");


        new AddFlat();

     }


     handleSelectFlat=(e)=>{
        

        let obj=e.target;
  
        if(obj.classList.contains("linkFlats")){
         
            // extragem tipul apartamentului
            

            let id=obj.parentNode.parentNode.id
           
           // afiseaza id-ul de mai sus


           new UpdateFlat(id);

  
  
        }
  
      }
     // de verificat daca e ok 
     /*handleUpdateApart=(e)=>{

        let obj=e.target;
        new UpdateFlat(obj);
      
     }*/

     
     handleSort=async(e)=>{
        let obj=e.target;
        if(obj.classList.contains("sortare")){

         let sortedFlats=await this.data.sortFlats();

         this.populateSortedTable(sortedFlats);

        }

      

     }

   handleFilter=async(e)=>{
      let obj=e.target;


      try{
         if(e.code=="Enter"){

            let filteredBooks=await this.data.filterByTitle(this.btnFilterBooks.value);


           
            this.populateSortedTable(filteredBooks);





         }

      }catch(e){

         console.log(e);
      }

      }

      handleNewestBook=async(e)=>{

        let obj=e.target;
         if(obj.classList.contains("newBook")){

            let newestBook=await this.data.showNewestBook();

            this.populateSortedTable([newestBook]);

         }

      }
  
        
     handleClickCancel=()=>{
     
      new Home();

      } 

    






}

export default Home;