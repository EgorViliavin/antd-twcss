import { makeAutoObservable } from "mobx";

class CounterStore {
  private _count = 0;
  savedCount: number | null = null;

  get count() {
    return this._count;
  }

  set count(value: number) {
    if (value < 0) {
      this._count = 0;
    } else {
      this._count = value;
    }
  }

  get total() {
    return this.count * 3;
  }
  constructor() {
    makeAutoObservable(this);
  }

  increment = (value: number) => {
    this.count += value;
  };
  decrement = (value: number) => {
    this.count -= value;
  };

  saveCount = () => {
    this.savedCount = this.count;
  };

  removeCount = () => {
    this.savedCount = null;
  };
}

export default new CounterStore();
