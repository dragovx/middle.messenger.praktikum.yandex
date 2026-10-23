import { Block, type BlockOwnProps } from "../block";
import { chat } from "../../mocks/chat";
import template from "./messagesWindow.hbs?raw";

interface MessagesWindowProps extends BlockOwnProps {
  chat: typeof chat;
}

export class MessagesWindow extends Block<MessagesWindowProps> {
  static componentName = "MessagesWindow";
  protected template = template;

  constructor() {
    super({ chat: [...chat].reverse() });
  }
}
