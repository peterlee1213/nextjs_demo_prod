"use client";

import React from "react";
import { Typography } from "@mui/material";
import * as CONST from "../../const";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

const faqList = [
  {
    question: "What is a VPN? How can it help?",
    answer: (
      <div>
        <Typography variant="body1">
          VPN is the abbreviation of Virtual Private Network. It establishes
          private tunnels over public networks and encrypts data transmission to
          protect communication between two or more devices.
        </Typography>
        <Typography variant="body1">
          VPN provides a series of benefits: through encryption, communication
          data becomes difficult to crack; through tunnels, the details of
          online activities are hidden; with the help of forwarding, network
          traffic appears to come from unrelated IP addresses and locations.
        </Typography>
      </div>
    ),
  },
  {
    question: "What are ShadowSocks and ShadowSocksR?",
    answer: (
      <div>
        <Typography variant="body1">
          ShadowSocks (abbreviated as SS, also known as ShadowShuttle) is an
          encrypted stateless proxy protocol. It works at the transport layer
          and relays TCP and UDP traffic. It can easily penetrate the most
          powerful national firewall (China's GFW).
        </Typography>
        <Typography variant="body1">
          ShadowSocksR (abbreviated as SSR) is the main branch of SS. On the
          basis of SS, SSR patched security vulnerabilities, expanded cipher
          suite options, added traffic obfuscation, and improved operator-level
          QoS priorities.
        </Typography>
      </div>
    ),
  },
  {
    question:
      "Why can your proprietary VPN protocol achieve stable high speed?",
    answer: (
      <div>
        <Typography variant="body1">
          We understand the principles of internet freedom and put them into
          practice in our code.
        </Typography>
        <Typography variant="body1">
          Traffic obfuscation and bail freedom are the cornerstones of
          effectively circumventing Internet censorship. Obfuscation disguises
          VPN traffic as normal web browsing, leaving censors indistinguishable;
          bail freedom means that due to the high cost of false blocking,
          censorship agencies will not block traffic that cannot be clearly
          distinguished.
        </Typography>
      </div>
    ),
  },
  {
    question: "Do you offer unlimited data plans?",
    answer: (
      <div>
        <Typography variant="body1">
          All our packages have fixed data limits. However, all packages are
          unlimited speed.
        </Typography>
        <Typography variant="body1">
          We have multiple level packages of 50GB, 200GB and up to 5TB, etc. to
          meet your needs in different scenarios.
        </Typography>
        <Typography variant="body1">
          We believe our pricing structure is fair and reasonable. Some
          so-called unlimited traffic merchants will use some garbage lines,
          resulting in a very poor internet experience.
        </Typography>
      </div>
    ),
  },
  {
    question: "On which devices can your VPN operate?",
    answer: (
      <div>
        <Typography variant="body1">
          Almost all devices are supported!
        </Typography>
        <Typography variant="body1">
          We can support almost all electronic devices on the market. Given that
          we support a variety of open source and proprietary VPN protocols, we
          believe you can easily connect to our VPN network on almost any
          commercially available device.
        </Typography>
        <Typography variant="body1">
          For personal computers running Windows, macOS and Linux, there are
          multiple clients to help you protect your network communications; for
          mobile devices running iOS and Android, there are many client Apps to
          help you get online smoothly; even better, for open source router
          platforms such as OpenWRT, Tomato and Asus Merlin, connecting to
          UnPanel only requires installing a plugin.
        </Typography>
      </div>
    ),
  },
];

type AccordionChangeProps = (index: number, value: boolean) => void;
type FaqAccordianProps = {
  faqItem: (typeof faqList)[number];
  index: number;
  expandIndex: number | undefined;
  handleAccordionChange: AccordionChangeProps;
};

const FaqAccordian = (props: FaqAccordianProps) => {
  const { faqItem, index, expandIndex, handleAccordionChange } = props;
  return (
    <Accordion
      key={index}
      expanded={expandIndex == index}
      onChange={(e, value) => handleAccordionChange(index, value)}
    >
      <AccordionSummary>
        <Typography variant="h3" className="text-lg">
          {faqItem.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{faqItem.answer}</AccordionDetails>
    </Accordion>
  );
};

const FaqSection = () => {
  const [expandIndex, setExpandIndex] = React.useState<number | undefined>();
  const handleAccordionChange: AccordionChangeProps = (index, value) => {
    if (value) setExpandIndex(index);
    else setExpandIndex(undefined);
  };

  return (
    <div className="mt-2 mb-16">
      <div className="text-center mb-8">
        <Typography
          variant="h2"
          className="text-3xl font-bold"
          sx={{ color: CONST.primaryColor }}
        >
          {`The ${faqList.length} most frequently asked questions from customers?`}
        </Typography>
      </div>
      <div className="flex justify-start flex-wrap gap-4">
        <div className="flex-1">
          {faqList.map((faqItem, index) => {
            if (index % 2 == 0) {
              return (
                <FaqAccordian
                  {...{ faqItem, index, expandIndex, handleAccordionChange }}
                ></FaqAccordian>
              );
            }
            return null;
          })}
        </div>
        <div className="flex-1">
          {faqList.map((faqItem, index) => {
            if (index % 2 != 0) {
              return (
                <FaqAccordian
                  {...{ faqItem, index, expandIndex, handleAccordionChange }}
                ></FaqAccordian>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
