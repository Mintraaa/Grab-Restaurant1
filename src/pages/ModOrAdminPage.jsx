import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { Children } from "react";

const ModOrAdminPage = ({ Children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/login" />;
  }
  if(
    user.roles.includes("ROLES_ADMIN") || 
    user.roles.includes("ROLES_MODERATOR")
)
    return Children;

    return <Navigate to="/notallowed" />;
};

export default ModOrAdminPage;