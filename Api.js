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


async getFlatById(id){

    const response = await this.api('/api/flats/'+id);
    const data= await response.json();
    return data;

}
async updateFlat(ft){
    const response= await this.api('/api/flats/update','PUT', ft);
    if (response.status==202){

        return "A fost adaugat";

    }else{
        return "";
    }

}

async deleteFlat(id){
    const response = await this.api(`/api/flats/delete/${id}`,'DELETE');
    if(response.status==202){
        return  "Apartamentul a fost stears";
    }else{
        return"";
        }
}

async sortFlats(){
    const response= await this.api('/api/flats/sortFlats');

    if(response.status==202){

    const flats=await response.json();

    return flats;

    }else{

        return "Eroare la sortare apartamente";
    }
}

async filterByType(type){
    const response= await this.api(`/api/flats/filterFlatsByType/${tip}`);

    if(response.status==202){

    const flats=await response.json();

    return flats;

    }else{

        return "Eroare la filtrare apartamente";
    }

}

async showNewestFlats(){
    const response= await this.api('/api/flats/newestFlat');
    if(response.status==202){
        const flat= await response.json();
        return flat;
    }else{
        return"Eroare la afisare cel mai nou apartament";
    }
}

}