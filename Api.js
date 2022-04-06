export default class Data{
api(path,method="GET",body=null){
    const url="http://localhost:8080"+path;

    const options={
        method,
        headers:{
            'Content-Type':'application/json;chartset=utf-8',
        }
    
    }

    if(body!=null){

        console.log("aici");

   options.body=JSON.stringify(body);
}


return fetch(url,options);
}


async flats(){

    const response= await this.api('/api/flats');

    const data = await response.json();

    return data;

}


async addFlat(flat){

    const response = await this.api('/api/flats/add','POST',flat);

    if(response.status==202){

        return "Est ok";
    }else{

        return "";
    }



}


}