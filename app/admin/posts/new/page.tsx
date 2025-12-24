"use client";

import { useState } from "react";

import "quill/dist/quill.snow.css";
import { Editor } from "primereact/editor";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  const availableTags = [
    { name: "Unreal Engine" },
    { name: "UE5" },
    { name: "GAS" },
    { name: "Optimization" },
    { name: "AI" },
  ];

  const submitPage = () => {
    console.log({
      title,
      content,
      tags,
    });
  };

  return (
    <div>
      <header className="mb-4">
        <h1 className="text-xl font-semibold">Create new post</h1>
      </header>
      <main className="mt-6 space-y-6">
        <div>
          <InputText
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post title"
            className="w-full"
          />
        </div>
        <div className="flex gap-6">
          <div className="flex-[7] space-y-4">
            <Editor
              value={content}
              onTextChange={(e) => setContent(e.htmlValue ?? "")}
              style={{ height: "360px" }}
            />

            <Button label="Submit" onClick={submitPage} className="mt-2" />
          </div>

          <div className="flex-[3] space-y-4">
            <MultiSelect
              value={tags}
              onChange={(e) => setTags(e.value)}
              options={availableTags}
              optionLabel="name"
              placeholder="Tags"
              className="w-full"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
