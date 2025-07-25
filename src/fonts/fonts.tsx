import { fontInter } from "./inter";

export const Fonts = () => (
  <style>{`
    :root {
      --font-primary: ${fontInter.style?.fontFamily ?? "Inter"};
    }
  `}</style>
);
