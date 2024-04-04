import { Inter } from "next/font/google";
import "@/app/globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Photo Gallery",
  description: "Photo Gallery App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <div className="container my-4 lg:my-8">{children}</div>
        {/* modal er jonno sobar sese, orthat modal niya kaj korar somoy ai liklam */}
        <div id="modal-root-content" />
      </body>
    </html>
  );
}
