import Button from "./Button";
import { assets } from "../../utils";
import { useState } from "react";

function MainBottomCat({ likes, display, video, message }) {
  const [liked, setLiked] = useState(false);
  function handleLiked() {
    setLiked(true);
  }
  return (
    <div className="main-bottom-cat" style={{ display: display }}>
      <div className="main-bottom-cat-left">
        <div className="likes-cont" onClick={handleLiked}>
          <div className="likes">{liked ? likes + 1 : likes}</div>
          <img
            src={`${assets}/icons/heart.svg`}
            alt="heart icon"
            className="heart-icon abtn"
            style={{
              filter:
                liked &&
                "invert(60%) sepia(31%) saturate(3515%) hue-rotate(321deg)brightness(101%) contrast(101%)",
            }}
          />
        </div>
        {video && (
          <a href={video} target="_blank" rel="noreferrer">
            <img
              className="video-icon abtn"
              src={`${assets}/icons/video_icon.svg`}
              alt="Watch Video"
            />
          </a>
        )}
      </div>
      <Button
        className={"shopping-btn abtn"}
        name="Shop Now"
        src={`${assets}/icons/shopping_icon.svg`}
        alt="Shop Now"
        message={message}
      />
    </div>
  );
}

export default MainBottomCat;
