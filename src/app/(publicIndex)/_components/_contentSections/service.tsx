"use client";
import React from "react";

import { Card, CardBody, Tabs, Tab } from "@nextui-org/react";

type TabPanelProps = {
  children: React.ReactNode;
  currentIndex: number;
  value: number;
};

const TabPanel = (props: TabPanelProps) => {
  const { children, currentIndex, value } = props;
  if (currentIndex != value) return null;
  else {
    return <div key={value}>{children}</div>;
  }
};

const ServiceSection = () => {
  const [tabIndex, setTabIndex] = React.useState<number>(0);
  const serviceList = [
    {
      name: "ShadowSocksR / ShadowSocks",
      detail: (
        <div>
          <p>
            {`ShadowSocks is a connectionless and stateless proxy protocol. It
            carries TCP UDP data and can easily penetrate the world's strongest
            national firewall, China's GFW.`}
          </p>
          <br />
          <p>
            ShadowSocksR is the main branch of the former, patched security
            vulnerabilities, expanded encryption options, and increased traffic
            obfuscation capabilities.
          </p>
        </div>
      ),
    },
    {
      name: "V2Ray / Vmess",
      detail: (
        <p>
          V2Ray is a traffic forwarding software platform. It supports multiple
          proxy protocols and allows these protocols to be used with multiple
          transport layer protocols. VMess is an original proxy protocol on this
          platform. When used with TLS transport, it can perfectly simulate
          HTTPS web browsing.
        </p>
      ),
    },
    {
      name: "Self-developed secret technique",
      detail: (
        <p>
          Our proprietary protocol can simulate a variety of web browsing
          scenarios, making it impossible for firewalls to reliably distinguish
          between VPN data browsing. Forced blocking will also affect normal
          network use, so the connection cannot be effectively intercepted.
        </p>
      ),
    },
  ];

  return (
    <div className="pb-16 pt-2">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-3xl font-bold">
          The most advanced open source protocols and our proprietary techniques
        </h2>
        <p className="text-xl">
          One service, compatible with multiple protocols, adapts to diverse
          network environments.
        </p>
      </div>
      <Card className="mt-10">
        <CardBody>
          <Tabs className="flex">
            {serviceList.map((serviceItem, index) => (
              <Tab
                key={index}
                title={serviceItem.name}
                className={`basis-1/${serviceList.length}`}
              >
                {serviceItem.detail}
              </Tab>
            ))}
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

export default ServiceSection;
