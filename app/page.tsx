import Header from "../components/Organisms/Header/Header";
import Details from "./details/Details";
// import useTranslation from "next-translate/useTranslation";
// import styles from "./details/page.module.css";

export default function Home() {
  // const { t } = useTranslation("common");

  return (
    <>
      <Header />
      <Details />;
    </>
  );
}
