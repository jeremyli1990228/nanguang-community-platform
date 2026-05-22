import React, { useState } from 'react';
import { Search, RefreshCw, Plus, X, AlertCircle } from 'lucide-react';

const GridManagement: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [searchFormData, setSearchFormData] = useState({
    gridName: ''
  });
  
  // 弹窗状态
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentGrid, setCurrentGrid] = useState<any>(null);
  
  // 表单数据
  const [addFormData, setAddFormData] = useState({
    gridName: '',
    name: '',
    phone: '',
    code: '',
    communityName: '',
    communityCode: '',
    streetName: '',
    streetCode: '',
    remark: ''
  });
  
  const [editFormData, setEditFormData] = useState({
    gridName: '',
    name: '',
    phone: '',
    code: '',
    communityName: '',
    communityCode: '',
    streetName: '',
    streetCode: '',
    remark: ''
  });

  const gridData = [
    { id: 1, gridName: '南光12', name: '柯奕能', phone: '188****5452', code: '440305002007012', communityName: '南光社区', communityCode: '440305002007', streetName: '南山街道', streetCode: '440305002', remark: '-' },
    { id: 2, gridName: '南光11', name: '李明骏', phone: '135****8453', code: '440305002007011', communityName: '南光社区', communityCode: '440305002007', streetName: '南山街道', streetCode: '440305002', remark: '-' },
    { id: 3, gridName: '南光07', name: '卢伟鹏', phone: '135****4224', code: '440305002007007', communityName: '南光社区', communityCode: '440305002007', streetName: '南山街道', streetCode: '440305002', remark: '-' },
    { id: 4, gridName: '南光06', name: '冯乾辉', phone: '188****5269', code: '440305002007006', communityName: '南光社区', communityCode: '440305002007', streetName: '南山街道', streetCode: '440305002', remark: '-' },
    { id: 5, gridName: '南光36', name: '周其祥', phone: '135****7841', code: '440305002007036', communityName: '南光社区', communityCode: '440305002007', streetName: '南山街道', streetCode: '440305002', remark: '-' },
    { id: 6, gridName: '南光08', name: '陈俊杰', phone: '135****9727', code: '440305002007008', communityName: '南光社区', communityCode: '440305002007', streetName: '南山街道', streetCode: '440305002', remark: '-' },
    { id: 7, gridName: '南光30', name: '陈伟才', phone: '139****0412', code: '440305002007030', communityName: '南光社区', communityCode: '440305002007', streetName: '南山街道', streetCode: '440305002', remark: '-' },
    { id: 8, gridName: '南光19', name: '钟婉婷', phone: '135****9230', code: '440305002007019', communityName: '南光社区', communityCode: '440305002007', streetName: '南山街道', streetCode: '440305002', remark: '-' },
    { id: 9, gridName: '南光20', name: '陈玉虹', phone: '135****7962', code: '440305002007020', communityName: '南光社区', communityCode: '440305002007', streetName: '南山街道', streetCode: '440305002', remark: '-' },
    { id: 10, gridName: '南光13', name: '刘思敏', phone: '188****5398', code: '440305002007013', communityName: '南光社区', communityCode: '440305002007', streetName: '南山街道', streetCode: '440305002', remark: '-' },
    { id: 11, gridName: '南光33', name: '古思琪', phone: '139****1556', code: '440305002007033', communityName: '南光社区', communityCode: '440305002007', streetName: '南山街道', streetCode: '440305002', remark: '-' },
    { id: 12, gridName: '南光26', name: '张敏', phone: '188****5992', code: '440305002007026', communityName: '南光社区', communityCode: '440305002007', streetName: '南山街道', streetCode: '440305002', remark: '-' },
    { id: 13, gridName: '南光01', name: '杨婉滢', phone: '188****6004', code: '440305002007001', communityName: '南光社区', communityCode: '440305002007', streetName: '南山街道', streetCode: '440305002', remark: '-' },
    { id: 14, gridName: '南光35', name: '吴颖曼', phone: '139****0964', code: '440305002007035', communityName: '南光社区', communityCode: '440305002007', streetName: '南山街道', streetCode: '440305002', remark: '-' },
    { id: 15, gridName: '南光24', name: '朱梦意', phone: '188****6030', code: '440305002007024', communityName: '南光社区', communityCode: '440305002007', streetName: '南山街道', streetCode: '440305002', remark: '-' },
    { id: 16, gridName: '南光09', name: '李宪政', phone: '135****7630', code: '440305002007009', communityName: '南光社区', communityCode: '440305002007', streetName: '南山街道', streetCode: '440305002', remark: '-' },
    { id: 17, gridName: '南光32', name: '沈子威', phone: '139****8620', code: '440305002007032', communityName: '南光社区', communityCode: '440305002007', streetName: '南山街道', streetCode: '440305002', remark: '-' },
  ];

  const totalItems = 35;
  const totalPages = Math.ceil(totalItems / pageSize);

  const handleSearch = () => {
    console.log('搜索', searchFormData);
  };

  const handleReset = () => {
    setSearchFormData({ gridName: '' });
  };
  
  // 新增相关
  const handleAdd = () => {
    setAddFormData({
      gridName: '',
      name: '',
      phone: '',
      code: '',
      communityName: '',
      communityCode: '',
      streetName: '',
      streetCode: '',
      remark: ''
    });
    setShowAddModal(true);
  };
  
  const handleSaveAdd = () => {
    console.log('保存新增', addFormData);
    setShowAddModal(false);
  };
  
  // 编辑相关
  const handleEdit = (item: any) => {
    setCurrentGrid(item);
    setEditFormData({
      gridName: item.gridName,
      name: item.name,
      phone: item.phone,
      code: item.code,
      communityName: item.communityName,
      communityCode: item.communityCode,
      streetName: item.streetName,
      streetCode: item.streetCode,
      remark: item.remark
    });
    setShowEditModal(true);
  };
  
  const handleSaveEdit = () => {
    console.log('保存编辑', editFormData);
    setShowEditModal(false);
  };
  
  // 删除相关
  const handleDelete = (item: any) => {
    setCurrentGrid(item);
    setShowDeleteModal(true);
  };
  
  const handleConfirmDelete = () => {
    console.log('确认删除', currentGrid);
    setShowDeleteModal(false);
  };

  return (
    <div className="p-5">
      {/* 搜索区域 */}
      <div className="bg-white rounded-t-lg p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">网格名称</span>
              <input
                type="text"
                value={searchFormData.gridName}
                onChange={(e) => setSearchFormData({ ...searchFormData, gridName: e.target.value })}
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
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">网格名称</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">姓名</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">联系方式</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">编号</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">社区名称</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">社区编码</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">街道名称</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">街道编码</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">备注</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody>
              {gridData.map((item, idx) => (
                <tr key={item.id} className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">{((currentPage - 1) * pageSize) + idx + 1}</td>
                  <td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">{item.gridName}</td>
                  <td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">{item.name}</td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">{item.phone}</td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">{item.code}</td>
                  <td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">{item.communityName}</td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">{item.communityCode}</td>
                  <td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">{item.streetName}</td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">{item.streetCode}</td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">{item.remark}</td>
                  <td className="px-4 py-2 text-sm border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        编辑
                      </button>
                      <button
                        onClick={() => handleDelete(item)}
                        className="text-red-500 hover:text-red-700"
                      >
                        删除
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
          <span className="text-sm text-gray-600">共 {totalItems} 条</span>
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
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
              &gt;
            </button>
          </div>
          <span className="text-sm text-gray-600">前往</span>
          <input
            type="number"
            value={currentPage}
            onChange={(e) => setCurrentPage(Math.min(Math.max(1, Number(e.target.value)), totalPages))}
            className="w-14 px-2 py-1.5 border border-gray-300 rounded text-sm text-center"
          />
          <span className="text-sm text-gray-600">页</span>
        </div>
      </div>

      {/* 新增弹窗 */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">添加</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">
                  <span className="text-red-500">*</span> 网格名称
                </label>
                <input
                  type="text"
                  value={addFormData.gridName}
                  onChange={(e) => setAddFormData({ ...addFormData, gridName: e.target.value })}
                  placeholder="请输入网格名称"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">
                  <span className="text-red-500">*</span> 姓名
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
                <label className="block text-sm text-gray-700 mb-1.5">联系方式</label>
                <input
                  type="text"
                  value={addFormData.phone}
                  onChange={(e) => setAddFormData({ ...addFormData, phone: e.target.value })}
                  placeholder="请输入联系方式"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">社区名称</label>
                <input
                  type="text"
                  value={addFormData.communityName}
                  onChange={(e) => setAddFormData({ ...addFormData, communityName: e.target.value })}
                  placeholder="请输入社区名称"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">社区编码</label>
                <input
                  type="text"
                  value={addFormData.communityCode}
                  onChange={(e) => setAddFormData({ ...addFormData, communityCode: e.target.value })}
                  placeholder="请输入社区编码"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">街道名称</label>
                <input
                  type="text"
                  value={addFormData.streetName}
                  onChange={(e) => setAddFormData({ ...addFormData, streetName: e.target.value })}
                  placeholder="请输入街道名称"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">街道编码</label>
                <input
                  type="text"
                  value={addFormData.streetCode}
                  onChange={(e) => setAddFormData({ ...addFormData, streetCode: e.target.value })}
                  placeholder="请输入街道编码"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">备注</label>
                <textarea
                  value={addFormData.remark}
                  onChange={(e) => setAddFormData({ ...addFormData, remark: e.target.value })}
                  placeholder="请输入备注"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleSaveAdd}
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
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">编辑</h3>
              <button
                onClick={() => setShowEditModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">
                  <span className="text-red-500">*</span> 网格名称
                </label>
                <input
                  type="text"
                  value={editFormData.gridName}
                  onChange={(e) => setEditFormData({ ...editFormData, gridName: e.target.value })}
                  placeholder="请输入网格名称"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">
                  <span className="text-red-500">*</span> 姓名
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
                <label className="block text-sm text-gray-700 mb-1.5">联系方式</label>
                <input
                  type="text"
                  value={editFormData.phone}
                  onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value })}
                  placeholder="请输入联系方式"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">社区名称</label>
                <input
                  type="text"
                  value={editFormData.communityName}
                  onChange={(e) => setEditFormData({ ...editFormData, communityName: e.target.value })}
                  placeholder="请输入社区名称"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">社区编码</label>
                <input
                  type="text"
                  value={editFormData.communityCode}
                  onChange={(e) => setEditFormData({ ...editFormData, communityCode: e.target.value })}
                  placeholder="请输入社区编码"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">街道名称</label>
                <input
                  type="text"
                  value={editFormData.streetName}
                  onChange={(e) => setEditFormData({ ...editFormData, streetName: e.target.value })}
                  placeholder="请输入街道名称"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">街道编码</label>
                <input
                  type="text"
                  value={editFormData.streetCode}
                  onChange={(e) => setEditFormData({ ...editFormData, streetCode: e.target.value })}
                  placeholder="请输入街道编码"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">备注</label>
                <textarea
                  value={editFormData.remark}
                  onChange={(e) => setEditFormData({ ...editFormData, remark: e.target.value })}
                  placeholder="请输入备注"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleSaveEdit}
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
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm mx-4">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">删除</h3>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <AlertCircle className="h-8 w-8 text-amber-500 flex-shrink-0" />
                <p className="text-gray-700">请确认是否删除？</p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
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

export default GridManagement;
