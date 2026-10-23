import { Block, type BlockOwnProps } from "../../components/block";
import template from "./heading.hbs?raw";

interface HeadingProps extends BlockOwnProps {
  text: string;
}

export class Heading extends Block<HeadingProps> {
  static componentName = "Heading";

  protected template = template;

  constructor(props: HeadingProps) {
    super(props);
  }
}
