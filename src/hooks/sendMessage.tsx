"use client"
import { useCallback, useState } from "react";
import { websocketAtom } from "@/libs/ws";
import { useRecoilValue } from "recoil";

export const useSendMessage = () => {
  const socket = useRecoilValue(websocketAtom);
  const [input, setInput] = useState<string>("");

  console.log('test')
  const send = useCallback(() => {
    if (input.length === 0) return;
    socket.send(input);
    setInput("");
  }, [input]);

  return { input, setInput, send };
};