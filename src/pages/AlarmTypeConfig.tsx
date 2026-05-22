import React, { useState } from 'react';

interface AlarmType {
  id: number;
  type: string;
  product: string;
  event: string;
  level: string;
  status: string;
}

const AlarmTypeConfig: React.FC = () => {
  const [searchType, setSearchType] = useState('');
  const [status, setStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(20);
  
  // 弹窗状态
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentAlarmType, setCurrentAlarmType] = useState<AlarmType | null>(null);
  
  // 表单状态
  const [formData, setFormData] = useState({
    typeName: '',
    product: '',
    event: '',
    level: '',
    status: true,
    sendNotification: false,
    pushToPlatform: false,
    sendToCommunity: false,
    gridMemberProcess: false,
    handler: ''
  });

  const totalCount = 61;
  const totalPages = Math.ceil(totalCount / pageSize);

  const alarmTypes: AlarmType[] = [
    { id: 1, type: '守护机器人设备离线', product: '家庭守护机器人', event: '设备离线', level: '黄色报警', status: '启用' },
    { id: 2, type: '机器人隐私状态变更，当前任务已暂停。', product: '家庭守护机器人', event: '机器人隐私状态变更，当前任务已暂停。', level: '蓝色报警', status: '启用' },
    { id: 3, type: '机器人地图已变更，关联任务已暂停', product: '家庭守护机器人', event: '机器人地图已变更，关联任务已暂停', level: '蓝色报警', status: '启用' },
    { id: 4, type: '识别到看护对象即将离开，请求与您通话', product: '家庭守护机器人', event: '识别到看护对象即将离开，请求与您通话', level: '蓝色报警', status: '启用' },
    { id: 5, type: '建图失败提醒', product: '家庭守护机器人', event: '建图失败提醒', level: '蓝色报警', status: '启用' },
    { id: 6, type: '低电量回充中断', product: '家庭守护机器人', event: '低电量回充中断', level: '蓝色报警', status: '启用' },
    { id: 7, type: '电量低正在自动返回充电桩', product: '家庭守护机器人', event: '电量低正在自动返回充电桩', level: '蓝色报警', status: '启用' },
    { id: 8, type: '发现有陌生人出现，请求与您通话', product: '家庭守护机器人', event: '发现有陌生人出现，请求与您通话', level: '蓝色报警', status: '启用' },
    { id: 9, type: '检测到有人呼救，请求与您通话', product: '家庭守护机器人', event: '检测到有人呼救，请求与您通话', level: '红色报警', status: '启用' },
    { id: 10, type: '识别到有小宠物（猫/狗）在禁区逗留', product: '家庭守护机器人', event: '检测到有小宠物（猫/狗）在禁区逗留，...', level: '蓝色报警', status: '启用' },
    { id: 11, type: '识别到有人在禁区逗留，请求与您通话', product: '家庭守护机器人', event: '识别到有人在禁区逗留，请求与您通话', level: '蓝色报警', status: '启用' },
    { id: 12, type: '识别到家庭成员可能有爬高的危险行为...', product: '家庭守护机器人', event: '识别到家庭成员可能有爬高的危险行为...', level: '蓝色报警', status: '启用' },
    { id: 13, type: '识别到哭声，请求与您通话', product: '家庭守护机器人', event: '识别到哭声，请求与您通话', level: '蓝色报警', status: '启用' },
    { id: 14, type: '识别到家庭成员可能跌倒，请求与您通话', product: '家庭守护机器人', event: '识别到家庭成员可能跌倒，请求与您通话', level: '蓝色报警', status: '启用' },
    { id: 15, type: '手环检测超过血氧收缩压上限阈值', product: '智能手环', event: '超过血氧收缩压上限阈值', level: '蓝色报警', status: '启用' },
    { id: 16, type: '手环检测低于血氧下限阈值', product: '智能手环', event: '低于血氧下限阈值', level: '蓝色报警', status: '启用' },
    { id: 17, type: '用电设备离线报警', product: '用电设备', event: '设备离线', level: '蓝色报警', status: '启用' },
  ];

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleOpenAddModal = () => {
    setFormData({
      typeName: '',
      product: '',
      event: '',
      level: '',
      status: true,
      sendNotification: false,
      pushToPlatform: false,
      sendToCommunity: false,
      gridMemberProcess: false,
      handler: ''
    });
    setShowAddModal(true);
  };

  const handleOpenEditModal = (item: AlarmType) => {
    setCurrentAlarmType(item);
    setFormData({
      typeName: item.type,
      product: item.product,
      event: item.event,
      level: item.level,
      status: item.status === '启用',
      sendNotification: true,
      pushToPlatform: true,
      sendToCommunity: true,
      gridMemberProcess: false,
      handler: ''
    });
    setShowEditModal(true);
  };

  const handleOpenDeleteModal = (item: AlarmType) => {
    setCurrentAlarmType(item);
    setShowDeleteModal(true);
  };

  const handleSave = () => {
    setShowAddModal(false);
    setShowEditModal(false);
  };

  const handleDelete = () => {
    setShowDeleteModal(false);
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
            <label className="text-sm text-gray-600 mb-1">报警类型</label>
            <input
              type="text"
              placeholder="请输入"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
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
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-16">序号</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">报警类型</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">关联物联产品</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">监控事件</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">报警级别</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-20">状态</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-24">操作</th>
            </tr>
          </thead>
          <tbody>
            {alarmTypes.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-500">{index + 1}</td>
                <td className="py-3 px-4 text-gray-800">{item.type}</td>
                <td className="py-3 px-4 text-gray-800">{item.product}</td>
                <td className="py-3 px-4 text-gray-800 truncate max-w-xs">{item.event}</td>
                <td className="py-3 px-4 text-gray-800">{item.level}</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">{item.status}</span>
                </td>
                <td className="py-3 px-4">
                  <button 
                    className="text-blue-600 hover:underline text-sm mr-2"
                    onClick={() => handleOpenEditModal(item)}
                  >
                    编辑
                  </button>
                  <button 
                    className="text-red-600 hover:underline text-sm"
                    onClick={() => handleOpenDeleteModal(item)}
                  >
                    删除
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
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    <span className="text-red-500">*</span>类型名称
                  </label>
                  <input
                    type="text"
                    placeholder="请输入"
                    value={formData.typeName}
                    onChange={(e) => setFormData({ ...formData, typeName: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    <span className="text-red-500">*</span>关联物联产品
                  </label>
                  <select 
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">请选择</option>
                    <option value="家庭守护机器人">家庭守护机器人</option>
                    <option value="智能手环">智能手环</option>
                    <option value="用电设备">用电设备</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    <span className="text-red-500">*</span>报警级别
                  </label>
                  <select 
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">请选择</option>
                    <option value="红色报警">红色报警</option>
                    <option value="黄色报警">黄色报警</option>
                    <option value="蓝色报警">蓝色报警</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">状态</label>
                  <ToggleSwitch 
                    checked={formData.status} 
                    onChange={(checked) => setFormData({ ...formData, status: checked })}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">是否发送通知</label>
                  <ToggleSwitch 
                    checked={formData.sendNotification} 
                    onChange={(checked) => setFormData({ ...formData, sendNotification: checked })}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">是否推送区物联平台</label>
                  <ToggleSwitch 
                    checked={formData.pushToPlatform} 
                    onChange={(checked) => setFormData({ ...formData, pushToPlatform: checked })}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">是否推送社区</label>
                  <ToggleSwitch 
                    checked={formData.sendToCommunity} 
                    onChange={(checked) => setFormData({ ...formData, sendToCommunity: checked })}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">是否网格员处理</label>
                  <ToggleSwitch 
                    checked={formData.gridMemberProcess} 
                    onChange={(checked) => setFormData({ ...formData, gridMemberProcess: checked })}
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm text-gray-700 mb-2">报警处理人</label>
                <select 
                  value={formData.handler}
                  onChange={(e) => setFormData({ ...formData, handler: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="">请选择</option>
                </select>
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

      {/* 编辑弹窗 */}
      {showEditModal && currentAlarmType && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-lg shadow-lg w-[800px]">
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
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    <span className="text-red-500">*</span>类型名称
                  </label>
                  <input
                    type="text"
                    placeholder="请输入"
                    value={formData.typeName}
                    onChange={(e) => setFormData({ ...formData, typeName: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    <span className="text-red-500">*</span>关联物联产品
                  </label>
                  <select 
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">请选择</option>
                    <option value="家庭守护机器人">家庭守护机器人</option>
                    <option value="智能手环">智能手环</option>
                    <option value="用电设备">用电设备</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    <span className="text-red-500">*</span>关联监控事件
                  </label>
                  <select 
                    value={formData.event}
                    onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">请选择</option>
                    <option value="设备离线">设备离线</option>
                    <option value="低电量">低电量</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    <span className="text-red-500">*</span>报警级别
                  </label>
                  <select 
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">请选择</option>
                    <option value="红色报警">红色报警</option>
                    <option value="黄色报警">黄色报警</option>
                    <option value="蓝色报警">蓝色报警</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">状态</label>
                  <ToggleSwitch 
                    checked={formData.status} 
                    onChange={(checked) => setFormData({ ...formData, status: checked })}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">是否发送通知</label>
                  <ToggleSwitch 
                    checked={formData.sendNotification} 
                    onChange={(checked) => setFormData({ ...formData, sendNotification: checked })}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">是否推送区物联平台</label>
                  <ToggleSwitch 
                    checked={formData.pushToPlatform} 
                    onChange={(checked) => setFormData({ ...formData, pushToPlatform: checked })}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">是否推送社区</label>
                  <ToggleSwitch 
                    checked={formData.sendToCommunity} 
                    onChange={(checked) => setFormData({ ...formData, sendToCommunity: checked })}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">是否网格员处理</label>
                  <ToggleSwitch 
                    checked={formData.gridMemberProcess} 
                    onChange={(checked) => setFormData({ ...formData, gridMemberProcess: checked })}
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm text-gray-700 mb-2">报警处理人</label>
                <select 
                  value={formData.handler}
                  onChange={(e) => setFormData({ ...formData, handler: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="">请选择</option>
                </select>
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
      {showDeleteModal && currentAlarmType && (
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
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
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
    </div>
  );
};

export default AlarmTypeConfig;
