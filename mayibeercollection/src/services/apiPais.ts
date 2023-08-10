import { Pais } from "../interfaces/pais";
import { enviroment } from "../interfaces/enviroment";

const BASE_URL: string = enviroment.urlBase() + "Pais";

export const getPaises = async (): Promise<Pais[]> => {
    const url = `${BASE_URL}`;
    const response = await fetch(url);
    if (!response.ok){
        throw new Error(response.statusText);        
    }
    const data: Pais[] = await response.json();
    return data;
}

export const insertPais = async (data: Pais): Promise<any> => {
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

export const updatePais = async (data: Pais): Promise<any> => {
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