import { Header } from "../components/Header";
import './ErrorPage.css'

export function ErrorPage() {
  return(
    <>
      <Header />
      <div className="page-not-found-error">
        404 : Page not found <br />
      </div>
    </>
  );
}