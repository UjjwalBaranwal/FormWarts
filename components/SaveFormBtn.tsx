import React, { useTransition } from "react";
import { Button } from "./ui/button";
import { HiSaveAs } from "react-icons/hi";
import useDesigner from "./hooks/useDesigner";
import { UpdateFormContent } from "@/actions/form";
import { toast } from "sonner";
import { FaSpinner } from "react-icons/fa";

function SaveFormBtn({ id }: { id: number }) {
  const { elements } = useDesigner();
  const [loading, startTransition] = useTransition();
  const updateFormComponent = async () => {
    try {
      const jsonElement = JSON.stringify(elements);
      await UpdateFormContent(id, jsonElement);
      toast.success("Your Form has been saved");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Button
      variant={"outline"}
      className="gap-2"
      disabled={loading}
      onClick={() => {
        startTransition(updateFormComponent);
      }}
    >
      <HiSaveAs />
      Save
      {loading && <FaSpinner className="animate-spin" />}
    </Button>
  );
}

export default SaveFormBtn;
