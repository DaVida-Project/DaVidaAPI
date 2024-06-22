export type ConfigTypes = {
  port: number;
  url: string;
  whiteList: string[];
  databaseConfig: {
    uri: string;
  };
  jwtOptions: {
    tokenSecret: string;
  };
  roles: string[];
};
