//! Library

//! From local

//! Styles
// import styles from "./Landing.module.css";

export default function Landing() {
  const h1Styles =
    "text-4xl p-5 pt-16 bg-yellow-300 font-bold uppercase text-center  ";

  return (
    <div className="font-mono text-center bg-yellow-200 h-screen">
      <h1 className={h1Styles}>Home</h1>
      <p className=" text-4xl m-3 mt-5 animate-bounce font-bold">
        My name is Holly, Tung Ching Lui
      </p>
      <p className="text-2xl m-2 f">
        This is junior fullstack engineer coding challenge
      </p>
      <p className="text-3xl m-2 text-red-600">from Feather</p>
      <p className="text-2xl m-2">In this challenge,</p>
      <p className="text-4xl m-2">
        I used <span className="text-yellow-600"> React</span>,
        <span className="text-purple-700"> GraphQL</span>,
        <span className="text-pink-600"> tailwindcss</span> and TypeScript
      </p>
      <p className="text-3xl m-2">to build a insurance policies</p>
      <p className="text-4xl m-2">Various fields are editable</p>
      <p className="text-2xl m-2">
        such as customer information and insurance type
      </p>
      <p className="text-2xl m-2">
        The <span className="text-purple-700">table</span> can be{" "}
        <span className="underline">pagination</span> and
      </p>
      <p className="text-2xl m-2">
        each <span className="text-red-600">column</span> can be{" "}
        <span className="underline">sorted</span>...
      </p>
    </div>
  );
}
