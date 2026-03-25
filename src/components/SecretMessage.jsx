import { useState } from "react";

function SecretMessage() {
  const[isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Secret Message</h2>
      <label>
        <input type = "checkbox" checked={isChecked} onChange={handleChange}/>
        Show Secret Message:
      </label>
      
      {isChecked && <p>APJ abdul kalam is my role model</p>}
    </div>
  )
}

export default SecretMessage;