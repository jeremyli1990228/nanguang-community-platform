import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { MapPin, Users, Building2, Briefcase, Info, ArrowRight, Home, Thermometer, Droplets, Wind, Zap, X, Upload } from 'lucide-react';
import { useAnnotation } from '../contexts/AnnotationContext';
import AnnotationWrapper from '../components/AnnotationWrapper';

const Dashboard: React.FC = () => {
  const [selectedAlarm, setSelectedAlarm] = useState<number | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showProcessModal, setShowProcessModal] = useState(false);
  const [currentAlarm, setCurrentAlarm] = useState<any>(null);
  const [processResult, setProcessResult] = useState('');
  const [processDescription, setProcessDescription] = useState('');
  const [attachmentPath, setAttachmentPath] = useState('');

  const ageData = [
    { name: '12岁以下', value: 3934, color: '#14b8a6' },
    { name: '13~18岁', value: 2514, color: '#f59e0b' },
    { name: '19~60岁', value: 32681, color: '#38bdf8' },
    { name: '60~90岁', value: 5205, color: '#3b82f6' },
    { name: '91岁以上', value: 32, color: '#a855f7' },
  ];

  const alarmData = [
    { count: 10, label: '红色报警', percent: '0.0%', total: 10, processed: 0, color: 'from-red-500 to-red-400' },
    { count: 8640, label: '橙色报警', percent: '3.3%', total: 8640, processed: 122, color: 'from-orange-500 to-orange-400' },
    { count: 10514, label: '黄色报警', percent: '4.0%', total: 10514, processed: 0, color: 'from-yellow-500 to-yellow-400' },
    { count: 240642, label: '蓝色报警', percent: '92.6%', total: 240642, processed: 6, color: 'from-blue-500 to-blue-400' },
  ];

  const pendingAlarms = [
    { id: 1, type: '用电设备离线报警', location: '南光村59号804', time: '2026-05-21 12:52:42', code: '202605210026498' },
    { id: 2, type: '用电设备离线报警', location: '南光村59号704', time: '2026-05-21 12:52:42', code: '202605210026497' },
    { id: 3, type: '用电设备离线报警', location: '南光村59号303', time: '2026-05-21 12:52:42', code: '202605210026496' },
    { id: 4, type: '用电设备离线报警', location: '南光村59号', time: '2026-05-21 12:52:42', code: '202605210026477' },
  ];

  const handleViewDetail = (alarm: any) => {
    setCurrentAlarm(alarm);
    setShowDetailModal(true);
  };

  const handleProcess = (alarm: any) => {
    setCurrentAlarm(alarm);
    setShowProcessModal(true);
    setProcessResult('');
    setProcessDescription('');
    setAttachmentPath('');
  };

  const handleCloseDetailModal = () => {
    setShowDetailModal(false);
    setCurrentAlarm(null);
  };

  const handleCloseProcessModal = () => {
    setShowProcessModal(false);
    setCurrentAlarm(null);
    setProcessResult('');
    setProcessDescription('');
    setAttachmentPath('');
  };

  const handleSaveProcess = () => {
    alert(`处理完成！\n处理结果: ${processResult}\n处理说明: ${processDescription}\n附件: ${attachmentPath || '无'}`);
    handleCloseProcessModal();
  };

  const handleAddAttachment = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (e: any) => {
      const file = e.target.files?.[0];
      if (file) {
        setAttachmentPath(file.name);
      }
    };
    input.click();
  };

  const noticeMessages = [
    { id: 1, type: '用电设备离线报警', time: '2026-05-20 11:52:45' },
    { id: 2, type: '用电设备离线报警', time: '2026-05-20 11:52:45' },
    { id: 3, type: '用电设备离线报警', time: '2026-05-20 11:52:45' },
    { id: 4, type: '用电设备离线报警', time: '2026-05-20 11:52:45' },
    { id: 5, type: '用电设备离线报警', time: '2026-05-20 11:52:45' },
  ];

  const elderHealthData = [
    { name: '张启哲', bloodPressure: '136/74mmHg', heartRate: '98次/分', steps: '-' },
    { name: '戚道琳', bloodPressure: '-', heartRate: '80', steps: '-' },
    { name: '李国安', bloodPressure: '-', heartRate: '80', steps: '-' },
    { name: '邹亚锋', bloodPressure: '-', heartRate: '-', steps: '-' },
  ];

  return (
    <div className="flex h-full">
      {/* 左侧栏：社区信息一览 */}
      <AnnotationWrapper id={4}>
        <div className="w-[380px] bg-white p-5 flex flex-col gap-5 overflow-auto">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">社区信息一览</h2>
          
          {/* 地图 */}
          <div className="w-full h-56 bg-gray-200 rounded mb-4 flex items-center justify-center overflow-hidden">
            <img 
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=社区地图卫星图俯视角度&image_size=square" 
              alt="社区地图" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* 人口统计 */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">43928</div>
              <div className="text-sm text-gray-600 mt-1">总人口(人)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">17524</div>
              <div className="text-sm text-gray-600 mt-1">户籍人口(人)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">26404</div>
              <div className="text-sm text-gray-600 mt-1">非户籍人口(人)</div>
            </div>
          </div>

          {/* 年龄结构 */}
          <div className="flex gap-6 mb-6">
            <div className="w-40 h-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={60}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {ageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col justify-center gap-2">
              {ageData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div
                    className="w-4 h-3 rounded-sm"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name} | {item.value}人</span>
                </div>
              ))}
            </div>
          </div>

          {/* 法人单位和三小场所 */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-between">
              <div>
                <div className="text-xl font-bold text-gray-800">2304</div>
                <div className="text-sm text-gray-600 mt-1">法人单位（家）</div>
              </div>
              <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="bg-teal-50 rounded-lg p-4 flex items-center justify-between">
              <div>
                <div className="text-xl font-bold text-gray-800">198</div>
                <div className="text-sm text-gray-600 mt-1">三小场所（间）</div>
              </div>
              <div className="w-12 h-12 bg-teal-400 rounded-xl flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* 关联业务专题 */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-800">关联业务专题</h3>
            <button className="text-sm text-blue-500 flex items-center gap-1">
              <Info className="h-4 w-4" /> 管理业务
            </button>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-500">
            智慧南山
          </div>
        </div>
      </div>
      </AnnotationWrapper>

      {/* 中间栏：社区感知和长者服务 */}
      <div className="flex-1 bg-gray-100 p-5 flex flex-col gap-5 overflow-auto">
        {/* 社区感知 */}
        <AnnotationWrapper id={5}>
          <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">社区感知</h2>
          
          {/* 报警统计卡片 */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            {alarmData.map((item, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${item.color} rounded-lg p-4 text-white`}>
                <div className="text-3xl font-bold mb-1">{item.count}</div>
                <div className="text-sm opacity-90 mb-3">{item.label}(占比: {item.percent})</div>
                <div className="text-sm">总数：{item.total}</div>
                <div className="text-sm">已处理数量：{item.processed}</div>
              </div>
            ))}
          </div>

          {/* 环境数据 */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {/* 温度 */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold text-gray-800">21.23 ℃</div>
                <Info className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-sm text-gray-600 mb-3">平均温度</div>
              <div className="text-sm text-gray-600">最高温度：<span className="text-red-500">▲ 33.00℃</span></div>
              <div className="text-sm text-gray-600">最低温度：<span className="text-teal-500">▼ 10.10℃</span></div>
            </div>

            {/* 湿度 */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold text-gray-800">66.34 %</div>
                <Info className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-sm text-gray-600 mb-3">平均湿度</div>
              <div className="text-sm text-gray-600">最高湿度：<span className="text-red-500">▲ 94.80 %</span></div>
              <div className="text-sm text-gray-600">最低湿度：<span className="text-teal-500">▼ 22.30 %</span></div>
            </div>

            {/* 喷淋平均水压 */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold text-gray-800">0.90 MPA</div>
                <Info className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-sm text-gray-600 mb-3">喷淋平均水压</div>
              <div className="text-sm text-gray-600">最高水压：<span className="text-red-500">▲ 1.11 MPA</span></div>
              <div className="text-sm text-gray-600">最低水压：<span className="text-teal-500">▼ 0.44 MPA</span></div>
            </div>

            {/* 雨量 */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold text-gray-800">- ML</div>
                <Info className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-sm text-gray-600 mb-3">平均雨量</div>
              <div className="text-sm text-gray-600">最高雨量：<span className="text-red-500">▲ - ML</span></div>
              <div className="text-sm text-gray-600">最低雨量：<span className="text-teal-500">▼ - ML</span></div>
            </div>

            {/* 风速 */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold text-gray-800">1.38 m/s</div>
                <Info className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-sm text-gray-600 mb-3">平均风速</div>
              <div className="text-sm text-gray-600">最高风速：<span className="text-red-500">▲ 2.60 m/s</span></div>
              <div className="text-sm text-gray-600">最低风速：<span className="text-teal-500">▼ 0.00 m/s</span></div>
            </div>

            {/* 消防栓平均水压 */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold text-gray-800">0.37 MPA</div>
                <Info className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-sm text-gray-600 mb-3">消防栓平均水压</div>
              <div className="text-sm text-gray-600">最高水压：<span className="text-red-500">▲ 0.74 MPA</span></div>
              <div className="text-sm text-gray-600">最低水压：<span className="text-teal-500">▼ 0.00 MPA</span></div>
            </div>
          </div>
        </div>
        </AnnotationWrapper>

        {/* 长者服务 */}
        <AnnotationWrapper id={6}>
          <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">长者服务</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* 用电量/用水量 */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  <button className="px-3 py-1 bg-gray-100 rounded text-sm font-medium">用电量</button>
                  <button className="px-3 py-1 bg-gray-50 rounded text-sm text-gray-500">用水量</button>
                </div>
                <button className="text-sm text-blue-500">查看更多 &gt;</button>
              </div>
              <div className="flex flex-col items-center justify-center py-8">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=3D打开的纸箱灰色简约风格&image_size=square" 
                  alt="暂无数据" 
                  className="w-32 h-32 mb-3"
                />
                <div className="text-sm text-gray-500">暂无用电量</div>
              </div>
            </div>

            {/* 长者健康数据 */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-600">共计4人</div>
                <button className="text-sm text-blue-500">查看更多 &gt;</button>
              </div>
              <div className="border rounded overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left font-medium text-gray-700 border-b">长者姓名</th>
                      <th className="px-3 py-2 text-left font-medium text-gray-700 border-b">血压</th>
                      <th className="px-3 py-2 text-left font-medium text-gray-700 border-b">心率</th>
                      <th className="px-3 py-2 text-left font-medium text-gray-700 border-b">计步</th>
                    </tr>
                  </thead>
                  <tbody>
                    {elderHealthData.map((elder, idx) => (
                      <tr key={idx} className={idx < elderHealthData.length - 1 ? 'border-b' : ''}>
                        <td className="px-3 py-2 text-gray-800">{elder.name}</td>
                        <td className="px-3 py-2 text-gray-600">{elder.bloodPressure}</td>
                        <td className="px-3 py-2 text-gray-600">{elder.heartRate}</td>
                        <td className="px-3 py-2 text-gray-600">{elder.steps}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </AnnotationWrapper>
      </div>

      {/* 右侧栏：待处理报警和通知消息 */}
      <div className="w-[320px] bg-white p-5 flex flex-col gap-5 overflow-auto">
        {/* 待处理报警 */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">待处理报警</h2>
          <div className="space-y-3">
            {pendingAlarms.map((alarm) => (
              <div key={alarm.id} className="border-l-2 border-red-400 pl-3 py-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-800">{alarm.type}</span>
                  <span className="text-xs text-gray-500">{alarm.code}</span>
                </div>
                <div className="text-xs text-gray-600 mb-1">{alarm.location}</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded">报警</span>
                    <span className="text-xs text-gray-500">{alarm.time}</span>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      className="text-xs text-blue-500 hover:text-blue-600 hover:underline cursor-pointer"
                      onClick={() => handleViewDetail(alarm)}
                    >详情</button>
                    <button 
                      className="text-xs text-red-500 hover:text-red-600 hover:underline cursor-pointer"
                      onClick={() => handleProcess(alarm)}
                    >处理</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 通知消息 */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">通知消息</h2>
          <div className="space-y-3">
            {noticeMessages.map((msg) => (
              <div key={msg.id} className="border-b pb-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-800">{msg.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded">报警</span>
                  <span className="text-xs text-gray-500">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 报警详情弹窗 */}
      {showDetailModal && currentAlarm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[550px] max-h-[80vh] overflow-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-bold text-gray-800">报警详情</h3>
              <button 
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={handleCloseDetailModal}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="border-b border-gray-100 py-2">
                  <span className="text-gray-500">报警类型：</span>
                  <span className="text-gray-800">{currentAlarm.type}</span>
                </div>
                <div className="border-b border-gray-100 py-2">
                  <span className="text-gray-500">报警状态：</span>
                  <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs rounded">报警中</span>
                </div>
                <div className="border-b border-gray-100 py-2">
                  <span className="text-gray-500">报警状态：</span>
                  <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs rounded">报警中</span>
                </div>
                <div className="border-b border-gray-100 py-2">
                  <span className="text-gray-500">报警地址：</span>
                  <span className="text-gray-800">{currentAlarm.location}</span>
                </div>
                <div className="border-b border-gray-100 py-2">
                  <span className="text-gray-500">报警设备：</span>
                  <span className="text-gray-800">{currentAlarm.location}</span>
                </div>
                <div className="border-b border-gray-100 py-2">
                  <span className="text-gray-500">报警设备：</span>
                  <span className="text-gray-800">{currentAlarm.location}</span>
                </div>
                <div className="border-b border-gray-100 py-2">
                  <span className="text-gray-500">报警时间：</span>
                  <span className="text-gray-800">{currentAlarm.time}</span>
                </div>
                <div className="border-b border-gray-100 py-2">
                  <span className="text-gray-500">处理时间：</span>
                  <span className="text-gray-400">-</span>
                </div>
                <div className="border-b border-gray-100 py-2">
                  <span className="text-gray-500">处理人：</span>
                  <span className="text-gray-400">-</span>
                </div>
                <div className="border-b border-gray-100 py-2">
                  <span className="text-gray-500">处理时间：</span>
                  <span className="text-gray-400">-</span>
                </div>
                <div className="border-b border-gray-100 py-2">
                  <span className="text-gray-500">处理结果：</span>
                  <span className="text-gray-400">-</span>
                </div>
                <div className="border-b border-gray-100 py-2">
                  <span className="text-gray-500">处理结果：</span>
                  <span className="text-gray-400">-</span>
                </div>
                <div className="border-b border-gray-100 py-2">
                  <span className="text-gray-500">处理说明：</span>
                  <span className="text-gray-400">-</span>
                </div>
                <div className="border-b border-gray-100 py-2">
                  <span className="text-gray-500">附件说明：</span>
                  <span className="text-gray-400">-</span>
                </div>
                <div className="py-2">
                  <span className="text-gray-500">附件：</span>
                  <span className="text-gray-400">-</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end p-4 border-t">
              <button 
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleCloseDetailModal}
              >
                确定
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 报警处理弹窗 */}
      {showProcessModal && currentAlarm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[550px]">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-bold text-gray-800">报警处理</h3>
              <button 
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={handleCloseProcessModal}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              {/* 处理结果 */}
              <div>
                <label className="flex items-center text-sm text-gray-700 mb-2">
                  <span className="text-red-500 mr-1">*</span>处理结果
                </label>
                <select 
                  value={processResult}
                  onChange={(e) => setProcessResult(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">请选择</option>
                  <option value="无需处理">无需处理</option>
                  <option value="已处理">已处理</option>
                </select>
              </div>

              {/* 处理说明 */}
              <div>
                <label className="flex items-center text-sm text-gray-700 mb-2">
                  <span className="text-red-500 mr-1">*</span>处理说明
                </label>
                <textarea 
                  value={processDescription}
                  onChange={(e) => setProcessDescription(e.target.value)}
                  placeholder="请输入"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
              </div>

              {/* 附件 */}
              <div>
                <label className="text-sm text-gray-700 mb-2 block">附件</label>
                <button 
                  onClick={handleAddAttachment}
                  className="flex items-center justify-center gap-2 w-40 px-4 py-2 border border-gray-300 rounded text-blue-500 hover:bg-blue-50 hover:border-blue-400"
                >
                  <Upload className="w-4 h-4" />
                  添加附件
                </button>
                {attachmentPath && (
                  <div className="mt-2 text-sm text-gray-600">
                    已选择：{attachmentPath}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end gap-3 p-4 border-t">
              <button 
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
                onClick={handleCloseProcessModal}
              >
                取消
              </button>
              <button 
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSaveProcess}
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
