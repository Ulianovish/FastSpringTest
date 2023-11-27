import React from 'react';

interface SkeletonElementProps {
  type: string;
}
const SkeletonElement: React.FC<SkeletonElementProps> = ({ type }) => {
  return <div className={`skeleton ${type}`}></div>;
};

export default SkeletonElement;
