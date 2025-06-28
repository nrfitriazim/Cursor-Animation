// app/layout.js
import "./globals.css"; // or your global CSS or SCSS

export const metadata = {
  title: "My Portfolio",
  description: "Created by Azim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
