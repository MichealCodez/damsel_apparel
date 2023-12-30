import { assets } from "../../utils";

function InstagramCard({ src }) {
  return (
    <div className="instagram-card">
      <div className="foreground">
        <img src={`${assets}/icons/instagram_icon.svg`} alt="instagram icon" />
      </div>
      <img src={src} alt="instagram reels" className="reels" />
    </div>
  );
}

export default InstagramCard;
