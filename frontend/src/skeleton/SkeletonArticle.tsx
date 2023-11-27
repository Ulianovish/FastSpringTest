import React from 'react';
import SkeletonElement from './SkeletonElement';
import Shimmer from '../Shimmer';

interface SkeletonArticleProps {
  theme?: string;
}
const SkeletonArticle: React.FC<SkeletonArticleProps> = ({ theme }) => {
  return (
    <div className={`skeleton-wrapper ${theme ? theme : 'light'}`}>
      <div className="skeleton-article">
        <SkeletonElement type="thumbnail" />
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonArticle;
