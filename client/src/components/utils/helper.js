import {toast} from 'react-toastify'

export const toastNotification = (type, message, time, position) => {
      toast[type || 'error'](message || '', {
      position: position || 'bottom-center',
      autoClose: time || 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
};