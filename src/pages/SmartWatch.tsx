import React from 'react';
import { useNavigate } from 'react-router-dom';

interface WatchData {
  id: number;
  name: string;
  age: number;
  heartRate: string;
  bloodOxygen: string;
  bloodPressure: string;
  lastUpdate: string;
  hasFall: boolean;
  hasSOS: boolean;
}

const SmartWatch: React.FC = () => {
  const navigate = useNavigate();

  const abnormalData: WatchData[] = [
    { 
      id: 1, 
      name: '张启哲', 
      age: 75, 
      heartRate: '98次/分', 
      bloodOxygen: '95%', 
      bloodPressure: '136/74mmHg', 
      lastUpdate: '2026-01-23 14:53:52',
      hasFall: false,
      hasSOS: false
    },
    { 
      id: 2, 
      name: '戚道琳', 
      age: 83, 
      heartRate: '80', 
      bloodOxygen: '-', 
      bloodPressure: '-', 
      lastUpdate: '2025-12-03 17:47:14',
      hasFall: false,
      hasSOS: false
    },
    { 
      id: 3, 
      name: '李国安', 
      age: 71, 
      heartRate: '80', 
      bloodOxygen: '-', 
      bloodPressure: '-', 
      lastUpdate: '2025-12-03 17:47:14',
      hasFall: false,
      hasSOS: false
    },
  ];

  const normalData: WatchData[] = [
    { 
      id: 4, 
      name: '邹亚锋', 
      age: 92, 
      heartRate: '-', 
      bloodOxygen: '-', 
      bloodPressure: '-', 
      lastUpdate: '',
      hasFall: false,
      hasSOS: false
    },
  ];

  const handleCardClick = (id: number) => {
    navigate(`/elder/smart-watch/detail/${id}`);
  };

  return (
    <div className="bg-white rounded-lg p-6">
      {/* 顶部按钮 */}
      <div className="flex justify-end mb-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          发送手环检测数据
        </button>
      </div>

      {/* 监测异常区域 */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          监测异常({abnormalData.length})
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {abnormalData.map((item) => (
            <div 
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-800">{item.name}</h4>
                    <span className="text-xs text-red-500 px-2 py-0.5 bg-red-50 rounded">异常</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">年龄: {item.age}岁</div>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <div>
                      <div className="text-xs text-gray-400">心率</div>
                      <div className="text-sm font-medium text-gray-800">{item.heartRate}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">血氧</div>
                      <div className="text-sm font-medium text-gray-800">{item.bloodOxygen}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">血压</div>
                      <div className="text-sm font-medium text-gray-800">{item.bloodPressure}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>跌倒: {item.hasFall ? '有' : '无'}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>SOS: {item.hasSOS ? '有' : '无'}</span>
                </div>
                <div className="text-xs text-red-500 ml-auto">
                  最新上报时间: {item.lastUpdate || '-'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 正常监测区域 */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          正常监测({normalData.length})
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {normalData.map((item) => (
            <div 
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-800">{item.name}</h4>
                    <span className="text-xs text-green-500 px-2 py-0.5 bg-green-50 rounded">正常</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">年龄: {item.age}岁</div>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <div>
                      <div className="text-xs text-gray-400">心率</div>
                      <div className="text-sm font-medium text-gray-500">{item.heartRate}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">血氧</div>
                      <div className="text-sm font-medium text-gray-500">{item.bloodOxygen}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">血压</div>
                      <div className="text-sm font-medium text-gray-500">{item.bloodPressure}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>跌倒: {item.hasFall ? '有' : '无'}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>SOS: {item.hasSOS ? '有' : '无'}</span>
                </div>
                <div className="text-xs text-gray-400 ml-auto">
                  最新上报时间: {item.lastUpdate || '-'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmartWatch;