import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function ButtonLink({ to, containerClassName, linkClassName, children }) {
  return (
    <div
      className={clsx(
        "inline-block",
        "font-bold",
        "px-4",
        "py-2",
        "rounded",
        "hover:bg-opacity-75",
        containerClassName
      )}
    >
      <Link className={clsx("block text-center", linkClassName)} to={to}>
        {children}
      </Link>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div
          className={clsx(
            "grid sm:grid-cols-1 md:grid-cols-2 md:gap-2",
            "w-full md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto"
          )}
        >
          <ButtonLink to="/guides" containerClassName="bg-white mb-2 md:mb-0">
            View Guide
          </ButtonLink>
          <ButtonLink
            to="/hire-us"
            containerClassName="border-solid border-2 border-white"
            linkClassName="text-white hover:text-white"
          >
            Hire us
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
