"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ImShare } from "react-icons/im";
import { toast } from "sonner";

function FormLinkShare({ shareUrl }: { shareUrl: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const shareLink = `${window.location.origin}/submit/${shareUrl}`;
  return (
    <div className="flex flex-grow gap-4 items-center">
      <Input value={shareLink} readOnly />
      <Button
        className="w-[250px]"
        onClick={() => {
          navigator.clipboard.writeText(shareLink);
          toast.success("link copied to clipboard");
        }}
      >
        <ImShare className="mr-2 h-4 w-4" />
      </Button>
    </div>
  );
}

export default FormLinkShare;
