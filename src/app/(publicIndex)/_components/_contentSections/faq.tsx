"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const faqList = [
  {
    question: "What is a VPN? How can it help?",
    answer: (
      <div>
        <p>
          VPN is the abbreviation of Virtual Private Network. It establishes
          private tunnels over public networks and encrypts data transmission to
          protect communication between two or more devices.
        </p>
        <p>
          VPN provides a series of benefits: through encryption, communication
          data becomes difficult to crack; through tunnels, the details of
          online activities are hidden; with the help of forwarding, network
          traffic appears to come from unrelated IP addresses and locations.
        </p>
      </div>
    ),
  },
  {
    question: "What are ShadowSocks and ShadowSocksR?",
    answer: (
      <div>
        <p>
          {`ShadowSocks (abbreviated as SS, also known as ShadowShuttle) is an
          encrypted stateless proxy protocol. It works at the transport layer
          and relays TCP and UDP traffic. It can easily penetrate the most
          powerful national firewall (China's GFW).`}
        </p>
        <p>
          {`ShadowSocksR (abbreviated as SSR) is the main branch of SS. On the
          basis of SS, SSR patched security vulnerabilities, expanded cipher
          suite options, added traffic obfuscation, and improved operator-level
          QoS priorities.`}
        </p>
      </div>
    ),
  },
  {
    question:
      "Why can your proprietary VPN protocol achieve stable high speed?",
    answer: (
      <div>
        <p>
          We understand the principles of internet freedom and put them into
          practice in our code.
        </p>
        <p>
          Traffic obfuscation and bail freedom are the cornerstones of
          effectively circumventing Internet censorship. Obfuscation disguises
          VPN traffic as normal web browsing, leaving censors indistinguishable;
          bail freedom means that due to the high cost of false blocking,
          censorship agencies will not block traffic that cannot be clearly
          distinguished.
        </p>
      </div>
    ),
  },
  {
    question: "Do you offer unlimited data plans?",
    answer: (
      <div>
        <p>
          All our packages have fixed data limits. However, all packages are
          unlimited speed.
        </p>
        <p>
          We have multiple level packages of 50GB, 200GB and up to 5TB, etc. to
          meet your needs in different scenarios.
        </p>
        <p>
          We believe our pricing structure is fair and reasonable. Some
          so-called unlimited traffic merchants will use some garbage lines,
          resulting in a very poor internet experience.
        </p>
      </div>
    ),
  },
  {
    question: "On which devices can your VPN operate?",
    answer: (
      <div>
        <p>Almost all devices are supported!</p>
        <p>
          We can support almost all electronic devices on the market. Given that
          we support a variety of open source and proprietary VPN protocols, we
          believe you can easily connect to our VPN network on almost any
          commercially available device.
        </p>
        <p>
          For personal computers running Windows, macOS and Linux, there are
          multiple clients to help you protect your network communications; for
          mobile devices running iOS and Android, there are many client Apps to
          help you get online smoothly; even better, for open source router
          platforms such as OpenWRT, Tomato and Asus Merlin, connecting to
          UnPanel only requires installing a plugin.
        </p>
      </div>
    ),
  },
];

const FaqSection = async () => {
  return (
    <div className="mt-2 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          {`The ${faqList.length} most frequently asked questions from customers?`}
        </h2>
      </div>
      <div className="flex justify-start flex-wrap gap-4">
        <div className="flex-1">
          <Accordion>
            {faqList.map((faqItem, index) => (
              <AccordionItem
                key={`${index}`}
                aria-label={faqItem.question}
                title={faqItem.question}
              >
                {faqItem.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
