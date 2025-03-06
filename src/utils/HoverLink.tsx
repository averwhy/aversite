import { Link } from "@tanstack/react-router";
import { useState } from "react";

export default function HoverLink({
  to,
  text,
  duration,
}: { to: string; text: string; duration: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      className={`duration-${duration} relative transition-all ease-in-out [&.active]:font-bold`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="inline-block"
        style={{
          minWidth: `${text.length * 10.4}px`,
          textAlign: "center",
        }}
      >
        <span
          className={`duration-${duration} inline-block transition-all ease-in-out ${
            isHovered ? "tracking-widest" : "tracking-normal"
          }`}
        >
          {text}
        </span>
      </div>
    </Link>
  );
}
