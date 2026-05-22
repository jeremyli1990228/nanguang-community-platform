import React, { useState } from 'react';
import { Search, RefreshCw, Plus, Minus, Plus as PlusIcon, X, AlertCircle } from 'lucide-react';

const HouseManagement: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [searchFormData, setSearchFormData] = useState({
    building: '',
    houseNumber: ''
  });

  // 弹窗状态
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  // 当前操作的房屋
  const [currentHouse, setCurrentHouse] = useState<any>(null);
  
  // 新增表单数据
  const [addFormData, setAddFormData] = useState({
    houseNumber: '',
    houseType: '',
    residentCount: 0,
    status: '',
    remark: ''
  });
  
  // 编辑表单数据
  const [editFormData, setEditFormData] = useState({
    houseNumber: '',
    houseType: '',
    residentCount: 0,
    status: '',
    remark: ''
  });

  const houses = [
    { id: 1, building: '牛成村牛成路79号', houseNumber: '303', type: '一房一厅', status: '经营中' },
    { id: 2, building: '牛成村牛成路79号', houseNumber: '304', type: '一房一厅', status: '经营中' },
    { id: 3, building: '牛成村牛成路79号', houseNumber: '701', type: '一房一厅', status: '经营中' },
    { id: 4, building: '牛成村牛成路79号', houseNumber: '502', type: '单房', status: '经营中' },
    { id: 5, building: '牛成村牛成路79号', houseNumber: '601', type: '一房一厅', status: '经营中' },
    { id: 6, building: '牛成村牛成路79号', houseNumber: '301', type: '-', status: '经营中' },
    { id: 7, building: '牛成村牛成路111号', houseNumber: '101', type: '-', status: '经营中' },
    { id: 8, building: '牛成村牛成路221-5号', houseNumber: '101', type: '-', status: '经营中' },
    { id: 9, building: '牛成村牛成路221-5号', houseNumber: '115', type: '-', status: '经营中' },
    { id: 10, building: '牛成村牛成路221-5号', houseNumber: '108', type: '单房', status: '经营中' },
    { id: 11, building: '牛成村牛成路221-5号', houseNumber: '102', type: '单房', status: '经营中' },
    { id: 12, building: '牛成村牛成路221-5号', houseNumber: '110', type: '单房', status: '经营中' },
    { id: 13, building: '牛成村牛成路221-5号', houseNumber: '104', type: '单房', status: '经营中' },
    { id: 14, building: '牛成村牛成路221-5号', houseNumber: '113', type: '单房', status: '经营中' },
    { id: 15, building: '牛成村牛成路221-5号', houseNumber: '114', type: '单房', status: '经营中' },
    { id: 16, building: '牛成村牛成路221-5号', houseNumber: '105', type: '单房', status: '经营中' },
    { id: 17, building: '牛成村牛成路221-5号', houseNumber: '107', type: '单房', status: '经营中' },
  ];

  const handleSearch = () => {
    console.log('搜索', searchFormData);
  };

  const handleReset = () => {
    setSearchFormData({ building: '', houseNumber: '' });
  };

  // 新增处理
  const handleAdd = () => {
    setAddFormData({
      houseNumber: '',
      houseType: '',
      residentCount: 0,
      status: '',
      remark: ''
    });
    setShowAddModal(true);
  };

  const handleAddSave = () => {
    console.log('保存新增', addFormData);
    setShowAddModal(false);
  };

  // 编辑处理
  const handleEdit = (house: any) => {
    setCurrentHouse(house);
    setEditFormData({
      houseNumber: house.houseNumber,
      houseType: house.type,
      residentCount: 0,
      status: '0',
      remark: ''
    });
    setShowEditModal(true);
  };

  const handleEditSave = () => {
    console.log('保存编辑', editFormData);
    setShowEditModal(false);
  };

  // 删除处理
  const handleDelete = (house: any) => {
    setCurrentHouse(house);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    console.log('确认删除', currentHouse);
    setShowDeleteModal(false);
  };

  // 入住人数加减
  const incrementResidentCount = (type: 'add' | 'edit') => {
    if (type === 'add') {
      setAddFormData({ ...addFormData, residentCount: addFormData.residentCount + 1 });
    } else {
      setEditFormData({ ...editFormData, residentCount: editFormData.residentCount + 1 });
    }
  };

  const decrementResidentCount = (type: 'add' | 'edit') => {
    if (type === 'add') {
      setAddFormData({ ...addFormData, residentCount: Math.max(0, addFormData.residentCount - 1) });
    } else {
      setEditFormData({ ...editFormData, residentCount: Math.max(0, editFormData.residentCount - 1) });
    }
  };

  return (
    <div className="p-5">
      {/* 搜索区域 */}
      <div className="bg-white rounded-t-lg p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">楼栋</span>
              <input
                type="text"
                value={searchFormData.building}
                onChange={(e) => setSearchFormData({ ...searchFormData, building: e.target.value })}
                placeholder="请输入"
                className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ width: '180px' }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">房屋号</span>
              <input
                type="text"
                value={searchFormData.houseNumber}
                onChange={(e) => setSearchFormData({ ...searchFormData, houseNumber: e.target.value })}
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
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">楼栋</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">房屋号</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">房屋类型</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">状态</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody>
              {houses.map((item, idx) => (
                <tr key={item.id} className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{idx + 1}</td>
                  <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">{item.building}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.houseNumber}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.type}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.status}</td>
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
          <span className="text-sm text-gray-600">共 280964 条</span>
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
            {[1, 2, 3, 4, 5, 6, '...', 14049].map((page, idx) => (
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

      {/* 新增弹窗 */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="text-lg font-medium">添加</span>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  <span className="text-red-500">*</span>房屋号
                </label>
                <input
                  type="text"
                  value={addFormData.houseNumber}
                  onChange={(e) => setAddFormData({ ...addFormData, houseNumber: e.target.value })}
                  placeholder="请输入房屋号"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">房屋类型</label>
                <input
                  type="text"
                  value={addFormData.houseType}
                  onChange={(e) => setAddFormData({ ...addFormData, houseType: e.target.value })}
                  placeholder="请输入房屋类型"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">入住人数</label>
                <div className="flex items-center">
                  <button
                    onClick={() => decrementResidentCount('add')}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l hover:bg-gray-50"
                    disabled={addFormData.residentCount === 0}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    value={addFormData.residentCount}
                    onChange={(e) => setAddFormData({ ...addFormData, residentCount: Math.max(0, Number(e.target.value) || 0) })}
                    className="flex-1 px-4 py-2 border-y border-gray-300 text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => incrementResidentCount('add')}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r hover:bg-gray-50"
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">状态</label>
                <select
                  value={addFormData.status}
                  onChange={(e) => setAddFormData({ ...addFormData, status: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">请选择状态</option>
                  <option value="0">经营中</option>
                  <option value="1">已关闭</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">备注</label>
                <textarea
                  value={addFormData.remark}
                  onChange={(e) => setAddFormData({ ...addFormData, remark: e.target.value })}
                  placeholder="请输入备注"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
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
          <div className="bg-white rounded-lg shadow-lg w-96">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="text-lg font-medium">编辑</span>
              <button onClick={() => setShowEditModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  <span className="text-red-500">*</span>房屋号
                </label>
                <input
                  type="text"
                  value={editFormData.houseNumber}
                  onChange={(e) => setEditFormData({ ...editFormData, houseNumber: e.target.value })}
                  placeholder="请输入房屋号"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">房屋类型</label>
                <input
                  type="text"
                  value={editFormData.houseType}
                  onChange={(e) => setEditFormData({ ...editFormData, houseType: e.target.value })}
                  placeholder="请输入房屋类型"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">入住人数</label>
                <div className="flex items-center">
                  <button
                    onClick={() => decrementResidentCount('edit')}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l hover:bg-gray-50"
                    disabled={editFormData.residentCount === 0}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    value={editFormData.residentCount}
                    onChange={(e) => setEditFormData({ ...editFormData, residentCount: Math.max(0, Number(e.target.value) || 0) })}
                    className="flex-1 px-4 py-2 border-y border-gray-300 text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => incrementResidentCount('edit')}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r hover:bg-gray-50"
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">状态</label>
                <select
                  value={editFormData.status}
                  onChange={(e) => setEditFormData({ ...editFormData, status: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="0">经营中</option>
                  <option value="1">已关闭</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">备注</label>
                <textarea
                  value={editFormData.remark}
                  onChange={(e) => setEditFormData({ ...editFormData, remark: e.target.value })}
                  placeholder="请输入备注"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
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
                <span className="text-sm text-gray-700">请确认是否删除?</span>
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
    </div>
  );
};

export default HouseManagement;
