"use client"

import React, { useEffect } from "react";


export default function Page(): React.ReactNode {

  useEffect(() => {
    const window_width = window.innerWidth;
    const window_height = window.innerHeight;
    console.debug(`${window_width}px x ${window_height}px`)
  }, []);

  return (
    <main className="root">
      <img
        className="logo"
        src="/expo-auto-body-logo.png"
        width="100%"
        height="auto"
        draggable={false}
      />
      <h1>
        Expo Auto Body website under construction 🏗️
      </h1>
    </main>
  );
}
