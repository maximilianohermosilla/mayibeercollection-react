import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children, user, redirectTo="/login"}) => {
    console.log(user)
    if(!user){
        return <Navigate to={redirectTo}></Navigate>
    }
    return children;
}