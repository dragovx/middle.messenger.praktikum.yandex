import { Block, type BlockOwnProps } from "../../components/block";
import template from "./profileEditRow.hbs?raw";

interface ProfileEditRowProps extends BlockOwnProps {
  href: string;
  modifier: string;
  text: string;
}

export class ProfileEditRow extends Block<ProfileEditRowProps> {
  static componentName = "ProfileEditRow";

  protected template = template;

  constructor(props: ProfileEditRowProps) {
    super(props);
  }
}
