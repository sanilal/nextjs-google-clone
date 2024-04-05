import "./globals.css";
import Footer from "@/components/Footer";



export const metadata = {
  title: "Google Clone Using Next JS",
  description: "Google Search clone App Using Next Js & Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative min-h-screen'>
        {children}
        <Footer />
        </body>
    </html>
  );
}
