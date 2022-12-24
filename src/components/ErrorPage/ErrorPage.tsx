import { useRouteError } from 'react-router-dom';
import { withMessage } from '../HOC/withMessage';

const ErrorPage = ({ message }: { message?: string }) => {
  console.log(`${message} Error Page`);

  const error = useRouteError() as { statusText: string; message: string };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default withMessage(ErrorPage);
