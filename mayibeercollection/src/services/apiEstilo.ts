import { Estilo } from "../interfaces/estilo";
import { enviroment } from "../interfaces/enviroment";

const BASE_URL: string = enviroment.urlBase() + "Estilo";

export const getEstilos = async (): Promise<Estilo[]> => {
    const url = `${BASE_URL}`;
    const response = await fetch(url);
    if (!response.ok){
        throw new Error(response.statusText);        
    }
    const data: Estilo[] = await response.json();
    return data;
}

export const insertEstilo = async (data: Estilo): Promise<any> => {
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

export const updateEstilo = async (data: Estilo): Promise<any> => {
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