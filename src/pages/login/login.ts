import { Block } from "../../components/block/Block";
import { validateInput } from "../../components/validation";
import template from "./login.hbs?raw";

export class LoginPage extends Block {
  protected template = template;

  protected componentDidMount() {
    const form = this.element()?.querySelector(
      ".auth__form",
    ) as HTMLFormElement | null;

    const inputs = form?.querySelectorAll<HTMLInputElement>("input");

    inputs?.forEach((input) => {
      input.addEventListener("blur", () => {
        validateInput(input);
      });
    });

    form?.addEventListener("submit", (event) => {
      console.log(form);
      event.preventDefault();

      const isFormValid = Array.from(inputs ?? []).every((input) => {
        return validateInput(input);
      });

      if (!isFormValid) {
        return;
      }

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      console.log(data);
    });
  }
}
