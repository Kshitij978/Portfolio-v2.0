import {
  DM_Mono as FontMono,
  IBM_Plex_Sans as FontSans,
  Inter as FontInter,
} from "next/font/google";

export const fontSans = FontSans({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontInter = FontInter({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const fontDmMono = FontMono({
  weight: ["300", "400", "500"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-dm-mono",
});
