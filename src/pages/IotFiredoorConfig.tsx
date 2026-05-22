import React, { useState } from 'react';

const IotFiredoorConfig: React.FC = () => {
  const [deviceName, setDeviceName] = useState('');
  const [deviceStatus, setDeviceStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const tableData = [
    { id: 1, name: '光彩新世纪家园C栋-5...', product: '防火门传感器', type: '网关子设备', grid: '杨婉滢', building: '光彩新世纪家园A.B.C栋', location: '楼梯防火门消防通道南...', status: '在线', remark: '防火门开闭状态传感器' },
    { id: 2, name: '光彩新世纪家园B栋-16...', product: '防火门传感器', type: '网关子设备', grid: '杨婉滢', building: '光彩新世纪家园A.B.C栋', location: '楼梯防火门消防通道北...', status: '在线', remark: '防火门开闭状态传感器' },
    { id: 3, name: '光彩新世纪家园B栋-15...', product: '防火门传感器', type: '网关子设备', grid: '杨婉滢', building: '光彩新世纪家园A.B.C栋', location: '楼梯防火门消防通道北...', status: '在线', remark: '防火门开闭状态传感器' },
    { id: 4, name: '光彩新世纪家园C栋-12...', product: '防火门传感器', type: '网关子设备', grid: '杨婉滢', building: '光彩新世纪家园A.B.C栋', location: '楼梯防火门北通道西', status: '在线', remark: '防火门开闭状态传感器' },
    { id: 5, name: '光彩新世纪家园C栋-12...', product: '防火门传感器', type: '网关子设备', grid: '杨婉滢', building: '光彩新世纪家园A.B.C栋', location: '楼梯防火门消防通道南...', status: '在线', remark: '防火门开闭状态传感器' },
    { id: 6, name: '光彩新世纪家园B栋-9...', product: '防火门传感器', type: '网关子设备', grid: '杨婉滢', building: '光彩新世纪家园A.B.C栋', location: '楼梯防火门消防通道南...', status: '在线', remark: '防火门开闭状态传感器' },
    { id: 7, name: '光彩新世纪家园B栋-12...', product: '防火门传感器', type: '网关子设备', grid: '杨婉滢', building: '光彩新世纪家园A.B.C栋', location: '楼梯防火门北走道西', status: '在线', remark: '防火门开闭状态传感器' },
    { id: 8, name: '光彩新世纪家园B栋-11...', product: '防火门传感器', type: '网关子设备', grid: '杨婉滢', building: '光彩新世纪家园A.B.C栋', location: '楼梯防火门消防通道北...', status: '在线', remark: '防火门开闭状态传感器' },
    { id: 9, name: '光彩新世纪家园C栋-10...', product: '防火门传感器', type: '网关子设备', grid: '杨婉滢', building: '光彩新世纪家园A.B.C栋', location: '楼梯防火门消防通道南...', status: '在线', remark: '防火门开闭状态传感器' },
    { id: 10, name: '光彩新世纪家园B栋-8...', product: '防火门传感器', type: '网关子设备', grid: '杨婉滢', building: '光彩新世纪家园A.B.C栋', location: '楼梯防火门北走道东', status: '在线', remark: '防火门开闭状态传感器' },
    { id: 11, name: '光彩新世纪家园B栋-11...', product: '防火门传感器', type: '网关子设备', grid: '杨婉滢', building: '光彩新世纪家园A.B.C栋', location: '楼梯防火门消防通道南...', status: '在线', remark: '防火门开闭状态传感器' },
    { id: 12, name: '光彩新世纪家园C栋-10...', product: '防火门传感器', type: '网关子设备', grid: '杨婉滢', building: '光彩新世纪家园A.B.C栋', location: '楼梯防火门北通道西', status: '在线', remark: '防火门开闭状态传感器' },
    { id: 13, name: '光彩新世纪家园C栋-14...', product: '防火门传感器', type: '网关子设备', grid: '杨婉滢', building: '光彩新世纪家园A.B.C栋', location: '楼梯防火门消防通道南...', status: '在线', remark: '防火门开闭状态传感器' },
    { id: 14, name: '光彩新世纪家园B栋-19...', product: '防火门传感器', type: '网关子设备', grid: '杨婉滢', building: '光彩新世纪家园A.B.C栋', location: '楼梯防火门消防通道南...', status: '在线', remark: '防火门开闭状态传感器' },
    { id: 15, name: '光彩新世纪家园B栋-15...', product: '防火门传感器', type: '网关子设备', grid: '杨婉滢', building: '光彩新世纪家园A.B.C栋', location: '楼梯防火门消防通道南...', status: '在线', remark: '防火门开闭状态传感器' },
    { id: 16, name: '光彩新世纪家园B栋-9...', product: '防火门传感器', type: '网关子设备', grid: '杨婉滢', building: '光彩新世纪家园A.B.C栋', location: '楼梯防火门北走道西', status: '在线', remark: '防火门开闭状态传感器' },
    { id: 17, name: '光彩新世纪家园B栋-17...', product: '防火门传感器', type: '网关子设备', grid: '杨婉滢', building: '光彩新世纪家园A.B.C栋', location: '楼梯防火门消防通道北...', status: '在线', remark: '防火门开闭状态传感器' },
  ];

  const total = 249;
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
    setDeviceStatus('');
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
            <label className="text-sm text-gray-600">设备状态</label>
            <select
              value={deviceStatus}
              onChange={(e) => setDeviceStatus(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1.5 text-sm w-32"
            >
              <option value="">请选择</option>
              <option value="online">在线</option>
              <option value="offline">断开</option>
            </select>
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
            <button className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              新增
            </button>
            <button className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              产品配置
            </button>
            <button className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              同步设备状态
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
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">所属产品</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">设备类型</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">所属网格</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">所属楼栋</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">所在位置</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">备注</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tableData.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-500">{index + 1}</td>
                <td className="px-4 py-3 text-sm text-gray-800">{item.name}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{item.product}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{item.type}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{item.grid}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{item.building}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{item.location}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    item.status === '在线' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{item.remark}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="text-blue-500 text-sm hover:text-blue-700">详情</button>
                    <button className="text-blue-500 text-sm hover:text-blue-700">编辑</button>
                    <button className="text-red-500 text-sm hover:text-red-700">删除</button>
                  </div>
                </td>
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
          {getPageNumbers().map((num, index) => (
            num === '...' ? (
              <span key={index} className="text-sm text-gray-500">...</span>
            ) : (
              <button
                key={index}
                onClick={() => handlePageChange(num as number)}
                className={`px-2 py-1 text-sm rounded ${
                  currentPage === num ? 'bg-blue-500 text-white' : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {num}
              </button>
            )
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
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

export default IotFiredoorConfig;