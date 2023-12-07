"use client";
import React from "react";

import {
  Typography,
  Tabs,
  Tab,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import * as CONST from "@/app/(publicIndex)/const";

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
            ShadowSocks is a connectionless and stateless proxy protocol. It
            carries TCP UDP data and can easily penetrate the world's strongest
            national firewall, China's GFW.
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
        <Typography
          variant="h2"
          className="text-3xl font-bold"
          sx={{ color: CONST.primaryColor }}
        >
          The most advanced open source protocols and our proprietary techniques
        </Typography>
        <Typography
          variant="body1"
          className="text-xl"
          sx={{ color: CONST.primaryColor }}
        >
          One service, compatible with multiple protocols, adapts to diverse
          network environments.
        </Typography>
      </div>
      <Card className="mt-10">
        <CardHeader
          component={() => (
            <Tabs value={tabIndex} className="flex" variant="fullWidth">
              {serviceList.map((serviceItem, index) => (
                <Tab
                  value={index}
                  label={serviceItem.name}
                  key={index}
                  onClick={() => setTabIndex(index)}
                  className={`basis-1/${serviceList.length}`}
                ></Tab>
              ))}
            </Tabs>
          )}
        ></CardHeader>
        <CardContent>
          {serviceList.map((serviceItem, index) => (
            <TabPanel value={index} currentIndex={tabIndex}>
              {serviceItem.detail}
            </TabPanel>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceSection;
