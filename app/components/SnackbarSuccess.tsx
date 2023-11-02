export default function SnackbarSuccess() {
  return (
    <>
      {/* Alerts: Success */}
      <div className="fixed bottom-20 left-20 mb-4 ml-4 p-4 md:p-5 rounded text-blue-700 bg-blue-100 ">
        {" "}
        <div className="flex items-center mb-2">
          <svg
            className="hi-solid hi-check-circle inline-block w-5 h-5 mr-3 flex-none text-blue-500 dark:text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="font-semibold">Project was added successfully!</h3>
        </div>
        <p className="ml-8">
          Manage all available projects from your{" "}
          <a
            className="underline text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
            href="#"
          >
            personal dashboard
          </a>
          .
        </p>
      </div>
      {/* END Alerts: Success */}
    </>
  );
}
