import React from 'react';

const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">{title}</h2>
      <div className="text-center py-20 text-gray-500">
        <div className="text-2xl">该页面正在开发中...</div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
