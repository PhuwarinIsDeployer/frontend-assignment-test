import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

const LoadingScreen = () => (
  <div className="flex justify-center items-center bg-black h-full min-h-screen">
    <CircularProgress size={80} />
  </div>
);

export default LoadingScreen;
