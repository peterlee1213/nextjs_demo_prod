"use client";

import Link from "next/link";
import * as CONST from "../../const";
import { Input, Button } from "@nextui-org/react";

const SignupTitle = () => {
  return (
    <form>
      <div>
        <Input
          id="email"
          type="email"
          label="Email"
          {...CONST.inputCommonProps}
        />
      </div>
      <div>
        <Input
          id="password"
          type="password"
          label="Password"
          {...CONST.inputCommonProps}
        />
      </div>
      <div>
        <Input
          id="password_repeat"
          type="password"
          label="Password Repeat"
          {...CONST.inputCommonProps}
        />
      </div>
      <div className="flex justify-between">
        <Button>Signup</Button>
        <Link href="/login">
          <Button>Switch to Login</Button>
        </Link>
      </div>
    </form>
  );
};

export default SignupTitle;
