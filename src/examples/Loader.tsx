import { motion } from 'framer-motion';

export const LoaderAnimation = () => {
  return (
    <div
      className="loading fixed flex flex-col z-10
     justify-center items-center bg-blue-700 gap-4 h-full text-slate-200 top-0 left-0 w-full"
    >
      <h3>Shubhi Animates</h3>
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
    </div>
  );
};
