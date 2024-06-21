import "./Scroll.css";

const ScrollNow = () => {
  return (
    <div className="relative w-full bg-red-500 ">
      <span className="scroll-btn">
        <a href="#">
          <span className="mouse">
            <span></span>
          </span>
        </a>
      </span>
    </div>
  );
};

export default ScrollNow;
