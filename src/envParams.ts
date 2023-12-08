import "server-only";
const { NODE_ENV } = process.env;

const getEnvSpecificParam = (entity: string) => {
  switch (entity) {
    case "loginTitle": {
      switch (NODE_ENV) {
        case "development":
          return "Login(dev)";
        case "test":
          return "Login(test)";
        case "production":
          return "Login";
      }
    }
    case "signupTitle": {
      switch (NODE_ENV) {
        case "development":
          return "Signup(dev)";
        case "test":
          return "Signup(test)";
        case "production":
          return "Signup";
      }
    }
    case "indexTitle": {
      switch (NODE_ENV) {
        case "development":
          return "Connect VPN(dev)";
        case "test":
          return "Connect VPN(test)";
        case "production":
          return "Connect VPN";
      }
    }
    case "dashboardTitle": {
      switch (NODE_ENV) {
        case "development":
          return "Dashboard(dev)";
        case "test":
          return "Dashboard(test)";
        case "production":
          return "Dashboard";
      }
    }
    case "adminDashboardTitle": {
      switch (NODE_ENV) {
        case "development":
          return "Admin Dashboard(dev)";
        case "test":
          return "Admin Dashboard(test)";
        case "production":
          return "Admin Dashboard";
      }
    }
    default: {
      return `${entity} undefined`;
    }
  }
};

export { NODE_ENV, getEnvSpecificParam };
