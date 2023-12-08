import { getEnvSpecificParam } from "@/envParams";

const DashBoardTitle = () => {
  return getEnvSpecificParam("dashboardTitle");
};

export default DashBoardTitle;
