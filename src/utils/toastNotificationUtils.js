import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ToastNotification(type, message) {
    console.log(type, message);
  if(type === 'success'){
      toast.success(message);
    }else if(type=== 'error'){
        toast.error(message);
    }else if(type=== 'warning'){
        toast.warning(message);
    }else if(type=== 'info'){
        toast.info(message);
    }
}

export default ToastNotification;
