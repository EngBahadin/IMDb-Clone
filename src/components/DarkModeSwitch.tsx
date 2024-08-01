"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
// systemTheme is to know the initial theme of the user
  const currentTheme = theme === "system" ? systemTheme : theme;

  if (!mounted) return null;

  return (
    <div>
      {currentTheme === "light" ? (
        <MdDarkMode
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("system")}
        />
      ) : (
        <MdLightMode
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
}

export default DarkModeSwitch;
