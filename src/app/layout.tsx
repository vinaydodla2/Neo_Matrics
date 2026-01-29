import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import GTM from "@/components/analytics/GTM";
import GTMEvents from "@/components/analytics/GTMEvents";


export const revalidate = 0;
export default function RootLayout({children,}:{children: React.ReactNode;}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <GTM gtmId="GTM-WZ79ZRRC" />
        <GTMEvents />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
export const metadata = {
  metadataBase: new URL("https://neomatrics.com"),

  title: {
    default: "Neo Matrics — Digital Marketing | Web Development | Graphic Designing.",
    template: "%s | Neo Matrics"
  },

  description:
    "Neo Matrics is a premium digital agency specializing in branding, websites, UI/UX, development, and full-suite digital marketing.",

  keywords: [
    "digital marketing agency",
    "digital marketing agency in banglore",
    "digital marketing services",
    "website development",
    "website development services",
    "ui/ux design",
    "branding",
    "seo",
    "neo matrics",
  ],

  openGraph: {
    type: "website",
    url: "https://neomatrics.com",
    title: "Neo Matrics — Digital Marketing | Web Development | Graphic Designing.",
    description:"Premium digital agency for branding, UI/UX, websites, and marketing.",
    siteName: "Neo Matrics",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Neo Matrics"
      }
    ]
  },

  icons: {
    icon: "/favicon.ico",
  },

  alternates: {
    canonical: "https://neomatrics.com",
  }
};
