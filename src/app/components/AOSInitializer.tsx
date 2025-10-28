"use client"; // Đánh dấu là Client Component

import React, { useEffect } from "react";
import AOS from "aos";

export function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);

  return null;
}
