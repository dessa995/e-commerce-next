import Header from "../components/Organisms/Header/Header";
import Details from "./details/Details";
import useTranslation from "next-translate/useTranslation";

// import { usePathname } from "next/navigation";

// import styles from "./details/page.module.css";

export default function Home() {
  const { t } = useTranslation("common");
  // const pathName = usePathname();

  // console.log(pathName);

  return (
    <>
      <Header />
      <Details />;
    </>
  );
}
