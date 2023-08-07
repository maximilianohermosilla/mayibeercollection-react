import { Cerveza } from "../interfaces/cerveza";
import { enviroment } from "../interfaces/enviroment";

const BASE_URL: string = enviroment.urlBase() + "Cerveza";

export const getCervezas = async (IdMarca: number, IdEstilo: number, IdCiudad: number, IdPais: number, fullresponse: boolean): Promise<Cerveza[]> => {
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