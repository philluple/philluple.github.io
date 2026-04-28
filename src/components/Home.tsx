import "./styling/Home.css";
import { useState } from "react";

const EMAIL = "le.phillup@gmail.com";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mid-section">
      <div className="large-name">Phillip Le</div>
      <div className="description">HI, NICE TO MEET YOU. CURRENTLY AT BLOOMBERG LP. BASED IN NEW YORK.</div>
      <div className="contact" onClick={handleCopy}>
        {copied ? "COPIED!" : "LE.PHILLUP@GMAIL.COM"}
      </div>
    </div>
  );
}
