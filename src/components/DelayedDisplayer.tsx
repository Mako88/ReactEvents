import { useState } from "react";
import SizeEnteredEvent from "../events/SizeEnteredEvent";
import useEventBus from "../hooks/useEventBus";

const DelayedDisplayer = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const { subscribe } = useEventBus();

  subscribe(SizeEnteredEvent, async (event) => {
    setTimeout(() => setWidth(event.width), 2000);
    setTimeout(() => setHeight(event.height), 2000);
  });

  return (
    <p>
      DELAYED: You entered {width} and {height}
    </p>
  );
};

export default DelayedDisplayer;
