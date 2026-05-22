import React, { useState } from 'react';
import { Download, ArrowLeft } from 'lucide-react';

interface Elder {
  id: number;
  name: string;
  phone: string;
  gender: string;
  age: number;
  address: string;
  lastCheckup: string;
  status: string;
  socialWorker: string;
}

interface ElderDetail {
  id: number;
  name: string;
  gender: string;
  phone: string;
  birthDate: string;
  age: number;
  nation: string;
  personType: string;
  idType: string;
  idNumber: string;
  maritalStatus: string;
  isResident: string;
  address: string;
  housingCode: string;
  community: string;
  deathDate: string;
  socialWorker: string;
  elderStatus: string;
  boundWatch: string;
  waterBox: string;
  electricBox: string;
  smokeSensor: string;
}

const ElderProfile: React.FC = () => {
  const [elders] = useState<Elder[]>([
    { id: 1, name: '戚道琳', phone: '18118841215', gender: '女', age: 83, address: '广东省深圳市南山区南...', lastCheckup: '-', status: '-', socialWorker: '-' },
    { id: 2, name: '李国安', phone: '13724393668', gender: '男', age: 71, address: '广东省深圳市南山区南...', lastCheckup: '-', status: '-', socialWorker: '-' },
    { id: 3, name: '邹亚锋', phone: '13500056726', gender: '男', age: 92, address: '广东省深圳市南山区南...', lastCheckup: '-', status: '-', socialWorker: '-' },
    { id: 4, name: '肖凤君', phone: '13924661027', gender: '女', age: 66, address: '广东省深圳市南山区南...', lastCheckup: '-', status: '-', socialWorker: '-' },
    { id: 5, name: '贾羽坤', phone: '18847558869', gender: '女', age: 72, address: '广东省深圳市南山区南...', lastCheckup: '-', status: '-', socialWorker: '-' },
    { id: 6, name: '张启哲', phone: '13847509264', gender: '男', age: 75, address: '广东省深圳市南山区南...', lastCheckup: '-', status: '-', socialWorker: '-' },
    { id: 7, name: '王银', phone: '18123728369', gender: '女', age: 70, address: '广东省深圳市南山区南...', lastCheckup: '-', status: '-', socialWorker: '-' },
    { id: 8, name: '黄大兴', phone: '13145946850', gender: '男', age: 66, address: '广东省深圳市南山区南...', lastCheckup: '-', status: '-', socialWorker: '-' },
    { id: 9, name: '李庆兰', phone: '18865319399', gender: '女', age: 68, address: '广东省深圳市南山区南...', lastCheckup: '-', status: '-', socialWorker: '-' },
    { id: 10, name: '王德省', phone: '15174474986', gender: '男', age: 74, address: '广东省深圳市南山区南...', lastCheckup: '-', status: '-', socialWorker: '-' },
    { id: 11, name: 'WAI CHUN CHENG', phone: '15899850894', gender: '女', age: 71, address: '广东省深圳市南山区南...', lastCheckup: '-', status: '-', socialWorker: '-' },
    { id: 12, name: '李楠', phone: '15536080868', gender: '男', age: 86, address: '广东省深圳市南山区南...', lastCheckup: '-', status: '-', socialWorker: '-' },
    { id: 13, name: '梁慧英', phone: '15513080868', gender: '女', age: 82, address: '广东省深圳市南山区南...', lastCheckup: '-', status: '-', socialWorker: '-' },
    { id: 14, name: '腾树英', phone: '13808805309', gender: '女', age: 69, address: '广东省深圳市南山区南...', lastCheckup: '-', status: '-', socialWorker: '-' },
    { id: 15, name: '李声桂', phone: '18818680980', gender: '女', age: 81, address: '广东省深圳市南山区南...', lastCheckup: '-', status: '-', socialWorker: '-' },
    { id: 16, name: '潘月芳', phone: '13401235556', gender: '女', age: 65, address: '广东省深圳市南山区南...', lastCheckup: '-', status: '-', socialWorker: '-' },
    { id: 17, name: '黄胜', phone: '13411301444', gender: '男', age: 70, address: '广东省深圳市南山区南...', lastCheckup: '-', status: '-', socialWorker: '-' },
  ]);

  const [searchName, setSearchName] = useState('');
  const [searchWorker, setSearchWorker] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(20);
  
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [currentElder, setCurrentElder] = useState<ElderDetail | null>(null);
  const [activeNav, setActiveNav] = useState('other');
  
  const getElderDetail = (id: number): ElderDetail => {
    return {
      id,
      name: '戚道琳',
      gender: '女',
      phone: '18118841215',
      birthDate: '1942-05-24',
      age: 83,
      nation: '汉族',
      personType: '高龄老人',
      idType: '身份证',
      idNumber: '320106194205242828',
      maritalStatus: '已婚',
      isResident: '是',
      address: '广东省深圳市南山区南山街道南光社区南山大道1136号光彩新世纪家园A.B.C栋C2201',
      housingCode: '4403050020070200001000473',
      community: '南光社区',
      deathDate: '-',
      socialWorker: '-',
      elderStatus: '-',
      boundWatch: '863225051124468',
      waterBox: '鸿瑞花园12栋801',
      electricBox: '南光村91号503',
      smokeSensor: '鸿瑞花园12栋801'
    };
  };

  const totalCount = 3338;
  const totalPages = Math.ceil(totalCount / pageSize);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  
  const handleDetail = (id: number) => {
    setCurrentElder(getElderDetail(id));
    setActiveNav('other');
    setShowDetailModal(true);
  };
  
  const handleDownloadProfile = () => {
    console.log('下载档案');
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex gap-4 mb-6 items-center justify-between">
        <div className="flex gap-6 items-center">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">姓名</label>
            <input
              type="text"
              placeholder="请输入"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-48 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">对接社工</label>
            <input
              type="text"
              placeholder="请输入"
              value={searchWorker}
              onChange={(e) => setSearchWorker(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-48 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            搜索
          </button>
          <button className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            重置
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-16">序号</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">姓名</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">联系方式</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">性别</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-16">年龄</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">居住地址</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">最近一次健康体检时间</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">长者状态</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">对接社工</th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium w-16">操作</th>
            </tr>
          </thead>
          <tbody>
            {elders.map((elder, index) => (
              <tr key={elder.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-500">{index + 1}</td>
                <td className="py-3 px-4 text-gray-800">{elder.name}</td>
                <td className="py-3 px-4 text-gray-800">{elder.phone}</td>
                <td className="py-3 px-4 text-gray-800">{elder.gender}</td>
                <td className="py-3 px-4 text-gray-800">{elder.age}</td>
                <td className="py-3 px-4 text-gray-800 truncate max-w-xs">{elder.address}</td>
                <td className="py-3 px-4 text-gray-500">{elder.lastCheckup}</td>
                <td className="py-3 px-4 text-gray-500">{elder.status}</td>
                <td className="py-3 px-4 text-gray-500">{elder.socialWorker}</td>
                <td className="py-3 px-4">
                  <button 
                    onClick={() => handleDetail(elder.id)}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    详情
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="text-gray-600">共 {totalCount} 条</div>
        <div className="flex items-center gap-2">
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option>20条/页</option>
            <option>50条/页</option>
            <option>100条/页</option>
          </select>
          <button 
            className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed" 
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded">1</button>
          <button className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">2</button>
          <button className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">3</button>
          <button className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">4</button>
          <button className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">5</button>
          <button className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">6</button>
          <span className="text-gray-400">...</span>
          <button className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">167</button>
          <button 
            className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed" 
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <span className="ml-2 text-gray-600">前往</span>
          <input
            type="number"
            className="w-16 border border-gray-300 rounded px-2 py-1 text-center text-sm"
            value={currentPage}
            onChange={(e) => {
              const page = parseInt(e.target.value) || 1;
              if (page >= 1 && page <= totalPages) {
                setCurrentPage(page);
              }
            }}
          />
          <span className="text-gray-600">页</span>
        </div>
      </div>

      {showDetailModal && currentElder && (
        <div className="fixed inset-0 z-[100] bg-gray-100">
          <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-[102]">
            <div className="flex items-center justify-between px-6 py-3">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <h1 className="text-lg font-semibold text-gray-800">详情</h1>
                <span className="text-gray-400 text-sm">长者档案 &gt; 列表 &gt; 详情</span>
              </div>
              <button
                onClick={handleDownloadProfile}
                className="flex items-center gap-1.5 px-4 py-2 bg-teal-500 text-white rounded text-sm hover:bg-teal-600 transition-colors"
              >
                <Download className="h-4 w-4" />
                下载档案
              </button>
            </div>
          </div>
          
          <div className="flex h-screen pt-14">
            <div className="fixed left-0 top-14 bottom-0 w-48 bg-gray-50 border-r border-gray-200 z-[101] overflow-y-auto">
              <div className="py-4">
                <div 
                  className="flex items-center gap-2 py-2 px-4 cursor-pointer"
                  onClick={() => setActiveNav('basic')}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${activeNav === 'basic' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                  <span className={`text-sm ${activeNav === 'basic' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>
                    基本信息
                  </span>
                </div>
                <div className="ml-3 w-0.5 h-3 bg-gray-300"></div>
                
                <div 
                  className="flex items-center gap-2 py-2 px-4 cursor-pointer"
                  onClick={() => setActiveNav('community')}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${activeNav === 'community' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                  <span className={`text-sm ${activeNav === 'community' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>
                    社区信息
                  </span>
                </div>
                <div className="ml-3 w-0.5 h-3 bg-gray-300"></div>
                
                <div 
                  className="flex items-center gap-2 py-2 px-4 cursor-pointer"
                  onClick={() => setActiveNav('device')}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${activeNav === 'device' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                  <span className={`text-sm ${activeNav === 'device' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>
                    关联设备
                  </span>
                </div>
                <div className="ml-3 w-0.5 h-3 bg-gray-300"></div>
                
                <div 
                  className="flex items-center gap-2 py-2 px-4 cursor-pointer"
                  onClick={() => setActiveNav('health')}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${activeNav === 'health' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                  <span className={`text-sm ${activeNav === 'health' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>
                    关联体检数据
                  </span>
                </div>
                <div className="ml-3 w-0.5 h-3 bg-gray-300"></div>
                
                <div 
                  className="flex items-center gap-2 py-2 px-4 cursor-pointer"
                  onClick={() => setActiveNav('other')}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${activeNav === 'other' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                  <span className={`text-sm ${activeNav === 'other' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>
                    其他信息
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 ml-48 overflow-y-auto p-6">
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-blue-600 mb-6">基本信息</h2>
                  
                  <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div className="w-16 h-16 bg-blue-100 rounded flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="pt-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-gray-800">{currentElder.name}</span>
                        <span className="px-1.5 py-0.5 bg-red-100 text-red-600 text-xs rounded">{currentElder.gender}</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">联系方式: {currentElder.phone}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-8">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-gray-400 text-sm w-20 shrink-0">出生日期:</span>
                        <span className="text-gray-700 text-sm">{currentElder.birthDate}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 text-sm w-20 shrink-0">年　　龄:</span>
                        <span className="text-gray-700 text-sm">{currentElder.age}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 text-sm w-20 shrink-0">民　　族:</span>
                        <span className="text-gray-700 text-sm">{currentElder.nation}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 text-sm w-20 shrink-0">人员类型:</span>
                        <span className="text-gray-700 text-sm">{currentElder.personType}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-gray-400 text-sm w-20 shrink-0">证件类型:</span>
                        <span className="text-gray-700 text-sm">{currentElder.idType}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 text-sm w-20 shrink-0">身份证号:</span>
                        <span className="text-gray-700 text-sm">{currentElder.idNumber}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 text-sm w-20 shrink-0">婚姻状况:</span>
                        <span className="text-gray-700 text-sm">{currentElder.maritalStatus}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 text-sm w-20 shrink-0">是否常住人员:</span>
                        <span className="text-gray-700 text-sm">{currentElder.isResident}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-gray-400 text-sm w-20 shrink-0">居住地址:</span>
                        <span className="text-gray-700 text-sm">{currentElder.address}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 text-sm w-20 shrink-0">房屋编码:</span>
                        <span className="text-gray-700 text-sm">{currentElder.housingCode}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 text-sm w-20 shrink-0">社　　区:</span>
                        <span className="text-gray-700 text-sm">{currentElder.community}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 text-sm w-20 shrink-0">死亡日期:</span>
                        <span className="text-gray-700 text-sm">{currentElder.deathDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border-t border-gray-200">
                  <h2 className="text-lg font-semibold text-blue-600 mb-4">社区信息</h2>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex items-start">
                      <span className="text-gray-400 text-sm w-20 shrink-0">对接社工:</span>
                      <span className="text-gray-700 text-sm">{currentElder.socialWorker}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-400 text-sm w-20 shrink-0">长者状态:</span>
                      <span className="text-gray-700 text-sm">{currentElder.elderStatus}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border-t border-gray-200">
                  <h2 className="text-lg font-semibold text-blue-600 mb-4">关联设备</h2>
                  <div className="grid grid-cols-3 gap-8">
                    <div className="flex items-start">
                      <span className="text-gray-400 text-sm w-28 shrink-0">绑定手环:</span>
                      <span className="text-gray-700 text-sm">{currentElder.boundWatch}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-400 text-sm w-28 shrink-0">远程动态用水盒:</span>
                      <span className="text-gray-700 text-sm">{currentElder.waterBox}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-400 text-sm w-28 shrink-0">远程动态用电盒:</span>
                      <span className="text-gray-700 text-sm">{currentElder.electricBox}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-400 text-sm w-28 shrink-0">智能人体感应无线烟感器:</span>
                      <span className="text-gray-700 text-sm">{currentElder.smokeSensor}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border-t border-gray-200">
                  <h2 className="text-lg font-semibold text-blue-600">健康体检数据（最近一次检测日期：-）</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ElderProfile;