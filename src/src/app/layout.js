import { Outfit } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS dosyası
import './globals.css';
import './mainStyle.css';
import StoreProvider from "./components/storeProvider";
import Footer from "./components/footer/footer";
import Preloader from "./components/preloader/preloader";
import { Montserrat } from "next/font/google";
import PhoneFixed from "./components/phoneFixed/phoneFixed";

const montserrat = Montserrat({
  subsets: ['latin'], // Latin alfabesi için
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Tüm ağırlıklar
  style: ['normal', 'italic'], // Normal ve italik stiller
  // display: 'swap', // Fontu yedek fontla değiştirme (swap) stratejisi
  variable: '--font-montserrat'
});


export default function RootLayout({ children }) {

  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${montserrat.variable}`}>
          <PhoneFixed/>
          {children}
          {/* <Footer /> */}
        </body>
      </html>
    </StoreProvider>
  );
}
