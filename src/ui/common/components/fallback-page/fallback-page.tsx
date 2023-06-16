import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  resetError: () => void;
};

const FallbackPage: React.FC<Props> = ({ resetError }) => {
  return (
    <>
      <div>Oooops! An error has occured</div>
      <Link onClick={() => resetError()} to="/">
        Back to main
      </Link>
    </>
  );
};

export default FallbackPage;
