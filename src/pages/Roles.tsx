import React, { useState } from 'react';
import { Search, RefreshCw, Plus, Trash2, ChevronDown } from 'lucide-react';

const Roles: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [activeTab, setActiveTab] = useState('members');
  const [selectedRole, setSelectedRole] = useState('企业管理员');
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  const roles = ['默认', '企业管理员', '成员', 'test'];
  const roleMembers = [
    { id: 1, name: '管理员', phone: '135****0001', org: '南光社区', username: '123' },
  ];

  const permissions = [
    '商户管理', '小区管理', '房屋管理', '住户管理', '企业管理', '网格管理',
    '报警看板', '报警记录', '报警类型配置', '报警等级配置', '报警联动摄像头配置',
    '报警推送记录', '物联看板'
  ];

  const handleSelectAll = () => {
    if (selectedItems.size === roleMembers.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(roleMembers.map(m => m.id)));
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
      {/* 左侧角色树 */}
      <div className="w-56 bg-white border-r border-gray-200 p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <button className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
            <Plus className="h-4 w-4 text-gray-600" />
          </button>
          <input
            type="text"
            placeholder="角色搜索"
            className="flex-1 px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1 overflow-auto">
          <div className="space-y-1">
            <div className="flex items-center gap-2 px-2 py-1.5 text-gray-500">
              <ChevronDown className="h-3 w-3" />
              <span className="text-sm">默认</span>
            </div>
            {roles.slice(1).map((role, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedRole(role)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  selectedRole === role
                    ? 'bg-gray-100 text-gray-800 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 右侧内容区 */}
      <div className="flex-1 flex flex-col">
        {/* 标题栏 */}
        <div className="bg-white border-b border-gray-200 p-4">
          <h2 className="text-lg font-semibold text-gray-800">{selectedRole}</h2>
        </div>

        {/* 标签页 */}
        <div className="flex-1 overflow-auto">
          <div className="border-b border-gray-200 bg-white">
            <div className="flex gap-1">
              <button
                onClick={() => setActiveTab('members')}
                className={`px-4 py-2.5 text-sm font-medium transition-colors ${
                  activeTab === 'members'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                角色成员
              </button>
              <button
                onClick={() => setActiveTab('pc')}
                className={`px-4 py-2.5 text-sm font-medium transition-colors ${
                  activeTab === 'pc'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                PC权限
              </button>
              <button
                onClick={() => setActiveTab('mobile')}
                className={`px-4 py-2.5 text-sm font-medium transition-colors ${
                  activeTab === 'mobile'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                移动端权限
              </button>
            </div>
          </div>

          {/* 角色成员标签页 */}
          {activeTab === 'members' && (
            <div className="p-5">
              <div className="bg-white">
                {/* 搜索区域 */}
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">姓名</span>
                    <input
                      type="text"
                      placeholder="姓名/手机/工号"
                      className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      style={{ width: '200px' }}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1.5 px-4 py-1.5 bg-white text-gray-600 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors">
                      <RefreshCw className="h-4 w-4" />
                      重置
                    </button>
                    <button className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors">
                      <Search className="h-4 w-4" />
                      搜索
                    </button>
                    <button className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors">
                      <Plus className="h-4 w-4" />
                      新增成员
                    </button>
                    <button className="flex items-center gap-1.5 px-4 py-1.5 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors">
                      <Trash2 className="h-4 w-4" />
                      移除成员
                    </button>
                  </div>
                </div>

                {/* 表格区域 */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200 w-12">
                          <input
                            type="checkbox"
                            checked={selectedItems.size === roleMembers.length && roleMembers.length > 0}
                            onChange={handleSelectAll}
                          />
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">序号</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">姓名</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">手机号</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">组织</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">用户名</th>
                      </tr>
                    </thead>
                    <tbody>
                      {roleMembers.map((member, idx) => (
                        <tr key={member.id} className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-3 border-b border-gray-200">
                            <input
                              type="checkbox"
                              checked={selectedItems.has(member.id)}
                              onChange={() => handleSelect(member.id)}
                            />
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{idx + 1}</td>
                          <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">{member.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{member.phone}</td>
                          <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{member.org}</td>
                          <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{member.username}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* 分页 */}
                <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
                  <span className="text-sm text-gray-600">共 1 条</span>
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
          )}

          {/* PC权限标签页 */}
          {activeTab === 'pc' && (
            <div className="p-5">
              <div className="bg-white rounded-lg">
                {permissions.map((perm, idx) => (
                  <div key={idx} className="flex items-center justify-between px-4 py-3 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center gap-2">
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-800">{perm}</span>
                    </div>
                    <div className="w-12 h-6 bg-blue-500 rounded-full relative cursor-pointer">
                      <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 移动端权限标签页 */}
          {activeTab === 'mobile' && (
            <div className="p-5 flex flex-col items-center justify-center h-96">
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=3D打开的纸箱灰色简约风格&image_size=square" 
                alt="暂无数据" 
                className="w-32 h-32 mb-4 opacity-30"
              />
              <div className="text-gray-500 text-sm">无相关菜单</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Roles;
