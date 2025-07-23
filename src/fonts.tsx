import { Inter, Syne } from "next-font/google";

const fontInter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const fontSyne = Syne({
  subsets: ["latin"],
  style: "normal",
  weight: ["500", "600"],
});

export const Fonts = () => (
  <style>{`
    :root {
      --font-inter: ${fontInter.style?.fontFamily ?? "Inter"};
      --font-syne: ${fontSyne.style?.fontFamily ?? "Syne"};
    }
  `}</style>
);
