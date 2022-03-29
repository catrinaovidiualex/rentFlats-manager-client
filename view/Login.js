import ControlUser from "../controller/ControlUser.js";
import Home from"../view/Home.js";
import User from "../model/User.js";


 export class Login{
    constructor(){

    this.user= new User();
    this.containerLogin=document.querySelector(".container");

    this.createPageLogin();
    this.userName=document.querySelector(".username");
    this.pass=document.querySelector(".password");
    this.btnLogin=document.querySelector(".butonLogare");
    
    this.btnLogin.addEventListener("click",this.checkUserInfo);
    this.controll = new ControlUser();
    
   

    }


    checkUserInfo=(e)=>{
               

        let sol=this.controll.checkUserDetails(this.userName.value,this.pass.value);


        if(sol.length>0)
        {
            alert("Logare cu succes!"+sol[0].user);
            new Home(sol[0]);   
        }
        else{
            alert("User sau parola gresita!");
        }
                    

        
       
    }


    createPageLogin(){

        this.containerLogin.innerHTML=`
        <div class="containerLogin">
        <h1>Login</h1>
        <form method="loginForm">
            <div class="textField">
                <label for="username">Username</label>
                <input type="text" mandatory class="username">
            </div>

            <div class="textField">
                <label for="password">Parola</label>
                <input type="password" mandatory class="password">
                <span>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                </span>
            </div>

            <div class="forgotPass">Ati uitat parola?<a href="">Modificare parola</a></div>
            <div class="signup_link"><a href="">Cont nou</a></div>

            <button  class="butonLogare">Login</button>

        </form>


    </div>
        
        `
        
    }

 

    


}

export default Login;