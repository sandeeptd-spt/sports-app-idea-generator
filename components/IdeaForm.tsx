import React, { useState } from "react";

interface IdeaFormProps {
  onGenerate: (prompt: string) => void;
  isLoading: boolean;
}

const IdeaForm: React.FC<IdeaFormProps> = ({
  onGenerate,
  isLoading,
}) => {
  const [prompt, setPrompt] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = () => {
    onGenerate(prompt);
    setPrompt('');
  };

  return (
    <div className="flex flex-col gap-4 relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      )}
      <div className={isLoading ? "opacity-50" : ""}>
        <textarea
          className="border p-2 rounded-md w-full"
          placeholder="Enter your idea prompt here..."
          value={prompt}
          onChange={handleInputChange}
          disabled={isLoading}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          Generate Ideas
        </button>
      </div>
    </div>
  );
};

export default IdeaForm;