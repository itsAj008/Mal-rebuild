function ErrorFallback({ error, resetErrorBoundary }) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.
  
    return (
      <div role="alert" className="w-full h-screen flex justify-center pt-32">
        <div className=" w-[40%] sm:w-[90%] h-[30%] bg-gray-300 pl-3 pt-1 rounded-sm ">
            <p>Something went wrong:</p>
            <span>please try again by clicking the bellow button</span>
            <pre style={{ color: "red" }}>{error.message}</pre>
            <button onClick={resetErrorBoundary} className=" py-1 px-3 bg-gray-400 text-white rounded-md">Try again</button>
        </div>  
      </div>
    );
  }

  export default ErrorFallback