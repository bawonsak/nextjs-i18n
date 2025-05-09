import Link from "next/link";
import { useTranslations } from "next-intl";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations();

  return (
    <>
      {children}
      <div className="mt-4 mb-4 flex items-center justify-center gap-2">
        <span>{t("Settings.language")}</span>
        <Link href="/en" className="text-blue-500 underline">
          {t("Settings.en")}
        </Link>
        <Link href="/th" className="text-blue-500 underline">
          {t("Settings.th")}
        </Link>
      </div>
    </>
  );
};
export default Layout;
