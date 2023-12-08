import React from "react";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import Link from "next/link";
import { getEnvSpecificParam } from "@/envParams";

const FeatureSection = async () => {
  const featureList = [
    {
      title: "As fast as lightning",
      detail:
        "Purchase IPLC intranet dedicated lines at high prices, carefully optimize transmission algorithms, just to make your internet experience more enjoyable.",
    },
    {
      title: "Stable wall piercing",
      detail:
        "The most advanced traffic hiding technology disguises VPN wall-piercing traffic as web browsing to avoid firewall interference.",
    },
    {
      title: "Enhance security",
      detail:
        "Even when accessing the Internet through public WiFi, high-strength data encryption can protect your privacy from being monitored.",
    },
    {
      title: "Remain anonymous",
      detail:
        "Private browsing? Incognito mode in browsers is not enough. Our VPN hides your IP to cover your tracks.",
    },
    {
      title: "Unlock content",
      detail:
        "The nodes fully unlock Netflix, Tiktok and other streaming media services. You can enjoy foreign exclusive media programs from anywhere.",
    },
    {
      title: "Multi-end support",
      detail: "Support Android, iOS, MacOS, Windows, Linux, routers.",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-3 text-center pt-2 pb-8">
        <h2 className="text-3xl font-bold">
          Mainland first choice Best VPN in Asia
        </h2>
        <p className="text-xl">
          After 5 years of research and development, protect the privacy of
          users in Greater China and overcome network blocking.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 mb-8 mt-6">
        {featureList.map((featureItem) => (
          <Card key={featureItem.title}>
            <CardHeader>
              <h3 className="text-xl">{featureItem.title}</h3>
            </CardHeader>
            <CardBody>
              <p className="text-base leading-normal">{featureItem.detail}</p>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="text-center pb-16">
        <Link href="/signup">
          <Button>try {getEnvSpecificParam("indexTitle")} immediately</Button>
        </Link>
      </div>
    </>
  );
};

export default FeatureSection;
