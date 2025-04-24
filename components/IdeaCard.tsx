import React from 'react';
import { Idea } from '../hooks/useIdeas';

interface IdeaCardProps {
  idea: Idea;
  saveIdea: (idea: Idea) => void;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ idea, saveIdea }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col">
      <h3 className="text-lg font-semibold mb-2">{idea.title}</h3>
      <p className="text-gray-700">{idea.description}</p>
      <button
        onClick={() => saveIdea(idea)}
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-end"
      >
        Save Idea
      </button>
    </div>
  );
};

export default IdeaCard;