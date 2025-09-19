import "./globals.css";

export const metadata = {
  title: "Eco Vista",
  description: "Ecological Condition App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
