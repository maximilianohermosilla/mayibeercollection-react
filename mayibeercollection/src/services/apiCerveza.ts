import { Cerveza } from "../interfaces/cerveza";
import { CervezaRequest } from "../interfaces/cervezaRequest";
import { enviroment } from "../interfaces/enviroment";

const BASE_URL: string = enviroment.urlBase() + "Cerveza";

export const getCervezas = async (IdMarca: string, IdEstilo: string, IdCiudad: string, IdPais: string, fullresponse: boolean): Promise<Cerveza[]> => {
    const url = `${BASE_URL}?IdMarca=${IdMarca}&IdEstilo=${IdEstilo}&IdCiudad=${IdCiudad}&IdPais=${IdPais}&fullresponse=${fullresponse}`;
    const response = await fetch(url);
    if (!response.ok){
        throw new Error(response.statusText);        
    }
    const data: Cerveza[] = await response.json();
    return data;
}

export const getCervezaById = async (id: number, fullresponse: boolean): Promise<Cerveza> => {
    const url = `${BASE_URL}/Id?Id=${id}&fullresponse=true`;    
    const response = await fetch(url);
    if (!response.ok){
        throw new Error(response.statusText);        
    }
    const data: Cerveza = await response.json();
    return data;
}

export const insertCerveza = async (data: Cerveza): Promise<any> => {
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

export const updateCerveza = async (data: any): Promise<any> => {
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