import React, { useState } from 'react';

const IotWaterData: React.FC = () => {
  const [deviceName, setDeviceName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const tableData = [
    { id: 1, name: '怡海广场西座20G', location: '怡海广场西座20G', dataType: '用水读数', data: '120.58', time: '2026-05-19 19:00:01' },
    { id: 2, name: '鸿瑞花园12栋901', location: '鸿瑞花园12栋901', dataType: '用水读数', data: '98.3', time: '2026-05-19 19:00:01' },
    { id: 3, name: '康乐园3栋202', location: '康乐园3栋202', dataType: '用水读数', data: '492.83', time: '2026-05-19 19:00:01' },
    { id: 4, name: '怡海广场西栋12C', location: '怡海广场西栋12C', dataType: '用水读数', data: '124.7', time: '2026-05-19 19:00:01' },
    { id: 5, name: '龙城新苑8栋403', location: '龙城新苑8栋403', dataType: '用水读数', data: '114.9', time: '2026-05-19 19:00:01' },
    { id: 6, name: '现代城华庭6栋1单元19B', location: '现代城华庭6栋1单元19B', dataType: '用水读数', data: '625.91', time: '2026-05-19 19:00:01' },
    { id: 7, name: '南光城市花园2栋1712', location: '南光城市花园2栋1712', dataType: '用水读数', data: '5044.1', time: '2026-05-19 19:00:01' },
    { id: 8, name: '鹏都大厦A栋601', location: '鹏都大厦A栋601', dataType: '用水读数', data: '114.65', time: '2026-05-19 19:00:01' },
    { id: 9, name: '缤纷假日豪园F栋21B', location: '缤纷假日豪园F栋21B', dataType: '用水读数', data: '906.5', time: '2026-05-19 19:00:01' },
    { id: 10, name: '南光城市花园2栋3010', location: '南光城市花园2栋3010', dataType: '用水读数', data: '6970.2', time: '2026-05-19 19:00:01' },
    { id: 11, name: '现代城华庭6栋1单元24F', location: '现代城华庭6栋1单元24F', dataType: '用水读数', data: '391.04', time: '2026-05-19 19:00:01' },
    { id: 12, name: '南光城市花园A栋1307', location: '南光城市花园A栋1307', dataType: '用水读数', data: '4285.5', time: '2026-05-19 19:00:01' },
    { id: 13, name: '南光城市花园2栋410', location: '南光城市花园2栋410', dataType: '用水读数', data: '4845.6', time: '2026-05-19 19:00:01' },
    { id: 14, name: '南光花园2栋一单元202', location: '南光花园2栋一单元202', dataType: '用水读数', data: '15.66', time: '2026-05-19 19:00:01' },
    { id: 15, name: '现代城华庭2栋7G', location: '现代城华庭2栋7G', dataType: '用水读数', data: '645.19', time: '2026-05-19 19:00:01' },
    { id: 16, name: '现代城华庭2栋15D', location: '现代城华庭2栋15D', dataType: '用水读数', data: '693.22', time: '2026-05-19 19:00:01' },
    { id: 17, name: '南光城市花园C栋901', location: '南光城市花园C栋901', dataType: '用水读数', data: '10256.7', time: '2026-05-19 19:00:01' },
  ];

  const total = 23852;
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

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);
    
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
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
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
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
          {getPageNumbers().map((page) => (
            <button key={page} onClick={() => handlePageChange(page)} className={`px-3 py-1 text-sm rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'border border-gray-300 hover:bg-gray-50'}`}>
              {page}
            </button>
          ))}
          {totalPages > 5 && (
            <>
              <span className="text-sm text-gray-500">...</span>
              <span className="text-sm text-gray-500">{totalPages}</span>
            </>
          )}
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

export default IotWaterData;