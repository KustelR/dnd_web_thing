import { useTranslation } from "@/app/i18n";
import { Button } from "@/components";
import React from "react";

export default async function Chat({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, undefined);

  const messages = [
    { id: 1, author: "Alice", text: "Hi Bob!" },
    { id: 2, author: "Bob", text: "Hello Alice!" },
    //... more messages...
  ];

  return (
    <div className="border-gray-500 border-2  min-w-60 max-w-fit p-2 rounded-lg shadow-md shadow-black h-full">
      <h2>{t("chat_header")}</h2>
      <ol
        className="py-4 h-full"
        children={messages.map((message) => {
          return (
            <li
              className="border-b-2 border-gray-500 p-1 bg-opacity-0 hover:bg-black hover:bg-opacity-10"
              key={message.id}
            >
              <h3 className="font-bold">{message.author}</h3>
              <p>{message.text}</p>
            </li>
          );
        })}
      ></ol>
      <div>
        <input className="block w-full mb-2" type="text" />
        <textarea className="w-full" name="" id=""></textarea>
        <Button lng={lng}>{t("chat_send")}</Button>
      </div>
    </div>
  );
}
