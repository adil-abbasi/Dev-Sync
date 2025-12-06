import { useEffect, useState } from "react";

export default function useDarkMode(initial = false) {
  const [isDark, setIsDark] = useState(initial);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return [isDark, setIsDark];
}
