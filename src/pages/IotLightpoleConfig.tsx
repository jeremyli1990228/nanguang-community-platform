import React, { useState } from 'react';

const IotLightpoleConfig: React.FC = () => {
  const [deviceName, setDeviceName] = useState('');
  const [deviceStatus, setDeviceStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  
  // 弹窗状态
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showProductConfigModal, setShowProductConfigModal] = useState(false);
  const [currentDevice, setCurrentDevice] = useState<any>(null);
  
  // 产品配置表单
  const [productConfigForm, setProductConfigForm] = useState({
    config: 'cdeb49bd0f6b4c94b42c0ca32d586414'
  });
  
  // 表单状态
  const [editForm, setEditForm] = useState({
    deviceId: '',
    deviceName: '',
    gridPersonnel: '',
    remark: ''
  });

  const tableData = [
    { id: 1, name: '海康街中段', product: '多功能路灯杆-珠海星慧智能', type: '网关子设备', grid: '赵晓燕', location: '广&gt;东省深圳市南山区南...', status: '断开', remark: '-' },
    { id: 2, name: '海康街康乐园南门', product: '多功能路灯杆-珠海星慧智能', type: '网关子设备', grid: '朱梦意', location: '广东省深圳市南山区南...', status: '断开', remark: '-' },
    { id: 3, name: '海康街海王大厦', product: '多功能路灯杆-珠海星慧智能', type: '网关子设备', grid: '赵晓燕', location: '广东省深圳市南山区南...', status: '断开', remark: '-' },
    { id: 4, name: '社区正门北侧智慧灯杆', product: '多功能路灯杆-珠海星慧智能', type: '网关子设备', grid: '郭玉强', location: '广东省深圳市南山区南...', status: '断开', remark: '-' },
    { id: 5, name: '鸿瑞花园北门', product: '多功能路灯杆-珠海星慧智能', type: '网关子设备', grid: '陈俊杰', location: '广东省&gt;深圳市南山区南...', status: '断开', remark: '-' },
    { id: 6, name: '城市花园2号门', product: '多功能路灯杆-珠海星慧智能', type: '网关子设备', grid: '王晓玲', location: '广东省深圳市南山区粤...', status: '断开', remark: '-' },
    { id: 7, name: '城市花园3号门', product: '多功能路灯杆-珠海星慧智能', type: '网关子设备', grid: '王晓玲', location: '广东省深圳市南山区南...', status: '断开', remark: '-' },
  ];

  const total = 7;
  const totalPages = Math.ceil(total / pageSize);

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
  
  const handleOpenAdd = () => {
    setShowAddModal(true);
  };
  
  const handleOpenProductConfig = () => {
    setShowProductConfigModal(true);
  };
  
  const handleOpenDetail = (item: any) => {
    setCurrentDevice(item);
    setShowDetailModal(true);
  };
  
  const handleOpenEdit = (item: any) => {
    setCurrentDevice(item);
    setEditForm({
      deviceId: '1987820578620616705',
      deviceName: item.name,
      gridPersonnel: item.grid,
      remark: item.remark
    });
    setShowEditModal(true);
  };
  
  const handleOpenDelete = (item: any) => {
    setCurrentDevice(item);
    setShowDeleteModal(true);
  };
  
  const handleSave = () => {
    setShowAddModal(false);
    setShowEditModal(false);
    setShowProductConfigModal(false);
  };
  
  const handleDelete = () => {
    setShowDeleteModal(false);
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
            <button
              onClick={handleOpenAdd}
              className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              新增
            </button>
            <button
              onClick={handleOpenProductConfig}
              className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors flex items-center gap-1"
            >
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
                <td className="px-4 py-3 text-sm text-gray-600">{item.grid}</td>
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
                    <button 
                      onClick={() => handleOpenDetail(item)}
                      className="text-blue-500 text-sm hover:text-blue-700">详情</button>
                    <button 
                      onClick={() => handleOpenEdit(item)}
                      className="text-blue-500 text-sm hover:text-blue-700">编辑</button>
                    <button 
                      onClick={() => handleOpenDelete(item)}
                      className="text-red-500 text-sm hover:text-red-700">删除</button>
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
      
      {/* 新增弹窗 */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-lg shadow-lg w-[800px]">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-800">添加</h3>
              <button 
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setShowAddModal(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <label className="text-sm text-gray-700">设备</label>
                <input
                  type="text"
                  placeholder="设备名称"
                  className="border border-gray-300 rounded px-3 py-2 w-48 focus:outline-none focus:border-blue-500"
                />
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    搜索
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded text-gray-700 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    重置
                  </button>
                </div>
              </div>
              <div className="border border-gray-200 rounded">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">
                        <input type="checkbox" className="rounded" />
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">序号</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">设备名称</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">产品名称</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">连接状态</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">备注</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={6} className="py-16 text-center">
                        <div className="flex flex-col items-center">
                          <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <div className="text-gray-500">暂无数据</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">共 0 条</span>
                  <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                    <option>20条/页</option>
                  </select>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50" disabled>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">1</button>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50" disabled>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-gray-600">前往</span>
                    <input type="number" className="w-12 border border-gray-300 rounded px-2 py-1 text-sm text-center" value="1" readOnly />
                    <span className="text-sm text-gray-600">页</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 p-4 border-t border-gray-200">
              <button 
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                onClick={() => setShowAddModal(false)}
              >
                取消
              </button>
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSave}
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* 详情弹窗 */}
      {showDetailModal && (
        <div className="fixed inset-0 bg-gray-50 z-[100] overflow-y-auto">
          <div className="min-h-screen">
            {/* 顶部导航栏 */}
            <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-4">
              <button 
                className="p-2 hover:bg-gray-100 rounded-full"
                onClick={() => setShowDetailModal(false)}
              >
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h3 className="text-lg font-medium text-gray-800">详情</h3>
              <div className="text-gray-400">
                智能灯杆管理 &gt; 智能灯杆配置 &gt; 详情
              </div>
            </div>
            {/* 标签页 */}
            <div className="bg-white border-b border-gray-200">
              <div className="flex">
                <button className="px-6 py-3 text-blue-500 border-b-2 border-blue-500 font-medium">
                  设备信息
                </button>
                <button className="px-6 py-3 text-gray-500 hover:text-gray-700">
                  运行状态
                </button>
              </div>
            </div>
            {/* 内容区域 */}
            <div className="p-6">
              {/* 设备信息顶部区域 */}
              <div className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-t-lg">
                <div className="flex items-center gap-8">
                  {/* 设备图片 */}
                  <div className="w-48 h-48 flex items-center justify-center">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/lamp-2.svg" 
                      alt="灯杆"
                      className="w-32 h-48 text-gray-300"
                    />
                  </div>
                  {/* 信息卡片 */}
                  <div className="flex-1 grid grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">所属产品</div>
                        <div className="text-gray-800">-</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">产品类型</div>
                        <div className="text-gray-800">-</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M17 7h.01M12 21a9 9 0 110-18 9 9 0 010 18zM12 5v.01M12 12a.01M12 12v.01M12 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">设备ID</div>
                        <div className="text-gray-800">-</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">注册时间</div>
                        <div className="text-gray-800">-</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">地理位置</div>
                        <div className="text-gray-800">-</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 配置信息 */}
              <div className="mt-8">
                <h4 className="text-gray-800 font-medium mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-4 bg-blue-500 rounded"></div>
                  配置信息
                </h4>
              </div>
              {/* 设备标签 */}
              <div className="mt-8">
                <h4 className="text-gray-800 font-medium mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-4 bg-blue-500 rounded"></div>
                  设备标签
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                    <div className="text-sm text-gray-400 mb-1">经度</div>
                    <div className="text-gray-800">-</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                    <div className="text-sm text-gray-400 mb-1">纬度</div>
                    <div className="text-gray-800">-</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* 编辑弹窗 */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-lg shadow-lg w-[600px]">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-800">编辑</h3>
              <button 
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setShowEditModal(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">设备ID</label>
                <input
                  type="text"
                  value={editForm.deviceId}
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">设备名称</label>
                <input
                  type="text"
                  value={editForm.deviceName}
                  onChange={(e) => setEditForm({ ...editForm, deviceName: e.target.value})}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">网格人员</label>
                <input
                  type="text"
                  value={editForm.gridPersonnel}
                  onChange={(e) => setEditForm({ ...editForm, gridPersonnel: e.target.value})}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">备注</label>
                <textarea
                  value={editForm.remark}
                  onChange={(e) => setEditForm({ ...editForm, remark: e.target.value})}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  rows={3}
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 p-4 border-t border-gray-200">
              <button 
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                onClick={() => setShowEditModal(false)}
              >
                取消
              </button>
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSave}
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* 删除确认弹窗 */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-lg shadow-lg w-[400px]">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-800">删除</h3>
              <button 
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setShowDeleteModal(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.492 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">请确认是否删除？</p>
              </div>
            </div>
            <div className="flex justify-end gap-2 p-4 border-t border-gray-200">
              <button 
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                onClick={() => setShowDeleteModal(false)}
              >
                取消
              </button>
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleDelete}
              >
                确定
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* 产品配置弹窗 */}
      {showProductConfigModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-lg shadow-lg w-[500px]">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-800">产品配置</h3>
              <button 
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setShowProductConfigModal(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="mb-2 text-sm text-gray-700">守护机器人配置</div>
              <textarea
                value={productConfigForm.config}
                onChange={(e) => setProductConfigForm({ ...productConfigForm, config: e.target.value})}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                rows={4}
              />
            </div>
            <div className="flex justify-end gap-2 p-4 border-t border-gray-200">
              <button 
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                onClick={() => setShowProductConfigModal(false)}
              >
                取消
              </button>
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSave}
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IotLightpoleConfig;
