import Details from "./details/Page";
import useTranslation from "next-translate/useTranslation";
import styles from "./details/page.module.css";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <div className={`${styles.testClass} flex`}>
      {t("test")}
      <Details />
    </div>
  );
}
