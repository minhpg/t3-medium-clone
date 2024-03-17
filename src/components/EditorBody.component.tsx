import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import { useState } from "react";

export default function EditorBody() {
  const [markdown, setMarkdown] = useState<string>("");

  const editor = useCreateBlockNote({
    initialContent: [
      { type: "heading", content: "" },
      { type: "paragraph", content: "" },
    ],
  });

  const onChange = async () => {
    // Converts the editor's contents from Block objects to Markdown and store to state.
    const markdown = await editor.blocksToMarkdownLossy(editor.document);
    setMarkdown(markdown);
  };

  // useEffect(() => {
  //   editor.insertBlocks([{type: "heading", text: " "}], referenceBlock, placement)    }, [])

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} theme="light" onChange={onChange} />;
}
