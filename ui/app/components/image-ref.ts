import Component from '@glimmer/component';
import { Ref } from 'docker-parse-image';

type Args = {
  imageRef?: Ref;
};

export default class extends Component<Args> {
  get uri(): string {
    if (!this.args.imageRef) {
      return '';
    }

    let { registry, namespace, repository } = this.args.imageRef;

    return [registry, namespace, repository].filter(Boolean).join('/');
  }
}
