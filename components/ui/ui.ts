import { UiDrawer } from './uidrawer';
import { action, computed, observable } from 'mobx';
import { fromPromise } from 'mobx-utils';

export class UiStore {
  @observable public leftDrawer: UiDrawer;
  @observable public rightDrawer: UiDrawer;

  constructor() {
    this.leftDrawer = new UiDrawer();
    this.rightDrawer = new UiDrawer();
  }
  @computed
  get left(): UiDrawer {
    return this.leftDrawer;
  }
  @computed
  get right(): UiDrawer {
    return this.rightDrawer;
  }
}
