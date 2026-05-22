import React, { useState } from 'react';

interface PushRecord {
  id: number;
  alarmId: string;
  alarmType: string;
  alarmDevice: string;
  pushTime: string;
  pushSystem: string;
  pushStatus: string;
  pushResult: string;
}

const AlarmPushRecord: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [pushStatus, setPushStatus] = useState('');
  const [alarmType, setAlarmType] = useState('');
  const [pushSystem, setPushSystem] = useState('');
  const [alarmId, setAlarmId] = useState('');

  const totalCount = 510934;
  const totalPages = 25547;

  const mockData: PushRecord[] = [
    { id: 1, alarmId: '2056991526384566273', alarmType: '用电设备离线报警', alarmDevice: '南光村59号303', pushTime: '2026-05-20 14:52:52', pushSystem: '区物联网平台', pushStatus: '成功', pushResult: '成功' },
    { id: 2, alarmId: '2056991526275514372', alarmType: '用电设备离线报警', alarmDevice: '南光村59号203', pushTime: '2026-05-20 14:52:52', pushSystem: '社区', pushStatus: '成功', pushResult: '成功' },
    { id: 3, alarmId: '2056991526514589698', alarmType: '用电设备离线报警', alarmDevice: '南光村59号804', pushTime: '2026-05-20 14:52:52', pushSystem: '区物联网平台', pushStatus: '成功', pushResult: '成功' },
    { id: 4, alarmId: '2056991526384566273', alarmType: '用电设备离线报警', alarmDevice: '南光村59号303', pushTime: '2026-05-20 14:52:52', pushSystem: '社区', pushStatus: '成功', pushResult: '成功' },
    { id: 5, alarmId: '2056991526355206145', alarmType: '用电设备离线报警', alarmDevice: '南光村59号704', pushTime: '2026-05-20 14:52:52', pushSystem: '社区', pushStatus: '成功', pushResult: '成功' },
    { id: 6, alarmId: '2056991526514589698', alarmType: '用电设备离线报警', alarmDevice: '南光村59号804', pushTime: '2026-05-20 14:52:52', pushSystem: '社区', pushStatus: '成功', pushResult: '成功' },
    { id: 7, alarmId: '2056991526275514372', alarmType: '用电设备离线报警', alarmDevice: '南光村59号203', pushTime: '2026-05-20 14:52:52', pushSystem: '区物联网平台', pushStatus: '成功', pushResult: '成功' },
    { id: 8, alarmId: '2056991526355206145', alarmType: '用电设备离线报警', alarmDevice: '南光村59号704', pushTime: '2026-05-20 14:52:52', pushSystem: '区物联网平台', pushStatus: '成功', pushResult: '成功' },
    { id: 9, alarmId: '2056991523884761090', alarmType: '用电设备离线报警', alarmDevice: '正龙村101号602', pushTime: '2026-05-20 14:52:51', pushSystem: '区物联网平台', pushStatus: '成功', pushResult: '成功' },
    { id: 10, alarmId: '2056991522769076226', alarmType: '用电设备离线报警', alarmDevice: '南光村111号612', pushTime: '2026-05-20 14:52:51', pushSystem: '社区', pushStatus: '成功', pushResult: '成功' },
    { id: 11, alarmId: '2056991523599548417', alarmType: '用电设备离线报警', alarmDevice: '正龙村71号101', pushTime: '2026-05-20 14:52:51', pushSystem: '区物联网平台', pushStatus: '成功', pushResult: '成功' },
    { id: 12, alarmId: '2056991523138174978', alarmType: '用电设备离线报警', alarmDevice: '南光村60号102', pushTime: '2026-05-20 14:52:51', pushSystem: '社区', pushStatus: '成功', pushResult: '成功' },
    { id: 13, alarmId: '2056991522932654082', alarmType: '用电设备离线报警', alarmDevice: '南光村60号203', pushTime: '2026-05-20 14:52:51', pushSystem: '社区', pushStatus: '成功', pushResult: '成功' },
    { id: 14, alarmId: '2056991522844573697', alarmType: '用电设备离线报警', alarmDevice: '南光村111号611', pushTime: '2026-05-20 14:52:51', pushSystem: '区物联网平台', pushStatus: '成功', pushResult: '成功' },
    { id: 15, alarmId: '2056991522328674305', alarmType: '用电设备离线报警', alarmDevice: '南光村60号502', pushTime: '2026-05-20 14:52:51', pushSystem: '社区', pushStatus: '成功', pushResult: '成功' },
    { id: 16, alarmId: '2056991523138174978', alarmType: '用电设备离线报警', alarmDevice: '南光村60号102', pushTime: '2026-05-20 14:52:51', pushSystem: '区物联网平台', pushStatus: '成功', pushResult: '成功' },
  ];

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleSearch = () => {
    console.log('搜索条件:', { pushStatus, alarmType, pushSystem, alarmId });
  };

  const handleReset = () => {
    setPushStatus('');
    setAlarmType('');
    setPushSystem('');
    setAlarmId('');
    setCurrentPage(1);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 6;
    
    for (let i = 1; i <= Math.min(maxVisible, totalPages); i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 rounded ${
            currentPage === i
              ? 'bg-blue-500 text-white'
              : 'border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {i}
        </button>
      );
    }
    
    if (totalPages > maxVisible) {
      pages.push(
        <span key="ellipsis" className="px-2">...</span>
      );
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50"
        >
          {totalPages}
        </button>
      );
    }
    
    return pages;
  };

  return (
    <div className="bg-white rounded-lg p-6">
      {/* 搜索区域 */}
      <div className="flex flex-wrap gap-4 mb-6 items-center">
        <div className="flex items-center gap-2">
          <span className="text-gray-600 whitespace-nowrap">推送状态</span>
          <select 
            className="border border-gray-300 rounded px-3 py-1.5 w-40 focus:outline-none focus:border-blue-500"
            value={pushStatus}
            onChange={(e) => setPushStatus(e.target.value)}
          >
            <option value="">请选择</option>
            <option value="success">成功</option>
            <option value="failed">失败</option>
          </select>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-gray-600 whitespace-nowrap">报警类型</span>
          <select 
            className="border border-gray-300 rounded px-3 py-1.5 w-40 focus:outline-none focus:border-blue-500"
            value={alarmType}
            onChange={(e) => setAlarmType(e.target.value)}
          >
            <option value="">请选择</option>
            <option value="offline">用电设备离线报警</option>
            <option value="smoke">烟雾报警</option>
            <option value="gas">燃气报警</option>
          </select>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-gray-600 whitespace-nowrap">推送时间</span>
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              placeholder="开始日期"
              className="border border-gray-300 rounded px-3 py-1.5 w-32 focus:outline-none focus:border-blue-500"
            />
            <span className="text-gray-400">至</span>
            <input 
              type="text" 
              placeholder="结束日期"
              className="border border-gray-300 rounded px-3 py-1.5 w-32 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-gray-600 whitespace-nowrap">推送系统</span>
          <select 
            className="border border-gray-300 rounded px-3 py-1.5 w-40 focus:outline-none focus:border-blue-500"
            value={pushSystem}
            onChange={(e) => setPushSystem(e.target.value)}
          >
            <option value="">请选择</option>
            <option value="platform">区物联网平台</option>
            <option value="community">社区</option>
          </select>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-gray-600 whitespace-nowrap">报警ID</span>
          <input 
            type="text" 
            placeholder="请输入"
            className="border border-gray-300 rounded px-3 py-1.5 w-40 focus:outline-none focus:border-blue-500"
            value={alarmId}
            onChange={(e) => setAlarmId(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 ml-auto">
          <button 
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            搜索
          </button>
          <button 
            onClick={handleReset}
            className="border border-gray-300 hover:bg-gray-50 px-4 py-1.5 rounded flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            重置
          </button>
        </div>
      </div>

      {/* 表格 */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-16">序号</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">报警ID</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">报警类型</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">报警设备</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">推送时间</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">推送系统</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">推送状态</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">推送结果说明</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-20">操作</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((record, index) => (
              <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-700">{record.id}</td>
                <td className="py-3 px-4 text-gray-700">{record.alarmId}</td>
                <td className="py-3 px-4 text-gray-700">{record.alarmType}</td>
                <td className="py-3 px-4 text-gray-700">{record.alarmDevice}</td>
                <td className="py-3 px-4 text-gray-700">{record.pushTime}</td>
                <td className="py-3 px-4 text-gray-700">{record.pushSystem}</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-sm">
                    {record.pushStatus}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-700">{record.pushResult}</td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-600 text-sm">
                    查看
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 分页 */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-gray-600">共 {totalCount.toLocaleString()} 条</div>
        <div className="flex items-center gap-2">
          <select 
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-500"
            value={pageSize}
            onChange={handlePageSizeChange}
          >
            <option value={20}>20条/页</option>
            <option value={50}>50条/页</option>
            <option value={100}>100条/页</option>
          </select>
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" 
            disabled={currentPage === 1}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {renderPageNumbers()}
          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" 
            disabled={currentPage === totalPages}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <span className="ml-2 text-gray-600">前往</span>
          <input
            type="number"
            className="w-16 border border-gray-300 rounded px-2 py-1 text-center text-sm focus:outline-none focus:border-blue-500"
            value={currentPage}
            onChange={(e) => {
              const page = parseInt(e.target.value);
              if (!isNaN(page)) {
                handlePageChange(page);
              }
            }}
            min={1}
            max={totalPages}
          />
          <span className="text-gray-600">页</span>
        </div>
      </div>
    </div>
  );
};

export default AlarmPushRecord;
