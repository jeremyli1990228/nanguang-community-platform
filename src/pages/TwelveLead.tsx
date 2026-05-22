import React, { useState } from 'react';

const TwelveLead: React.FC = () => {
  const [searchName, setSearchName] = useState('');
  const [searchDevice, setSearchDevice] = useState('');

  return (
    <div className="bg-white rounded-lg p-6">
      {/* 搜索区域 */}
      <div className="flex gap-4 mb-6 items-center justify-between">
        <div className="flex gap-6 items-center">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">住户姓名</label>
            <input
              type="text"
              placeholder="请输入"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-48 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">设备名称</label>
            <input
              type="text"
              placeholder="请输入"
              value={searchDevice}
              onChange={(e) => setSearchDevice(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-48 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            搜索
          </button>
          <button className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            重置
          </button>
        </div>
      </div>

      {/* 表格 */}
      <div className="border border-gray-200 rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-16">序号</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">住户姓名</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">设备名称</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">数据类型</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">上报数据</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">上报时间</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-20">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7} className="py-16 text-center">
                <div className="flex flex-col items-center">
                  <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <div className="text-gray-400">暂无数据</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 分页 */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-gray-600">共 0 条</div>
        <div className="flex items-center gap-2">
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option>20条/页</option>
            <option>50条/页</option>
            <option>100条/页</option>
          </select>
          <button 
            className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed" 
            disabled
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded">1</button>
          <button 
            className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed" 
            disabled
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <span className="ml-2 text-gray-600">前往</span>
          <input
            type="number"
            className="w-16 border border-gray-300 rounded px-2 py-1 text-center text-sm"
            value={1}
            readOnly
          />
          <span className="text-gray-600">页</span>
        </div>
      </div>
    </div>
  );
};

export default TwelveLead;