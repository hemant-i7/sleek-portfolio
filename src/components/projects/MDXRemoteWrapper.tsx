'use client';

import { useEffect, useState } from 'react';
import { MDXRemote } from 'next-mdx-remote';

interface MDXRemoteWrapperProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mdxSource: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  components: any;
}

export function MDXRemoteWrapper({ mdxSource, components }: MDXRemoteWrapperProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mdx-content">
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
}