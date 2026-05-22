import React, { useState } from 'react';
import { Search, RefreshCw, Plus, X, AlertCircle } from 'lucide-react';

const Merchants: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [formData, setFormData] = useState({
    name: '',
    contact: ''
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const [showDisableModal, setShowDisableModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const [editingMerchant, setEditingMerchant] = useState<any>(null);
  const [selectedMerchant, setSelectedMerchant] = useState<any>(null);
  
  const [addFormData, setAddFormData] = useState({
    shopName: '',
    address: '',
    contactName: '',
    phone: '',
    status: true
  });

  const merchants = [
    { id: 1, name: '奕睿烟酒', address: '南光村42-1', contactName: '王双梅', phone: '136****9211', status: '启用' },
    { id: 2, name: '粤汤府专业炖汤', address: '深圳市南山区南山街道南光社区正龙村4...', contactName: '蔡成基', phone: '187****7404', status: '启用' },
    { id: 3, name: '雅之都专业美发', address: '深圳市南山区海德二道南光村105号-5', contactName: '王思敏', phone: '137****7774', status: '启用' },
    { id: 4, name: '淘书乐二手书店', address: '深圳市南山区海德二道南光村104号一楼...', contactName: '谢林涛', phone: '133****1088', status: '启用' },
    { id: 5, name: '华兴家电维修服务部', address: '深圳市南山区海德二道南光村104号104室', contactName: '张建营', phone: '136****5419', status: '启用' },
    { id: 6, name: '尚阳广告', address: '深圳市南山区海德二道426号104号', contactName: '高云祥', phone: '138****1289', status: '启用' },
    { id: 7, name: '和信达家政', address: '南光花园4栋104', contactName: '王鑫', phone: '132****1177', status: '启用' },
    { id: 8, name: '爱巢家居家电', address: '南光花园3栋101', contactName: '雪丰玺', phone: '189****7027', status: '启用' },
    { id: 9, name: '深圳市良丰速递有限公司', address: '南光花园2栋104', contactName: '石中坚', phone: '137****8300', status: '启用' },
    { id: 10, name: '鹏歌音乐中心', address: '南光花园2栋101', contactName: '潘桂钊', phone: '137****6852', status: '启用' },
    { id: 11, name: '养生鼎', address: '南光村102-3', contactName: '温惠慈', phone: '136****5345', status: '启用' },
    { id: 12, name: '老式麻辣烫', address: '103栋104', contactName: '高亚军', phone: '155****7990', status: '启用' },
    { id: 13, name: '疯狂烤吧', address: '南光村98-1', contactName: '谭名高', phone: '131****9938', status: '启用' },
    { id: 14, name: '潮丰传统理发店', address: '南光村98-2', contactName: '陈思源', phone: '133****1755', status: '启用' },
    { id: 15, name: '每天惠家万富超市', address: '南光村43-4', contactName: '傅海云', phone: '135****2989', status: '启用' },
    { id: 16, name: '亨通五金', address: '南光村43-3', contactName: '乐绍端', phone: '136****2754', status: '启用' },
    { id: 17, name: '日月图文广告', address: '南光村43-2', contactName: '欧新华', phone: '135****6880', status: '启用' },
  ];

  const handleSearch = () => {
    console.log('搜索', formData);
  };

  const handleReset = () => {
    setFormData({ name: '', contact: '' });
  };

  const handleAdd = () => {
    setAddFormData({
      shopName: '',
      address: '',
      contactName: '',
      phone: '',
      status: true
    });
    setShowAddModal(true);
  };

  const handleEdit = (merchant: any) => {
    setEditingMerchant(merchant);
    setShowEditModal(true);
  };

  const handleDisable = (merchant: any) => {
    setSelectedMerchant(merchant);
    setShowDisableModal(true);
  };

  const handleDelete = (merchant: any) => {
    setSelectedMerchant(merchant);
    setShowDeleteModal(true);
  };

  const handleSaveAdd = () => {
    alert(`新增商户成功！\n商铺名称: ${addFormData.shopName}\n商户地址: ${addFormData.address}\n联系人: ${addFormData.contactName}\n联系电话: ${addFormData.phone}\n状态: ${addFormData.status ? '启用' : '禁用'}`);
    setShowAddModal(false);
  };

  const handleSaveEdit = () => {
    alert(`编辑商户成功！\n商铺名称: ${editingMerchant.name}\n商户地址: ${editingMerchant.address}\n联系人: ${editingMerchant.contactName}\n联系电话: ${editingMerchant.phone}`);
    setShowEditModal(false);
  };

  const handleConfirmDisable = () => {
    alert(`已禁用商户: ${selectedMerchant.name}`);
    setShowDisableModal(false);
    setSelectedMerchant(null);
  };

  const handleConfirmDelete = () => {
    alert(`已删除商户: ${selectedMerchant.name}`);
    setShowDeleteModal(false);
    setSelectedMerchant(null);
  };

  return (
    <div className="p-5">
      {/* 搜索区域 */}
      <div className="bg-white rounded-t-lg p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">商铺名称</span>
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
              <span className="text-sm text-gray-600">联系人名称</span>
              <input
                type="text"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
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
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">商铺名称</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">商户地址</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">联系人名称</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">联系电话</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">状态</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">操作</th>
              </tr>
            </thead>
            <tbody>
              {merchants.map((item, idx) => (
                <tr key={item.id} className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{idx + 1}</td>
                  <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">{item.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.address}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.contactName}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.phone}</td>
                  <td className="px-4 py-3 text-sm border-b border-gray-200">
                    <span className="px-2 py-1 bg-teal-100 text-teal-600 rounded text-xs">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleDisable(item)}
                        className="text-blue-500 hover:text-blue-700 cursor-pointer"
                      >禁用</button>
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
          <span className="text-sm text-gray-600">共 198 条</span>
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
            {[1, 2, 3, 4, 5, 6, '...', 10].map((page, idx) => (
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
              {/* 商铺名称 */}
              <div>
                <label className="flex items-center text-sm text-gray-700 mb-2">
                  <span className="text-red-500 mr-1">*</span>商铺名称
                </label>
                <input 
                  type="text"
                  value={addFormData.shopName}
                  onChange={(e) => setAddFormData({ ...addFormData, shopName: e.target.value })}
                  placeholder="请输入"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 商户地址 */}
              <div>
                <label className="text-sm text-gray-700 mb-2 block">商户地址</label>
                <input 
                  type="text"
                  value={addFormData.address}
                  onChange={(e) => setAddFormData({ ...addFormData, address: e.target.value })}
                  placeholder="请输入"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 联系人名称 */}
              <div>
                <label className="flex items-center text-sm text-gray-700 mb-2">
                  <span className="text-red-500 mr-1">*</span>联系人名称
                </label>
                <input 
                  type="text"
                  value={addFormData.contactName}
                  onChange={(e) => setAddFormData({ ...addFormData, contactName: e.target.value })}
                  placeholder="请输入"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 联系电话 */}
              <div>
                <label className="text-sm text-gray-700 mb-2 block">联系电话</label>
                <input 
                  type="text"
                  value={addFormData.phone}
                  onChange={(e) => setAddFormData({ ...addFormData, phone: e.target.value })}
                  placeholder="请输入"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 状态 */}
              <div>
                <label className="text-sm text-gray-700 mb-2 block">状态</label>
                <button 
                  onClick={() => setAddFormData({ ...addFormData, status: !addFormData.status })}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    addFormData.status ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    addFormData.status ? 'translate-x-7' : 'translate-x-1'
                  }`} />
                </button>
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
      {showEditModal && editingMerchant && (
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
              {/* 商铺名称 */}
              <div>
                <label className="flex items-center text-sm text-gray-700 mb-2">
                  <span className="text-red-500 mr-1">*</span>商铺名称
                </label>
                <input 
                  type="text"
                  value={editingMerchant.name}
                  onChange={(e) => setEditingMerchant({ ...editingMerchant, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 商户地址 */}
              <div>
                <label className="text-sm text-gray-700 mb-2 block">商户地址</label>
                <input 
                  type="text"
                  value={editingMerchant.address}
                  onChange={(e) => setEditingMerchant({ ...editingMerchant, address: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 联系人名称 */}
              <div>
                <label className="flex items-center text-sm text-gray-700 mb-2">
                  <span className="text-red-500 mr-1">*</span>联系人名称
                </label>
                <input 
                  type="text"
                  value={editingMerchant.contactName}
                  onChange={(e) => setEditingMerchant({ ...editingMerchant, contactName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 联系电话 */}
              <div>
                <label className="text-sm text-gray-700 mb-2 block">联系电话</label>
                <input 
                  type="text"
                  value={editingMerchant.phone}
                  onChange={(e) => setEditingMerchant({ ...editingMerchant, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 状态 */}
              <div>
                <label className="text-sm text-gray-700 mb-2 block">状态</label>
                <button 
                  onClick={() => setEditingMerchant({ ...editingMerchant, status: editingMerchant.status === '启用' ? '禁用' : '启用' })}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    editingMerchant.status === '启用' ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    editingMerchant.status === '启用' ? 'translate-x-7' : 'translate-x-1'
                  }`} />
                </button>
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

      {/* 禁用确认弹窗 */}
      {showDisableModal && selectedMerchant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[360px]">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-bold text-gray-800">禁用</h3>
              <button 
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => setShowDisableModal(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 flex items-center gap-4">
              <AlertCircle className="w-10 h-10 text-yellow-500 flex-shrink-0" />
              <span className="text-gray-700">确定禁用您所选的数据？</span>
            </div>
            <div className="flex justify-end gap-3 p-4 border-t">
              <button 
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
                onClick={() => setShowDisableModal(false)}
              >
                取消
              </button>
              <button 
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleConfirmDisable}
              >
                确定
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 删除确认弹窗 */}
      {showDeleteModal && selectedMerchant && (
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

export default Merchants;
