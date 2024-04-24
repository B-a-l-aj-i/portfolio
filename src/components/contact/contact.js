 
import React from "react";

import email from "./assets/ic--baseline-email.png"
import phone from "./assets/fa6-solid--square-phone.png"
import address from "./assets/mdi--address-marker.png"
 
 import "./contact.css"
 function Contact() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "bf486903-4b8f-43c8-a1eb-30dce988e8e8");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div   id="contact">
      <center><p style={{fontSize:'2rem'}}>contact</p></center>
       <section className="contact">
       <div className="dets">
           <div  className="pea">
             <img  alt="p"src={email} />
              <p>balajivijay679@gmail.com</p>
           </div>
           <div className="pea">
           <img alt="p" src={phone} />
              <p>8015219775</p>
           </div>
           <div className="pea">
           <img alt="p" src={address} />
              <p>chennai</p>
           </div>
        </div>
          <div>
        <form onSubmit={onSubmit} className="contact-ips">
          <input type="text" name="name" required placeholder="your-name"/>
          <input type="email" name="email" required placeholder="your-email"/>
          <textarea name="message" required placeholder="description"></textarea>
  
          <button type="submit" className="btn">Submit</button>
  
        </form>
        <span>{result}</span>
        </div>
       </section>
      </div>
    );
  }


  export default Contact