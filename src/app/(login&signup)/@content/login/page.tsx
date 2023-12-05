"use client";

import React from "react";
import { TextField, Button } from "@mui/material";
import Link from "next/link";
import * as CONST from "../../const";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { handleLogin } from "../../actions";

const LoginTitle = () => {
  const [formData, setFormData] = React.useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  return (
    <form>
      <TextField
        error
        type="email"
        label="Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        value={formData.email}
        {...CONST.inputCommonProps}
        helperText="This is not an email"
        InputProps={{
          startAdornment: <EmailOutlinedIcon />,
        }}
      />
      <TextField
        type="password"
        label="password"
        {...CONST.inputCommonProps}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        value={formData.password}
        InputProps={{
          startAdornment: <LockOutlinedIcon />,
        }}
      />
      <div className="flex justify-between">
        <Button variant="outlined" onClick={() => handleLogin(formData)}>
          Login
        </Button>
        <Link href="/signup">
          <Button>Switch to Signup</Button>
        </Link>
      </div>
    </form>
  );
};

export default LoginTitle;
