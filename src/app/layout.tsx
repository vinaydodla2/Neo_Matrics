import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import GTM from "@/components/analytics/GTM";
import GTMEvents from "@/components/analytics/GTMEvents";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <GTM gtmId="GTM-XXXXXXX" />
        <GTMEvents />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
