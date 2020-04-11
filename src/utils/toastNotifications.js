import { toast } from "react-toastify";

export const userCreated = username => {
  return toast.success(`${username} successfully created`, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: false,
    draggable: false,
    hideProgressBar: true
  });
};

export const commentSuccess = () => {
  return toast.success("comment posted", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: false,
    draggable: false,
    hideProgressBar: true
  });
};

export const errorNotification = errorMessage => {
  return toast.error(`${errorMessage}`, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: false,
    draggable: false,
    hideProgressBar: true
  });
};
