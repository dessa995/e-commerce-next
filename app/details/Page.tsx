import React from 'react';
import useTranslation from "next-translate/useTranslation"
import styles from "./page.module.css"

const Details = () => {
    const {t} = useTranslation("common")
    return (
        <div className={styles.testClass}>
            {t("header-title")}
        </div>
    );
};

export default Details;