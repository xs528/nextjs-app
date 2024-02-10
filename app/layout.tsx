import { ToastContainer } from "@/src/components/Toast";
import { theme } from "@/src/constants";

import "./globals.css";

export const metadata = {
  title: "〔须尽欢〕",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" data-theme={theme}>
      <head>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
