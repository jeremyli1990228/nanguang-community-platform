import React, { useState } from 'react';

interface EventStats {
  triggered: { date: string; count: number }[];
  completed: { date: string; count: number }[];
  overdue: { date: string; count: number }[];
}

const IotBroad: React.FC = () => {
  const [activeTime, setActiveTime] = useState('本周');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedDevice, setSelectedDevice] = useState('用电');
  const [activeEventTab, setActiveEventTab] = useState('triggered');

  const deviceDistribution = [
    { label: '用电', count: 3233, percentage: 65.38, color: '#3B82F6' },
    { label: '用水', count: 800, percentage: 16.17, color: '#10B981' },
    { label: '烟感', count: 500, percentage: 10.11, color: '#EF4444' },
    { label: '家庭守护机器人', count: 300, percentage: 6.07, color: '#8B5CF6' },
    { label: '智能手环', count: 113, percentage: 2.28, color: '#F59E0B' },
  ];

  const deviceStats = [
    { label: '用电', count: 3233, online: 3052, offline: 181, color: '#6B7280' },
    { label: '用水', count: 800, online: 720, offline: 80, color: '#9CA3AF' },
    { label: '烟感', count: 500, online: 450, offline: 50, color: '#D1D5DB' },
    { label: '家庭守护机器人', count: 300, online: 280, offline: 20, color: '#E5E7EB' },
    { label: '智能手环', count: 113, online: 100, offline: 13, color: '#F3F4F6' },
  ];

  const eventData: Record<string, EventStats> = {
    '用电': {
      triggered: [
        { date: '2026-05-18', count: 156 },
        { date: '2026-05-19', count: 142 },
        { date: '2026-05-20', count: 168 },
        { date: '2026-05-21', count: 135 },
        { date: '2026-05-22', count: 178 },
        { date: '2026-05-23', count: 145 },
        { date: '2026-05-24', count: 159 },
      ],
      completed: [
        { date: '2026-05-18', count: 148 },
        { date: '2026-05-19', count: 138 },
        { date: '2026-05-20', count: 162 },
        { date: '2026-05-21', count: 130 },
        { date: '2026-05-22', count: 170 },
        { date: '2026-05-23', count: 140 },
        { date: '2026-05-24', count: 155 },
      ],
      overdue: [
        { date: '2026-05-18', count: 8 },
        { date: '2026-05-19', count: 4 },
        { date: '2026-05-20', count: 6 },
        { date: '2026-05-21', count: 5 },
        { date: '2026-05-22', count: 8 },
        { date: '2026-05-23', count: 5 },
        { date: '2026-05-24', count: 4 },
      ],
    },
    '用水': {
      triggered: [
        { date: '2026-05-18', count: 89 },
        { date: '2026-05-19', count: 76 },
        { date: '2026-05-20', count: 95 },
        { date: '2026-05-21', count: 82 },
        { date: '2026-05-22', count: 98 },
        { date: '2026-05-23', count: 88 },
        { date: '2026-05-24', count: 91 },
      ],
      completed: [
        { date: '2026-05-18', count: 85 },
        { date: '2026-05-19', count: 73 },
        { date: '2026-05-20', count: 90 },
        { date: '2026-05-21', count: 79 },
        { date: '2026-05-22', count: 94 },
        { date: '2026-05-23', count: 85 },
        { date: '2026-05-24', count: 88 },
      ],
      overdue: [
        { date: '2026-05-18', count: 4 },
        { date: '2026-05-19', count: 3 },
        { date: '2026-05-20', count: 5 },
        { date: '2026-05-21', count: 3 },
        { date: '2026-05-22', count: 4 },
        { date: '2026-05-23', count: 3 },
        { date: '2026-05-24', count: 3 },
      ],
    },
    '烟感': {
      triggered: [
        { date: '2026-05-18', count: 45 },
        { date: '2026-05-19', count: 38 },
        { date: '2026-05-20', count: 52 },
        { date: '2026-05-21', count: 41 },
        { date: '2026-05-22', count: 56 },
        { date: '2026-05-23', count: 48 },
        { date: '2026-05-24', count: 43 },
      ],
      completed: [
        { date: '2026-05-18', count: 42 },
        { date: '2026-05-19', count: 36 },
        { date: '2026-05-20', count: 48 },
        { date: '2026-05-21', count: 39 },
        { date: '2026-05-22', count: 52 },
        { date: '2026-05-23', count: 45 },
        { date: '2026-05-24', count: 41 },
      ],
      overdue: [
        { date: '2026-05-18', count: 3 },
        { date: '2026-05-19', count: 2 },
        { date: '2026-05-20', count: 4 },
        { date: '2026-05-21', count: 2 },
        { date: '2026-05-22', count: 4 },
        { date: '2026-05-23', count: 3 },
        { date: '2026-05-24', count: 2 },
      ],
    },
    '家庭守护机器人': {
      triggered: [
        { date: '2026-05-18', count: 28 },
        { date: '2026-05-19', count: 32 },
        { date: '2026-05-20', count: 25 },
        { date: '2026-05-21', count: 30 },
        { date: '2026-05-22', count: 29 },
        { date: '2026-05-23', count: 31 },
        { date: '2026-05-24', count: 27 },
      ],
      completed: [
        { date: '2026-05-18', count: 26 },
        { date: '2026-05-19', count: 30 },
        { date: '2026-05-20', count: 24 },
        { date: '2026-05-21', count: 28 },
        { date: '2026-05-22', count: 28 },
        { date: '2026-05-23', count: 30 },
        { date: '2026-05-24', count: 26 },
      ],
      overdue: [
        { date: '2026-05-18', count: 2 },
        { date: '2026-05-19', count: 2 },
        { date: '2026-05-20', count: 1 },
        { date: '2026-05-21', count: 2 },
        { date: '2026-05-22', count: 1 },
        { date: '2026-05-23', count: 1 },
        { date: '2026-05-24', count: 1 },
      ],
    },
    '智能手环': {
      triggered: [
        { date: '2026-05-18', count: 18 },
        { date: '2026-05-19', count: 22 },
        { date: '2026-05-20', count: 19 },
        { date: '2026-05-21', count: 21 },
        { date: '2026-05-22', count: 24 },
        { date: '2026-05-23', count: 20 },
        { date: '2026-05-24', count: 17 },
      ],
      completed: [
        { date: '2026-05-18', count: 17 },
        { date: '2026-05-19', count: 20 },
        { date: '2026-05-20', count: 18 },
        { date: '2026-05-21', count: 20 },
        { date: '2026-05-22', count: 23 },
        { date: '2026-05-23', count: 19 },
        { date: '2026-05-24', count: 16 },
      ],
      overdue: [
        { date: '2026-05-18', count: 1 },
        { date: '2026-05-19', count: 2 },
        { date: '2026-05-20', count: 1 },
        { date: '2026-05-21', count: 1 },
        { date: '2026-05-22', count: 1 },
        { date: '2026-05-23', count: 1 },
        { date: '2026-05-24', count: 1 },
      ],
    },
  };

  const totalDevices = deviceDistribution.reduce((sum, item) => sum + item.count, 0);

  const getCumulativePercentage = (index: number) => {
    return deviceDistribution.slice(0, index).reduce((sum, item) => sum + item.percentage, 0);
  };

  const timeOptions = ['今日', '本周', '本月', '本年'];
  const eventTabs = [
    { key: 'triggered', label: '触发', color: '#3B82F6' },
    { key: 'completed', label: '办结', color: '#10B981' },
    { key: 'overdue', label: '超时未办结', color: '#EF4444' },
  ];

  const currentEventData = eventData[selectedDevice][activeEventTab as keyof EventStats];
  const maxValue = Math.max(...currentEventData.map(d => d.count)) * 1.2;
  const minValue = 0;

  const getBarHeight = (value: number) => {
    return ((value - minValue) / (maxValue - minValue)) * 250;
  };

  const getTotalStats = () => {
    const data = eventData[selectedDevice];
    return {
      triggered: data.triggered.reduce((sum, d) => sum + d.count, 0),
      completed: data.completed.reduce((sum, d) => sum + d.count, 0),
      overdue: data.overdue.reduce((sum, d) => sum + d.count, 0),
    };
  };

  const totalStats = getTotalStats();

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
            <div className="text-2xl font-bold text-gray-800">{totalDevices}</div>
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
        <div className="w-96 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm p-6 h-full">
            <h3 className="text-lg font-medium text-gray-800 mb-6">数据分布</h3>
            
            <div className="flex justify-center mb-8">
              <div className="relative w-56 h-56">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {deviceDistribution.map((item, index) => {
                    const startAngle = getCumulativePercentage(index) * 3.6;
                    const endAngle = startAngle + item.percentage * 3.6;
                    const startRad = (startAngle * Math.PI) / 180;
                    const endRad = (endAngle * Math.PI) / 180;
                    const x1 = 50 + 42 * Math.cos(startRad);
                    const y1 = 50 + 42 * Math.sin(startRad);
                    const x2 = 50 + 42 * Math.cos(endRad);
                    const y2 = 50 + 42 * Math.sin(endRad);
                    const largeArcFlag = item.percentage > 50 ? 1 : 0;
                    return (
                      <path
                        key={index}
                        d={`M 50 50 L ${x1} ${y1} A 42 42 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill={item.color}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setSelectedDevice(item.label)}
                      />
                    );
                  })}
                  <circle cx="50" cy="50" r="28" fill="white" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-gray-800">{totalDevices}</span>
                  <span className="text-xs text-gray-500">设备总数</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {deviceDistribution.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedDevice(item.label)}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                    selectedDevice === item.label
                      ? 'bg-gray-50 border border-gray-200 shadow-sm'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-4 h-4 rounded ${selectedDevice === item.label ? 'ring-2 ring-offset-2' : ''}`}
                      style={{ backgroundColor: item.color, ringColor: item.color }}
                    />
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-gray-800">{item.count}</div>
                    <div className="text-xs text-gray-500">{item.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm p-6 h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-gray-800">
                事件统计 - <span className="text-blue-600">{selectedDevice}</span>
              </h3>
            </div>

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

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-600">{totalStats.triggered}</div>
                <div className="text-sm text-gray-600">触发</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-600">{totalStats.completed}</div>
                <div className="text-sm text-gray-600">办结</div>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-red-600">{totalStats.overdue}</div>
                <div className="text-sm text-gray-600">超时未办结</div>
              </div>
            </div>

            <div className="flex bg-gray-100 rounded p-1 mb-6">
              {eventTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveEventTab(tab.key)}
                  className={`flex-1 px-4 py-2 text-sm rounded transition-colors ${
                    activeEventTab === tab.key
                      ? 'bg-white shadow font-medium'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  style={activeEventTab === tab.key ? { color: tab.color } : {}}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative h-80">
              <div className="absolute left-10 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-400 w-12">
                <span>{Math.ceil(maxValue)}</span>
                <span>{Math.ceil(maxValue * 0.8)}</span>
                <span>{Math.ceil(maxValue * 0.6)}</span>
                <span>{Math.ceil(maxValue * 0.4)}</span>
                <span>{Math.ceil(maxValue * 0.2)}</span>
                <span>0</span>
              </div>
              <div className="absolute left-20 top-0 bottom-8 right-0">
                <svg className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={eventTabs.find(t => t.key === activeEventTab)?.color || '#3B82F6'} stopOpacity="0.8" />
                      <stop offset="100%" stopColor={eventTabs.find(t => t.key === activeEventTab)?.color || '#3B82F6'} stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={i * (320 / 5)}
                      x2="100%"
                      y2={i * (320 / 5)}
                      stroke="#E5E7EB"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                  ))}
                  {currentEventData.map((item, index) => {
                    const barWidth = 100 / currentEventData.length - 4;
                    const x = index * (100 / currentEventData.length) + 2;
                    const height = getBarHeight(item.count);
                    return (
                      <rect
                        key={index}
                        x={`${x}%`}
                        y={320 - height}
                        width={`${barWidth}%`}
                        height={height}
                        rx="4"
                        fill="url(#barGradient)"
                      />
                    );
                  })}
                </svg>
                <div className="flex justify-between mt-2 px-1">
                  {currentEventData.map((item, index) => (
                    <div key={index} className="text-center">
                      <span className="text-xs text-gray-800 font-medium">{item.count}</span>
                      <div className="text-xs text-gray-500 mt-1">{item.date.slice(5)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-72 flex-shrink-0">
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
