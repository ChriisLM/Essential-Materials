import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.hero__title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
        <p className={styles.description}>
          Una librería ligera y estilizada inspirada en Ant Design para
          potenciar tus proyectos en React con TypeScript.
        </p>
        <div className={styles.buttons}>
          <Link className={clsx("button button--secondary button--lg", styles.button__outline)} to="/docs/getting-started/installation">
            Empezar ahora 🚀
          </Link>
          <Link className={clsx("button button--outline button--lg", styles.button__components)} to="/docs/components/avatar">
            Ver componentes 🎨
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className={styles.featureCard}>
              <h3>⚡ Rápido y ligero</h3>
              <p>
                Optimizado para alto rendimiento y fácil integración en cualquier
                proyecto React.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.featureCard}>
              <h3>🎨 Diseño Material</h3>
              <p>
                Estilos modernos y flexibles inspirados en Ant Design con
                personalización avanzada.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.featureCard}>
              <h3>🛠️ Tipado en TypeScript</h3>
              <p>
                Construido con TypeScript para una mejor seguridad y
                mantenimiento del código.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Essential Materials - Componentes de Material Design para React y TypeScript"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
