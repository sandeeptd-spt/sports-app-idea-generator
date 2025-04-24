import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

interface Idea {
  id: string;
  title: string;
  description: string;
}

const useIdeas = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [savedIdeas, setSavedIdeas] = useState<Idea[]>([]);

  const saveIdea = (idea: Idea) => {
    if (!savedIdeas.find(i => i.id === idea.id)) {
      const updated = [...savedIdeas, idea];
      setSavedIdeas(updated);
      localStorage.setItem('savedIdeas', JSON.stringify(updated));
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('savedIdeas');
    if (saved) {
        const parsedSaved = JSON.parse(saved);
        setSavedIdeas(parsedSaved);
    }
  }, []);


  const mockGenerateIdeas = (prompt: string) => {
    setIsLoading(true);
    const newIdeas: Idea[] = [
      {
        id: uuid(),
        title: 'Court Scheduler AI',
        description: 'An app to automate court bookings and notify players.',
      },
      {
        id: uuid(),
        title: 'Training Tracker',
        description: 'Tracks practice routines and offers skill-building tips.',
      },
      {
        id: uuid(),
        title: 'Tournament Hub',
        description: 'Organize and join local racket sport tournaments.',
      },
    ];
    setIdeas(newIdeas);
    setIsLoading(false);
  };

  return { ideas, mockGenerateIdeas, savedIdeas, saveIdea, isLoading };
};

export default useIdeas;