import { fontInterr } from "./inter";

export const Fonts = () => (
  <style>{`
    :root {
      --font-primary: ${fontInterr.style?.fontFamily ?? "Inter"};
    }
  `}</style>
);
