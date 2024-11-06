import anh1 from "../../image/anh1.jpg";
const LeftContent = () => {
  return (
    <div className="left">
      <img id="image" src={anh1} />
      <div className="text">
        <p className="first-paragraph">Turn your ideas into reality</p>
        <p className="second-paragraph">
          Start for free and get attractive offers from the community
        </p>
      </div>
    </div>
  );
};
export default LeftContent;
