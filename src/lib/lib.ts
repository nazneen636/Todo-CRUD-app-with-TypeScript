import { Bounce, toast } from "react-toastify";

interface toastType {
  SuccessToast: (msg?: string) => void;
  ErrorToast: (msg?: string) => void;
}

const _: toastType = {};
_.SuccessToast = (msg = "Successfully add your Task") => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

_.ErrorToast = (msg = "Something went wrong!") => {
  toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

export default _;
