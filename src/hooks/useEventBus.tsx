import { useCallback, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import BaseEvent from "../events/BaseEvent";

type Callback<T extends BaseEvent> = (event: T) => Promise<void>;

type Callbacks = {
  [key: string]: { [index: string]: Callback<any> };
};

const callbacks: Callbacks = {};

const useEventBus = () => {
  const useSubscribe = <T extends BaseEvent>(type: { new (...args: any): T }, callback: Callback<T>) => {
    useEffect(() => {
      const index = new type().getType();
      const id = subscribe(`${uuidv4()}|${index}`, index, callback);

      return () => unsubscribe(id);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  };

  const subscribe = useCallback(<T extends BaseEvent>(id: string, index: string, callback: Callback<T>): string => {
    callbacks[index] = {
      ...callbacks[index],
      [id]: callback,
    };

    return id;
  }, []);

  const publish = useCallback(<T extends BaseEvent>(event: T) => {
    const index = event.getType();

    if (!callbacks[index]) {
      return;
    }

    Promise.all(Object.keys(callbacks[index]!).map((x) => callbacks[index]![x](event)));
  }, []);

  const unsubscribe = useCallback((id: string) => {
    const index = id.split("|")[1];

    if (callbacks[index]) {
      delete callbacks[index]![id];
    }
  }, []);

  return {
    subscribe: useSubscribe,
    publish,
  };
};

export default useEventBus;
