import { AiFillWarning } from "react-icons/ai";
import { useState, useEffect } from "react";

type SnackbarProps = {
  message: string;
  timer: number;
  setShowSnackbar: (show: boolean) => void;
};

const SnackbarWarning: React.FC<SnackbarProps> = ({
  message,
  timer,
  setShowSnackbar,
}) => {
  const [countdown, setCountdown] = useState(timer);

  useEffect(() => {
    if (countdown > 0) {
      const timerId = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timerId); // Clear the timeout if the component unmounts
    } else {
      setShowSnackbar(false);
    }
  }, [countdown, setShowSnackbar]);

  return (
    <>
      {/* Alerts: Success */}
      <div
        className={`fixed bottom-20 left-20 md:bottom-10 md:left-10 mb-4 ml-4 p-4 md:p-5 rounded text-yellow-700 bg-yellow-100 min-w-[450px] `}
      >
        {" "}
        <div className="flex flex-row space-x-10">
          <div className="flex items-center mb-2 space-x-2">
            <AiFillWarning className="text-yellow-700" />
            <h3 className="font-semibold">Warning!</h3>
            <button
              onClick={() => setShowSnackbar(false)}
              className="text-yellow-500 hover:ring-2 ring-yellow-500"
            >
              Closes in {countdown} ...
            </button>
          </div>
        </div>
        <p className="flex justify-start ml-6">{message}</p>
      </div>
      {/* END Alerts: Success */}
    </>
  );
};
export default SnackbarWarning;
