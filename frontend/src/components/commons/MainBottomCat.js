import Button from "./Button";
import { assets } from "../../utils";
import { useState } from "react";

function MainBottomCat({ likes }) {
  const [liked, setLiked] = useState(false);
  function handleLiked() {
    setLiked(true);
    if (liked) {
      likes += 1;
    }
  }
  return (
    <div className="main-bottom-cat">
      <div className="main-bottom-cat-left">
        <div className="likes-cont">
          <div className="likes">{likes}</div>
          <img
            src={`${assets}/icons/heart.svg`}
            alr="heart icon"
            onClick={handleLiked}
          />
        </div>
        <img
          className="video-icon"
          src={`${assets}/icons/video_icon.svg`}
          alt="Watch Video"
        />
      </div>
      <Button
        className={"shopping-btn abtn"}
        name="Shop Now"
        src={`${assets}/icons/shopping_icon.svg`}
        alt="Shop Now"
      />
    </div>
  );
}

export default MainBottomCat;
