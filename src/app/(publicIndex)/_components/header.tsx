//header bar of /
import * as CONST from "../const";
import { Button, ButtonProps } from "@nextui-org/react";
import Link from "next/link";
import { getEnvSpecificParam } from "@/envParams";

const textStyle: React.CSSProperties = {
  color: CONST.headerContentColor,
};

const navButtonList = [
  {
    name: "#home",
    link: "#home",
  },
  {
    name: "#feature",
    link: "#feature",
  },
  {
    name: "#service",
    link: "#service",
  },
  {
    name: "#faq",
    link: "#faq",
  },
];

const userButtonList = [
  {
    name: "Login",
    link: "/login",
  },
  {
    name: "Signup",
    link: "/signup",
  },
];

const Header = async () => {
  return (
    <>
      <h1
        className="text-5xl font-bold"
        style={{ lineHeight: CONST.headerHeight, ...textStyle }}
      >
        <Link href="/">{getEnvSpecificParam("indexTitle")}</Link>
      </h1>
      <div className="flex justify-between items-center gap-x-6">
        {navButtonList.map((item) => (
          <Link href={item.link} key={item.name}>
            <Button>{item.name}</Button>
          </Link>
        ))}
      </div>
      <div
        style={{ height: CONST.headerHeight }}
        className="flex justify-between items-center gap-x-4"
      >
        {userButtonList.map((item) => (
          <Link href={item.link} key={item.name}>
            <Button>{item.name}</Button>
          </Link>
        ))}
      </div>
    </>
  );
};

export { textStyle };
export default Header;
