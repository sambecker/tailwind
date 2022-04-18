import { FC, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const FlyOut: FC<{ children: ReactNode }> = ({ children }) => {
  return(
    <AnimatePresence>
      <motion.div className="relative top-0">
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FlyOut;
