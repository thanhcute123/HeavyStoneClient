import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "../Bottom_up/Bottom_up.css";

const Bottom_up = () => {
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);
  return(
      <div className="bottom-up">
          <button className="button-up" onClick={scrollToTop}><FontAwesomeIcon icon={faChevronUp}  style={{display: visible ? 'inline' : 'none'}}/></button>
      </div>
  )
}
export default Bottom_up;