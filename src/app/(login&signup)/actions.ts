const { WEB_HOST } = process.env;

const handleLogin = async (a: any) => {
  const res = await fetch(`http://localhost:3000/api/auth/login`, {
    method: "post",
    body: a,
  });
  console.log(res);
};

const handleSignup = async () => {};

export { handleLogin, handleSignup };
