import React, { useState } from 'react';

const AlarmBroad: React.FC = () => {
  const [activeTab, setActiveTab] = useState('today');

  const alarmCards = [
    { title: '守护机器人设备离线', count: 0 },
    { title: '机器人隐私状态变更，当前任务已暂停。', count: 0 },
    { title: '机器人地图已变更，关联任务已暂停', count: 0 },
    { title: '识别到看护对象即将离开，请求与您通话', count: 0 },
    { title: '建图失败提醒', count: 0 },
    { title: '低电量回充中断', count: 0 },
  ];

  const chartData = [
    { date: '2026-05', value: 734 },
  ];

  const deviceRanking = [
    { name: '南光村111号610', count: 15 },
    { name: '南光村111号608', count: 15 },
    { name: '南光村111号E', count: 15 },
    { name: '南光村113号402', count: 15 },
    { name: '南光村60号501', count: 15 },
    { name: '南光村60号502', count: 15 },
    { name: '南光村111号613', count: 15 },
  ];

  const alarmTypeStats = [
    { type: '用电设备离线报警', count: 710, percentage: '96.73%', color: '#4f46e5' },
    { type: '故障电弧报警', count: 17, percentage: '2.32%', color: '#eab308' },
    { type: '井盖离线报警', count: 5, percentage: '0.68%', color: '#4b5563' },
    { type: '井盖移动报警', count: 2, percentage: '0.27%', color: '#f97316' },
    { type: '消防栓异常报警', count: 0, percentage: '0.00%', color: '#06b6d4' },
    { type: '识别到家庭成员可能跌倒，请求与您通话', count: 0, percentage: '0.00%', color: '#facc15' },
    { type: '手环检测超过血氧收缩压上限阈值', count: 0, percentage: '0.00%', color: '#ec4899' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* 时间筛选 */}
      <div className="flex gap-6 items-center">
        <div className="flex bg-gray-200 rounded p-1">
          <button
            onClick={() => setActiveTab('today')}
            className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
              activeTab === 'today' ? 'bg-white text-gray-800' : 'text-gray-600'
            }`}
          >
            今日
          </button>
          <button
            onClick={() => setActiveTab('week')}
            className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
              activeTab === 'week' ? 'bg-white text-gray-800' : 'text-gray-600'
            }`}
          >
            本周
          </button>
          <button
            onClick={() => setActiveTab('month')}
            className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
              activeTab === 'month' ? 'bg-white text-gray-800' : 'text-gray-600'
            }`}
          >
            本月
          </button>
          <button
            onClick={() => setActiveTab('year')}
            className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
              activeTab === 'year' ? 'bg-white text-gray-800' : 'text-gray-600'
            }`}
          >
            全年
          </button>
        </div>

        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1.5">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <input
              type="text"
              placeholder="开始日期"
              className="border-none focus:outline-none text-sm text-gray-600 w-24"
            />
          </div>
          <span className="text-gray-600 text-sm">至</span>
          <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1.5">
            <input
              type="text"
              placeholder="结束日期"
              className="border-none focus:outline-none text-sm text-gray-600 w-24"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded text-sm flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            查询
          </button>
          <button className="border border-gray-300 hover:bg-gray-50 px-4 py-1.5 rounded text-sm flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            重置
          </button>
        </div>
      </div>

      {/* 报警卡片和统计 */}
      <div className="grid grid-cols-4 gap-4">
        {/* 报警卡片 */}
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {alarmCards.map((card, idx) => (
            <div key={idx} className="bg-gradient-to-b from-gray-100 to-white rounded-lg p-4 border border-gray-200 relative">
              <svg className="absolute top-3 right-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm text-gray-700 mb-2">{card.title}</div>
              <div className="text-2xl font-bold text-gray-900 mb-3">{card.count}</div>
              <div className="flex gap-4 text-sm text-gray-500">
                <span>同比：0%</span>
                <span>环比：0%</span>
              </div>
              <div className="mt-2 text-sm text-gray-400">告警总数：{card.count}</div>
            </div>
          ))}
        </div>

        {/* 告警类型占比 */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-800">告警类型占比</h3>
            <button className="text-blue-500 text-sm hover:underline">查看明细</button>
          </div>
          
          {/* 环形图 */}
          <div className="relative w-36 h-36 mx-auto mb-4">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {alarmTypeStats.map((item, idx) => {
                const startAngle = alarmTypeStats.slice(0, idx).reduce((acc, curr) => acc + parseFloat(curr.percentage), 0) * 3.6;
                const angle = parseFloat(item.percentage) * 3.6;
                const startRad = (startAngle * Math.PI) / 180;
                const endRad = ((startAngle + angle) * Math.PI) / 180;
                const x1 = 50 + 38 * Math.cos(startRad);
                const y1 = 50 + 38 * Math.sin(startRad);
                const x2 = 50 + 38 * Math.cos(endRad);
                const y2 = 50 + 38 * Math.sin(endRad);
                const largeArcFlag = angle > 180 ? 1 : 0;
                return (
                  <path
                    key={idx}
                    d={`M 50 50 L ${x1} ${y1} A 38 38 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                    fill={item.color}
                  />
                );
              })}
              <circle cx="50" cy="50" r="28" fill="white" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-gray-800">734</span>
              <span className="text-xs text-gray-500">总告警数量</span>
            </div>
          </div>
          
          <div className="text-sm text-gray-600 text-center mb-4">
            <span className="text-gray-800">0</span> / <span className="text-blue-500">734</span>
            <div className="text-xs text-gray-500">已处理数量 / 报警中数量</div>
          </div>

          <div className="flex items-center justify-center text-xs text-gray-500 mb-2">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span>1/11</span>
            <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22L2 17l10-5 10 5-10 5zM2 7l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>

          {/* 图例 */}
          <div className="space-y-1.5">
            {alarmTypeStats.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }}></div>
                  <span className="text-gray-700 truncate max-w-[140px]">{item.type}</span>
                </div>
                <span className="text-gray-600">{item.percentage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 告警趋势和设备排名 */}
      <div className="grid grid-cols-3 gap-4">
        {/* 告警趋势 */}
        <div className="col-span-2 bg-white rounded-lg p-4 border border-gray-200 relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-800">告警趋势</h3>
            <button className="text-blue-500 text-sm hover:underline">查看告警明细</button>
          </div>
          
          {/* Y轴刻度 */}
          <div className="absolute left-4 top-16 bottom-8 flex flex-col justify-between text-xs text-gray-400 w-8">
            <span>800</span>
            <span>700</span>
            <span>600</span>
            <span>500</span>
            <span>400</span>
            <span>300</span>
            <span>200</span>
            <span>100</span>
            <span>0</span>
          </div>
          
          {/* 柱状图 */}
          <div className="h-56 pl-12 relative">
            {/* 网格线 */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="border-t border-gray-200 w-full"></div>
              ))}
            </div>
            
            <div className="h-full flex items-end justify-center gap-2 relative z-10">
              {chartData.map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center justify-end h-full">
                  <div 
                    className="w-full bg-amber-500" 
                    style={{ height: `${(item.value / 800) * 100}%` }} 
                  />
                  <div className="text-xs text-gray-500 mt-2">{item.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 告警设备排名 */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-4">告警设备排名</h3>
          <div className="space-y-2.5">
            {deviceRanking.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium ${
                    idx < 3 ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {idx + 1}
                  </div>
                  <span className="text-gray-700 text-sm">{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-800 font-medium text-sm">{item.count}</span>
                  <div className="w-1 h-3 bg-gray-200 rounded-full overflow-hidden"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlarmBroad;
