import { useState } from 'react';
import './App.css';
import { LayoutGroup, motion, AnimatePresence } from 'framer-motion';
import { LoaderAnimation } from './examples/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative">
      <LayoutGroup>
        <motion.header
          layoutId="header"
          className="header"
          onClick={() => setIsLoading(true)}
        >
          <motion.h1 layoutId="logo" className="fake-logo">
            Cognite
          </motion.h1>
        </motion.header>
        <main className="layout">
          <h3>Grid Gallery</h3>
          <AnimatePresence>
            {isLoading && (
              <LoaderAnimation onClick={() => setIsLoading(false)} />
            )}
          </AnimatePresence>
          <div className="grid gallery">
            {images.map((image) => (
              <img
                key={image}
                style={{
                  cursor: 'pointer',
                }}
                src={`https://picsum.photos/seed/${image}/500/300`}
                alt="placeholder"
              />
            ))}
          </div>
        </main>
      </LayoutGroup>
    </div>
  );
}

const images = ['1000', '1001', '1002', '1003', '1004', '1005', '1006', '1008'];
export default App;
