import { Marca } from "../interfaces/marca";
import { enviroment } from "../interfaces/enviroment";

const BASE_URL: string = enviroment.urlBase() + "Marca";

export const getMarcas = async (): Promise<Marca[]> => {
    const url = `${BASE_URL}`;
    const response = await fetch(url);
    if (!response.ok){
        throw new Error(response.statusText);        
    }
    const data: Marca[] = await response.json();
    return data;
}

export const insertMarca = async (data: Marca): Promise<any> => {
    const url = `${BASE_URL}`;
    console.log(JSON.stringify(data) )
    let result;
    const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            //"Authorization": `Bearer ${JwtToken}`
        },
        body: JSON.stringify(data) 
    })
    
    if (!response.ok){
        throw new Error(response.statusText);        
    }

    result = await response.json();
    console.log(result)
    if(response.ok && response.status == 201){
        return result;
    }
}

export const updateMarca = async (data: Marca): Promise<any> => {
    const url = `${BASE_URL}`;
    console.log(JSON.stringify(data) )
    let result;
    const response = await fetch(`${BASE_URL}?id=${data?.id}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            //"Authorization": `Bearer ${JwtToken}`
        },
        body: JSON.stringify(data) 
    })
    
    if (!response.ok){
        throw new Error(response.statusText);        
    }

    result = await response.json();
    console.log(result)
    if(response.ok && response.status == 200){
        return result;
    }
}