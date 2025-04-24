import React from 'react';
import Layout from './components/Layout';
import IdeaForm from './components/IdeaForm';
import IdeaCard from './components/IdeaCard';
import { useIdeas } from './hooks/useIdeas';

function App() {
  const { ideas, savedIdeas, generateIdeas, saveIdea } = useIdeas();

  return (
    <Layout>
      <Layout.TabPanel title="Generated Ideas">
        <IdeaForm onGenerateIdeas={generateIdeas} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ideas.map((idea) => (           
              <IdeaCard key={idea.id} idea={idea} onSave={saveIdea}/>            
          ))}          
        </div>
      </Layout.TabPanel>
      <Layout.TabPanel title="Saved Ideas">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedIdeas.map((idea) => (
            <div key={idea.id}>
              <IdeaCard idea={idea} />
            </div>            
          ))}
        </div>
      </Layout.TabPanel>
      <Layout.TabPanel title="Marketplace">
        <div>Marketplace Content</div>
      </Layout.TabPanel>
    </Layout>
  );
}

export default App;