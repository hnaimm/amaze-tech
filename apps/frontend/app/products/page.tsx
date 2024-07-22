import { Theme } from "@radix-ui/themes";
import ProductsPage from "../pages/ProductsPage";
import "../page.module.css";
import "@radix-ui/themes/styles.css";

export default function Page(): JSX.Element {
  return (
    <Theme>
      <ProductsPage />
    </Theme>
  );
}
