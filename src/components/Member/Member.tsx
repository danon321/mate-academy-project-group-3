import './Member.scss';

type memberProps = {
  fullName: string;
  imgSrc: string;
  position: string;
};

const Member = ({ fullName, imgSrc, position }: memberProps) => {
  return (
    <div className="member__container">
      <div
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
        className="member-image"
      ></div>
      <h3 className="member-name">{fullName}</h3>
      <p className="member__description">{position}</p>
      <div>
        {/* <img className="member__icon" src="./icons/facebook.svg" alt="" /> */}
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Member;
