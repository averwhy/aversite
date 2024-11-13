import { useEffect, useState } from "react";
import type { Ref } from "react";
import type { JSXElement } from "react-photo-album";

export function useIsVisible(ref: Ref<JSXElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
