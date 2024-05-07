import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Drawer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Drawer</button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={(_, info) => {
                console.log(info);
                if (info.offset.y > 300) {
                  setIsOpen(false);
                }
              }}
              className="drawer-wrapper"
            >
              <motion.div
                initial={{ opacity: 0.5, y: '110%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.5, y: '110%' }}
                transition={{ damping: 25, type: 'spring' }}
              >
                <div className="drawer">
                  <button
                    className="drawer--close"
                    onClick={() => setIsOpen(false)}
                  >
                    X
                  </button>
                  {children}
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="drawer--background"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Drawer;
