import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface NotificationProps {
  type: 'success' | 'error';
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ type, message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg border flex items-center gap-2 ${
        type === 'success' 
          ? 'bg-green-500/10 border-green-500/20 text-green-400' 
          : 'bg-red-500/10 border-red-500/20 text-red-400'
      }`}
    >
      {type === 'success' ? (
        <CheckCircle className="w-5 h-5" />
      ) : (
        <AlertCircle className="w-5 h-5" />
      )}
      <span>{message}</span>
    </motion.div>
  );
};

export default Notification;