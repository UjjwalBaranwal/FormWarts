import { GetFormById } from "@/actions/form";
import FormBuilder from "@/components/FormBuilder";
import React from "react";

async function BuilderPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Add await here
  const form = await GetFormById(Number(id));
  if (!form) {
    throw new Error("form not found");
  }
  return <FormBuilder form={form} />;
}

export default BuilderPage;
