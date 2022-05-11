import "./SocialCard.css";
import Location from "./Location";
import PhoneNumber from "./PhoneNumber";
const SocialCard = ({ userdata }) => {
  return (
    <div className="card">
      <div className="card_title">
        {userdata.name.first} {userdata.name.last}
      </div>
      <div className="card_body">
        <Location location={userdata.location} />
        <PhoneNumber type="phone" number={userdata.phone} />
        <PhoneNumber type="cell" number={userdata.cell} />
        <div className="card_image">
          <img src={userdata.picture.medium} />
        </div>
      </div>
    </div>
  );
};
export default SocialCard;
