import "./globals.css";

export const metadata = {
  title: "🎞 MalhaFlix 🎞",
  description: "Create by Gabriel Ramalhão",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
