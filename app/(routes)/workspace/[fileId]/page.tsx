"use client";
import React, { useEffect, useState } from "react";
import WorkSpaceHeader from "../_components/WorkSpaceHeader";
import Editor from "../_components/DocWorkspace";

function WorkSpace({ params }: any) {
  const [triggerSave, setTriggerSave] = useState(false);

  useEffect(() => {
    console.log("FILEID", params.fileId);
  }, []);
  return (
    <div>
      <WorkSpaceHeader onSave={() => setTriggerSave(!triggerSave)} />
      {/* Workspace Layout  */}
      <div
        className="grid grid-cols-1
      md:grid-cols-2"
      >
        {/* Document  */}
        <div className=" h-screen">
          <Editor onSaveTrigger={triggerSave} fileId={params.fileId} />
        </div>
        {/* Whiteboard/canvas  */}
        <div className=" h-screen border-l">Canvas</div>
      </div>
    </div>
  );
}

export default WorkSpace;
