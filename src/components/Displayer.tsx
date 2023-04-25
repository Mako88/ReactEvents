import { useState } from "react";
import SizeEnteredEvent from "../events/SizeEnteredEvent";
import useEventBus from "../hooks/useEventBus";

const Displayer = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const { subscribe } = useEventBus();

  subscribe(SizeEnteredEvent, async (event) => {
    setWidth(event.width);
    setHeight(event.height);
  });

  return (
    <p>
      You entered {width} and {height}
    </p>
  );
};

export default Displayer;
