import { GetFormContentByUrl } from "@/actions/form";
import FormSubmit from "@/components/FormSubmit";
import React from "react";

async function SubmitPage({
  params,
}: {
  params: Promise<{ formUrl: string }>;
}) {
  const { formUrl } = await params;
  const form = await GetFormContentByUrl(formUrl);
  if (!form) throw new Error("Form not found");
  const formContent = JSON.parse(form.content);
  return <FormSubmit formUrl={formUrl} content={formContent} />;
}

export default SubmitPage;
