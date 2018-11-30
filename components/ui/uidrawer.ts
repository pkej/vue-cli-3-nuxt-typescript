import { action, computed, observable } from 'mobx';

export enum DrawerPosition {
  top,
  bottom,
  left,
  right,
}

export enum DrawerToggle {
  closed,
  open,
}
export enum DrawerSize {
  small,
  medium,
  large,
  auto,
}
export class UiDrawer {
  @observable private toggle: DrawerToggle;
  @observable private position: DrawerPosition;
  @observable private size: DrawerSize;
  constructor() {
    this.size = DrawerSize.auto;
    this.position = DrawerPosition.bottom;
    this.toggle = DrawerToggle.closed;
  }
  @computed
  get getToggle(): { value: DrawerToggle; name: string } {
    return { value: this.toggle, name: DrawerToggle[this.toggle] };
  }
  @computed
  get getPosition(): { value: DrawerPosition; name: string } {
    return { value: this.position, name: DrawerPosition[this.position] };
  }
  @computed
  get getSize(): { value: DrawerSize; name: string } {
    return { value: this.size, name: DrawerSize[this.size] };
  }
}
