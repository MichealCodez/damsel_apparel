import Button from "../commons/Button";
import { assets } from "../../utils";
import "./brand_banner.css";

function BrandBanner() {
  return (
    <section className="brand-banner">
      <img
        src={`${assets}/brands/brand-banner.svg`}
        alt="Brand Banner"
        width="200"
        height="200"
      />
      <div className="description">
        <h1>CASIE</h1>
        <div>
          <p>
            Lustrous yet understated. The new evening Hair collection
            exclusively offered at the reopened House Of Casie in Lagos Nigeria.
          </p>
          {/* <p>From Various Hairs Here.</p> */}
        </div>
        <Button name={"See Collection"} className={"brand-banner-btn"} />
      </div>
      <div className="background-brand">CASIE</div>
    </section>
  );
}

export default BrandBanner;
