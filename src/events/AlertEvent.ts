import BaseEvent from "./BaseEvent";

class AlertEvent extends BaseEvent {
  message: string;

  constructor(message: string) {
    super();
    this.message = message;
  }
}

export default AlertEvent;
