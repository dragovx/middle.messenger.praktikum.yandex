import { Block, type BlockOwnProps } from "../../components/block";
import template from "./profile.hbs?raw";
import {
  showInputError,
  validateInput,
  validatePasswordConfirmation,
} from "../../components/validation";

interface ProfileUser extends BlockOwnProps {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
}

export class ProfilePage extends Block<ProfileUser> {
  protected template = template;

  constructor() {
    super({
      email: "pochta@yandex.ru",
      login: "ivanivanov",
      first_name: "Иван",
      second_name: "Иванов",
      display_name: "Иван",
      phone: "+79099673030",
    });
  }

  protected componentDidMount() {
    const passwordForm =
      (this.element()?.querySelector(
        ".profile__info-form",
      ) as HTMLFormElement | null) ||
      (this.element()?.querySelector(
        ".profile__change-password-from",
      ) as HTMLFormElement | null);

    if (!passwordForm) {
      return;
    }

    const inputs = passwordForm.querySelectorAll<HTMLInputElement>("input");
    const newPassword = passwordForm.elements.namedItem(
      "new_password",
    ) as HTMLInputElement;
    const repeatPassword = passwordForm.elements.namedItem(
      "repeat_password",
    ) as HTMLInputElement;

    const passwordChangePage = newPassword !== null && repeatPassword !== null;

    const validatePasswords = () => {
      if (repeatPassword.value.trim() === "") {
        return false;
      }

      const error = validatePasswordConfirmation(
        newPassword.value,
        repeatPassword.value,
      );

      showInputError(repeatPassword, error);
      return !error;
    };

    inputs.forEach((input) => {
      input.addEventListener("blur", () => {
        validateInput(input);

        if (input.name === "repeat_password" && passwordChangePage) {
          validatePasswords();
        }
      });
    });

    passwordForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const isFormValid = Array.from(inputs).every((input) =>
        validateInput(input),
      );

      const isPasswordsValid = passwordChangePage ? validatePasswords() : true;

      if (!isFormValid || !isPasswordsValid) {
        return;
      }

      const formData = new FormData(passwordForm);
      const data = Object.fromEntries(formData.entries());

      console.log(data);
    });
  }
}
