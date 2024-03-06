import { useState } from "react";

export default function EditorGuide() {
  const [show, setShow] = useState(true);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const tips = [
    {
      content:
        "Select text to change formatting, add headers, or create links.",
      src: "/editor-tips/tip-1.gif",
    },
    {
      content:
        "Add images and other media by starting a new line and clicking +",
      src: "/editor-tips/tip-2.gif",
    },
    {
      content:
        "Include content from Medium or other sites by pasting a link and pressing Enter.",
      src: "/editor-tips/tip-3.gif",
    },
    {
      content:
        "You can mention anyone in your story by typing @ and then their name. They will get a notification after you publish.",
      src: "/editor-tips/tip-4.gif",
    },
    {
      content:
        "Want another pair of eyes on your story? Click Share for a link you can send to friends or editors.",
    },
    {
      content:
        "To customize how your story is distributed and presented to readers, click More settings in the 3-dot menu.",
    },
  ];

  const selectedTip = tips[currentTipIndex];

  const handleForward = () => {
    if (currentTipIndex == tips.length - 1) {
      setCurrentTipIndex(0);
      return;
    }
    setCurrentTipIndex(currentTipIndex + 1);
  };

  const handleBackward = () => {
    if (currentTipIndex == 0) {
      setCurrentTipIndex(tips.length - 1);
      return;
    }
    setCurrentTipIndex(currentTipIndex - 1);
  };

  if (!show) return;
  return (
    <div className="fixed bottom-0 h-72 w-full bg-gray-100">
      <div className="relative h-full">
        <div className="fixed right-0">
          <button
            className="p-3 opacity-50 hover:opacity-100"
            onClick={() => setShow(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="container mx-auto flex h-full w-3/5">
          <div>
            <button
              className="h-full opacity-50 hover:opacity-100"
              onClick={handleBackward}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 flex-col justify-center px-5 py-10 text-center text-xl">
            <div>{selectedTip.content}</div>
            {selectedTip.src && (
              <div className="mx-auto max-w-2xl py-5">
                <img src={selectedTip.src} alt={selectedTip.content} />
              </div>
            )}
          </div>
          <div>
            <button
              className="h-full opacity-50 hover:opacity-100"
              onClick={handleForward}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
