import React from 'react';
import classes from 'src/ui/common/components/preloader/preloader.module.css'
import preloader from 'src/assets/images/preloader.svg'

let Preloader: React.FC = () => {
  return (
    <div className={classes.preloader}>
      <img src={preloader}/>
    </div>
  )
};

export default Preloader;
