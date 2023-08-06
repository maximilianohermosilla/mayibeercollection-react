import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({isAllowed, redirectTo="/login"}) => {
    if(!isAllowed){
        return <Navigate to={redirectTo}></Navigate>
    }
    return <Outlet/>;
}