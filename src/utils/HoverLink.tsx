import { Link } from "@tanstack/react-router";

export default function HoverLink({ to, text, duration }: { to: string; text: string; duration: number }) {
  return (
    <Link
      to={to}
      className={`[&.active]:font-bold tracking-normal pl-1 transition-all duration-${duration} ease-in-out hover:tracking-widest inline-block`}
      style={{minWidth: `${text.length * 11.4}px`}}
    >
      {text}
    </Link>
  );
}