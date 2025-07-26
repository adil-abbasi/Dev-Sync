import { useEffect, useState } from "react";

// Shows a “scroll‑to‑top” button after `threshold` px
export default function useScrollTop(threshold = 400) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return show;
}
