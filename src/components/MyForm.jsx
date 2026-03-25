import { useRef, useEffect } from "react";

function MyForm() {
  const InputRef = useRef(null);

  useEffect(() => {
    InputRef.current.focus();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>User Form</h2>
      <input type="text" ref={InputRef} placeholder="Type your name..."/>
      <br /><br />
      <input type="email" placeholder="Enter your email" />
    </div>
  );
}

export default MyForm;