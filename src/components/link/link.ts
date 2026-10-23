import { Block, type BlockOwnProps } from "../../components/block";
import template from "./link.hbs?raw";

interface LinkProps extends BlockOwnProps {
  href: string;
  modifier: string;
  text: string;
}

export class Link extends Block<LinkProps> {
  static componentName = "Link";

  protected template = template;

  constructor(props: LinkProps) {
    super(props);
  }
}
