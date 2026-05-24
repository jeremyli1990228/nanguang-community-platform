import React, { useState } from 'react';

interface AlarmRecord {
  id: number;
  alarmNo: string;
  deviceName: string;
  alarmType: string;
  alarmTypeRule: string;
  deviceType: string;
  status: string;
  address: string;
  alarmDevice: string;
  alarmTime: string;
  handler: string;
  result: string;
  handleTime: string;
}

const AlarmRecord: React.FC = () => {
  const [alarmNo, setAlarmNo] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [status, setStatus] = useState('');
  const [alarmType, setAlarmType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(20);
  
  // 弹窗状态
  const [showHandleModal, setShowHandleModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [currentAlarm, setCurrentAlarm] = useState<AlarmRecord | null>(null);
  
  // 处理表单状态
  const [handleResult, setHandleResult] = useState('');
  const [handleDesc, setHandleDesc] = useState('');

  const totalCount = 261811;
  const totalPages = Math.ceil(totalCount / pageSize);

  const alarmRecords: AlarmRecord[] = [
    { id: 1, alarmNo: '2026052100267...', deviceName: '正龙村13号303', alarmType: '故障电弧报警', alarmTypeRule: '故障电弧电流超过阈值持续3秒触发报警', deviceType: '用电', status: '报警中', address: '正龙村13号303', alarmDevice: '正龙村13号303', alarmTime: '2026-05-21 19:19:39', handler: '-', result: '-', handleTime: '-' },
    { id: 2, alarmNo: '2026052100267...', deviceName: '南光村59号303', alarmType: '用电设备离线...', alarmTypeRule: '设备离线超过10分钟触发报警', deviceType: '用电', status: '报警中', address: '南光村59号303', alarmDevice: '南光村59号303', alarmTime: '2026-05-21 18...', handler: '-', result: '-', handleTime: '-' },
    { id: 3, alarmNo: '2026052100267...', deviceName: '南光村59号103', alarmType: '用电设备离线...', alarmTypeRule: '设备离线超过10分钟触发报警', deviceType: '用电', status: '报警中', address: '南光村59号103', alarmDevice: '南光村59号103', alarmTime: '2026-05-21 18...', handler: '-', result: '-', handleTime: '-' },
    { id: 4, alarmNo: '2026052100267...', deviceName: '南光村59号604', alarmType: '用电设备离线...', alarmTypeRule: '设备离线超过10分钟触发报警', deviceType: '用电', status: '报警中', address: '南光村59号604', alarmDevice: '南光村59号604', alarmTime: '2026-05-21 18...', handler: '-', result: '-', handleTime: '-' },
    { id: 5, alarmNo: '2026052100267...', deviceName: '南光村59号704', alarmType: '用电设备离线...', alarmTypeRule: '设备离线超过10分钟触发报警', deviceType: '用电', status: '报警中', address: '南光村59号704', alarmDevice: '南光村59号704', alarmTime: '2026-05-21 18...', handler: '-', result: '-', handleTime: '-' },
    { id: 6, alarmNo: '2026052100267...', deviceName: '正龙村101号402', alarmType: '用电设备离线...', alarmTypeRule: '设备离线超过10分钟触发报警', deviceType: '用电', status: '报警中', address: '正龙村101号402', alarmDevice: '正龙村101号402', alarmTime: '2026-05-21 18...', handler: '-', result: '-', handleTime: '-' },
    { id: 7, alarmNo: '2026052100267...', deviceName: '正龙村101号202', alarmType: '用电设备离线...', alarmTypeRule: '设备离线超过10分钟触发报警', deviceType: '用电', status: '报警中', address: '正龙村101号202', alarmDevice: '正龙村101号202', alarmTime: '2026-05-21 18...', handler: '-', result: '-', handleTime: '-' },
    { id: 8, alarmNo: '2026052100267...', deviceName: '南光村59号203', alarmType: '用电设备离线...', alarmTypeRule: '设备离线超过10分钟触发报警', deviceType: '用电', status: '报警中', address: '南光村59号203', alarmDevice: '南光村59号203', alarmTime: '2026-05-21 18...', handler: '-', result: '-', handleTime: '-' },
    { id: 9, alarmNo: '2026052100267...', deviceName: '南光村59号503', alarmType: '用电设备离线...', alarmTypeRule: '设备离线超过10分钟触发报警', deviceType: '用电', status: '报警中', address: '南光村59号503', alarmDevice: '南光村59号503', alarmTime: '2026-05-21 18...', handler: '-', result: '-', handleTime: '-' },
    { id: 10, alarmNo: '2026052100267...', deviceName: '南光村59号303', alarmType: '用电设备离线...', alarmTypeRule: '设备离线超过10分钟触发报警', deviceType: '用电', status: '报警中', address: '南光村59号303', alarmDevice: '南光村59号303', alarmTime: '2026-05-21 18...', handler: '-', result: '-', handleTime: '-' },
    { id: 11, alarmNo: '2026052100267...', deviceName: '南光村59号103', alarmType: '用电设备离线...', alarmTypeRule: '设备离线超过10分钟触发报警', deviceType: '用电', status: '报警中', address: '南光村59号103', alarmDevice: '南光村59号103', alarmTime: '2026-05-21 18...', handler: '-', result: '-', handleTime: '-' },
    { id: 12, alarmNo: '2026052100267...', deviceName: '南光村59号604', alarmType: '用电设备离线...', alarmTypeRule: '设备离线超过10分钟触发报警', deviceType: '用电', status: '报警中', address: '南光村59号604', alarmDevice: '南光村59号604', alarmTime: '2026-05-21 18...', handler: '-', result: '-', handleTime: '-' },
    { id: 13, alarmNo: '2026052100267...', deviceName: '南光村59号704', alarmType: '用电设备离线...', alarmTypeRule: '设备离线超过10分钟触发报警', deviceType: '用电', status: '报警中', address: '南光村59号704', alarmDevice: '南光村59号704', alarmTime: '2026-05-21 18...', handler: '-', result: '-', handleTime: '-' },
    { id: 14, alarmNo: '2026052100267...', deviceName: '正龙村101号402', alarmType: '用电设备离线...', alarmTypeRule: '设备离线超过10分钟触发报警', deviceType: '用电', status: '报警中', address: '正龙村101号402', alarmDevice: '正龙村101号402', alarmTime: '2026-05-21 18...', handler: '-', result: '-', handleTime: '-' },
    { id: 15, alarmNo: '2026052100267...', deviceName: '正龙村101号202', alarmType: '用电设备离线...', alarmTypeRule: '设备离线超过10分钟触发报警', deviceType: '用电', status: '报警中', address: '正龙村101号202', alarmDevice: '正龙村101号202', alarmTime: '2026-05-21 18...', handler: '-', result: '-', handleTime: '-' },
    { id: 16, alarmNo: '2026052100267...', deviceName: '南光村59号203', alarmType: '用电设备离线...', alarmTypeRule: '设备离线超过10分钟触发报警', deviceType: '用电', status: '报警中', address: '南光村59号203', alarmDevice: '南光村59号203', alarmTime: '2026-05-21 18...', handler: '-', result: '-', handleTime: '-' },
  ];

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleOpenHandleModal = (record: AlarmRecord) => {
    setCurrentAlarm(record);
    setHandleResult('');
    setHandleDesc('');
    setShowHandleModal(true);
  };

  const handleOpenDetailModal = (record: AlarmRecord) => {
    setCurrentAlarm(record);
    setShowDetailModal(true);
  };

  const handleSaveHandle = () => {
    // 这里可以添加保存逻辑
    setShowHandleModal(false);
  };

  return (
    <div className="bg-white rounded-lg p-6">
      {/* 搜索区域 */}
      <div className="flex flex-wrap gap-4 mb-6 items-center justify-between">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">报警单号</label>
            <input
              type="text"
              placeholder="请输入"
              value={alarmNo}
              onChange={(e) => setAlarmNo(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-48 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">设备名称</label>
            <input
              type="text"
              placeholder="请输入"
              value={deviceName}
              onChange={(e) => setDeviceName(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-48 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">报警状态</label>
            <select 
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-48 focus:outline-none focus:border-blue-500"
            >
              <option value="">请选择</option>
              <option value="alarming">报警中</option>
              <option value="handled">已处理</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">报警类型</label>
            <select 
              value={alarmType}
              onChange={(e) => setAlarmType(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-48 focus:outline-none focus:border-blue-500"
            >
              <option value="">请选择</option>
              <option value="arc">故障电弧报警</option>
              <option value="offline">用电设备离线</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">报警时间</label>
            <div className="flex items-center gap-2">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              />
              <span className="text-gray-400">至</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
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
        </div>
      </div>

      {/* 表格 */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-16">序号</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">报警单号</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">设备名称</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">报警类型</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">设备类型</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">报警状态</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">报警地址</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">报警设备</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">报警时间</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">处理人</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">处理结果</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">处理时间</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-24">操作</th>
            </tr>
          </thead>
          <tbody>
            {alarmRecords.map((record, index) => (
              <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-500">{index + 1}</td>
                <td className="py-3 px-4 text-gray-800">{record.alarmNo}</td>
                <td className="py-3 px-4 text-gray-800">{record.deviceName}</td>
                <td className="py-3 px-4 text-gray-800">{record.alarmType}</td>
                <td className="py-3 px-4 text-gray-800">{record.deviceType}</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded">{record.status}</span>
                </td>
                <td className="py-3 px-4 text-gray-800">{record.address}</td>
                <td className="py-3 px-4 text-gray-800">{record.alarmDevice}</td>
                <td className="py-3 px-4 text-gray-800">{record.alarmTime}</td>
                <td className="py-3 px-4 text-gray-500">{record.handler}</td>
                <td className="py-3 px-4 text-gray-500">{record.result}</td>
                <td className="py-3 px-4 text-gray-500">{record.handleTime}</td>
                <td className="py-3 px-4">
                  <button 
                    className="text-red-600 hover:underline text-sm mr-2"
                    onClick={() => handleOpenHandleModal(record)}
                  >
                    处理
                  </button>
                  <button 
                    className="text-blue-600 hover:underline text-sm"
                    onClick={() => handleOpenDetailModal(record)}
                  >
                    详情
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 分页 */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-gray-600">共 {totalCount} 条</div>
        <div className="flex items-center gap-2">
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option>20条/页</option>
            <option>50条/页</option>
            <option>100条/页</option>
          </select>
          <button 
            className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed" 
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded">1</button>
          <button className="px-3 py-1 border border-gray-300 rounded">2</button>
          <button className="px-3 py-1 border border-gray-300 rounded">3</button>
          <button className="px-3 py-1 border border-gray-300 rounded">4</button>
          <button className="px-3 py-1 border border-gray-300 rounded">5</button>
          <button className="px-3 py-1 border border-gray-300 rounded">6</button>
          <span className="text-gray-400">...</span>
          <button className="px-3 py-1 border border-gray-300 rounded">13091</button>
          <button 
            className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed" 
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <span className="ml-2 text-gray-600">前往</span>
          <input
            type="number"
            className="w-16 border border-gray-300 rounded px-2 py-1 text-center text-sm"
            value={currentPage}
            onChange={(e) => {
              const page = parseInt(e.target.value) || 1;
              if (page >= 1 && page <= totalPages) {
                setCurrentPage(page);
              }
            }}
          />
          <span className="text-gray-600">页</span>
        </div>
      </div>

      {/* 处理弹窗 */}
      {showHandleModal && currentAlarm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-lg shadow-lg w-[600px]">
            {/* 弹窗头部 */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-800">报警处理</h3>
              <button 
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setShowHandleModal(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* 弹窗内容 */}
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">
                  <span className="text-red-500">*</span>处理结果
                </label>
                <select 
                  value={handleResult}
                  onChange={(e) => setHandleResult(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="">请选择</option>
                  <option value="noNeed">无需处理</option>
                  <option value="handled">已处理</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">
                  <span className="text-red-500">*</span>处理说明
                </label>
                <input
                  type="text"
                  placeholder="请输入"
                  value={handleDesc}
                  onChange={(e) => setHandleDesc(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">附件</label>
                <div className="flex items-center">
                  <label className="flex items-center gap-2 border border-gray-300 border-dashed rounded px-4 py-2 cursor-pointer hover:border-blue-500">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="text-sm text-blue-600">添加附件</span>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
            {/* 弹窗底部 */}
            <div className="flex justify-end gap-2 p-4 border-t border-gray-200">
              <button 
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                onClick={() => setShowHandleModal(false)}
              >
                取消
              </button>
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSaveHandle}
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 详情弹窗 */}
      {showDetailModal && currentAlarm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-lg shadow-lg w-[500px]">
            {/* 弹窗头部 */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-800">报警详情</h3>
              <button 
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setShowDetailModal(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* 弹窗内容 */}
            <div className="p-6">
              {/* 报警信息 */}
              <div className="border border-gray-200 rounded mb-4">
                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="py-3 px-4 bg-gray-50 text-gray-600">报警类型</div>
                  <div className="py-3 px-4 text-gray-800">{currentAlarm.alarmType}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="py-3 px-4 bg-gray-50 text-gray-600">报警类型规则</div>
                  <div className="py-3 px-4 text-gray-800">{currentAlarm.alarmTypeRule}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="py-3 px-4 bg-gray-50 text-gray-600">报警状态</div>
                  <div className="py-3 px-4">
                    <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded">{currentAlarm.status}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="py-3 px-4 bg-gray-50 text-gray-600">报警地址</div>
                  <div className="py-3 px-4 text-gray-800">{currentAlarm.address}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="py-3 px-4 bg-gray-50 text-gray-600">报警设备</div>
                  <div className="py-3 px-4 text-gray-800">{currentAlarm.alarmDevice}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="py-3 px-4 bg-gray-50 text-gray-600">报警时间</div>
                  <div className="py-3 px-4 text-gray-800">{currentAlarm.alarmTime}</div>
                </div>
              </div>
              {/* 处理信息 */}
              <div className="border border-gray-200 rounded">
                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="py-3 px-4 bg-gray-50 text-gray-600">处理人</div>
                  <div className="py-3 px-4 text-gray-800">{currentAlarm.handler}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="py-3 px-4 bg-gray-50 text-gray-600">处理时间</div>
                  <div className="py-3 px-4 text-gray-800">{currentAlarm.handleTime}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="py-3 px-4 bg-gray-50 text-gray-600">处理结果</div>
                  <div className="py-3 px-4 text-gray-800">{currentAlarm.result}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="py-3 px-4 bg-gray-50 text-gray-600">处理说明</div>
                  <div className="py-3 px-4 text-gray-800">-</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="py-3 px-4 bg-gray-50 text-gray-600">附件</div>
                  <div className="py-3 px-4 text-gray-800">-</div>
                </div>
              </div>
            </div>
            {/* 弹窗底部 */}
            <div className="flex justify-end gap-2 p-4 border-t border-gray-200">
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setShowDetailModal(false)}
              >
                确定
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlarmRecord;