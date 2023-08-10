import { Ciudad } from "../interfaces/ciudad";
import { enviroment } from "../interfaces/enviroment";

const BASE_URL: string = enviroment.urlBase() + "Ciudad";

export const getCiudades = async (): Promise<Ciudad[]> => {
    const url = `${BASE_URL}`;
    const response = await fetch(url);
    if (!response.ok){
        throw new Error(response.statusText);        
    }
    const data: Ciudad[] = await response.json();
    return data;
}

export const insertCiudad = async (data: Ciudad): Promise<any> => {
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

export const updateCiudad = async (data: Ciudad): Promise<any> => {
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