import React, { useState } from 'react';

const IotBroad: React.FC = () => {
  const [activeTime, setActiveTime] = useState('本周');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const deviceStats = [
    { label: '用电', count: 3233, online: 3052, offline: 181, color: '#6B7280' },
    { label: '井盖', count: 557, online: 357, offline: 200, color: '#9CA3AF' },
    { label: '消防门', count: 249, online: 249, offline: 0, color: '#D1D5DB' },
    { label: '摄像头', count: 203, online: 0, offline: 203, color: '#E5E7EB' },
    { label: '烟感', count: 200, online: 0, offline: 200, color: '#F3F4F6' },
  ];

  const dataDistribution = [
    { label: '用电', count: 3233, percentage: 65.38, color: '#3B82F6' },
    { label: '井盖', count: 557, percentage: 11.26, color: '#84CC16' },
    { label: '消防门', count: 249, percentage: 5.04, color: '#374151' },
    { label: '摄像头', count: 203, percentage: 4.11, color: '#F59E0B' },
    { label: '烟感', count: 200, percentage: 4.04, color: '#EF4444' },
    { label: '用水', count: 200, percentage: 4.04, color: '#FBBF24' },
    { label: '智能手环', count: 200, percentage: 4.04, color: '#EC4899' },
    { label: '执法仪', count: 50, percentage: 1.01, color: '#A855F7' },
    { label: '喷淋', count: 16, percentage: 0.32, color: '#10B981' },
    { label: '消防栓', count: 15, percentage: 0.30, color: '#06B6D4' },
    { label: '守护机器人', count: 10, percentage: 0.20, color: '#84CC16' },
    { label: '灯杆', count: 7, percentage: 0.14, color: '#F59E0B' },
    { label: '健康一体机', count: 3, percentage: 0.06, color: '#F97316' },
    { label: '十二导', count: 2, percentage: 0.04, color: '#06B6D4' },
    { label: '电子标签', count: 0, percentage: 0.00, color: '#94A3B8' },
  ];

  const chartData = [
    { date: '2026-05-18', value: 160000 },
    { date: '2026-05-19', value: 155000 },
    { date: '2026-05-20', value: 100000 },
  ];

  const maxValue = 180000;
  const minValue = 0;

  const getBarHeight = (value: number) => {
    return ((value - minValue) / (maxValue - minValue)) * 200;
  };

  const getCumulativePercentage = (index: number) => {
    return dataDistribution.slice(0, index).reduce((sum, item) => sum + item.percentage, 0);
  };

  const timeOptions = ['今日', '本周', '本月', '本年'];

  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-800">4945</div>
            <div className="text-sm text-gray-500">设备总数</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-800">3658</div>
            <div className="text-sm text-gray-500">在线设备数</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-gray-400 rounded-full flex items-center justify-center">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-800">1287</div>
            <div className="text-sm text-gray-500">离线设备数</div>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">事件统计</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-2">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-1.5 text-sm"
                />
                <span className="text-gray-400 self-center">至</span>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-1.5 text-sm"
                />
              </div>
              <div className="flex bg-gray-100 rounded p-1">
                {timeOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setActiveTime(option)}
                    className={`px-3 py-1 text-sm rounded transition-colors ${
                      activeTime === option
                        ? 'bg-white shadow text-blue-500'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="ml-auto flex gap-2">
                <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors">
                  查询
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-600 text-sm rounded hover:bg-gray-50 transition-colors">
                  重置
                </button>
              </div>
            </div>

            <div className="mb-2">
              <span className="text-sm text-gray-600">累计接受数据: 32804815</span>
              <span className="ml-6 text-sm text-gray-600">今日接受数据: 99774</span>
            </div>

            <div className="relative h-64">
              <div className="absolute left-12 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400 w-10">
                <span>180,000</span>
                <span>150,000</span>
                <span>120,000</span>
                <span>90,000</span>
                <span>60,000</span>
                <span>30,000</span>
                <span>0</span>
              </div>
              <div className="absolute left-20 top-0 bottom-0 right-0">
                <svg className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={i * (256 / 6)}
                      x2="100%"
                      y2={i * (256 / 6)}
                      stroke="#E5E7EB"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                  ))}
                  <path
                    d={`M 0 ${256 - getBarHeight(chartData[0].value)} 
                        L ${(100 / (chartData.length - 1)) * 0}% ${256 - getBarHeight(chartData[0].value)}
                        L ${(100 / (chartData.length - 1)) * 1}% ${256 - getBarHeight(chartData[1].value)}
                        L ${(100 / (chartData.length - 1)) * 2}% ${256 - getBarHeight(chartData[2].value)}
                        L 100% ${256 - getBarHeight(chartData[2].value)}
                        L 100% 256 L 0 256 Z`}
                    fill="url(#areaGradient)"
                  />
                  <path
                    d={`M ${(100 / (chartData.length - 1)) * 0}% ${256 - getBarHeight(chartData[0].value)}
                        L ${(100 / (chartData.length - 1)) * 1}% ${256 - getBarHeight(chartData[1].value)}
                        L ${(100 / (chartData.length - 1)) * 2}% ${256 - getBarHeight(chartData[2].value)}`}
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2"
                  />
                  {chartData.map((item, index) => (
                    <circle
                      key={index}
                      cx={`${(100 / (chartData.length - 1)) * index}%`}
                      cy={256 - getBarHeight(item.value)}
                      r="4"
                      fill="#3B82F6"
                    />
                  ))}
                </svg>
                <div className="flex justify-between mt-2 px-2">
                  {chartData.map((item) => (
                    <span key={item.date} className="text-xs text-gray-500">{item.date}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-800 mb-4">数据分布</h3>
              <div className="flex items-center gap-8">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {dataDistribution.map((item, index) => {
                      const startAngle = getCumulativePercentage(index) * 3.6;
                      const endAngle = startAngle + item.percentage * 3.6;
                      const startRad = (startAngle * Math.PI) / 180;
                      const endRad = (endAngle * Math.PI) / 180;
                      const x1 = 50 + 40 * Math.cos(startRad);
                      const y1 = 50 + 40 * Math.sin(startRad);
                      const x2 = 50 + 40 * Math.cos(endRad);
                      const y2 = 50 + 40 * Math.sin(endRad);
                      const largeArcFlag = item.percentage > 50 ? 1 : 0;
                      return (
                        <path
                          key={index}
                          d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                          fill={item.color}
                          opacity={item.count > 0 ? 1 : 0.3}
                        />
                      );
                    })}
                    <circle cx="50" cy="50" r="25" fill="white" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-gray-800">4945</span>
                    <span className="text-xs text-gray-500">设备数量分布</span>
                  </div>
                </div>
                <div className="flex-1 grid grid-cols-3 gap-2">
                  {dataDistribution.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs">
                      <div
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: item.color, opacity: item.count > 0 ? 1 : 0.3 }}
                      />
                      <span className="text-gray-600">{item.label}: {item.count} ({item.percentage}%)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-72">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-lg font-medium text-gray-800 mb-4">设备统计</h3>
            <div className="space-y-4">
              {deviceStats.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <svg className="w-4 h-4" style={{ color: item.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-800">{item.count}</div>
                      <div className="text-xs text-gray-500">{item.label}</div>
                    </div>
                  </div>
                  <div className="flex gap-4 text-xs">
                    <span className="text-red-500">在线数量: <span className="font-medium">{item.online}</span>台</span>
                    <span className="text-green-500">离线数量: <span className="font-medium">{item.offline}</span>台</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IotBroad;