import React, { useState } from 'react';

const HealthMachine: React.FC = () => {
  const [searchName, setSearchName] = useState('');
  const [searchDate, setSearchDate] = useState('');

  return (
    <div className="bg-white rounded-lg p-6">
      {/* 搜索区域 */}
      <div className="flex gap-4 mb-6 items-center justify-between">
        <div className="flex gap-6 items-center">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">姓名</label>
            <input
              type="text"
              placeholder="请输入"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-48 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">检测日期</label>
            <div className="flex items-center gap-2">
              <input
                type="date"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
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
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            导出
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            发送健康一体机检测数据
          </button>
        </div>
      </div>

      {/* 表格 */}
      <div className="border border-gray-200 rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-16">序号</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">姓名</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">联系方式</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">性别</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-16">年龄</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">三围尺</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">总胆固醇</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">血氧</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">尿酸</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">血糖</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">血压</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">身高体重</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">检测日期</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-20">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={14} className="py-16 text-center">
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

export default HealthMachine;