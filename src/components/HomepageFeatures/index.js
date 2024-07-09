import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Learn Solana Basics",
    imgSrc: require("@site/static/img/solana.png").default,
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
    imgSrc: require("@site/static/img/anchor.png").default,
    description: (
      <>
        There are two was to build on Solana: The hard way and the Anchor way.
        We use Anchor, Solana's standard contract development framework.
      </>
    ),
  },
  {
    title: "Drawn from experience shipping apps",
    imgSrc: require("@site/static/img/certificate.png").default,
    description: (
      <>
        Having built and shipped multiple apps on Solana, we extracted our
        knowledge in compact, usable form.
      </>
    ),
  },
];

function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={imgSrc} className={"h-24 w-auto mb-3"} />
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
