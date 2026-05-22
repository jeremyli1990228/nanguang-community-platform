import React, { useState } from 'react';
import { Search, RefreshCw, Plus } from 'lucide-react';

const PersonnelType: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [formData, setFormData] = useState({
    type: ''
  });

  const personnelTypes = [
    { id: 1, type: 'test', desc: 'test', status: '启用' },
    { id: 2, type: '内部人员', desc: '企业内部的人员', status: '启用' },
    { id: 3, type: '外部人员', desc: '企业外部的人员', status: '启用' },
    { id: 4, type: '全职人员', desc: '有固定时间固定地点的工作，工作日中专门担任某种职务的人', status: '启用' },
    { id: 5, type: '实习人员', desc: '指在某一专业的高年级或刚毕业的无经验的学习人员', status: '启用' },
    { id: 6, type: '兼职人员', desc: '职工在本职工作之外兼任其他工作职务', status: '启用' },
    { id: 7, type: '劳务派遣人员', desc: '是指由劳务派遣机构与派遣劳工订立劳动合同，把劳动者派向指定的用...', status: '启用' },
    { id: 8, type: '劳务人员', desc: '劳务工是指没有常住户口，被用人单位招用的人员', status: '启用' },
    { id: 9, type: '外包人员', desc: '指公司为了节省成本把某部分业务承包给某个专业公司，由专业公司派...', status: '启用' },
    { id: 10, type: '退休返聘人员', desc: '是指已退休的人员再通过与原用人单位或者其他用人单位订立合同契约...', status: '启用' },
  ];

  const handleSearch = () => {
    console.log('搜索', formData);
  };

  const handleReset = () => {
    setFormData({ type: '' });
  };

  return (
    <div className="p-5">
      {/* 搜索区域 */}
      <div className="bg-white rounded-t-lg p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">人员类型</span>
              <input
                type="text"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
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
            <button className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors">
              <Plus className="h-4 w-4" />
              新增
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
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">人员类型</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">描述</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">状态</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody>
              {personnelTypes.map((item, idx) => (
                <tr key={item.id} className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{idx + 1}</td>
                  <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">{item.type}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.desc}</td>
                  <td className="px-4 py-3 text-sm border-b border-gray-200">
                    <span className="px-2 py-1 bg-teal-100 text-teal-600 rounded text-xs">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <button className="text-blue-500 hover:text-blue-700">编辑</button>
                      <button className="text-blue-500 hover:text-blue-700">禁用</button>
                      <button className="text-red-500 hover:text-red-700">删除</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 分页 */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
          <span className="text-sm text-gray-600">共 10 条</span>
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

export default PersonnelType;
