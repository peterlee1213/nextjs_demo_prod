import serverlessMysql from "serverless-mysql";

const mysql = serverlessMysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWD,
    database: process.env.MYSQL_DB_NAME,
  },
});

async function execSql<T>(q: string): Promise<T | unknown> {
  try {
    const result = await mysql.query<T>(q);
    await mysql.end();
    return result;
  } catch (error) {
    return { error };
  }
}
