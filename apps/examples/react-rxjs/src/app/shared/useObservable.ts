import { useState, useEffect } from "react";

export const useObservable = obs$ => {
  const [state, setState] = useState();

  useEffect(() => {
    const sub = obs$.subscribe(setState);
    return () => sub.unsubscribe();
  }, [obs$]);

  return state;
};
