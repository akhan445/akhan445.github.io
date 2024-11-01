import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "My Resume",
};

export default function Resume() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Resume</h1>
      {/* <div className="space-y-6"> */}
        <iframe src="/AbdullahSKhan_2024_V2_Web.pdf" width={"100%"} height="800px"/>
      {/* </div> */}
    </section>
  );
}
