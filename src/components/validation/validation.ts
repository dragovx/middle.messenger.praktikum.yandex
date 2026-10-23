type FieldName =
  | "first_name"
  | "second_name"
  | "login"
  | "email"
  | "password"
  | "phone"
  | "message"
  | "display_name"
  | "new_password"
  | "repeat_password";

const nameRule = {
  regex: /^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ-]*$/,
  error: "Поле должно начинаться с заглавной буквы,допускается буквы или дефис",
};

const passwordRule = {
  regex: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
  error: "Пароль: 8–40 символов, минимум одна заглавная буква и цифра",
};

const loginRule = {
  regex: /^(?!\d+$)[a-zA-Z0-9_-]{3,20}$/,
  error: "Логин: 3–20 символов, латиница, цифры, дефис или подчёркивание",
};

const emailRule = {
  regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]+$/,
  error: "Введите корректный адрес почты",
};

const phoneRule = {
  regex: /^\+?\d{10,15}$/,
  error: "Телефон: от 10 до 15 цифр, может начинаться с +",
};

const messageRule = {
  regex: /^(?!\s*$).+/,
  error: "Поле не должно быть пустым.",
};

const validationRules: Record<FieldName, { regex: RegExp; error: string }> = {
  first_name: nameRule,
  second_name: nameRule,
  login: loginRule,
  email: emailRule,
  password: passwordRule,
  phone: phoneRule,
  message: messageRule,
  display_name: nameRule,
  new_password: passwordRule,
  repeat_password: passwordRule,
};

export function validateField(name: string, value: string): string | null {
  if (value.trim() === "") {
    return "Поле обязательно для заполнения.";
  }

  if (!(name in validationRules)) {
    return null;
  }

  const rule = validationRules[name as FieldName];
  return rule.regex.test(value) ? null : rule.error;
}

export function validatePasswordConfirmation(
  password: string,
  confirmPassword: string,
): string | null {
  if (password !== confirmPassword) {
    return "Пароли не совпадают.";
  }

  return null;
}

export function showInputError(
  input: HTMLInputElement,
  error: string | null,
): void {
  const errorElement =
    input.closest(".input")?.querySelector(".input__error") ||
    input.closest(".profile-field")?.querySelector(".profile-field__error");

  if (errorElement) {
    errorElement.textContent = error ?? "";
    errorElement.classList.toggle("error-visible", Boolean(error));
  }

  input.classList.toggle("input__field_error", Boolean(error));

  const profileField = input.closest(".profile-field__input-wrapper");
  profileField?.classList.toggle("profile__field_error", Boolean(error));
}

export function validateInput(input: HTMLInputElement): boolean {
  const error = validateField(input.name, input.value);
  showInputError(input, error);
  return !error;
}
