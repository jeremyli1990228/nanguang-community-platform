import React, { useState } from 'react';
import { Search, RefreshCw, Plus, X, AlertCircle } from 'lucide-react';

const EnterpriseManagement: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [searchFormData, setSearchFormData] = useState({
    name: ''
  });

  // 弹窗状态
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // 当前操作的企业
  const [currentEnterprise, setCurrentEnterprise] = useState<any>(null);

  // 新增表单数据
  const [addFormData, setAddFormData] = useState({
    name: '',
    legalRep: '',
    phone: '',
    address: '',
    building: '',
    buildingCode: '',
    floor: '',
    houseNumber: '',
    establishDate: '',
    remark: ''
  });

  // 编辑表单数据
  const [editFormData, setEditFormData] = useState({
    name: '',
    legalRep: '',
    phone: '',
    address: '',
    building: '',
    buildingCode: '',
    floor: '',
    houseNumber: '',
    establishDate: '',
    remark: ''
  });

  const enterprises = [
    { id: 1, name: '俊逸', legalRep: '兰立红', phone: '189****4619', address: '深圳市南山区蛇...', building: '南光路156-1', buildingCode: '-', floor: '2', houseNumber: '-', establishDate: '2017-04-10', remark: '-' },
    { id: 2, name: '自然之声助听器', legalRep: '杜巧梅', phone: '176****3070', address: '山东省日照市莒...', building: '海王大厦A座', buildingCode: '-', floor: '6', houseNumber: '-', establishDate: '2022-08-15', remark: '-' },
    { id: 3, name: 'dyna', legalRep: '-', phone: '-', address: '-', building: '海王大厦A座', buildingCode: '-', floor: '5', houseNumber: '-', establishDate: '-', remark: '-' },
    { id: 4, name: '同步齿科', legalRep: '侯雪川', phone: '075****4671', address: '深圳市南山区南...', building: '海王大厦A座', buildingCode: '-', floor: '9', houseNumber: '-', establishDate: '2015-09-08', remark: '-' },
    { id: 5, name: '东熙明白发转黑', legalRep: '马艺平', phone: '186****4646', address: '辽阳市文圣区三...', building: '海王大厦A座', buildingCode: '-', floor: '14', houseNumber: '-', establishDate: '2012-05-15', remark: '-' },
    { id: 6, name: '优乐音乐世界', legalRep: '-', phone: '-', address: '-', building: '海王大厦A座', buildingCode: '-', floor: '8', houseNumber: '-', establishDate: '-', remark: '-' },
    { id: 7, name: 'y-y拳道能', legalRep: '-', phone: '-', address: '-', building: '海王大厦A座', buildingCode: '-', floor: '8', houseNumber: '-', establishDate: '-', remark: '-' },
    { id: 8, name: '深圳市得禧文化科...', legalRep: '胡珊珊', phone: '158****8028', address: '深圳市南山区南...', building: '海王大厦A座', buildingCode: '-', floor: '9', houseNumber: '-', establishDate: '2016-12-26', remark: '-' },
    { id: 9, name: '海王大元草', legalRep: '许薇', phone: '075****2709', address: '深圳市南山区南...', building: '海王大厦A座', buildingCode: '-', floor: '7', houseNumber: '-', establishDate: '2020-05-22', remark: '-' },
    { id: 10, name: '信睿维思德', legalRep: '许艳红', phone: '138****4353', address: '深圳市南山区南...', building: '海王大厦A座', buildingCode: '-', floor: '14', houseNumber: '-', establishDate: '2011-02-16', remark: '-' },
    { id: 11, name: '菲拜斯特贸易（深...', legalRep: 'EVSEEVA NATALIA', phone: '-', address: '深圳市南山区南...', building: '海王大厦A座', buildingCode: '-', floor: '16', houseNumber: '-', establishDate: '2020-03-27', remark: '-' },
    { id: 12, name: '证券事务', legalRep: '丁瑞鸣', phone: '-', address: '成都市*******', building: '海王大厦A座', buildingCode: '-', floor: '17', houseNumber: '-', establishDate: '1993-09-22', remark: '-' },
    { id: 13, name: '太洋电机产业株式...', legalRep: '苏德强', phone: '-', address: '深圳市南山区南...', building: '海王大厦A座', buildingCode: '-', floor: '16', houseNumber: '-', establishDate: '2009-07-02', remark: '-' },
    { id: 14, name: '深圳厚德载福美好...', legalRep: '陈明新', phone: '-', address: '深圳市南山区南...', building: '海王大厦A座', buildingCode: '-', floor: '16', houseNumber: '-', establishDate: '2023-03-15', remark: '-' },
    { id: 15, name: '鲲鹏顾问', legalRep: '-', phone: '-', address: '-', building: '海王大厦A座', buildingCode: '-', floor: '16', houseNumber: '-', establishDate: '-', remark: '-' },
    { id: 16, name: '福加德面粉工业深...', legalRep: '-', phone: '-', address: '-', building: '海王大厦A座', buildingCode: '-', floor: '16', houseNumber: '-', establishDate: '-', remark: '-' },
    { id: 17, name: '深圳市康健顺国际...', legalRep: '白冰川', phone: '189****5189', address: '深圳市南山区南...', building: '海王大厦A座', buildingCode: '-', floor: '16', houseNumber: '-', establishDate: '2017-01-05', remark: '-' },
  ];

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
      legalRep: '',
      phone: '',
      address: '',
      building: '',
      buildingCode: '',
      floor: '',
      houseNumber: '',
      establishDate: '',
      remark: ''
    });
    setShowAddModal(true);
  };

  const handleAddSave = () => {
    console.log('保存新增', addFormData);
    setShowAddModal(false);
  };

  // 编辑处理
  const handleEdit = (enterprise: any) => {
    setCurrentEnterprise(enterprise);
    setEditFormData({
      name: enterprise.name,
      legalRep: enterprise.legalRep,
      phone: enterprise.phone,
      address: enterprise.address,
      building: enterprise.building,
      buildingCode: enterprise.buildingCode,
      floor: enterprise.floor,
      houseNumber: enterprise.houseNumber,
      establishDate: enterprise.establishDate,
      remark: enterprise.remark
    });
    setShowEditModal(true);
  };

  const handleEditSave = () => {
    console.log('保存编辑', editFormData);
    setShowEditModal(false);
  };

  // 删除处理
  const handleDelete = (enterprise: any) => {
    setCurrentEnterprise(enterprise);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    console.log('确认删除', currentEnterprise);
    setShowDeleteModal(false);
  };

  return (
    <div className="p-5">
      {/* 搜索区域 */}
      <div className="bg-white rounded-t-lg p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">企业名称</span>
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
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">企业名称</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">法人代表</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">联系电话</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">地址</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">楼栋名称</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">楼栋编码</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">楼层</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">房屋编号</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">成立日期</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">备注</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody>
              {enterprises.map((item, idx) => (
                <tr key={item.id} className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{idx + 1}</td>
                  <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">{item.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.legalRep}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.phone}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.address}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.building}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.buildingCode}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.floor}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.houseNumber}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.establishDate}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.remark}</td>
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
          <span className="text-sm text-gray-600">共 2304 条</span>
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
            {[1, 2, 3, 4, 5, 6, '...', 116].map((page, idx) => (
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
                  <span className="text-red-500">*</span>企业名称
                </label>
                <input
                  type="text"
                  value={addFormData.name}
                  onChange={(e) => setAddFormData({ ...addFormData, name: e.target.value })}
                  placeholder="请输入企业名称"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">法人代表</label>
                <input
                  type="text"
                  value={addFormData.legalRep}
                  onChange={(e) => setAddFormData({ ...addFormData, legalRep: e.target.value })}
                  placeholder="请输入法人代表"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">联系电话</label>
                <input
                  type="text"
                  value={addFormData.phone}
                  onChange={(e) => setAddFormData({ ...addFormData, phone: e.target.value })}
                  placeholder="请输入联系电话"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">地址</label>
                <input
                  type="text"
                  value={addFormData.address}
                  onChange={(e) => setAddFormData({ ...addFormData, address: e.target.value })}
                  placeholder="请输入地址"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">楼栋名称</label>
                <input
                  type="text"
                  value={addFormData.building}
                  onChange={(e) => setAddFormData({ ...addFormData, building: e.target.value })}
                  placeholder="请输入楼栋名称"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">楼栋编码</label>
                <input
                  type="text"
                  value={addFormData.buildingCode}
                  onChange={(e) => setAddFormData({ ...addFormData, buildingCode: e.target.value })}
                  placeholder="请输入楼栋编码"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">楼层</label>
                <input
                  type="text"
                  value={addFormData.floor}
                  onChange={(e) => setAddFormData({ ...addFormData, floor: e.target.value })}
                  placeholder="请输入楼层"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">房屋编号</label>
                <input
                  type="text"
                  value={addFormData.houseNumber}
                  onChange={(e) => setAddFormData({ ...addFormData, houseNumber: e.target.value })}
                  placeholder="请输入房屋编号"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">成立日期</label>
                <input
                  type="date"
                  value={addFormData.establishDate}
                  onChange={(e) => setAddFormData({ ...addFormData, establishDate: e.target.value })}
                  placeholder="请选择成立日期"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
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
                  <span className="text-red-500">*</span>企业名称
                </label>
                <input
                  type="text"
                  value={editFormData.name}
                  onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                  placeholder="请输入企业名称"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">法人代表</label>
                <input
                  type="text"
                  value={editFormData.legalRep}
                  onChange={(e) => setEditFormData({ ...editFormData, legalRep: e.target.value })}
                  placeholder="请输入法人代表"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">联系电话</label>
                <input
                  type="text"
                  value={editFormData.phone}
                  onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value })}
                  placeholder="请输入联系电话"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">地址</label>
                <input
                  type="text"
                  value={editFormData.address}
                  onChange={(e) => setEditFormData({ ...editFormData, address: e.target.value })}
                  placeholder="请输入地址"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">楼栋名称</label>
                <input
                  type="text"
                  value={editFormData.building}
                  onChange={(e) => setEditFormData({ ...editFormData, building: e.target.value })}
                  placeholder="请输入楼栋名称"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">楼栋编码</label>
                <input
                  type="text"
                  value={editFormData.buildingCode}
                  onChange={(e) => setEditFormData({ ...editFormData, buildingCode: e.target.value })}
                  placeholder="请输入楼栋编码"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">楼层</label>
                <input
                  type="text"
                  value={editFormData.floor}
                  onChange={(e) => setEditFormData({ ...editFormData, floor: e.target.value })}
                  placeholder="请输入楼层"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">房屋编号</label>
                <input
                  type="text"
                  value={editFormData.houseNumber}
                  onChange={(e) => setEditFormData({ ...editFormData, houseNumber: e.target.value })}
                  placeholder="请输入房屋编号"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">成立日期</label>
                <input
                  type="date"
                  value={editFormData.establishDate}
                  onChange={(e) => setEditFormData({ ...editFormData, establishDate: e.target.value })}
                  placeholder="请选择成立日期"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
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
    </div>
  );
};

export default EnterpriseManagement;
