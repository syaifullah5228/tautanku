import "./globals.css"
export const metadata = { title: "Tautanku - Link in Bio", description: "Share all your links" }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>)
}
