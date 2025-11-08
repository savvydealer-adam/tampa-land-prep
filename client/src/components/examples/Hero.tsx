import { Hero } from "../Hero";
import { ThemeProvider } from "../theme-provider";

export default function HeroExample() {
  return (
    <ThemeProvider>
      <Hero />
    </ThemeProvider>
  );
}
