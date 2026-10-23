import Handlebars from "handlebars";
import { Block } from "./components/block";
import { registerComponent } from "./components/block";

import { Input } from "./components/input";
import { Button } from "./components/button";
import { Link } from "./components/link";
import { Heading } from "./components/heading";
import { ChatItem } from "./components/chatItem";
import { ChatWindow } from "./components/chatWindow";
import { ProfileEditRow } from "./components/profileEditRow";
import { Separator } from "./components/separator";
import { MessagesWindow } from "./components/messagesWindow";

import { LoginPage } from "./pages/login/login.ts";
import { RegistrationPage } from "./pages/registration";
import { ChatsPage } from "./pages/chats";
import { Error404Page } from "./pages/error404";
import { Error500Page } from "./pages/error500";
import { ProfilePage } from "./pages/profile";

import dateConvert from "./helpers/dateConvert.ts";
import dateConvertToHHMM from "./helpers/dateConvertToHHMM.ts";
import sortChatByDate from "./helpers/sortChatByDate.ts";
import eq from "./helpers/eq.ts";
import or from "./helpers/or.ts";
import routePath from "./helpers/routePath.ts";

import "./styles/styles.scss";

Handlebars.registerHelper("dateConvert", dateConvert);
Handlebars.registerHelper("dateConvertToHHMM", dateConvertToHHMM);
Handlebars.registerHelper("sortChatByDate", sortChatByDate);
Handlebars.registerHelper("eq", eq);
Handlebars.registerHelper("or", or);
Handlebars.registerHelper("routePath", routePath);

registerComponent(Input);
registerComponent(Button);
registerComponent(Link);
registerComponent(Heading);
registerComponent(ChatItem);
registerComponent(ChatWindow);
registerComponent(ProfileEditRow);
registerComponent(Separator);
registerComponent(MessagesWindow);

function renderPage(page: Block) {
  const app = document.querySelector("#app");

  if (!app) {
    throw new Error("App container not found");
  }

  app.innerHTML = "";
  app.append(page.element()!);
}

function render() {
  const route = window.location.hash;

  switch (route) {
    case "":
      renderPage(new LoginPage());
      break;
    case "#register":
      renderPage(new RegistrationPage());
      break;
    case "#messenger":
      renderPage(new ChatsPage());
      break;
    case "#profile":
      renderPage(new ProfilePage());
      break;
    case "#profile/edit":
      renderPage(new ProfilePage());
      break;
    case "#profile/password":
      renderPage(new ProfilePage());
      break;
    case "#error500":
      renderPage(new Error500Page());
      break;
    default: {
      renderPage(new Error404Page());
      break;
    }
  }
}

window.addEventListener("hashchange", render);
render();
