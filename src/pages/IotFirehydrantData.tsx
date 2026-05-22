import React, { useState } from 'react';

const IotFirehydrantData: React.FC = () => {
  const [deviceName, setDeviceName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const tableData = [
    { id: 1, name: '鸿瑞花园19栋', location: '鸿瑞花园19栋', dataType: '正常', data: '0.174MPa', time: '2026-03-31 00:31:45' },
    { id: 2, name: '鸿瑞花园18栋', location: '鸿瑞花园18栋', dataType: '正常', data: '0.074MPa', time: '2026-03-31 00:28:04' },
    { id: 3, name: '鸿瑞花园27栋', location: '鸿瑞花园27栋', dataType: '正常', data: '0MPa', time: '2026-03-31 00:26:06' },
    { id: 4, name: '鸿瑞花园26栋', location: '鸿瑞花园26栋', dataType: '正常', data: '0MPa', time: '2026-03-31 00:11:15' },
    { id: 5, name: '鸿瑞花园16栋', location: '鸿瑞花园16栋', dataType: '正常', data: '0.064MPa', time: '2026-03-31 00:01:47' },
    { id: 6, name: '鸿瑞花园25栋', location: '鸿瑞花园25栋', dataType: '正常', data: '0MPa', time: '2026-03-30 23:58:51' },
    { id: 7, name: '鸿瑞花园23栋', location: '鸿瑞花园23栋', dataType: '传感器报警', data: '0MPa', time: '2026-03-30 23:38:50' },
    { id: 8, name: '鸿瑞花园22栋', location: '鸿瑞花园22栋', dataType: '传感器报警', data: '0MPa', time: '2026-03-30 23:25:56' },
    { id: 9, name: '鸿瑞花园24栋', location: '鸿瑞花园24栋', dataType: '正常', data: '0MPa', time: '2026-03-30 23:14:51' },
    { id: 10, name: '鸿瑞花园17栋', location: '鸿瑞花园17栋', dataType: '正常', data: '0.064MPa', time: '2026-03-30 23:13:13' },
    { id: 11, name: '鸿瑞花园21栋', location: '鸿瑞花园21栋', dataType: '传感器报警', data: '0MPa', time: '2026-03-30 23:10:51' },
    { id: 12, name: '鸿瑞花园14栋', location: '鸿瑞花园14栋', dataType: '传感器报警', data: '0MPa', time: '2026-03-30 23:03:25' },
    { id: 13, name: '鸿瑞花园13栋', location: '鸿瑞花园13栋', dataType: '传感器报警', data: '0MPa', time: '2026-03-30 23:00:43' },
    { id: 14, name: '鸿瑞花园15栋', location: '鸿瑞花园15栋', dataType: '传感器报警', data: '0MPa', time: '2026-03-30 22:57:45' },
    { id: 15, name: '鸿瑞花园20栋', location: '鸿瑞花园20栋', dataType: '传感器报警', data: '0MPa', time: '2026-03-30 22:50:43' },
    { id: 16, name: '鸿瑞花园19栋', location: '鸿瑞花园19栋', dataType: '正常', data: '0.173MPa', time: '2026-03-30 22:31:44' },
    { id: 17, name: '鸿瑞花园18栋', location: '鸿瑞花园18栋', dataType: '正常', data: '0.075MPa', time: '2026-03-30 22:28:02' },
  ];

  const total = 4070;
  const totalPages = Math.ceil(total / pageSize);

  const getPageNumbers = () => {
    const numbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        numbers.push(i);
      }
    } else {
      numbers.push(1, 2, 3, 4, 5);
      if (currentPage > 5) {
        numbers.push('...', totalPages);
      }
    }
    return numbers;
  };

  const handleSearch = () => {};
  const handleReset = () => {
    setDeviceName('');
    setStartDate('');
    setEndDate('');
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">设备名称</label>
            <input
              type="text"
              value={deviceName}
              onChange={(e) => setDeviceName(e.target.value)}
              placeholder="请输入"
              className="border border-gray-300 rounded px-3 py-1.5 text-sm w-48"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">上报时间</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1.5 text-sm"
            />
            <span className="text-gray-400">至</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1.5 text-sm"
            />
          </div>
          <div className="ml-auto flex gap-2">
            <button
              onClick={handleSearch}
              className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              搜索
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-1.5 border border-gray-300 text-gray-600 text-sm rounded hover:bg-gray-50 transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              重置
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">序号</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">设备名称</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">所在位置</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">数据类型</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">上报数据</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">上报时间</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tableData.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-500">{index + 1}</td>
                <td className="px-4 py-3 text-sm text-gray-800">{item.name}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{item.location}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{item.dataType}</td>
                <td className="px-4 py-3 text-sm text-gray-800">{item.data}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-600">共 {total} 条</div>
        <div className="flex items-center gap-2">
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value={10}>10条/页</option>
            <option value={20}>20条/页</option>
            <option value={50}>50条/页</option>
            <option value={100}>100条/页</option>
          </select>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded">{currentPage}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <span className="text-sm text-gray-500">...</span>
          <span className="text-sm text-gray-500">{totalPages}</span>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="flex items-center gap-1 ml-2">
            <span className="text-sm text-gray-500">前往</span>
            <input
              type="number"
              defaultValue={currentPage}
              className="w-12 border border-gray-300 rounded px-2 py-1 text-sm text-center"
            />
            <span className="text-sm text-gray-500">页</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IotFirehydrantData;
