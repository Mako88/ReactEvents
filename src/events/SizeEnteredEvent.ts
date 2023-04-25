import BaseEvent from "./BaseEvent";

class SizeEnteredEvent extends BaseEvent {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
}

export default SizeEnteredEvent;
