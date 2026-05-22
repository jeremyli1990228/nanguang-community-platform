import React, { useState } from 'react';

const AlarmCameraConfig: React.FC = () => {
  const [searchDevice, setSearchDevice] = useState('');
  const [status, setStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(20);
  
  // 弹窗状态
  const [showAddModal, setShowAddModal] = useState(false);
  
  // 表单状态
  const [formData, setFormData] = useState({
    product: '',
    device: '',
    camera: '',
    duration: '',
    status: false
  });

  const totalCount = 0;
  const totalPages = Math.ceil(totalCount / pageSize);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleOpenAddModal = () => {
    setFormData({
      product: '',
      device: '',
      camera: '',
      duration: '',
      status: false
    });
    setShowAddModal(true);
  };

  const handleSave = () => {
    setShowAddModal(false);
  };

  // 开关组件
  const ToggleSwitch = ({ checked, onChange }: { checked: boolean; onChange: (checked: boolean) => void }) => (
    <div 
      className={`w-10 h-6 rounded-full cursor-pointer transition-colors ${checked ? 'bg-blue-500' : 'bg-gray-300'}`}
      onClick={() => onChange(!checked)}
    >
      <div 
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform mt-1 ${checked ? 'ml-5' : 'ml-1'}`}
      />
    </div>
  );

  return (
    <div className="bg-white rounded-lg p-6">
      {/* 搜索区域 */}
      <div className="flex gap-4 mb-6 items-center justify-between">
        <div className="flex gap-6 items-center">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">设备名称</label>
            <input
              type="text"
              placeholder="请输入"
              value={searchDevice}
              onChange={(e) => setSearchDevice(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-48 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">状态</label>
            <select 
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-48 focus:outline-none focus:border-blue-500"
            >
              <option value="">请选择</option>
              <option value="enabled">启用</option>
              <option value="disabled">禁用</option>
            </select>
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
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-1"
            onClick={handleOpenAddModal}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            新增
          </button>
        </div>
      </div>

      {/* 表格 */}
      <div className="border border-gray-200 rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-16">序号</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">设备名称</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">设备所在位置</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">关联摄像头名称</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">摄像头所在位置</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-20">状态</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-24">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7} className="py-16 text-center">
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
        <div className="text-gray-600">共 {totalCount} 条</div>
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

      {/* 新增弹窗 */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-lg shadow-lg w-[550px]">
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
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">
                  <span className="text-red-500">*</span>关联物联产品
                </label>
                <select 
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="">请选择</option>
                  <option value="井盖">井盖</option>
                  <option value="灯杆">灯杆</option>
                  <option value="摄像头">摄像头</option>
                  <option value="消防栓">消防栓</option>
                  <option value="喷淋">喷淋</option>
                  <option value="门禁">门禁</option>
                  <option value="烟感">烟感</option>
                  <option value="执法仪">执法仪</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">
                  <span className="text-red-500">*</span>智能设备
                </label>
                <select 
                  value={formData.device}
                  onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="">请选择</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">
                  <span className="text-red-500">*</span>关联摄像头
                </label>
                <select 
                  value={formData.camera}
                  onChange={(e) => setFormData({ ...formData, camera: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="">请选择</option>
                  <option value="鸿瑞花园27栋1F">鸿瑞花园27栋1F</option>
                  <option value="鸿瑞花园26栋-1F">鸿瑞花园26栋-1F</option>
                  <option value="鸿瑞花园25栋1F">鸿瑞花园25栋1F</option>
                  <option value="鸿瑞花园20栋-1F">鸿瑞花园20栋-1F</option>
                  <option value="鸿瑞花园20栋1F">鸿瑞花园20栋1F</option>
                  <option value="鸿瑞花园18栋1F">鸿瑞花园18栋1F</option>
                  <option value="南海大道海康街入口车辆卡口">南海大道海康街入口车辆卡口</option>
                  <option value="南海大道涵洞口车辆卡口">南海大道涵洞口车辆卡口</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">
                  <span className="text-red-500">*</span>前后录像时长
                </label>
                <input
                  type="text"
                  placeholder="请输入秒"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">状态</label>
                <ToggleSwitch 
                  checked={formData.status} 
                  onChange={(checked) => setFormData({ ...formData, status: checked })}
                />
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
    </div>
  );
};

export default AlarmCameraConfig;
