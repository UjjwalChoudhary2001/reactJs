import React, { useEffect } from "react";

const Navbar = ({ color }) => {
  // useEffect(() => {
  //   alert("The color was changed");
  // }, [color]);

  //case 1: Run on every render
  useEffect(() => {
    alert("Run on every render");
  });

  //case 2: Run only on first render
  useEffect(() => {
    alert("Run only on first render");
  }, []);

  //case 3: Run when certain values are changed
  useEffect(() => {
    alert("The color was changed");
  }, [color]);

  // Example of Cleanup function

  useEffect(() => {
    alert("Hey welcome to my page.This is first render of app.jsx");
    return () => {
      alert("Component was unmounted");
    };
  }, []);

  return <div>I am Navbar of {color} color</div>;
};

export default Navbar;
