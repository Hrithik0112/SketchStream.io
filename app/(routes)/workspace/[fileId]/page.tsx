"use client";
import React, { useEffect, useState } from "react";
import WorkSpaceHeader from "../_components/WorkSpaceHeader";
import Editor from "../_components/DocWorkspace";
import { useConvex } from "convex/react";
import { FILE } from "../../dashboard/_components/FileList";
import { api } from "@/convex/_generated/api";
import CanvasWorkspace from "../_components/CanvasWorkspace";

function WorkSpace({ params }: any) {
  const [triggerSave, setTriggerSave] = useState(false);
  const convex = useConvex();
  const [fileData, setFileData] = useState<FILE | any>();
  useEffect(() => {
    console.log("FILEID", params.fileId);
    params.fileId && getFileData();
  }, []);

  const getFileData = async () => {
    const result = await convex.query(api.files.getFileById, { _id: params.fileId });
    setFileData(result);
  };
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
          <Editor onSaveTrigger={triggerSave} fileId={params.fileId} fileData={fileData} />
        </div>
        {/* Whiteboard/canvas  */}
        <div className=" h-screen border-l">
          <CanvasWorkspace onSaveTrigger={triggerSave} fileId={params.fileId} fileData={fileData} />
        </div>
      </div>
    </div>
  );
}

export default WorkSpace;
