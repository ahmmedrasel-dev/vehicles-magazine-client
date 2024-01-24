import Header from "./components/Shared/Header";
import "./globals.css";
import { poppins } from "./fonts";

export const metadata = {
  title: "V News.",
  description: "Automobile News",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
