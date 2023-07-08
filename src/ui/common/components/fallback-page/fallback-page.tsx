import React from 'react';
import { Link } from 'react-router-dom';

import { isDevMode } from 'src/common/helpers/common.helper';

type Props = {
  resetError: () => void;
  error: Error;
};

const FallbackPage: React.FC<Props> = ({ error, resetError }) => (
  <>
    <div>Oooops! An error has occured</div>
    {isDevMode() && <div>{error.message}</div>}
    <Link onClick={() => resetError()} to="/">
      Back to main
    </Link>
  </>
);

export default FallbackPage;
