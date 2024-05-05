import { motion } from 'framer-motion';
export interface LoaderAnimationProps {
  onClick?: () => void;
}
export const LoaderAnimation: React.FC<LoaderAnimationProps> = ({
  onClick,
}) => {
  return (
    <motion.div layoutId="header" className="loading" onClick={onClick}>
      <motion.h3 layoutId="logo">Cognite</motion.h3>
      <p>Is Loading...</p>
      <div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 100 }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}
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
  );
};
