import { ToastContainer as ToastContainerTemp, toast, Flip } from "react-toastify";

import { theme } from "@/constants";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export default toast;
export const ToastContainer = () => {
  return (
    <ToastContainerTemp
      position="top-center"
      autoClose={2000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
      transition={Flip}
    />
  );
};
