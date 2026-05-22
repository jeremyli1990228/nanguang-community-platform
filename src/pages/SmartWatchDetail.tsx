import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface MonitorData {
  id: number;
  deviceName: string;
  dataType: string;
  reportData: string;
  reportTime: string;
}

const SmartWatchDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const elderInfo = {
    name: '张启哲',
    gender: '男',
    phone: '13847509264',
    age: 75,
    nationality: '汉族',
    maritalStatus: '已婚',
    idCard: '152302195001010515',
    address: '广东省深圳市南山区南山街道南光社区南光路17号现代城华庭1-5栋5栋25H',
    socialWorker: '-',
    status: '-',
  };

  const [monitorData] = useState<MonitorData[]>([
    { id: 1, deviceName: '863225051127537', dataType: '电量', reportData: '0%', reportTime: '2026-01-23 14:53:52' },
    { id: 2, deviceName: '863225051127537', dataType: '电量', reportData: '2%', reportTime: '2026-01-23 14:11:08' },
    { id: 3, deviceName: '863225051127537', dataType: '电量', reportData: '4%', reportTime: '2026-01-23 13:11:08' },
    { id: 4, deviceName: '863225051127537', dataType: '位置数据', reportData: '113.925359,22.519563', reportTime: '2026-01-23 12:11:19' },
    { id: 5, deviceName: '863225051127537', dataType: '电量', reportData: '6%', reportTime: '2026-01-23 12:11:08' },
    { id: 6, deviceName: '863225051127537', dataType: '电量', reportData: '10%', reportTime: '2026-01-23 11:11:08' },
    { id: 7, deviceName: '863225051127537', dataType: '电量', reportData: '14%', reportTime: '2026-01-23 10:11:08' },
    { id: 8, deviceName: '863225051127537', dataType: '电量', reportData: '15%', reportTime: '2026-01-23 09:48:42' },
  ]);

  const [searchDataType, setSearchDataType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(20);

  const totalCount = 945;
  const totalPages = Math.ceil(totalCount / pageSize);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6">
      {/* 返回按钮和面包屑 */}
      <div className="flex items-center gap-2 mb-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-gray-600 hover:text-blue-500"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>详情</span>
        </button>
        <span className="text-gray-400">&gt;</span>
        <span className="text-gray-500">长者健康数据</span>
        <span className="text-gray-400">&gt;</span>
        <span className="text-gray-500">智能手环</span>
        <span className="text-gray-400">&gt;</span>
        <span className="text-gray-700">详情</span>
      </div>

      {/* 长者信息卡片 */}
      <div className="border border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-gray-800">{elderInfo.name}</h2>
              <span className="text-sm text-gray-500">{elderInfo.gender}</span>
            </div>
            <div className="text-gray-600 mt-1">联系方式: {elderInfo.phone}</div>
          </div>
        </div>

        {/* 详细信息网格 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 pt-6 border-t border-gray-100">
          <div>
            <div className="text-sm text-gray-500">年龄</div>
            <div className="text-lg font-medium text-gray-800 mt-1">{elderInfo.age}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">民族</div>
            <div className="text-lg font-medium text-gray-800 mt-1">{elderInfo.nationality}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">婚姻状况</div>
            <div className="text-lg font-medium text-gray-800 mt-1">{elderInfo.maritalStatus}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">身份证号</div>
            <div className="text-lg font-medium text-gray-800 mt-1">{elderInfo.idCard}</div>
          </div>
          <div className="col-span-2">
            <div className="text-sm text-gray-500">居住地址</div>
            <div className="text-lg font-medium text-gray-800 mt-1">{elderInfo.address}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">对接社工</div>
            <div className="text-lg font-medium text-gray-800 mt-1">{elderInfo.socialWorker}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">长者状态</div>
            <div className="text-lg font-medium text-gray-800 mt-1">{elderInfo.status}</div>
          </div>
        </div>
      </div>

      {/* 监测数据区域 */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-4">监测数据</h3>
        
        {/* 搜索区域 */}
        <div className="flex gap-4 mb-6 items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">数据类型</label>
              <input
                type="text"
                placeholder="请输入"
                value={searchDataType}
                onChange={(e) => setSearchDataType(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 w-48 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">上报时间</label>
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
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              导出
            </button>
          </div>
        </div>

        {/* 表格 */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-3 px-4 text-gray-600 font-medium w-16">序号</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">设备名称</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">数据类型</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">上报数据</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">上报时间</th>
              </tr>
            </thead>
            <tbody>
              {monitorData.map((item, index) => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-500">{index + 1}</td>
                  <td className="py-3 px-4 text-gray-800">{item.deviceName}</td>
                  <td className="py-3 px-4 text-gray-800">{item.dataType}</td>
                  <td className="py-3 px-4 text-gray-800">{item.reportData}</td>
                  <td className="py-3 px-4 text-gray-800">{item.reportTime}</td>
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
            <button className="px-3 py-1 border border-gray-300 rounded">48</button>
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
      </div>
    </div>
  );
};

export default SmartWatchDetail;