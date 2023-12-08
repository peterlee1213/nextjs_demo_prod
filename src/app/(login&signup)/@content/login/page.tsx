"use client";

import React from "react";
import { Input, Button } from "@nextui-org/react";
import Link from "next/link";
import * as CONST from "../../const";
import { handleLogin } from "../../actions";

const LoginTitle = () => {
  const [formData, setFormData] = React.useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  return (
    <form>
      <Input
        type="email"
        label="Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        value={formData.email}
        {...CONST.inputCommonProps}
        helperText="This is not an email"
      />
      <Input
        type="password"
        label="password"
        {...CONST.inputCommonProps}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        value={formData.password}
      />
      <div className="flex justify-between">
        <Button onClick={() => handleLogin(formData)}>Login</Button>
        <Link href="/signup">
          <Button>Switch to Signup</Button>
        </Link>
      </div>
    </form>
  );
};

export default LoginTitle;
