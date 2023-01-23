'use client'
import { atom, selector } from "recoil";
import * as WebSocket from "websocket";

const connect = (): Promise<WebSocket.w3cwebsocket> => {
    return new Promise((resolve, reject) => {
    //   const socket = new WebSocket.w3cwebsocket("ws://nokogiri-backend-xejr.onrender.com/ws/1");
      const socket = new WebSocket.w3cwebsocket("wss://127.0.0.1:8081/ws/1");

      socket.onopen = () => {
        console.log("connected");
        resolve(socket);
      };
      socket.onclose = () => {
        console.log("reconnecting...");
        connect();
      };
      socket.onerror = (err) => {
        console.log("connection error:", err);
        reject(err);
      };
    });
  };
  
  const connectWebsocketSelector = selector({
    key: "connectWebsocket",
    get: async (): Promise<WebSocket.w3cwebsocket> => {
      return await connect();
    },
  });
  
  export const websocketAtom = atom<WebSocket.w3cwebsocket>({
    key: "websocket",
    default: connectWebsocketSelector,
  });