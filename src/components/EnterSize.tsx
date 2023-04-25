import { useState } from "react";
import AlertEvent from "../events/AlertEvent";
import SizeEnteredEvent from "../events/SizeEnteredEvent";
import useEventBus from "../hooks/useEventBus";

const EnterSize = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const { publish } = useEventBus();

  const buttonClicked = () => {
    publish(new SizeEnteredEvent(width, height));
    publish(new AlertEvent(`Width: ${width}\nHeight: ${height}`));
  };

  return (
    <div>
      <p>Please enter the size you would like:</p>
      <label>
        Width:
        <input type="text" value={width} onChange={(event) => setWidth(Number(event?.target.value))} />
      </label>
      <br />
      <label>
        Height:
        <input type="text" value={height} onChange={(event) => setHeight(Number(event?.target.value))} />
      </label>
      <button onClick={buttonClicked}>DO EET</button>
    </div>
  );
};

export default EnterSize;
