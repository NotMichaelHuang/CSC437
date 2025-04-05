import { useState } from "react";

const CAT_SRC = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/250px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg";

/**
 * Challenge 2: modify the styles so the component appears as on the slide.  Don't forget to render it in the page!
 * Challenge 3: make the caption only appear when the user hovers the image container.  You will need useState and pass callback functions to onMouseEnter and onMouseLeave.
 */
const PARENT_STYLES = {
    display: "inline-block", // Note that since we are working with JS file, not CSS file, values must be strings!
    position: "relative"
}
const CAPTION_STYLES = {
    boxSizing: "border-box",
    width: "100%",
    padding: "1em",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    position: "absolute",
    bottom: 0
}

export function SubtitledImg(props) {
    const [isCaptionVisible, setCaptionVisible] = useState(false);
    
    return(
        <figure 
            style={PARENT_STYLES} 
            onMouseEnter={() => setCaptionVisible(true)}
            onMouseLeave={() => setCaptionVisible(false)}
        >
            <img style={{display: "block"}} src={CAT_SRC} />
            {isCaptionVisible && <figcaption style={CAPTION_STYLES}>A cat!</figcaption>}
        </figure>
    );
}
