class BaseEvent {
  getType(): string {
    return this.constructor.name;
  }
}

export default BaseEvent;
