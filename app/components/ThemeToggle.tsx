"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);

  if (!mounted) {
    return (
      <div className="h-8 w-[68px] rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/10" />
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    // Trigger smooth 750ms full-page theme color interpolation
    document.documentElement.classList.add("theme-transitioning");
    setTheme(isDark ? "light" : "dark");
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning");
    }, 750);
  };

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex h-8 w-[68px] cursor-pointer items-center rounded-full bg-black/[0.04] dark:bg-white/[0.08] backdrop-blur-md p-1 border border-black/10 dark:border-white/10 shadow-sm transition-all duration-300 hover:border-black/20 dark:hover:border-white/20"
      aria-label="Toggle Theme"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Background Icons (Sun on Left, Moon on Right) */}
      <div className="absolute inset-0 flex items-center justify-between px-2.5 pointer-events-none text-gray-400 dark:text-gray-500">
        <Sun className={`h-3.5 w-3.5 transition-opacity duration-300 ${!isDark ? "opacity-30" : "opacity-60"}`} strokeWidth={1.75} />
        <Moon className={`h-3.5 w-3.5 transition-opacity duration-300 ${isDark ? "opacity-30" : "opacity-60"}`} strokeWidth={1.75} />
      </div>

      {/* Sliding Thumb / Active Indicator Pill with 90° Rotating Icon */}
      <motion.div
        className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-[#1c1c1e] text-black dark:text-white shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.1)]"
        animate={{
          x: isDark ? 36 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? "dark" : "light"}
            initial={{ rotate: isDark ? -90 : 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: isDark ? 90 : -90, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            {isDark ? (
              <Moon className="h-3.5 w-3.5 text-white" strokeWidth={1.75} />
            ) : (
              <Sun className="h-3.5 w-3.5 text-black" strokeWidth={1.75} />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </button>
  );
}
