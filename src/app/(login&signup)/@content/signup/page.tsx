"use client";

import Link from "next/link";
import * as CONST from "../../const";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { TextField, Button } from "@mui/material";

const SignupTitle = async () => {
  return (
    <form>
      <div>
        <TextField
          id="email"
          type="email"
          label="Email"
          {...CONST.inputCommonProps}
          InputProps={{
            startAdornment: <EmailOutlinedIcon />,
          }}
        />
      </div>
      <div>
        <TextField
          id="password"
          type="password"
          label="Password"
          {...CONST.inputCommonProps}
          InputProps={{
            startAdornment: <LockOutlinedIcon />,
          }}
        />
      </div>
      <div>
        <TextField
          id="password_repeat"
          type="password"
          label="Password Repeat"
          {...CONST.inputCommonProps}
          InputProps={{
            startAdornment: <LockOutlinedIcon />,
          }}
        />
      </div>
      <div className="flex justify-between">
        <Button variant="outlined">Signup</Button>
        <Link href="/login">
          <Button>Switch to Login</Button>
        </Link>
      </div>
    </form>
  );
};

export default SignupTitle;
