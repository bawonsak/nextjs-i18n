import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const Page = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl">{t("AboutPage.title")}</h1>
      <p className="text-2xl">{t("AboutPage.description")}</p>
      <Link href="/" className="mt-4 text-blue-500 underline">
        {t("Menu.home")}
      </Link>
    </div>
  );
};

export default Page;
