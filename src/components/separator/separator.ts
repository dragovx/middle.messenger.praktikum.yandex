import { Block, type BlockOwnProps } from "../../components/block";
import template from "./separator.hbs?raw";

interface SeparatorProps extends BlockOwnProps {
  modifier: string;
}

export class Separator extends Block<SeparatorProps> {
  static componentName = "Separator";

  protected template = template;
}
