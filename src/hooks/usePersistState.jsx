import React, {
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import browserStorage from "store";

export function usePersistState(storageKey, initialState) {
  const [state, setInternalState] = useState(initialState);

  // Only on our initial load, retrieve the data from the store and set the state to that data.
  useMemo(() => {
    // Retrieve the data from the store.

    const storageInBrowser = browserStorage.get(storageKey);

    // If the store exists, overwrite the state with the store's data.
    // Otherwise, if the store doesn't exist then "initialState" remains our default value.
    if (storageInBrowser !== undefined) {
      setInternalState(storageInBrowser);
    }
  }, []);

  // Create a replacement method that will set the state like normal, but that also saves the new state into the store.
  const setState = (newState) => {
    browserStorage.set(storageKey, newState);
    setInternalState(newState);
  };

  return [state, setState];
}
