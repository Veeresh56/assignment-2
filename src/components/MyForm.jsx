import { useRef, useEffect } from "react";

function MyForm() {
  const InputRef = useRef(null);

  useEffect(() => {
    InputRef.current.focus();
  }, []);

  return (
    <div className="point-box">
      <h2>User Form</h2>
      <input className="app-input" type="text" ref={InputRef} placeholder="Type your name..." />
      <input className="app-input" type="email" placeholder="Enter your email" />
    </div>
  );
}

export default MyForm;