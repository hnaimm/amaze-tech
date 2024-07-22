import { Theme } from "@radix-ui/themes";
import ProductItemPage from "../../pages/ProductItemPage";
import "../../page.module.css";
import "@radix-ui/themes/styles.css";

export default function Page(): JSX.Element {
  return (
    <Theme>
      <ProductItemPage />
    </Theme>
  );
}
