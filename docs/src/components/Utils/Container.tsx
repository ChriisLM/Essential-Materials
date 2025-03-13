import React, { useState } from "react";
import styles from "./Container.module.css";
import { CodeIcon, CubeIcon } from "@site/static/icons";

interface ComponentExampleProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code: string;
  language?: string;
}

const ComponentExample: React.FC<ComponentExampleProps> = ({
  title,
  description,
  children,
  code,
  language = "tsx",
}) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  const toggleCodeVisibility = () => {
    setIsCodeVisible(!isCodeVisible);
  };

  return (
    <div className={styles.componentExample}>
      <div className={styles.componentExampleHeader}>
        <div style={{display: "flex",  columnGap:"5px"}}>
          <CubeIcon />
          <h3 className={styles.componentExampleTitle}>{title}</h3>
        </div>
        {description && (
          <p className={styles.componentExampleDescription}>{description}</p>
        )}
      </div>

      <div className={styles.componentExampleContent}>
        <div className={styles.componentExampleDemo}>{children}</div>
      </div>

      <div className={styles.componentExampleActions}>
        <button
          className={styles.componentExampleButton}
          style={{textAlign:"center", display:"flex", justifyContent:"center"}}
          onClick={toggleCodeVisibility}
        >
          <CodeIcon style={{marginRight:"3px"}}/>
          {isCodeVisible ? "Ocultar código" : "Mostrar código"}
        </button>
      </div>

      {isCodeVisible && (
        <div className={styles.componentExampleCode}>
          <pre className={`language-${language}`}>
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default ComponentExample;
