import React, { useState } from 'react';

const IotCameraData: React.FC = () => {
  const [deviceName, setDeviceName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const tableData = [
    { id: 1, name: '康乐园停车场立杆球机2', location: '-', dataType: '状态', data: '离线', time: '2026-04-21 11:26:22' },
    { id: 2, name: '南光城市花园3号门球机', location: '-', dataType: '状态', data: '离线', time: '2026-04-21 11:26:22' },
    { id: 3, name: '康乐园停车场立杆球机2', location: '-', dataType: '状态', data: '离线', time: '2026-04-21 11:24:17' },
    { id: 4, name: '南光城市花园3号门球机', location: '-', dataType: '状态', data: '离线', time: '2026-04-21 11:24:17' },
    { id: 5, name: '南光城市花园3号门球机', location: '-', dataType: '状态', data: '离线', time: '2026-04-21 11:22:12' },
    { id: 6, name: '康乐园停车场立杆球机2', location: '-', dataType: '状态', data: '离线', time: '2026-04-21 11:22:12' },
    { id: 7, name: '南光城市花园3号门球机', location: '-', dataType: '状态', data: '离线', time: '2026-04-21 11:20:07' },
    { id: 8, name: '康乐园停车场立杆球机2', location: '-', dataType: '状态', data: '离线', time: '2026-04-21 11:20:07' },
    { id: 9, name: '康乐园停车场立杆球机2', location: '-', dataType: '状态', data: '离线', time: '2026-04-21 11:18:03' },
    { id: 10, name: '南光城市花园3号门球机', location: '-', dataType: '状态', data: '离线', time: '2026-04-21 11:18:02' },
    { id: 11, name: '康乐园停车场立杆球机2', location: '-', dataType: '状态', data: '离线', time: '2026-04-21 11:15:58' },
    { id: 12, name: '南光城市花园3号门球机', location: '-', dataType: '状态', data: '离线', time: '2026-04-21 11:15:58' },
    { id: 13, name: '南光城市花园3号门球机', location: '-', dataType: '状态', data: '离线', time: '2026-04-21 11:13:53' },
    { id: 14, name: '康乐园停车场立杆球机2', location: '-', dataType: '状态', data: '离线', time: '2026-04-21 11:13:53' },
    { id: 15, name: '康乐园停车场立杆球机2', location: '-', dataType: '状态', data: '离线', time: '2026-04-21 11:11:48' },
    { id: 16, name: '南光城市花园3号门球机', location: '-', dataType: '状态', data: '离线', time: '2026-04-21 11:11:48' },
    { id: 17, name: '南光城市花园3号门球机', location: '-', dataType: '状态', data: '离线', time: '2026-04-21 11:09:43' },
  ];

  const total = 39659;
  const totalPages = Math.ceil(total / pageSize);

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
            <input type="text" value={deviceName} onChange={(e) => setDeviceName(e.target.value)} placeholder="请输入" className="border border-gray-300 rounded px-3 py-1.5 text-sm w-48" />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">上报时间</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border border-gray-300 rounded px-3 py-1.5 text-sm" />
            <span className="text-gray-400">至</span>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="border border-gray-300 rounded px-3 py-1.5 text-sm" />
          </div>
          <div className="ml-auto flex gap-2">
            <button onClick={handleSearch} className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>搜索
            </button>
            <button onClick={handleReset} className="px-4 py-1.5 border border-gray-300 text-gray-600 text-sm rounded hover:bg-gray-50 transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>重置
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">序号</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">设备名称</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">所在位置</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">数据类型</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">上报数据</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">上报时间</th>
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
        <div className="text-sm text-gray-600">共 {total.toLocaleString()} 条</div>
        <div className="flex items-center gap-2">
          <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))} className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option value={10}>10条/页</option>
            <option value={20}>20条/页</option>
            <option value={50}>50条/页</option>
            <option value={100}>100条/页</option>
          </select>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className={`px-2 py-1 text-sm rounded ${currentPage === 1 ? 'bg-blue-500 text-white' : 'border border-gray-300'}`}>{currentPage}</span>
          {Array.from({ length: Math.min(5, totalPages - 1) }, (_, i) => (
            <span key={i + 2} className={`px-2 py-1 text-sm rounded cursor-pointer ${currentPage === i + 2 ? 'bg-blue-500 text-white' : 'border border-gray-300 hover:bg-gray-50'}`} onClick={() => handlePageChange(i + 2)}>{i + 2}</span>
          ))}
          <span className="text-sm text-gray-500">...</span>
          <span className="px-2 py-1 text-sm border border-gray-300 rounded">{totalPages}</span>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="flex items-center gap-1 ml-2">
            <span className="text-sm text-gray-500">前往</span>
            <input type="number" defaultValue={currentPage} className="w-12 border border-gray-300 rounded px-2 py-1 text-sm text-center" />
            <span className="text-sm text-gray-500">页</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IotCameraData;