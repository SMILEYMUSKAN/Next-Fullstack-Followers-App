"use client";

import Header from "@/ui/home/Header";
import Content from "@/ui/home/Content";

export default function HomeComponent() {
  return (
    <div className="h-screen flex flex-col">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"></link>
      <Header />
      <Content />
    </div>
  );
}
