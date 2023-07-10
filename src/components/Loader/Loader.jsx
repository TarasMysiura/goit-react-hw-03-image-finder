import React from 'react'
import { InfinitySpinStyle } from './Loader.styled';
import { InfinitySpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <InfinitySpinStyle>
        <InfinitySpin width="200" color="#2f2fef" />
      </InfinitySpinStyle>
    </div>
  );
}
