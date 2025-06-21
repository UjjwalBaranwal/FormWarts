"use context";
import { useContext } from "react";
import { DesignerContext } from "../context/designerContext";

function useDesigner() {
  const context = useContext(DesignerContext);
  if (!context)
    throw new Error("useDesigner must be used with in a Designer Context");
  return context;
}

export default useDesigner;
