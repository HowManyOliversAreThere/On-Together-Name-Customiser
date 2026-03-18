import { useState, useCallback, useRef } from "react";

const MAX_HISTORY = 20;

export function useUndoRedo<T>(initial: T) {
  const [state, setState] = useState<T>(initial);
  const [historyLengths, setHistoryLengths] = useState({ past: 0, future: 0 });
  const pastRef = useRef<T[]>([]);
  const futureRef = useRef<T[]>([]);

  const push = useCallback((next: T) => {
    setState((prev) => {
      pastRef.current = [...pastRef.current, prev].slice(-MAX_HISTORY);
      futureRef.current = [];
      return next;
    });
    setHistoryLengths({
      past: Math.min(pastRef.current.length + 1, MAX_HISTORY),
      future: 0,
    });
  }, []);

  const undo = useCallback(() => {
    if (pastRef.current.length === 0) return;
    setState((prev) => {
      const past = [...pastRef.current];
      const previous = past.pop()!;
      pastRef.current = past;
      futureRef.current = [...futureRef.current, prev].slice(-MAX_HISTORY);
      return previous;
    });
    setHistoryLengths({
      past: pastRef.current.length - 1,
      future: futureRef.current.length + 1,
    });
  }, []);

  const redo = useCallback(() => {
    if (futureRef.current.length === 0) return;
    setState((prev) => {
      const future = [...futureRef.current];
      const next = future.pop()!;
      futureRef.current = future;
      pastRef.current = [...pastRef.current, prev].slice(-MAX_HISTORY);
      return next;
    });
    setHistoryLengths({
      past: pastRef.current.length + 1,
      future: futureRef.current.length - 1,
    });
  }, []);

  const canUndo = historyLengths.past > 0;
  const canRedo = historyLengths.future > 0;

  const replace = useCallback((next: T) => {
    setState(next);
  }, []);

  return { state, push, replace, undo, redo, canUndo, canRedo };
}
