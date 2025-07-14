"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import SummarySection from "./summarySection";

export default function UserStatus() {
  const { user, isLoaded } = useUser();
  const [showContent, setShowContent] = useState(false);
  const hasWelcomedRef = useRef(false); // ✅ better than useState

  useEffect(() => {
    if (isLoaded && user && !hasWelcomedRef.current) {
      toast.success(`Welcome ${user.firstName}!`);
      hasWelcomedRef.current = true; // ✅ prevent second trigger
      setShowContent(true);
    }
  }, [isLoaded, user]);

  if (!isLoaded) return <p className="text-center text-gray-500">Loading user...</p>;
  if (!user) return <p className="text-center text-red-500">Please sign in to use the summarizer.</p>;

  return showContent ? <SummarySection /> : null;
}
