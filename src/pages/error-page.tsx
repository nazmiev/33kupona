import { useRouteError, Link } from "react-router-dom";

type ErrorResponse = {
  data: any;
  status: number;
  statusText: string;
  message?: string;
};

const errorCheck = (error: any): error is ErrorResponse => {
  return "data" in error && "status" in error && "statusText" in error;
};

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  if (errorCheck(error)) {
    return (
      <div id="error-page">
        <h1>У нас нет такой акции</h1>
        <p>
          Посмотрите все акции на <Link to="/">главной</Link>
        </p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
  } else {
    return <></>;
  }
}
