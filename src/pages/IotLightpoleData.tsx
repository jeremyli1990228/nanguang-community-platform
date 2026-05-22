import React, { useState } from 'react';

const IotLightpoleData: React.FC = () => {
  const [deviceName, setDeviceName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const tableData = [
    { id: 1, name: '海康街康乐园南门', location: '广东省深圳市南山区南山街道南光路17-4', dataType: '路灯控制器状态数据', data: '在线', time: '2026-05-20 15:17:42' },
    { id: 2, name: '鸿瑞花园北门', location: '广东省&gt;深圳市南山区南山街道桂庙路5号...', dataType: '路灯控制器状态数据', data: '在线', time: '2026-05-20 15:17:42' },
    { id: 3, name: '海康街海王大厦', location: '广东省深圳市南山区南山街道南海大道2221北...', dataType: '路灯控制器状态数据', data: '在线', time: '2026-05-20 15:17:42' },
    { id: 4, name: '城市花园2号门', location: '广东省南山区粤海街道海德一道225', dataType: '路灯控制器状态数据', data: '在线', time: '2026-05-20 15:17:42' },
    { id: 5, name: '城市花园3号门', location: '广东省南山区南山街道南油路2005号海...', dataType: '路灯控制器状态数据', data: '在线', time: '2026-05-20 15:17:42' },
    { id: 6, name: '海康街中段', location: '广&gt;东省深圳市南山区南山街道康乐园11栋', dataType: '路灯控制器状态数据', data: '在线', time: '2026-05-20 15:17:42' },
    { id: 7, name: '海康街海王大厦', location: '广东省深圳市南山区南山街道南海大道2221北...', dataType: '一键呼救设备状态数据', data: '在线', time: '2026-05-20 15:17:41' },
    { id: 8, name: '鸿瑞花园北门', location: '广东省&gt;深圳市南山区南山街道桂庙路5号...', dataType: '一键呼救设备状态数据', data: '在线', time: '2026-05-20 15:17:41' },
    { id: 9, name: '鸿瑞花园北门', location: '广东省&gt;深圳市南山区南山街道桂庙路5号...', dataType: '一键呼救设备状态数据', data: '在线', time: '2026-05-20 15:17:41' },
    { id: 10, name: '城市花园2号门', location: '广东省南山区粤海街道海德一道225', dataType: '一键呼救设备状态数据', data: '在线', time: '2026-05-20 15:17:41' },
    { id: 11, name: '海康街康乐园南门', location: '广东省深圳市南山区南山街道南光路17-4', dataType: '一键呼救设备状态数据', data: '在线', time: '2026-05-20 15:17:41' },
    { id: 12, name: '城市花园3号门', location: '广东省南山区南山街道南油路2005号海...', dataType: '一键呼救设备状态数据', data: '在线', time: '2026-05-20 15:17:41' },
    { id: 13, name: '海康街中段', location: '广&gt;东省深圳市南山区南山街道康乐园11栋', dataType: '一键呼救设备状态数据', data: '在线', time: '2026-05-20 15:17:41' },
    { id: 14, name: '社区正门北侧智慧灯杆', location: '广东省深圳市南山区南山街道海德二道355-5号', dataType: '风速数据', data: '0.7m/s', time: '2026-05-20 15:15:08' },
    { id: 15, name: '社区正门北侧智慧灯杆', location: '广东省深圳市南山区南山街道海德二道355-5号', dataType: '空气指令指数', data: '0.7', time: '2026-05-20 15:15:08' },
    { id: 16, name: '社区正门北侧智慧灯杆', location: '广东省深圳市南山区南山街道海德二道355-5号', dataType: '风向数据', data: '9.0°', time: '2026-05-20 15:15:08' },
    { id: 17, name: '社区正门北侧智慧灯杆', location: '广东省深圳市南山区南山街道海德二道355-5号', dataType: 'PM2.5数据', data: '16.0μg/m3', time: '2026-05-20 15:15:08' },
  ];

  const total = 600753;
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
        <div className="text-sm text-gray-600">共 {total.toLocaleString()} 条</div>
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
          <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">{currentPage}</span>
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
          <span className="text-sm text-gray-500">30038</span>
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

export default IotLightpoleData;