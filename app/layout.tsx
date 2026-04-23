import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import Header from "@/components/Header";
import {ThemeProvider} from "@/components/ThemeProvider";
import "./semantic-theme.generated.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Recent apps and projects—fitness, productivity, and developer tools.",
  icons: {
    icon: "https://nextjs.org/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-app text-text antialiased`}
      >
        <ThemeProvider
          defaultTheme="dark"
          attribute="data-theme"
          themes={["light", "dark", "alt"]}
          enableSystem={false}
        >
          <Header />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
