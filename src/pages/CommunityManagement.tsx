import React, { useState } from 'react';
import { Search, RefreshCw, Plus, X, AlertCircle, Minus, Plus as PlusIcon } from 'lucide-react';

const CommunityManagement: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [formData, setFormData] = useState({
    name: '',
    road: ''
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const [editingCommunity, setEditingCommunity] = useState<any>(null);
  const [selectedCommunity, setSelectedCommunity] = useState<any>(null);
  
  const [addFormData, setAddFormData] = useState({
    communityName: '',
    road: '',
    buildingCount: 0,
    unitCount: 0,
    remark: ''
  });

  const communities = [
    { id: 1, name: '仲良大厦（9层）', road: '-', buildingCount: 0, unitCount: 0, remark: '-' },
    { id: 2, name: '鸿瑞花园', road: '-', buildingCount: '-', unitCount: '-', remark: '-' },
    { id: 3, name: '中国石油大厦（26层）', road: '-', buildingCount: '-', unitCount: '-', remark: '-' },
    { id: 4, name: '海昌阁（8层）', road: '-', buildingCount: '-', unitCount: '-', remark: '-' },
    { id: 5, name: '正东名苑（31层）', road: '-', buildingCount: '-', unitCount: '-', remark: '-' },
    { id: 6, name: '南光城市花园（32层）', road: '-', buildingCount: '-', unitCount: '-', remark: '-' },
    { id: 7, name: '阳光华艺大厦（30层）', road: '-', buildingCount: '-', unitCount: '-', remark: '-' },
    { id: 8, name: '海典居（21层）', road: '-', buildingCount: '-', unitCount: '-', remark: '-' },
    { id: 9, name: '好来居（20层）', road: '-', buildingCount: '-', unitCount: '-', remark: '-' },
    { id: 10, name: '桂庙花园（17层）', road: '-', buildingCount: '-', unitCount: '-', remark: '-' },
    { id: 11, name: '龙城新苑（7层）', road: '-', buildingCount: '-', unitCount: '-', remark: '-' },
    { id: 12, name: '龙泰轩（11层）', road: '-', buildingCount: '-', unitCount: '-', remark: '-' },
    { id: 13, name: '缤纷假日豪园（22层）', road: '-', buildingCount: '-', unitCount: '-', remark: '-' },
    { id: 14, name: '新能源大厦（13层）', road: '-', buildingCount: '-', unitCount: '-', remark: '-' },
    { id: 15, name: '现代城华庭（33层）', road: '-', buildingCount: '-', unitCount: '-', remark: '-' },
    { id: 16, name: '海王大厦（32层）', road: '-', buildingCount: '-', unitCount: '-', remark: '-' },
    { id: 17, name: '东华假日公寓（13）', road: '-', buildingCount: '-', unitCount: '-', remark: '-' },
  ];

  const handleSearch = () => {
    console.log('搜索', formData);
  };

  const handleReset = () => {
    setFormData({ name: '', road: '' });
  };

  const handleAdd = () => {
    setAddFormData({
      communityName: '',
      road: '',
      buildingCount: 0,
      unitCount: 0,
      remark: ''
    });
    setShowAddModal(true);
  };

  const handleEdit = (community: any) => {
    setEditingCommunity({
      ...community,
      buildingCount: typeof community.buildingCount === 'number' ? community.buildingCount : 0,
      unitCount: typeof community.unitCount === 'number' ? community.unitCount : 0
    });
    setShowEditModal(true);
  };

  const handleDelete = (community: any) => {
    setSelectedCommunity(community);
    setShowDeleteModal(true);
  };

  const handleSaveAdd = () => {
    alert(`新增小区成功！\n小区名称: ${addFormData.communityName}\n所属道路: ${addFormData.road}\n楼栋数: ${addFormData.buildingCount}\n单元数: ${addFormData.unitCount}\n备注: ${addFormData.remark || '无'}`);
    setShowAddModal(false);
  };

  const handleSaveEdit = () => {
    alert(`编辑小区成功！\n小区名称: ${editingCommunity.name}\n所属道路: ${editingCommunity.road}\n楼栋数: ${editingCommunity.buildingCount}\n单元数: ${editingCommunity.unitCount}\n备注: ${editingCommunity.remark || '无'}`);
    setShowEditModal(false);
  };

  const handleConfirmDelete = () => {
    alert(`已删除小区: ${selectedCommunity.name}`);
    setShowDeleteModal(false);
    setSelectedCommunity(null);
  };

  const incrementBuildingCount = () => {
    setAddFormData({ ...addFormData, buildingCount: addFormData.buildingCount + 1 });
  };

  const decrementBuildingCount = () => {
    setAddFormData({ ...addFormData, buildingCount: Math.max(0, addFormData.buildingCount - 1) });
  };

  const incrementUnitCount = () => {
    setAddFormData({ ...addFormData, unitCount: addFormData.unitCount + 1 });
  };

  const decrementUnitCount = () => {
    setAddFormData({ ...addFormData, unitCount: Math.max(0, addFormData.unitCount - 1) });
  };

  const incrementEditBuildingCount = () => {
    setEditingCommunity({ ...editingCommunity, buildingCount: editingCommunity.buildingCount + 1 });
  };

  const decrementEditBuildingCount = () => {
    setEditingCommunity({ ...editingCommunity, buildingCount: Math.max(0, editingCommunity.buildingCount - 1) });
  };

  const incrementEditUnitCount = () => {
    setEditingCommunity({ ...editingCommunity, unitCount: editingCommunity.unitCount + 1 });
  };

  const decrementEditUnitCount = () => {
    setEditingCommunity({ ...editingCommunity, unitCount: Math.max(0, editingCommunity.unitCount - 1) });
  };

  return (
    <div className="p-5">
      {/* 搜索区域 */}
      <div className="bg-white rounded-t-lg p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">小区名称</span>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="请输入"
                className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ width: '180px' }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">所属道路</span>
              <input
                type="text"
                value={formData.road}
                onChange={(e) => setFormData({ ...formData, road: e.target.value })}
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
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">小区名称</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">所属道路</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">楼栋数</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">单元数</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">备注</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody>
              {communities.map((item, idx) => (
                <tr key={item.id} className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{idx + 1}</td>
                  <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">{item.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.road}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.buildingCount}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.unitCount}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.remark}</td>
                  <td className="px-4 py-3 text-sm border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleEdit(item)}
                        className="text-blue-500 hover:text-blue-700 cursor-pointer"
                      >编辑</button>
                      <button 
                        onClick={() => handleDelete(item)}
                        className="text-red-500 hover:text-red-700 cursor-pointer"
                      >删除</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 分页 */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
          <span className="text-sm text-gray-600">共 29 条</span>
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

      {/* 新增弹窗 */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[450px]">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-bold text-gray-800">添加</h3>
              <button 
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => setShowAddModal(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              {/* 小区名称 */}
              <div>
                <label className="flex items-center text-sm text-gray-700 mb-2">
                  <span className="text-red-500 mr-1">*</span>小区名称
                </label>
                <input 
                  type="text"
                  value={addFormData.communityName}
                  onChange={(e) => setAddFormData({ ...addFormData, communityName: e.target.value })}
                  placeholder="请输入小区名称"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 所属道路 */}
              <div>
                <label className="flex items-center text-sm text-gray-700 mb-2">
                  <span className="text-red-500 mr-1">*</span>所属道路
                </label>
                <input 
                  type="text"
                  value={addFormData.road}
                  onChange={(e) => setAddFormData({ ...addFormData, road: e.target.value })}
                  placeholder="请输入所属道路"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 楼栋数 */}
              <div>
                <label className="text-sm text-gray-700 mb-2 block">楼栋数</label>
                <div className="flex items-center">
                  <button 
                    onClick={decrementBuildingCount}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l hover:bg-gray-50"
                    disabled={addFormData.buildingCount === 0}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input 
                    type="number"
                    value={addFormData.buildingCount}
                    onChange={(e) => setAddFormData({ ...addFormData, buildingCount: Math.max(0, Number(e.target.value) || 0) })}
                    className="flex-1 px-4 py-2 border-y border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button 
                    onClick={incrementBuildingCount}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r hover:bg-gray-50"
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 单元数 */}
              <div>
                <label className="text-sm text-gray-700 mb-2 block">单元数</label>
                <div className="flex items-center">
                  <button 
                    onClick={decrementUnitCount}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l hover:bg-gray-50"
                    disabled={addFormData.unitCount === 0}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input 
                    type="number"
                    value={addFormData.unitCount}
                    onChange={(e) => setAddFormData({ ...addFormData, unitCount: Math.max(0, Number(e.target.value) || 0) })}
                    className="flex-1 px-4 py-2 border-y border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button 
                    onClick={incrementUnitCount}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r hover:bg-gray-50"
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 备注 */}
              <div>
                <label className="text-sm text-gray-700 mb-2 block">备注</label>
                <textarea 
                  value={addFormData.remark}
                  onChange={(e) => setAddFormData({ ...addFormData, remark: e.target.value })}
                  placeholder="请输入备注"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 p-4 border-t">
              <button 
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
                onClick={() => setShowAddModal(false)}
              >
                取消
              </button>
              <button 
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSaveAdd}
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 编辑弹窗 */}
      {showEditModal && editingCommunity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[450px]">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-bold text-gray-800">编辑</h3>
              <button 
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => setShowEditModal(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              {/* 小区名称 */}
              <div>
                <label className="flex items-center text-sm text-gray-700 mb-2">
                  <span className="text-red-500 mr-1">*</span>小区名称
                </label>
                <input 
                  type="text"
                  value={editingCommunity.name}
                  onChange={(e) => setEditingCommunity({ ...editingCommunity, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 所属道路 */}
              <div>
                <label className="flex items-center text-sm text-gray-700 mb-2">
                  <span className="text-red-500 mr-1">*</span>所属道路
                </label>
                <input 
                  type="text"
                  value={editingCommunity.road}
                  onChange={(e) => setEditingCommunity({ ...editingCommunity, road: e.target.value })}
                  placeholder="请输入所属道路"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 楼栋数 */}
              <div>
                <label className="text-sm text-gray-700 mb-2 block">楼栋数</label>
                <div className="flex items-center">
                  <button 
                    onClick={decrementEditBuildingCount}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l hover:bg-gray-50"
                    disabled={editingCommunity.buildingCount === 0}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input 
                    type="number"
                    value={editingCommunity.buildingCount}
                    onChange={(e) => setEditingCommunity({ ...editingCommunity, buildingCount: Math.max(0, Number(e.target.value) || 0) })}
                    className="flex-1 px-4 py-2 border-y border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button 
                    onClick={incrementEditBuildingCount}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r hover:bg-gray-50"
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 单元数 */}
              <div>
                <label className="text-sm text-gray-700 mb-2 block">单元数</label>
                <div className="flex items-center">
                  <button 
                    onClick={decrementEditUnitCount}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l hover:bg-gray-50"
                    disabled={editingCommunity.unitCount === 0}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input 
                    type="number"
                    value={editingCommunity.unitCount}
                    onChange={(e) => setEditingCommunity({ ...editingCommunity, unitCount: Math.max(0, Number(e.target.value) || 0) })}
                    className="flex-1 px-4 py-2 border-y border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button 
                    onClick={incrementEditUnitCount}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r hover:bg-gray-50"
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 备注 */}
              <div>
                <label className="text-sm text-gray-700 mb-2 block">备注</label>
                <textarea 
                  value={editingCommunity.remark}
                  onChange={(e) => setEditingCommunity({ ...editingCommunity, remark: e.target.value })}
                  placeholder="请输入备注"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 p-4 border-t">
              <button 
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
                onClick={() => setShowEditModal(false)}
              >
                取消
              </button>
              <button 
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSaveEdit}
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 删除确认弹窗 */}
      {showDeleteModal && selectedCommunity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[360px]">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-bold text-gray-800">删除</h3>
              <button 
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => setShowDeleteModal(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 flex items-center gap-4">
              <AlertCircle className="w-10 h-10 text-yellow-500 flex-shrink-0" />
              <span className="text-gray-700">请确认是否删除？</span>
            </div>
            <div className="flex justify-end gap-3 p-4 border-t">
              <button 
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
                onClick={() => setShowDeleteModal(false)}
              >
                取消
              </button>
              <button 
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleConfirmDelete}
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

export default CommunityManagement;
