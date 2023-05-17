import { useRouteError } from "react-router-dom";
type errorType = {
  statusText: string;
  message: string;
};
export default function ErrorPage() {
  const error = useRouteError() as errorType;

  return (
    <div id="error-page">
      <h1>Oopsyyyyyy!</h1>
      <p>Go back and check your data......</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
