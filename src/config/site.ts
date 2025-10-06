import { USER } from "@/features/profile/data/user";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://chanhdai.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const SOURCE_CODE_GITHUB_REPO = "Kshitij978/Portfolio-v2.0";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/Kshitij978/Portfolio-v2.0";

export const UTM_PARAMS = {
  utm_source: "chanhdai.com",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
