import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Learn Solana Basics",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Meta Blocks documentation helps you get started with Solana development.
        We start from simple concepts like setting up the environment. And build
        up to deploying apps on the network.
      </>
    ),
  },
  {
    title: "Build with Anchor",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        There are two was to build on Solana: The hard way and the Anchor way.
        We use Anchor, Solana's standard contract development framework.
      </>
    ),
  },
  {
    title: "Drawn from experience shipping apps",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Having built and shipped multiple apps on Solana, we extracted our
        knowledge in compact, usable form.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
