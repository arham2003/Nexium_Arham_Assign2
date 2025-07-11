"use client";
import { useState } from "react";
import SearchBar from "@/components/general/searchBar";
import { TextareaWithText } from "@/components/general/TextArea";

export default function generateSummary() {
  const [isUrlFocused, setIsUrlFocused] = useState(false);
  return (
    <div className="p-6 mx-auto max-w-xl py-20">
      <SearchBar setIsUrlFocused={setIsUrlFocused} />
      {!isUrlFocused && (
        <>
          <h2 className="text-xl font-semibold items-center mt-4 mb-2 text-center">
            OR
          </h2>
          <TextareaWithText />
        </>
      )}
    </div>
  );
}
