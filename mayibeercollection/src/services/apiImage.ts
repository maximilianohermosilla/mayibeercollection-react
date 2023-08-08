import { enviroment } from "../interfaces/enviroment";

const BASE_URL: string = enviroment.urlBase() + "Image";

export const postImage = async (data: FormData, id: string): Promise<any> => {
    const url = `${BASE_URL}`;
   
    let result;
    const response = await fetch(`${BASE_URL}?id=${id}`, {
        method: "POST",
        headers:{
            //"Authorization": `Bearer ${JwtToken}`
        },
        body: data
    })
    
    if (!response.ok){
        throw new Error(response.statusText);        
    }

    result = await response.json();

    if(response.ok && response.status == 201){
        return result;
    }
    else{
        if(result.imagen == "No se pueden agregar mas fotos") {
            return -1;
        }   
        result = null;

        return result;
    }
}