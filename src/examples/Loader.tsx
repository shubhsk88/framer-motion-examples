import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { useState } from 'react';
export interface LoaderAnimationProps {
  onClick?: () => void;
}
export const LoaderAnimation: React.FC<LoaderAnimationProps> = () => {
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
              <motion.div
                layoutId="header"
                className="loading"
                onClick={() => setIsLoading(false)}
              >
                <motion.h3 layoutId="logo">Cognite</motion.h3>
                <p>Is Loading...</p>
                <div>
                  <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 100 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: 'reverse',
                      duration: 1,
                    }}
                    style={{ width: 100, height: 6 }}
                    className="bg-teal-400"
                  />

                  <motion.div
                    initial={{ x: -180 }}
                    animate={{ x: 180 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: 'reverse',
                      duration: 1.2,
                    }}
                    style={{ width: 20, height: 8 }}
                    className="bg-red-400"
                  />
                  <motion.div
                    initial={{ x: -180 }}
                    animate={{ x: 180 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: 'reverse',
                      duration: 1.5,
                    }}
                    style={{ width: 200, height: 4 }}
                    className="bg-yellow-400"
                  />
                </div>
              </motion.div>
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
};

const images = ['1000', '1001', '1002', '1003', '1004', '1005', '1006', '1008'];
