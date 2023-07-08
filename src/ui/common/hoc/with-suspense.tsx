import React from 'react';

import Preloader from 'src/ui/common/components/preloader/preloader';

export function withSuspense<WCProps extends object>(WrappedComponent: React.ComponentType<WCProps>) {
  return (props: WCProps) => (
    <React.Suspense fallback={<Preloader />}>
      <WrappedComponent {...props} />
    </React.Suspense>
  );
}
