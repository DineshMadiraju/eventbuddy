import type { Metadata } from "next";
import "./globals.css";

import { EventProvider } from "@/context/EventContext";


export const metadata: Metadata = {
  title: "EventBuddy",
  description: "Plan events and split expenses easily",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body>

        <EventProvider>

          {children}

        </EventProvider>

      </body>

    </html>

  );

}