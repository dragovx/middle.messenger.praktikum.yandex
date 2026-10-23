import { Block, type BlockOwnProps } from "../../components/block";
import template from "./chatWindow.hbs?raw";
import { chat } from "../../mocks/chat";

interface ChatProps extends BlockOwnProps {
  chat: typeof chat;
}

export class ChatWindow extends Block<ChatProps> {
  static componentName = "ChatWindow";

  constructor() {
    super({ chat });
  }

  protected template = template;

  // protected componentDidMount(): void {

  //   const onscrollEvent =():void =>{
  //     const form = this.element()?.querySelector('.communication') as HTMLFormElement | null;

  //     form?.addEventListener('scroll', () => {

  //       console.log('d')

  //     }, { passive: true });
  //   }

  //   onscrollEvent()
  // }
}
