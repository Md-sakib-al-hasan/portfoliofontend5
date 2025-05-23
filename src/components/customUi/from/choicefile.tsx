"use client";

import { uploadToCloudinary } from "@/components/hooks/uploadvidoes";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export type Tchoicefile = {
  imgurl: string | null;
  videourl: string | null;
};

const Choicefile = ({ setdata,isshowvidoes}: { setdata: (value: Tchoicefile | null) => void, isshowvidoes?:boolean }) => {
  const [loading, setLoading] = useState(false);
  const [formKey, setFormKey] = useState(Date.now());

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const imgFile = formData.get("img") as File;
    const videoFile = formData.get("video") as File;

    let imgurl: string | null = null;
    let videourl: string | null = null;

    if (imgFile && imgFile.size > 0) {
      imgurl = await uploadToCloudinary(imgFile, "image");

      if (!imgurl) {
        toast.error("Failed to upload image");
        setLoading(false);
        return;
      }
    }

    if (videoFile && videoFile.size > 0) {
      videourl = await uploadToCloudinary(videoFile, "video");
      if (!videourl) {
        toast.error("Failed to upload video");
        setLoading(false);
        return;
      }
    }

    if (!imgurl && !videourl) {
      setdata(null);
    } else {
      toast.success("Upload successfully");
      setdata({ imgurl, videourl });
      setFormKey(Date.now()); // Reset form by changing key
    }

    setLoading(false);
  };

  return (
    <form onSubmit={onSubmit} key={formKey} className="bg-[#f8faff] mx-auto p-4 shadow-lg">
      <Toaster />
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
        <div className="space-y-2">
          <label className="text-black">Project Image:</label>
          <input type="file" name="img" className="border text-black border-gray-400 p-2 w-full rounded-md focus:outline-none" />
        </div>

       {isshowvidoes? "": <div className="space-y-2">
          <label className="text-black">Project Video:</label>
          <input type="file" name="video" className="border text-black border-gray-400 p-2 w-full rounded-md focus:outline-none" />
        </div>}
      </div>
      <button type="submit" className="bg-red-400 py-2 text-white px-10 my-4 rounded-md" disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
    </form>
  );
};

export default Choicefile;
