'use client'
import { atom } from "recoil";

export type Message = {
    content: string;
};

export const messageListAtom = atom<Message[]>({
  key: "messageList",
  default: [],
});