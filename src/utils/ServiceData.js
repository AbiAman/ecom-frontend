import { useTranslation } from "react-i18next";

const ServiceData = () => {
  const { t } = useTranslation("global");

  const data = [
    {
      title: t("service.title1"),
      tagline: t("service.tagline1"),
      image: "images/service.png",
    },
    {
      title: t("service.title2"),
      tagline: t("service.tagline2"),
      image: "images/service-03.png",
    },

    {
      title: t("service.title3"),
      tagline: t("service.tagline3"),
      image: "images/service-04.png",
    },
    {
      title: t("service.title4"),
      tagline: t("service.tagline4"),
      image: "images/service-05.png",
    },
  ];

  return data;
};

export { ServiceData }; // Export ServiceData as a named export
