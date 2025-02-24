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
        <iframe src="/AbdullahKhan_SE.pdf#toolbar=0" width={"100%"} height="900px"/>
      {/* </div> */}
    </section>
  );
}
