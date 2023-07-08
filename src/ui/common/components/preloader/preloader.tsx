import React from 'react';

import preloader from 'src/assets/images/preloader.svg';
import classes from 'src/ui/common/components/preloader/preloader.module.scss';

const Preloader: React.FC = () => (
  <div className={classes.preloader}>
    <img alt="" src={preloader} />
  </div>
);

export default Preloader;
