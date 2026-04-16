
import React, { useEffect } from 'react';
import Home from './Home';

const Index = () => {
  useEffect(() => {
    document.title = 'Advantix AGI - AI Automation Agency';
  }, []);
  
  return <Home />;
};

export default Index;
