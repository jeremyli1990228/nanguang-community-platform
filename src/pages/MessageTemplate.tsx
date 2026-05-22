import React, { useState } from 'react';
import { Search, RefreshCw, Plus, Copy, Edit, Trash2 } from 'lucide-react';

const MessageTemplate: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [formData, setFormData] = useState({
    businessId: '',
    notifyType: '',
    templateName: '',
    templateContent: ''
  });

  const templates = [];

  const handleSearch = () => {
    console.log('搜索', formData);
  };

  const handleReset = () => {
    setFormData({ businessId: '', notifyType: '', templateName: '', templateContent: '' });
  };

  return (
    <div className="p-5">
      {/* 搜索区域 */}
      <div className="bg-white rounded-t-lg p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">业务标识</span>
              <input
                type="text"
                value={formData.businessId}
                onChange={(e) => setFormData({ ...formData, businessId: e.target.value })}
                placeholder="请输入"
                className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ width: '180px' }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">通知方式</span>
              <select
                value={formData.notifyType}
                onChange={(e) => setFormData({ ...formData, notifyType: e.target.value })}
                className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ width: '150px' }}
              >
                <option value="">请选择</option>
                <option value="sms">短信</option>
                <option value="push">推送</option>
                <option value="email">邮件</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">模板名称</span>
              <input
                type="text"
                value={formData.templateName}
                onChange={(e) => setFormData({ ...formData, templateName: e.target.value })}
                placeholder="请输入"
                className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ width: '180px' }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">模板内容</span>
              <input
                type="text"
                value={formData.templateContent}
                onChange={(e) => setFormData({ ...formData, templateContent: e.target.value })}
                placeholder="请输入"
                className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ width: '180px' }}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleSearch}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
            >
              <Search className="h-4 w-4" />
              搜索
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-white text-gray-600 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              重置
            </button>
          </div>
        </div>
      </div>

      {/* 表格区域 */}
      <div className="bg-white">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">序号</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">业务标识</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">通知方式</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">模板名称</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">模板内容</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">状态</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">最后修改人</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">最后修改时间</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody>
              {templates.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-16 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                        <Search className="h-6 w-6 text-gray-400" />
                      </div>
                      <span className="text-gray-400 text-sm">暂无数据</span>
                    </div>
                  </td>
                </tr>
              ) : (
                templates.map((item, idx) => (
                  <tr key={item.id} className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{idx + 1}</td>
                    <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">{item.businessId}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.notifyType}</td>
                    <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">{item.templateName}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.templateContent}</td>
                    <td className="px-4 py-3 text-sm border-b border-gray-200">
                      <span className="px-2 py-1 bg-teal-100 text-teal-600 rounded text-xs">
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.modifier}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.modifyTime}</td>
                    <td className="px-4 py-3 text-sm border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                          <Edit className="h-3 w-3" />编辑
                        </button>
                        <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                          <Copy className="h-3 w-3" />复制
                        </button>
                        <button className="text-red-500 hover:text-red-700 flex items-center gap-1">
                          <Trash2 className="h-3 w-3" />删除
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* 分页 */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
          <span className="text-sm text-gray-600">共 {templates.length} 条</span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="px-3 py-1.5 border border-gray-300 rounded text-sm"
          >
            <option value={10}>10条/页</option>
            <option value={20}>20条/页</option>
            <option value={50}>50条/页</option>
            <option value={100}>100条/页</option>
          </select>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
              &lt;
            </button>
            <button className="px-3 py-1 rounded text-sm bg-blue-500 text-white">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
              &gt;
            </button>
          </div>
          <span className="text-sm text-gray-600">前往</span>
          <input
            type="number"
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
            className="w-14 px-2 py-1.5 border border-gray-300 rounded text-sm text-center"
          />
          <span className="text-sm text-gray-600">页</span>
        </div>
      </div>
    </div>
  );
};

export default MessageTemplate;
