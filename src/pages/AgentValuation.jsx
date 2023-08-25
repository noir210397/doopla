// import React, { useEffect, useRef, useState } from "react";
// import DataCard from "../components/DataCard";

const AgentValuation = () => {
  const image = [
    {
      url: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  const image2 = [
    {
      url: "https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1664267832256-176e55ccafd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1664869376844-351736a92fe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1619785292559-a15caa28bde6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="">
      {/* <i className="fa-solid fa-spinner animate-spin text-2xl"></i> */}
      Agent Valuation
      {/* <div className="max-w-3xl  bg-red-700  mx-auto">
        <DataCard image={image} />
        <DataCard image={image2} />
      </div> */}
    </div>
  );
};

export default AgentValuation;
