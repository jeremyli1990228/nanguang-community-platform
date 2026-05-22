import React, { useState } from 'react';

interface AlarmLevel {
  id: number;
  level: string;
  timeout: string;
  responsible: string;
  remark: string;
}

const AlarmLevelConfig: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(20);
  
  // 弹窗状态
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentAlarmLevel, setCurrentAlarmLevel] = useState<AlarmLevel | null>(null);
  
  // 表单状态
  const [formData, setFormData] = useState({
    timeout: '',
    responsible: '',
    remark: ''
  });

  const totalCount = 4;
  const totalPages = Math.ceil(totalCount / pageSize);

  const alarmLevels: AlarmLevel[] = [
    { id: 1, level: '红色报警', timeout: '即时', responsible: '', remark: '红色报警需要实时处理' },
    { id: 2, level: '橙色报警', timeout: '4小时', responsible: '', remark: '橙色报警4小时内处理' },
    { id: 3, level: '黄色报警', timeout: '24小时', responsible: '', remark: '一天内处理即可' },
    { id: 4, level: '蓝色报警', timeout: '48小时', responsible: '', remark: '两天内处理即可' },
  ];

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleOpenEditModal = (item: AlarmLevel) => {
    setCurrentAlarmLevel(item);
    setFormData({
      timeout: item.timeout,
      responsible: item.responsible,
      remark: item.remark
    });
    setShowEditModal(true);
  };

  const handleSave = () => {
    setShowEditModal(false);
  };

  return (
    <div className="bg-white rounded-lg p-6">
      {/* 搜索区域 */}
      <div className="flex gap-4 mb-6 items-center justify-end">
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

      {/* 表格 */}
      <div className="border border-gray-200 rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-16">序号</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">等级</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">报警处理时限</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">报警负责人</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">备注</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-20">操作</th>
            </tr>
          </thead>
          <tbody>
            {alarmLevels.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-500">{index + 1}</td>
                <td className="py-3 px-4 text-gray-800">{item.level}</td>
                <td className="py-3 px-4 text-gray-800">{item.timeout}</td>
                <td className="py-3 px-4 text-gray-500">{item.responsible || '-'}</td>
                <td className="py-3 px-4 text-gray-800">{item.remark}</td>
                <td className="py-3 px-4">
                  <button 
                    className="text-blue-600 hover:underline text-sm"
                    onClick={() => handleOpenEditModal(item)}
                  >
                    编辑
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

      {/* 编辑弹窗 */}
      {showEditModal && currentAlarmLevel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-lg shadow-lg w-[700px]">
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
                <label className="block text-sm text-gray-700 mb-2">报警处理时限</label>
                <select 
                  value={formData.timeout}
                  onChange={(e) => setFormData({ ...formData, timeout: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="即时">即时</option>
                  <option value="4小时">4小时</option>
                  <option value="24小时">24小时</option>
                  <option value="48小时">48小时</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">报警负责人</label>
                <select 
                  value={formData.responsible}
                  onChange={(e) => setFormData({ ...formData, responsible: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="">请选择</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">备注</label>
                <textarea
                  value={formData.remark}
                  onChange={(e) => setFormData({ ...formData, remark: e.target.value })}
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
    </div>
  );
};

export default AlarmLevelConfig;
