import "./banner.css";

export default function Banner({ image }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("/images/banner-${image}.png")`,
      }}
    ></div>
  );
}
