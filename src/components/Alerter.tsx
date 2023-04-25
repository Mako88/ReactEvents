import AlertEvent from "../events/AlertEvent";
import useEventBus from "../hooks/useEventBus";

const Alerter = () => {
  const { subscribe } = useEventBus();

  subscribe(AlertEvent, async (event) => {
    alert(event.message);
  });

  return <></>;
};

export default Alerter;
