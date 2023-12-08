import { getEnvSpecificParam } from "@/envParams";

const AdminDashBoardTitle = () => {
  return getEnvSpecificParam("adminDashboardTitle");
};

export default AdminDashBoardTitle;
