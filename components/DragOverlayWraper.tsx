import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import React, { ElementType, useState } from "react";
import { SidebarBtnElementDragOverlay } from "./SidebarBtnElement";
import { FormElements } from "./FormElements";

function DragOverlayWraper() {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);
  useDndMonitor({
    onDragStart: (e) => {
      //   console.log("Drag item", e);
      setDraggedItem(e.active);
    },
    onDragCancel: () => setDraggedItem(null),
    onDragEnd: () => setDraggedItem(null),
  });
  if (!draggedItem) return null;
  let node = <div>No Drag overlay</div>;
  const isSidebarBtnElement = draggedItem.data?.current?.isDesignerBtnElement;
  if (isSidebarBtnElement) {
    const type = draggedItem.data?.current?.type as ElementType;
    node = <SidebarBtnElementDragOverlay formElement={FormElements[type]} />;
  }
  return <DragOverlay>{node}</DragOverlay>;
}

export default DragOverlayWraper;
