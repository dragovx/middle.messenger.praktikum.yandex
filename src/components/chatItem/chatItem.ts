import { Block, type BlockOwnProps } from "../../components/block";
import template from "./chatItem.hbs?raw";

interface ChatItemProps extends BlockOwnProps {
  name: String;
  unreadCount: Number;
  lastMessage: {
    isOwn: Boolean;
    text: String;
    time: String;
  };
}

export class ChatItem extends Block<ChatItemProps> {
  static componentName = "ChatItem";

  protected template = template;

  constructor(props: ChatItemProps) {
    super(props);
  }
}
