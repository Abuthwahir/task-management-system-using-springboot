import { useLocation } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import EmployeeHeader from "./EmployeeHeader";
import ManagerHeader from "./ManagerHeader";
import NormalHeader from "./NormalHeader";
import { getActiveSessions } from "../utils/authSession";

const RoleNav = () => {
  useLocation();
  const { admin, manager, employee } = getActiveSessions();

  if (admin !== null) {
    return <AdminHeader />;
  } else if (manager !== null) {
    return <ManagerHeader />;
  } else if (employee !== null) {
    return <EmployeeHeader />;
  } else {
    return <NormalHeader />;
  }
};

export default RoleNav;
