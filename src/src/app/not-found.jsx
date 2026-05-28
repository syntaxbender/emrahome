import Link from "next/link";
import Header from "@/app/components/header/header";
import Seo from "./components/seo/seo";
import style from "./not-found.module.css";
export const metadata = Seo({
  title: "Page Not Found",
  robots: "noindex, nofollow",
});
export default function NotFound() {
  return (
    <>
      <section>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={style.container}>
                <div className={style.content}>
                  <h1 className={style.title}>404</h1>
                  <p className={style.message}>
                    Oops! The page you are looking for could not be found.
                  </p>
                  <Link className={style.backButton} href="/">Return to Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
