import { getEnvSpecificParam } from "@/envParams";

const LoginTitle = () => getEnvSpecificParam("loginTitle");

export default LoginTitle;
