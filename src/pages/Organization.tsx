import React, { useState } from 'react';
import { Camera, Save } from 'lucide-react';

const Organization: React.FC = () => {
  const [formData, setFormData] = useState({
    id: '1981257658000502786',
    name: '南光社区',
    location: '深圳市南山区南山街道',
    privacyAgreement: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log('保存组织信息', formData);
  };

  return (
    <div className="p-5">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 space-y-6">
          {/* 组织ID */}
          <div className="flex items-start gap-4">
            <label className="w-32 text-sm font-medium text-gray-700 pt-2">
              <span className="text-red-500 mr-1">*</span>组织ID
            </label>
            <div className="flex-1">
              <input
                type="text"
                value={formData.id}
                onChange={(e) => handleChange('id', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100"
                readOnly
              />
              <input
                type="text"
                value={formData.id}
                onChange={(e) => handleChange('id', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
              />
            </div>
          </div>

          {/* 组织logo */}
          <div className="flex items-start gap-4">
            <label className="w-32 text-sm font-medium text-gray-700 pt-2">组织logo</label>
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <div className="w-32 h-16 border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center hover:border-blue-400 cursor-pointer transition-colors">
                  <Camera className="h-6 w-6 text-gray-400 mb-1" />
                  <span className="text-xs text-gray-400">上传图片</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">用于设置工作台内所展示的组织LOGO</p>
                  <p className="text-xs text-gray-400 mt-1">支持上传gif、png、jpg、jpeg格式，最大支持3M</p>
                  <p className="text-xs text-gray-400">最佳尺寸：400 X 110</p>
                </div>
              </div>
            </div>
          </div>

          {/* 组织名称 */}
          <div className="flex items-start gap-4">
            <label className="w-32 text-sm font-medium text-gray-700 pt-2">
              <span className="text-red-500 mr-1">*</span>组织名称
            </label>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">组织名称</p>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* 组织所在地 */}
          <div className="flex items-start gap-4">
            <label className="w-32 text-sm font-medium text-gray-700 pt-2">组织所在地</label>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">组织所在地</p>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* 隐私协议 */}
          <div className="flex items-start gap-4">
            <label className="w-32 text-sm font-medium text-gray-700 pt-2">隐私协议</label>
            <div className="flex-1">
              <textarea
                value={formData.privacyAgreement}
                onChange={(e) => handleChange('privacyAgreement', e.target.value)}
                className="w-full h-64 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                placeholder="请输入隐私协议内容"
              />
            </div>
          </div>
        </div>

        {/* 底部按钮 */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
          >
            <Save className="h-4 w-4" />
            保存
          </button>
        </div>
      </div>
    </div>
  );
};

export default Organization;
