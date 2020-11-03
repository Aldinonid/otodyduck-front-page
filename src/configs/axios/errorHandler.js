import { toast } from "react-toastify";

function errorResponseHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      error.response.status === 500
        ? (message = "Oops, something went wrong!")
        : (message = error.response.data.message);

      if (typeof message === "string") toast.error(message);

      return Promise.reject(error);
    }
  }
}

export default errorResponseHandler;
