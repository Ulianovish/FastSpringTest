import React from 'react';
import SkeletonElement from './SkeletonElement';
import PropTypes from 'prop-types';

interface SkeletonProfileProps {
  theme: string;
}

const SkeletonProfile: React.FC<SkeletonProfileProps> = ({ theme }) => {
  return (
    <div className={`skeleton-wrapper ${theme ? theme : 'light'}`}>
      <div className="skeleton-profile">
        <div className="left">
          <SkeletonElement type="avatar" />
        </div>
        <div className="right">
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
    </div>
  );
};

SkeletonProfile.propTypes = {
  theme: PropTypes.string.isRequired
};

export default SkeletonProfile;
