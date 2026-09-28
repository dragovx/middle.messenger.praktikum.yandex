import Handlebars from "handlebars";

import buttonTemplate from "./components/button/button.hbs?raw";
import inputTemplate from "./components/input/input.hbs?raw";
import linkTemplate from "./components/link/link.hbs?raw";
import headingTemplate from "./components/heading/heading.hbs?raw";
import chatItemTemplate from "./components/chatItem/chatItem.hbs?raw";
import chatWindowTemplate from "./components/chatWindow/chatWindow.hbs?raw";
import chatWindow__messagesTemplate from "./components/chatWindow/__messages/chatWindow__messages.hbs?raw";
import profileEditRowTemplate from "./components/profileEditRow/profileEditRow.hbs?raw";
import separatorTemplate from "./components/separator/separator.hbs?raw";

import loginPage from "./pages/login/login.hbs?raw";
import registrationPage from "./pages/registration/registration.hbs?raw";
import chatPage from "./pages/chats/chats.hbs?raw";
import error404Page from "./pages/error404/error404.hbs?raw";
import error500Page from "./pages/error500/error500.hbs?raw";
import profilePage from "./pages/profile/profile.hbs?raw";

import { chats } from "./mocks/chats.js";
import dateConvert from "./helpers/dateConvert.js";
import sortChatByDate from "./helpers/sortChatByDate.js";

import "./styles/styles.scss";

Handlebars.registerPartial("button", buttonTemplate);
Handlebars.registerPartial("input", inputTemplate);
Handlebars.registerPartial("link", linkTemplate);
Handlebars.registerPartial("heading", headingTemplate);
Handlebars.registerPartial("chatItem", chatItemTemplate);
Handlebars.registerPartial("chatWindow", chatWindowTemplate);
Handlebars.registerPartial("profileEditRow", profileEditRowTemplate);
Handlebars.registerPartial("separator", separatorTemplate);
Handlebars.registerPartial(
  "chatWindow__messages",
  chatWindow__messagesTemplate,
);

Handlebars.registerHelper("dateConvert", dateConvert);
Handlebars.registerHelper("sortChatByDate", sortChatByDate);
Handlebars.registerHelper("eq", (a, b) => a === b);
Handlebars.registerHelper("or", function (...args) {
  args.pop();
  return args.some(Boolean);
});

function render() {
  const route = window.location.hash;
  const app = document.querySelector("#app");

  console.log(route);

  switch (route) {
    case "":
      app!.innerHTML = Handlebars.compile(loginPage)({});
      break;
    case "#register":
      app!.innerHTML = Handlebars.compile(registrationPage)({});
      break;
    case "#messenger":
      app!.innerHTML = Handlebars.compile(chatPage)({ chats });
      break;
    case "#profile":
      app!.innerHTML = Handlebars.compile(profilePage)({});
      break;
    case "#error500":
      app!.innerHTML = Handlebars.compile(error500Page)({});
      break;
    case "#error404":
      app!.innerHTML = Handlebars.compile(error404Page)({});
      break;
  }
}

window.addEventListener("hashchange", render);
render();
