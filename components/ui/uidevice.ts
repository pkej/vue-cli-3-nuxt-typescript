import { action, computed, observable } from 'mobx';
export enum DeviceType {
  Watch,
  Mobile,
  Tablet,
  Computer,
}

export enum Orientation {
  Portrait,
  Landscape,
}
export class Device {
  @observable public orientation: Orientation = Orientation.Portrait;
  @observable public touch: boolean = false;
  @observable public mouse: boolean = false;
  @observable public keyboard: boolean = false;
  @observable private device: boolean =;

  @computed
  public get getDevice(): string {
    const nameOfA: string = Orientation[this.DeviceType];
    return nameOfA;
  }
  @computed
  public get getOrientation(): string {
    const nameOfA = Orientation[this.orientation];
    return nameOfA;
  }
  @action
  public switchOrientation(orientation?: Orientation): void {
    if (orientation !== undefined) {
      this.orientation = orientation;
    } else {
      if (this.orientation === Orientation.Portrait) {
        this.orientation = Orientation.Landscape;
      } else {
        this.orientation = Orientation.Portrait;
      }
    }
  }
  @action
  public setDevice(device: Device): void {
    this.device = device;
  }
}
