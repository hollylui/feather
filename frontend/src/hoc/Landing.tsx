//! Library

//! From local

//! Styles
// import styles from "./Landing.module.css";

export default function Landing() {
  // Styles --------------------------------------------
  const containerStyle = "font-mono text-center bg-yellow-200 h-screen";
  const h1Styles =
    "text-4xl p-5 pt-16 bg-yellow-300 font-bold uppercase text-center  ";
  const p1Styles = " text-4xl m-3 mt-5 animate-bounce font-bold";
  const p2Styles = "text-2xl m-2 f";
  const p3Styles = "text-3xl m-2 text-red-600";
  const p5Styles = "text-4xl m-2";
  const p5Color1 = "text-yellow-600";
  const p5Color2 = "text-purple-700";
  const p5Color3 = "text-pink-600";
  const text2xlM2 = "text-2xl m-2";
  const text3xlM2 = "text-3xl m-2";
  const p9Color1 = "text-purple-700";
  const p10Color1 = "text-red-600";

  return (
    <div className={containerStyle}>
      <h1 className={h1Styles}>Home</h1>
      <p className={p1Styles}>My name is Holly, Tung Ching Lui</p>
      <p className={p2Styles}>
        This is junior fullstack engineer coding challenge
      </p>
      <p className={p3Styles}>from Feather</p>
      <p className={text2xlM2}>In this challenge,</p>
      <p className={p5Styles}>
        I used <span className={p5Color1}> React</span>,
        <span className={p5Color2}> GraphQL</span>,
        <span className={p5Color3}> tailwindcss</span> and TypeScript
      </p>
      <p className={text3xlM2}>to build a insurance policies</p>
      <p className={text2xlM2}>Various fields are editable</p>
      <p className={text2xlM2}>
        such as customer information and insurance type
      </p>
      <p className={text2xlM2}>
        The <span className={p9Color1}>table</span> can be
        <span className="underline">pagination</span> and
      </p>
      <p className={text2xlM2}>
        each <span className={p10Color1}>column</span> can be
        <span className="underline">sorted</span>...
      </p>
    </div>
  );
}
