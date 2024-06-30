import { Theme } from "@radix-ui/themes";
import HomePage from "./pages/HomePage";
import "./page.module.css";
import "@radix-ui/themes/styles.css";

export default function Page(): JSX.Element {
  return (
    <Theme>
      <HomePage />
    </Theme>
  );
}
