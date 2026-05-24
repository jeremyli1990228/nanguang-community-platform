import React, { useState } from 'react';
import { Search, RefreshCw, Plus, Upload, X, AlertCircle, ChevronRight, ChevronDown, Building2, Home, Store, Factory, MapPin } from 'lucide-react';

const ResidentManagement: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [searchFormData, setSearchFormData] = useState({
    name: ''
  });

  // 左侧树形结构数据
  const treeData = [
    {
      id: 'all',
      label: '全部',
      icon: null,
      residentCount: 17
    },
    {
      id: 'merchant',
      label: '商户',
      icon: <Store className="w-4 h-4" />,
      children: [
        { id: 'merchant-1', label: '便民超市', residentCount: 5 },
        { id: 'merchant-2', label: '早餐店', residentCount: 3 },
        { id: 'merchant-3', label: '药店', residentCount: 2 }
      ]
    },
    {
      id: 'community',
      label: '小区',
      icon: <Building2 className="w-4 h-4" />,
      children: [
        { 
          id: 'community-1', 
          label: '阳光花园', 
          children: [
            { id: 'community-1-1', label: '1栋', residentCount: 24 },
            { id: 'community-1-2', label: '2栋', residentCount: 18 },
            { id: 'community-1-3', label: '3栋', residentCount: 22 }
          ]
        },
        { 
          id: 'community-2', 
          label: '幸福家园', 
          children: [
            { id: 'community-2-1', label: 'A栋', residentCount: 30 },
            { id: 'community-2-2', label: 'B栋', residentCount: 25 }
          ]
        }
      ]
    },
    {
      id: 'house',
      label: '房屋',
      icon: <Home className="w-4 h-4" />,
      children: [
        { id: 'house-1', label: '101室', residentCount: 3 },
        { id: 'house-2', label: '102室', residentCount: 2 },
        { id: 'house-3', label: '201室', residentCount: 4 }
      ]
    },
    {
      id: 'enterprise',
      label: '企业',
      icon: <Factory className="w-4 h-4" />,
      children: [
        { id: 'enterprise-1', label: '科技公司A', residentCount: 15 },
        { id: 'enterprise-2', label: '贸易公司B', residentCount: 8 }
      ]
    },
    {
      id: 'grid',
      label: '网格',
      icon: <MapPin className="w-4 h-4" />,
      children: [
        { id: 'grid-1', label: '第一网格', residentCount: 120 },
        { id: 'grid-2', label: '第二网格', residentCount: 95 },
        { id: 'grid-3', label: '第三网格', residentCount: 110 }
      ]
    }
  ];

  // 树展开状态
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['community', 'community-1']));
  // 选中节点，默认选中"全部"
  const [selectedNode, setSelectedNode] = useState<string>('all');

  // 为住户数据添加分类标签，用于筛选
  const residentsWithCategory = [
    { id: 1, name: '戚道琳', phone: '181****1215', gender: '女', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '高龄老人', isShenzhenHukou: true, category: 'community-1-1' },
    { id: 2, name: '陈稳豪', phone: '186****2244', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: true, category: 'community-1-1' },
    { id: 3, name: '李振龙', phone: '188****0039', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: true, category: 'community-1-2' },
    { id: 4, name: '李小春', phone: '156****108', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: false, category: 'community-1-2' },
    { id: 5, name: '杨春雨', phone: '158****5434', gender: '女', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: true, category: 'community-2-1' },
    { id: 6, name: '邓华龙', phone: '157****6984', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: false, category: 'merchant-1' },
    { id: 7, name: '张亚飞', phone: '187****5102', gender: '女', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: true, category: 'enterprise-1' },
    { id: 8, name: '杨文杰', phone: '178****5063', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: true, category: 'grid-1' },
    { id: 9, name: '庄小娥', phone: '136****8271', gender: '女', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: false, category: 'house-1' },
    { id: 10, name: '管庆锦', phone: '138****8764', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: true, category: 'grid-2' },
    { id: 11, name: '刘倚文', phone: '159****6645', gender: '女', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: true, category: 'community-2-2' },
    { id: 12, name: '张文', phone: '152****8240', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: false, category: 'merchant-2' },
    { id: 13, name: '王柱柱', phone: '187****7115', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: true, category: 'enterprise-2' },
    { id: 14, name: '李佳鹏', phone: '152****0128', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: true, category: 'grid-3' },
    { id: 15, name: '张宁', phone: '187****5686', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: false, category: 'house-2' },
    { id: 16, name: '张溢航', phone: '186****8806', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '满族', type: '普通住户', isShenzhenHukou: true, category: 'community-1-3' },
    { id: 17, name: '佟力男', phone: '135****3049', gender: '女', address: '广东省深圳市南山区南山街道南...', nation: '满族', type: '普通住户', isShenzhenHukou: true, category: 'merchant-3' }
  ];

  // 根据选中节点过滤住户数据
  const getFilteredResidents = () => {
    if (!selectedNode || selectedNode === 'all') {
      return residentsWithCategory;
    }

    // 简单匹配：完全匹配或前缀匹配
    return residentsWithCategory.filter(r => 
      r.category === selectedNode || r.category.startsWith(selectedNode + '-')
    );
  };

  const filteredResidents = getFilteredResidents();

  // 弹窗状态
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);

  // 当前操作的住户
  const [currentResident, setCurrentResident] = useState<any>(null);

  // 新增表单数据
  const [addFormData, setAddFormData] = useState({
    name: '',
    phone: '',
    gender: '',
    idType: '',
    idNumber: '',
    maritalStatus: '',
    age: '',
    address: '',
    nation: '',
    type: ''
  });

  // 编辑表单数据
  const [editFormData, setEditFormData] = useState({
    name: '',
    phone: '',
    gender: '',
    idType: '',
    idNumber: '',
    maritalStatus: '',
    age: '',
    address: '',
    nation: '',
    type: ''
  });



  const handleSearch = () => {
    console.log('搜索', searchFormData);
  };

  const handleReset = () => {
    setSearchFormData({ name: '' });
  };

  // 新增处理
  const handleAdd = () => {
    setAddFormData({
      name: '',
      phone: '',
      gender: '',
      idType: '',
      idNumber: '',
      maritalStatus: '',
      age: '',
      address: '',
      nation: '',
      type: ''
    });
    setShowAddModal(true);
  };

  const handleAddSave = () => {
    console.log('保存新增', addFormData);
    setShowAddModal(false);
  };

  // 编辑处理
  const handleEdit = (resident: any) => {
    setCurrentResident(resident);
    setEditFormData({
      name: resident.name,
      phone: resident.phone,
      gender: resident.gender,
      idType: '身份证',
      idNumber: '320106194205242828',
      maritalStatus: '已婚',
      age: '83',
      address: resident.address,
      nation: resident.nation,
      type: resident.type
    });
    setShowEditModal(true);
  };

  const handleEditSave = () => {
    console.log('保存编辑', editFormData);
    setShowEditModal(false);
  };

  // 删除处理
  const handleDelete = (resident: any) => {
    setCurrentResident(resident);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    console.log('确认删除', currentResident);
    setShowDeleteModal(false);
  };

  // 导入处理
  const handleImport = () => {
    setShowImportModal(true);
  };

  const handleImportFile = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xls,.xlsx';
    input.onchange = (e: any) => {
      const file = e.target.files?.[0];
      if (file) {
        console.log('选择的文件', file);
      }
    };
    input.click();
  };

  const handleImportSave = () => {
    console.log('保存导入');
    setShowImportModal(false);
  };

  // 切换树节点展开/收起
  const toggleExpand = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  // 选中树节点
  const selectNode = (nodeId: string) => {
    setSelectedNode(nodeId);
    setCurrentPage(1);
  };

  // 渲染树节点
  const renderTreeNode = (node: any, level: number = 0) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes.has(node.id);
    const isSelected = selectedNode === node.id;

    return (
      <div key={node.id}>
        <div
          className={`flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-blue-50 transition-colors ${
            isSelected ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
          }`}
          style={{ paddingLeft: `${level * 16 + 12}px` }}
          onClick={() => selectNode(node.id)}
        >
          {hasChildren ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand(node.id);
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          ) : (
            <span className="w-4" />
          )}
          {node.icon && <span className="text-gray-500">{node.icon}</span>}
          <span className="text-sm flex-1">{node.label}</span>
          {node.residentCount !== undefined && (
            <span className="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
              {node.residentCount}
            </span>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div>
            {node.children.map((child: any) => renderTreeNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-5 flex gap-5 h-[calc(100vh-40px)]">
      {/* 左侧树形导航 */}
      <div className="w-[280px] bg-white rounded-lg border border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">住户分类</h2>
        </div>
        <div className="flex-1 overflow-y-auto py-2">
          {treeData.map(node => renderTreeNode(node))}
        </div>
      </div>

      {/* 右侧住户列表 */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* 搜索区域 */}
        <div className="bg-white rounded-t-lg p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">姓名</span>
                <input
                  type="text"
                  value={searchFormData.name}
                  onChange={(e) => setSearchFormData({ ...searchFormData, name: e.target.value })}
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
              <button
                onClick={handleAdd}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
              >
                <Plus className="h-4 w-4" />
                新增
              </button>
              <button
                onClick={handleImport}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
              >
                <Upload className="h-4 w-4" />
                导入
              </button>
            </div>
          </div>
        </div>

        {/* 表格区域 */}
        <div className="bg-white flex-1 flex flex-col overflow-hidden rounded-b-lg">
          <div className="flex-1 overflow-auto">
            <table className="w-full">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">序号</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">姓名</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">联系方式</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">性别</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">居住地址</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">民族</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">人员类型</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">操作</th>
                </tr>
              </thead>
              <tbody>
                {filteredResidents.map((item, idx) => (
                  <tr key={item.id} className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{idx + 1}</td>
                    <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">{item.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.phone}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.gender}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.address}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.nation}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.type}</td>
                    <td className="px-4 py-3 text-sm border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <button onClick={() => handleEdit(item)} className="text-blue-500 hover:text-blue-700">编辑</button>
                        <button onClick={() => handleDelete(item)} className="text-red-500 hover:text-red-700">删除</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 分页 */}
          <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
            <span className="text-sm text-gray-600">共 {filteredResidents.length} 条</span>
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
              {[1, 2, 3, 4, 5, 6, '...', 2197].map((page, idx) => (
                <button
                  key={idx}
                  onClick={() => typeof page === 'number' && setCurrentPage(page)}
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

      {/* 新增弹窗 */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white">
              <span className="text-lg font-medium">添加</span>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  <span className="text-red-500">*</span>姓名
                </label>
                <input
                  type="text"
                  value={addFormData.name}
                  onChange={(e) => setAddFormData({ ...addFormData, name: e.target.value })}
                  placeholder="请输入姓名"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  <span className="text-red-500">*</span>联系方式
                </label>
                <input
                  type="text"
                  value={addFormData.phone}
                  onChange={(e) => setAddFormData({ ...addFormData, phone: e.target.value })}
                  placeholder="请输入联系方式"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  <span className="text-red-500">*</span>性别
                </label>
                <select
                  value={addFormData.gender}
                  onChange={(e) => setAddFormData({ ...addFormData, gender: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">请选择性别</option>
                  <option value="男">男</option>
                  <option value="女">女</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">证件类型</label>
                <input
                  type="text"
                  value={addFormData.idType}
                  onChange={(e) => setAddFormData({ ...addFormData, idType: e.target.value })}
                  placeholder="请输入证件类型"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">证件号</label>
                <input
                  type="text"
                  value={addFormData.idNumber}
                  onChange={(e) => setAddFormData({ ...addFormData, idNumber: e.target.value })}
                  placeholder="请输入"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">婚姻状况</label>
                <input
                  type="text"
                  value={addFormData.maritalStatus}
                  onChange={(e) => setAddFormData({ ...addFormData, maritalStatus: e.target.value })}
                  placeholder="请输入"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">年龄</label>
                <input
                  type="text"
                  value={addFormData.age}
                  onChange={(e) => setAddFormData({ ...addFormData, age: e.target.value })}
                  placeholder="请输入"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">居住地址</label>
                <input
                  type="text"
                  value={addFormData.address}
                  onChange={(e) => setAddFormData({ ...addFormData, address: e.target.value })}
                  placeholder="请输入"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">民族</label>
                <input
                  type="text"
                  value={addFormData.nation}
                  onChange={(e) => setAddFormData({ ...addFormData, nation: e.target.value })}
                  placeholder="请输入"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">人员类型</label>
                <select
                  value={addFormData.type}
                  onChange={(e) => setAddFormData({ ...addFormData, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">请选择人员类型</option>
                  <option value="普通住户">普通住户</option>
                  <option value="高龄老人">高龄老人</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200 sticky bottom-0 bg-white">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleAddSave}
                className="px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 编辑弹窗 */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white">
              <span className="text-lg font-medium">编辑</span>
              <button onClick={() => setShowEditModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  <span className="text-red-500">*</span>姓名
                </label>
                <input
                  type="text"
                  value={editFormData.name}
                  onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                  placeholder="请输入姓名"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  <span className="text-red-500">*</span>联系方式
                </label>
                <input
                  type="text"
                  value={editFormData.phone}
                  onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value })}
                  placeholder="请输入联系方式"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  <span className="text-red-500">*</span>性别
                </label>
                <select
                  value={editFormData.gender}
                  onChange={(e) => setEditFormData({ ...editFormData, gender: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">请选择性别</option>
                  <option value="男">男</option>
                  <option value="女">女</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">证件类型</label>
                <input
                  type="text"
                  value={editFormData.idType}
                  onChange={(e) => setEditFormData({ ...editFormData, idType: e.target.value })}
                  placeholder="请输入证件类型"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">证件号</label>
                <input
                  type="text"
                  value={editFormData.idNumber}
                  onChange={(e) => setEditFormData({ ...editFormData, idNumber: e.target.value })}
                  placeholder="请输入"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">婚姻状况</label>
                <input
                  type="text"
                  value={editFormData.maritalStatus}
                  onChange={(e) => setEditFormData({ ...editFormData, maritalStatus: e.target.value })}
                  placeholder="请输入"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">年龄</label>
                <input
                  type="text"
                  value={editFormData.age}
                  onChange={(e) => setEditFormData({ ...editFormData, age: e.target.value })}
                  placeholder="请输入"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">居住地址</label>
                <input
                  type="text"
                  value={editFormData.address}
                  onChange={(e) => setEditFormData({ ...editFormData, address: e.target.value })}
                  placeholder="请输入"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">民族</label>
                <input
                  type="text"
                  value={editFormData.nation}
                  onChange={(e) => setEditFormData({ ...editFormData, nation: e.target.value })}
                  placeholder="请输入"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">人员类型</label>
                <select
                  value={editFormData.type}
                  onChange={(e) => setEditFormData({ ...editFormData, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">请选择人员类型</option>
                  <option value="普通住户">普通住户</option>
                  <option value="高龄老人">高龄老人</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200 sticky bottom-0 bg-white">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleEditSave}
                className="px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 删除确认弹窗 */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-80">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="text-lg font-medium">删除</span>
              <button onClick={() => setShowDeleteModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-amber-500" />
                </div>
                <span className="text-sm text-gray-700">请确认是否删除？</span>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
              >
                确定
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 导入弹窗 */}
      {showImportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[500px]">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="text-lg font-medium">导入</span>
              <button onClick={() => setShowImportModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div className="text-center">
                <a href="#" className="text-blue-500 text-sm hover:underline">下载标准导入模板（首次使用，请下载模板，填写信息后再导入）</a>
              </div>
              <div 
                onClick={handleImportFile}
                className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center cursor-pointer hover:bg-blue-50 transition-colors"
              >
                <Upload className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">将文件拖到此处，或<span className="text-blue-500">点击上传</span></p>
              </div>
              <div className="text-sm text-gray-500">
                支持.xls,.xlsx格式文件，大小不超过50M
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
              <button
                onClick={() => setShowImportModal(false)}
                className="px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleImportSave}
                className="px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
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

export default ResidentManagement;
