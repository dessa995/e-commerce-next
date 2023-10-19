import Image from "next/image";
import Details from "./details/Page";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const {t} = useTranslation("common")
  return (
    <div className="flex ">
      {t("test")}
      <Details />
    </div>
  );
}
