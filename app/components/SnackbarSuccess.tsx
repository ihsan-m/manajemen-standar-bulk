import { BsFillCheckCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function SnackbarSuccess({
  message,
  timer,
  setShowSnackbar,
}) {
  const [countdown, setCountdown] = useState(timer);

  useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else {
      setShowSnackbar(false);
    }
  }, [countdown]);

  return (
    <>
      {/* Alerts: Success */}
      <div
        className={`fixed bottom-20 left-20 md:bottom-10 md:left-10 mb-4 ml-4 p-4 md:p-5 rounded text-blue-700 bg-blue-100 min-w-[450px] `}
      >
        {" "}
        <div className="flex flex-row space-x-10">
          <div className="flex items-center mb-2 space-x-2">
            <BsFillCheckCircleFill className="text-blue-700" />
            <h3 className="font-semibold">Success!</h3>
            <button onClick={() => setShowSnackbar(false)} className="text-blue-500 hover:ring-2 ring-blue-500">Closes in {countdown} ...</button>
          </div>
        </div>
        <p className="flex justify-start ml-6">{message}</p>
      </div>
      {/* END Alerts: Success */}
    </>
  );
}
