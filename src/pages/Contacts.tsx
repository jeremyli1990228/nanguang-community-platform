import React, { useState } from 'react';
import { Search, RefreshCw, Plus, Download, Trash2, ChevronDown, MoreHorizontal } from 'lucide-react';

const Contacts: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [formData, setFormData] = useState({
    name: '',
    status: '请选择',
    type: '请选择',
    accountStatus: '请选择'
  });
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
  const [includeSubOrg, setIncludeSubOrg] = useState(true);

  const contacts = [
    { id: 1, empId: '-', name: '管理员', phone: '135****0001', gender: '男', org: '南光社区', status: '在职', accountStatus: '启用' },
    { id: 2, empId: '-', name: '杨婉滢', phone: '135****6004', gender: '男', org: '南光社区', status: '在职', accountStatus: '启用' },
    { id: 3, empId: '440305002007001', name: '杨婉滢', phone: '188****6004', gender: '男', org: '南光社区', status: '在职', accountStatus: '启用' },
    { id: 4, empId: '440305002007002', name: '张文波', phone: '135****4914', gender: '男', org: '南光社区', status: '在职', accountStatus: '启用' },
    { id: 5, empId: '440305002007004', name: '王文波', phone: '135****6106', gender: '男', org: '南光社区', status: '在职', accountStatus: '启用' },
    { id: 6, empId: '440305002007004', name: '王稳', phone: '188****6106', gender: '男', org: '南光社区', status: '在职', accountStatus: '启用' },
    { id: 7, empId: '440305002007005', name: '谭良海', phone: '188****5470', gender: '男', org: '南光社区', status: '在职', accountStatus: '启用' },
    { id: 8, empId: '440305002007006', name: '冯乾辉', phone: '188****5269', gender: '男', org: '南光社区', status: '在职', accountStatus: '启用' },
    { id: 9, empId: '440305002007007', name: '卢伟鹏', phone: '135****4224', gender: '男', org: '南光社区', status: '在职', accountStatus: '启用' },
    { id: 10, empId: '440305002007008', name: '陈俊杰', phone: '135****9727', gender: '男', org: '南光社区', status: '在职', accountStatus: '启用' },
    { id: 11, empId: '440305002007009', name: '李宪政', phone: '135****7630', gender: '男', org: '南光社区', status: '在职', accountStatus: '启用' },
    { id: 12, empId: '440305002007010', name: '黄艳芳', phone: '188****6057', gender: '男', org: '南光社区', status: '在职', accountStatus: '启用' },
    { id: 13, empId: '440305002007011', name: '李明骏', phone: '135****8453', gender: '男', org: '南光社区', status: '在职', accountStatus: '启用' },
    { id: 14, empId: '440305002007012', name: '柯奕能', phone: '188****5452', gender: '男', org: '南光社区', status: '在职', accountStatus: '启用' },
    { id: 15, empId: '440305002007013', name: '刘忠敏', phone: '188****5398', gender: '男', org: '南光社区', status: '在职', accountStatus: '启用' },
    { id: 16, empId: '440305002007014', name: '杨佩佩', phone: '135****7710', gender: '男', org: '南光社区', status: '在职', accountStatus: '启用' },
  ];

  const handleSelectAll = () => {
    if (selectedItems.size === contacts.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(contacts.map(c => c.id)));
    }
  };

  const handleSelect = (id: number) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  return (
    <div className="flex h-full">
      {/* 左侧组织树 */}
      <div className="w-56 bg-white border-r border-gray-200 p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <button className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
            <Plus className="h-4 w-4 text-gray-600" />
          </button>
          <input
            type="text"
            placeholder="组织名称搜索"
            className="flex-1 px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1 overflow-auto">
          <div className="font-medium text-gray-800">南光社区</div>
        </div>
      </div>

      {/* 右侧内容区 */}
      <div className="flex-1 p-5 overflow-auto">
        {/* 搜索区域 */}
        <div className="bg-white rounded-t-lg p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors">
                <Plus className="h-4 w-4" />
                新增
              </button>
              <button className="flex items-center gap-1.5 px-4 py-1.5 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors">
                <Trash2 className="h-4 w-4" />
                批量删除
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFormData({ name: '', status: '请选择', type: '请选择', accountStatus: '请选择' })}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-white text-gray-600 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                重置
              </button>
              <button className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors">
                <Search className="h-4 w-4" />
                搜索
              </button>
              <button className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors">
                <Download className="h-4 w-4" />
                导出
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">人员</span>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="姓名/手机/工号"
                className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ width: '200px' }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">人员状态</span>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="请选择">请选择</option>
                <option value="在职">在职</option>
                <option value="离职">离职</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">人员类型</span>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="请选择">请选择</option>
                <option value="内部人员">内部人员</option>
                <option value="外部人员">外部人员</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">账号状态</span>
              <select
                value={formData.accountStatus}
                onChange={(e) => setFormData({ ...formData, accountStatus: e.target.value })}
                className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="请选择">请选择</option>
                <option value="启用">启用</option>
                <option value="禁用">禁用</option>
              </select>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeSubOrg}
                onChange={(e) => setIncludeSubOrg(e.target.checked)}
              />
              <span className="text-sm text-gray-600">包含下级组织人员</span>
            </label>
          </div>
        </div>

        {/* 表格区域 */}
        <div className="bg-white">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200 w-12">
                    <input
                      type="checkbox"
                      checked={selectedItems.size === contacts.length && contacts.length > 0}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">序号</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">工号</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">姓名</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">手机</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">性别</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">组织</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">人员状态</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">账号状态</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">操作</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((item, idx) => (
                  <tr key={item.id} className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 border-b border-gray-200">
                      <input
                        type="checkbox"
                        checked={selectedItems.has(item.id)}
                        onChange={() => handleSelect(item.id)}
                      />
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{idx + 1}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.empId}</td>
                    <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">{item.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.phone}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.gender}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.org}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.status}</td>
                    <td className="px-4 py-3 text-sm border-b border-gray-200">
                      <span className="px-2 py-1 bg-teal-100 text-teal-600 rounded text-xs">
                        {item.accountStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <button className="text-blue-500 hover:text-blue-700">详情</button>
                        <button className="text-blue-500 hover:text-blue-700">离职</button>
                        <button className="text-blue-500 hover:text-blue-700">禁用</button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 分页 */}
          <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
            <span className="text-sm text-gray-600">共 38 条</span>
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
              {[1, 2].map((page, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded text-sm ${
                    page === currentPage
                      ? 'bg-blue-500 text-white'
                      : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
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
    </div>
  );
};

export default Contacts;
