import useFlip from "./useFlip";
import backOfCard from "./back.png";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, toggleIsFacingUp] = useFlip(false);
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={()=>toggleIsFacingUp()}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
