//body or main content of /
import React from "react";
import HomeSection from "./_contentSections/home";
import FeatureSection from "./_contentSections/feature";
import ServiceSection from "./_contentSections/service";
import FaqSection from "./_contentSections/faq";
import * as CONST from "../const";

const sectionList = [
  {
    id: "home",
    component: <HomeSection></HomeSection>,
    class: "bg-slate-100",
  },
  {
    id: "feature",
    component: <FeatureSection></FeatureSection>,
    class: "bg-slate-200",
  },
  {
    id: "service",
    component: <ServiceSection></ServiceSection>,
    class: "bg-slate-100",
  },
  {
    id: "faq",
    component: <FaqSection></FaqSection>,
    class: "bg-slate-200",
  },
];

const Content = async () => {
  return (
    <>
      {sectionList.map((sectionItem) => (
        <section
          id={sectionItem.id}
          key={sectionItem.id}
          className={sectionItem.class}
        >
          <div
            style={{ ...CONST.containerStyle, paddingTop: CONST.headerHeight }}
          >
            {sectionItem.component}
          </div>
        </section>
      ))}
    </>
  );
};

export default Content;
