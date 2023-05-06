import Component from '@glimmer/component';
import { action } from '@ember/object';

interface SharedAlertButtonArgs {
  label: string;
  message: string;
}

export default class SharedAlertButtonComponent extends Component<SharedAlertButtonArgs> {
  @action
  onClick() {
    alert(this.args.message);
  }
}
