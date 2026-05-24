import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { MapPin, Users, Building2, Briefcase, Info, ArrowRight, Home, Thermometer, Droplets, Wind, Zap, X, Upload } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [selectedAlarm, setSelectedAlarm] = useState<number | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showProcessModal, setShowProcessModal] = useState(false);
  const [currentAlarm, setCurrentAlarm] = useState<any>(null);
  const [processResult, setProcessResult] = useState('');
  const [processDescription, setProcessDescription] = useState('');
  const [attachmentPath, setAttachmentPath] = useState('');
  
  // 总人口列表弹窗
  const [showPopulationModal, setShowPopulationModal] = useState(false);
  const [populationCurrentPage, setPopulationCurrentPage] = useState(1);
  const [populationPageSize, setPopulationPageSize] = useState(20);
  
  // 户籍人口列表弹窗
  const [showHukouModal, setShowHukouModal] = useState(false);
  const [hukouCurrentPage, setHukouCurrentPage] = useState(1);
  const [hukouPageSize, setHukouPageSize] = useState(20);
  
  // 非户籍人口列表弹窗
  const [showNonHukouModal, setShowNonHukouModal] = useState(false);
  const [nonHukouCurrentPage, setNonHukouCurrentPage] = useState(1);
  const [nonHukouPageSize, setNonHukouPageSize] = useState(20);
  
  // 搜索状态
  const [searchName, setSearchName] = useState('');
  const [searchAgeRange, setSearchAgeRange] = useState('');
  
  // 法人单位列表弹窗
  const [showEnterpriseModal, setShowEnterpriseModal] = useState(false);
  const [enterpriseCurrentPage, setEnterpriseCurrentPage] = useState(1);
  const [enterprisePageSize, setEnterprisePageSize] = useState(20);
  const [searchEnterpriseName, setSearchEnterpriseName] = useState('');
  
  // 三小场所列表弹窗
  const [showSmallBusinessModal, setShowSmallBusinessModal] = useState(false);
  const [smallBusinessCurrentPage, setSmallBusinessCurrentPage] = useState(1);
  const [smallBusinessPageSize, setSmallBusinessPageSize] = useState(20);
  const [searchSmallBusinessName, setSearchSmallBusinessName] = useState('');
  
  // 报警列表弹窗
  const [showAlarmModal, setShowAlarmModal] = useState(false);
  const [currentAlarmLevel, setCurrentAlarmLevel] = useState('');
  const [alarmCurrentPage, setAlarmCurrentPage] = useState(1);
  const [alarmPageSize, setAlarmPageSize] = useState(20);
  const [searchAlarmNo, setSearchAlarmNo] = useState('');
  const [searchDeviceName, setSearchDeviceName] = useState('');
  const [searchAlarmStatus, setSearchAlarmStatus] = useState('');
  const [searchAlarmType, setSearchAlarmType] = useState('');
  const [searchStartDate, setSearchStartDate] = useState('');
  const [searchEndDate, setSearchEndDate] = useState('');
  
  const ageRanges = [
    { value: '', label: '全部年龄段' },
    { value: 'under12', label: '12岁以下' },
    { value: '13-18', label: '13~18岁' },
    { value: '19-30', label: '19~30岁' },
    { value: '31-40', label: '31~40岁' },
    { value: '41-50', label: '41~50岁' },
    { value: '51-60', label: '51~60岁' },
    { value: '61-70', label: '61~70岁' },
    { value: '71-80', label: '71~80岁' },
    { value: '81-90', label: '81~90岁' },
    { value: 'over91', label: '91岁以上' },
  ];

  const ageData = [
    { name: '12岁以下', value: 3934, color: '#14b8a6' },
    { name: '13~18岁', value: 2514, color: '#f59e0b' },
    { name: '19~30岁', value: 8680, color: '#38bdf8' },
    { name: '31~40岁', value: 7820, color: '#3b82f6' },
    { name: '41~50岁', value: 7560, color: '#8b5cf6' },
    { name: '51~60岁', value: 8621, color: '#ec4899' },
    { name: '61~70岁', value: 2860, color: '#f97316' },
    { name: '71~80岁', value: 1850, color: '#06b6d4' },
    { name: '81~90岁', value: 495, color: '#84cc16' },
    { name: '91岁以上', value: 32, color: '#a855f7' },
  ];

  const alarmData = [
    { count: 10, label: '红色报警', percent: '0.0%', total: 10, processed: 0, color: 'from-red-500 to-red-400', hoverTip: '红色报警需要实时处理' },
    { count: 8640, label: '橙色报警', percent: '3.3%', total: 8640, processed: 122, color: 'from-orange-500 to-orange-400', hoverTip: '橙色报警4小时内处理' },
    { count: 10514, label: '黄色报警', percent: '4.0%', total: 10514, processed: 0, color: 'from-yellow-500 to-yellow-400', hoverTip: '黄色报警一天内处理即可' },
    { count: 240642, label: '蓝色报警', percent: '92.6%', total: 240642, processed: 6, color: 'from-blue-500 to-blue-400', hoverTip: '蓝色报警两天内处理即可' },
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

  // 报警等级配置
  const alarmLevelConfig = {
    red: { name: '红色报警', timeoutHours: 0, label: '立即处理', color: 'bg-red-500', textColor: 'text-red-600', bgColor: 'bg-red-100' },
    orange: { name: '橙色报警', timeoutHours: 4, label: '4小时内处理', color: 'bg-orange-500', textColor: 'text-orange-600', bgColor: 'bg-orange-100' },
    yellow: { name: '黄色报警', timeoutHours: 24, label: '1天内处理', color: 'bg-yellow-500', textColor: 'text-yellow-600', bgColor: 'bg-yellow-100' },
    blue: { name: '蓝色报警', timeoutHours: 48, label: '2天内处理', color: 'bg-blue-500', textColor: 'text-blue-600', bgColor: 'bg-blue-100' },
  };
  
  // 判断处理是否超时
  const checkTimeout = (alarmLevel: string, alarmTime: string, processTime: string) => {
    const alarmDate = new Date(alarmTime);
    const processDate = new Date(processTime);
    const config = alarmLevelConfig[alarmLevel as keyof typeof alarmLevelConfig];
    
    if (!config) return { timeout: false, duration: '未知', status: '未知' };
    
    const diffHours = (processDate.getTime() - alarmDate.getTime()) / (1000 * 60 * 60);
    const isTimeout = diffHours > config.timeoutHours;
    
    let status = '未超时';
    if (isTimeout) {
      status = '已超时';
    }
    
    let duration = '';
    if (diffHours < 1) {
      duration = `${Math.round(diffHours * 60)}分钟`;
    } else if (diffHours < 24) {
      duration = `${Math.round(diffHours)}小时`;
    } else {
      duration = `${Math.round(diffHours / 24)}天`;
    }
    
    return { timeout: isTimeout, duration, status };
  };
  
  // 通知消息（已处理的报警）
  const noticeMessages = [
    { id: 1, type: '用电设备离线报警', level: 'orange', alarmTime: '2026-05-20 10:00:00', processTime: '2026-05-20 11:52:45', processPerson: '张伟' },
    { id: 2, type: '故障电弧报警', level: 'red', alarmTime: '2026-05-20 09:30:00', processTime: '2026-05-20 09:35:12', processPerson: '李明' },
    { id: 3, type: '用电设备离线报警', level: 'blue', alarmTime: '2026-05-18 14:20:00', processTime: '2026-05-20 11:52:45', processPerson: '王芳' },
    { id: 4, type: '烟雾报警', level: 'yellow', alarmTime: '2026-05-19 16:45:00', processTime: '2026-05-19 18:30:00', processPerson: '赵强' },
    { id: 5, type: '用电设备离线报警', level: 'orange', alarmTime: '2026-05-20 06:00:00', processTime: '2026-05-20 11:52:45', processPerson: '张伟' },
  ];

  // 长者服务状态
  const [selectedElderIndex, setSelectedElderIndex] = useState(0);
  const [dataType, setDataType] = useState<'electricity' | 'water'>('electricity');
  
  // 每小时的时间标签
  const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  
  // 长者智能手环数据
  const elderHealthData = [
    { name: '张启哲', bloodPressure: '136/74mmHg', heartRate: '98次/分', steps: '2345' },
    { name: '戚道琳', bloodPressure: '128/72mmHg', heartRate: '80', steps: '1890' },
    { name: '李国安', bloodPressure: '140/85mmHg', heartRate: '85', steps: '3200' },
    { name: '邹亚锋', bloodPressure: '115/70mmHg', heartRate: '78', steps: '1560' },
  ];
  
  // 生成每小时用电/用水数据的函数
  const generateHourlyData = (elderIndex: number, type: 'electricity' | 'water') => {
    // 根据长者索引和数据类型生成不同的数据模式
    const baseMultiplier = elderIndex + 1;
    const typeMultiplier = type === 'electricity' ? 1 : 0.5;
    
    // 张启哲有超过4小时无数据的情况
    if (elderIndex === 0) {
      return hours.map((hour, index) => {
        // 假设2-5点没有数据
        if (index >= 2 && index <= 5) {
          return { time: hour, value: 0 };
        }
        return { 
          time: hour, 
          value: Math.max(0, (Math.sin(index * 0.3) + 1.5) * baseMultiplier * typeMultiplier) 
        };
      });
    }
    
    return hours.map((hour, index) => ({
      time: hour,
      value: Math.max(0, (Math.sin(index * 0.3) + 1.5) * baseMultiplier * typeMultiplier)
    }));
  };
  
  // 检查是否有超过4小时无数据的情况
  const hasNoDataAlert = (data: { time: string; value: number }[]) => {
    let noDataCount = 0;
    for (const item of data) {
      if (item.value === 0) {
        noDataCount++;
        if (noDataCount >= 4) return true;
      } else {
        noDataCount = 0;
      }
    }
    return false;
  };

  const populationData = [
    { id: 1, name: '戚道琳', phone: '181****1215', gender: '女', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '高龄老人', isShenzhenHukou: true },
    { id: 2, name: '陈稳豪', phone: '186****2244', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: true },
    { id: 3, name: '李振龙', phone: '188****0039', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: true },
    { id: 4, name: '李小春', phone: '156****1080', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: false },
    { id: 5, name: '杨春雨', phone: '158****5434', gender: '女', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: true },
    { id: 6, name: '邓华龙', phone: '157****6984', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: false },
    { id: 7, name: '张亚飞', phone: '187****5102', gender: '女', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: true },
    { id: 8, name: '杨文杰', phone: '178****5063', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: true },
    { id: 9, name: '庄小娥', phone: '136****8271', gender: '女', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: false },
    { id: 10, name: '管庆锦', phone: '138****8764', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: true },
    { id: 11, name: '刘倚文', phone: '159****6645', gender: '女', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: true },
    { id: 12, name: '张文', phone: '152****8240', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: false },
    { id: 13, name: '王柱柱', phone: '187****7115', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: true },
    { id: 14, name: '李佳鹏', phone: '152****0128', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: true },
    { id: 15, name: '张宁', phone: '187****5686', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '汉族', type: '普通住户', isShenzhenHukou: false },
    { id: 16, name: '张溢航', phone: '186****8806', gender: '男', address: '广东省深圳市南山区南山街道南...', nation: '满族', type: '普通住户', isShenzhenHukou: true },
    { id: 17, name: '佟力男', phone: '135****3049', gender: '女', address: '广东省深圳市南山区南山街道南...', nation: '满族', type: '普通住户', isShenzhenHukou: true },
  ];
  
  const hukouData = populationData.filter(item => item.isShenzhenHukou);
  const nonHukouData = populationData.filter(item => !item.isShenzhenHukou);

  return (
    <div className="flex h-full">
      {/* 左侧栏：社区信息一览 */}
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
            <div 
              className="text-center cursor-pointer hover:bg-blue-50 p-3 rounded-lg hover:shadow-sm transition-all border border-transparent hover:border-blue-200"
              onClick={() => setShowPopulationModal(true)}
            >
              <div className="text-2xl font-bold text-gray-800">43928</div>
              <div className="text-sm text-gray-600 mt-1">总人口(人)</div>
            </div>
            <div 
              className="text-center cursor-pointer hover:bg-green-50 p-3 rounded-lg hover:shadow-sm transition-all border border-transparent hover:border-green-200"
              onClick={() => setShowHukouModal(true)}
            >
              <div className="text-2xl font-bold text-gray-800">17524</div>
              <div className="text-sm text-gray-600 mt-1">户籍人口(人)</div>
            </div>
            <div 
              className="text-center cursor-pointer hover:bg-purple-50 p-3 rounded-lg hover:shadow-sm transition-all border border-transparent hover:border-purple-200"
              onClick={() => setShowNonHukouModal(true)}
            >
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
            <div 
              className="bg-blue-50 rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-blue-100 hover:shadow-sm transition-all"
              onClick={() => setShowEnterpriseModal(true)}
            >
              <div>
                <div className="text-xl font-bold text-gray-800">2304</div>
                <div className="text-sm text-gray-600 mt-1">法人单位（家）</div>
              </div>
              <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
            </div>
            <div 
              className="bg-teal-50 rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-teal-100 hover:shadow-sm transition-all"
              onClick={() => setShowSmallBusinessModal(true)}
            >
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

      {/* 中间栏：社区感知和长者服务 */}
      <div className="flex-1 bg-gray-100 p-5 flex flex-col gap-5 overflow-auto">
        {/* 社区感知 */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">社区感知</h2>
          {/* 报警统计卡片 */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            {alarmData.map((item, idx) => (
              <div 
                key={idx} 
                className={`bg-gradient-to-br ${item.color} rounded-lg p-4 text-white cursor-pointer hover:shadow-lg transition-all relative group`}
                onClick={() => {
                  setCurrentAlarmLevel(item.label);
                  setShowAlarmModal(true);
                }}
              >
                <div className="text-3xl font-bold mb-1">{item.count}</div>
                <div className="text-sm opacity-90 mb-3">{item.label}(占比: {item.percent})</div>
                <div className="text-sm">总数：{item.total}</div>
                <div className="text-sm">已处理数量：{item.processed}</div>
                {/* 悬停提示 */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-12 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {item.hoverTip}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-gray-800 rotate-45"></div>
                </div>
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
              <div className="text-sm text-gray-600 mb-3">当前温度</div>
              <div className="text-sm text-gray-600">最高温度：<span className="text-red-500">▲ 33.00℃</span></div>
              <div className="text-sm text-gray-600">最低温度：<span className="text-teal-500">▼ 10.10℃</span></div>
            </div>

            {/* 湿度 */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold text-gray-800">66.34 %</div>
                <Info className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-sm text-gray-600 mb-3">当前湿度</div>
              <div className="text-sm text-gray-600">最高湿度：<span className="text-red-500">▲ 94.80 %</span></div>
              <div className="text-sm text-gray-600">最低湿度：<span className="text-teal-500">▼ 22.30 %</span></div>
            </div>

            {/* 喷淋当前水压 */}
            <div className="bg-white rounded-lg p-4 relative">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold text-gray-800">0.90 MPA</div>
                <div className="relative group">
                  <Info className="h-4 w-4 text-gray-400 cursor-help" />
                  <div className="absolute right-0 top-6 w-48 bg-gray-800 text-white text-xs rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                    <div className="space-y-1">
                      <div>最高水压正常范围≤ 1.2 MPa</div>
                      <div>最低水压正常范围≥ 0.05 MPa</div>
                    </div>
                    <div className="absolute -top-1.5 right-3 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-3">喷淋当前水压</div>
              <div className="text-sm text-gray-600">最高水压：<span className="text-red-500">▲ 1.11 MPA</span></div>
              <div className="text-sm text-gray-600">最低水压：<span className="text-teal-500">▼ 0.44 MPA</span></div>
            </div>

            {/* 雨量 */}
            <div className="bg-white rounded-lg p-4 relative">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold text-gray-800">- ML</div>
                <div className="relative group">
                  <Info className="h-4 w-4 text-gray-400 cursor-help" />
                  <div className="absolute right-0 bottom-8 w-56 bg-gray-800 text-white text-xs rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                    <div className="space-y-1">
                      <div>微量降雨（零星小雨）：＜ 0.1 毫米</div>
                      <div>小雨：0.1 – 9.9 毫米</div>
                      <div>中雨：10.0 – 24.9 毫米</div>
                      <div>大雨：25.0 – 49.9 毫米</div>
                      <div>暴雨：50.0 – 99.9 毫米</div>
                      <div>大暴雨：100.0 – 249.9 毫米</div>
                      <div>特大暴雨：≥ 250.0 毫米</div>
                    </div>
                    <div className="absolute -bottom-1.5 right-3 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-3">当前雨量</div>
              <div className="text-sm text-gray-600">最高雨量：<span className="text-red-500">▲ - ML</span></div>
              <div className="text-sm text-gray-600">最低雨量：<span className="text-teal-500">▼ - ML</span></div>
            </div>

            {/* 风速 */}
            <div className="bg-white rounded-lg p-4 relative">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold text-gray-800">1.38 m/s</div>
                <div className="relative group">
                  <Info className="h-4 w-4 text-gray-400 cursor-help" />
                  <div className="absolute right-0 bottom-8 w-36 bg-gray-800 text-white text-xs rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                    <div>正常范围0~7.9 米/秒</div>
                    <div className="absolute -bottom-1.5 right-3 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-3">当前风速</div>
              <div className="text-sm text-gray-600">最高风速：<span className="text-red-500">▲ 2.60 m/s</span></div>
              <div className="text-sm text-gray-600">最低风速：<span className="text-teal-500">▼ 0.00 m/s</span></div>
            </div>

            {/* 消防栓当前水压 */}
            <div className="bg-white rounded-lg p-4 relative">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold text-gray-800">0.37 MPA</div>
                <div className="relative group">
                  <Info className="h-4 w-4 text-gray-400 cursor-help" />
                  <div className="absolute right-0 top-6 w-48 bg-gray-800 text-white text-xs rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                    <div className="space-y-1">
                      <div>最高水压正常范围≤ 0.65 MPa</div>
                      <div>最低水压正常范围≥ 0.35 MPa</div>
                    </div>
                    <div className="absolute -top-1.5 right-3 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-3">消防栓当前水压</div>
              <div className="text-sm text-gray-600">最高水压：<span className="text-red-500">▲ 0.74 MPA</span></div>
              <div className="text-sm text-gray-600">最低水压：<span className="text-teal-500">▼ 0.00 MPA</span></div>
            </div>
          </div>
        </div>

        {/* 长者服务 */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">长者服务</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* 用电量/用水量 */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  <button 
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${dataType === 'electricity' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    onClick={() => setDataType('electricity')}
                  >
                    用电量
                  </button>
                  <button 
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${dataType === 'water' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    onClick={() => setDataType('water')}
                  >
                    用水量
                  </button>
                </div>
                <div className="text-sm text-gray-600">当前查看: {elderHealthData[selectedElderIndex].name}</div>
              </div>
              
              {/* 告警提示 */}
              {hasNoDataAlert(generateHourlyData(selectedElderIndex, dataType)) && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-red-600">⚠️ 告警：该长者超过4小时无{dataType === 'electricity' ? '用电' : '用水'}数据，请确认安全</span>
                </div>
              )}
              
              {/* 折线图 */}
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={generateHourlyData(selectedElderIndex, dataType)}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis 
                      dataKey="time" 
                      stroke="#6b7280" 
                      tick={{ fontSize: 11 }}
                      interval={3}
                    />
                    <YAxis 
                      stroke="#6b7280" 
                      tick={{ fontSize: 11 }}
                      label={{ 
                        value: dataType === 'electricity' ? '用电量(kWh)' : '用水量(m³)', 
                        angle: -90, 
                        position: 'insideLeft',
                        style: { fontSize: 11 }
                      }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: 12
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke={dataType === 'electricity' ? '#3b82f6' : '#10b981'} 
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 5 }}
                      name={dataType === 'electricity' ? '用电量' : '用水量'}
                    />
                  </LineChart>
                </ResponsiveContainer>
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
                      <th className="px-3 py-2 text-left font-medium text-gray-700 border-b">状态</th>
                    </tr>
                  </thead>
                  <tbody>
                    {elderHealthData.map((elder, idx) => {
                      const hasAlert = hasNoDataAlert(generateHourlyData(idx, dataType));
                      return (
                        <tr 
                          key={idx} 
                          className={`${idx < elderHealthData.length - 1 ? 'border-b' : ''} ${selectedElderIndex === idx ? 'bg-blue-50' : ''} hover:bg-gray-50 cursor-pointer transition-colors`}
                          onClick={() => setSelectedElderIndex(idx)}
                        >
                          <td className="px-3 py-2 text-gray-800">
                            <div className="flex items-center gap-2">
                              {selectedElderIndex === idx && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              )}
                              {elder.name}
                            </div>
                          </td>
                          <td className="px-3 py-2 text-gray-600">{elder.bloodPressure}</td>
                          <td className="px-3 py-2 text-gray-600">{elder.heartRate}</td>
                          <td className="px-3 py-2 text-gray-600">{elder.steps}</td>
                          <td className="px-3 py-2">
                            {hasAlert ? (
                              <span className="px-2 py-1 bg-red-100 text-red-600 rounded text-xs">
                                异常
                              </span>
                            ) : (
                              <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs">
                                正常
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              
              {/* 被选中长者的详细信息 */}
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-gray-700 mb-2">
                  {elderHealthData[selectedElderIndex].name} - 详细信息
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                  <div>血压: {elderHealthData[selectedElderIndex].bloodPressure}</div>
                  <div>心率: {elderHealthData[selectedElderIndex].heartRate}</div>
                  <div>今日步数: {elderHealthData[selectedElderIndex].steps}</div>
                  <div>最后更新: 刚刚</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧栏：待处理报警和通知消息 */}
      <div className="w-[320px] bg-white p-5 flex flex-col gap-5 h-full">
        {/* 待处理报警 */}
        <div className="flex-shrink-0">
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
        <div className="bg-gray-50 rounded-xl p-4 flex flex-col flex-1 overflow-hidden">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 flex-shrink-0">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            通知消息
          </h2>
          <div className="space-y-3 overflow-y-auto flex-1 pr-1">
            {noticeMessages.map((msg) => {
              const config = alarmLevelConfig[msg.level as keyof typeof alarmLevelConfig];
              const timeoutResult = checkTimeout(msg.level, msg.alarmTime, msg.processTime);
              
              return (
                <div key={msg.id} className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-sm font-medium text-gray-800">{msg.type}</span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-0.5 ${config?.bgColor || 'bg-gray-100'} ${config?.textColor || 'text-gray-600'} text-xs rounded-full font-medium`}>
                          {config?.name || '未知'}
                        </span>
                        <span className="px-2 py-0.5 bg-green-100 text-green-600 text-xs rounded-full">已处理</span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium ${timeoutResult.timeout ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                      {timeoutResult.status}
                    </span>
                  </div>
                  <div className="border-t border-gray-100 pt-2 mt-2">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400">报警时间:</span>
                        <span className="text-gray-600">{msg.alarmTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400">处理人:</span>
                        <span className="text-gray-600">{msg.processPerson}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400">处理耗时:</span>
                        <span className="text-gray-600">{timeoutResult.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400">时限:</span>
                        <span className={`${config?.textColor || 'text-gray-600'} font-medium`}>{config?.label || '-'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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

      {/* 总人口列表弹窗 */}
      {showPopulationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[900px] max-h-[85vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
              <h3 className="text-lg font-bold text-gray-800">总人口列表</h3>
              <button 
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => setShowPopulationModal(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4">
              {/* 搜索区域 */}
              <div className="flex gap-4 mb-4 justify-start">
                <div className="w-48">
                  <label className="block text-sm text-gray-600 mb-1">姓名</label>
                  <input
                    type="text"
                    placeholder="请输入姓名"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-48">
                  <label className="block text-sm text-gray-600 mb-1">年龄段</label>
                  <select
                    value={searchAgeRange}
                    onChange={(e) => setSearchAgeRange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {ageRanges.map((range) => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="overflow-x-auto border rounded">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">序号</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">姓名</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">联系方式</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">性别</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">居住地址</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">民族</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">人员类型</th>
                    </tr>
                  </thead>
                  <tbody>
                    {populationData.map((item, idx) => (
                      <tr key={item.id} className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{idx + 1}</td>
                        <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">{item.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.phone}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.gender}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.address}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.nation}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* 分页 */}
              <div className="flex items-center justify-end gap-3 mt-4">
                <span className="text-sm text-gray-600">共 43928 条</span>
                <select
                  value={populationPageSize}
                  onChange={(e) => setPopulationPageSize(Number(e.target.value))}
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
                  {[1, 2, 3, 4, 5, '...', 2197].map((page, idx) => (
                    <button
                      key={idx}
                      onClick={() => typeof page === 'number' && setPopulationCurrentPage(page)}
                      className={`px-3 py-1 rounded text-sm ${
                        page === populationCurrentPage
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
                  value={populationCurrentPage}
                  onChange={(e) => setPopulationCurrentPage(Number(e.target.value))}
                  className="w-14 px-2 py-1.5 border border-gray-300 rounded text-sm text-center"
                />
                <span className="text-sm text-gray-600">页</span>
              </div>
            </div>
            <div className="flex justify-end p-4 border-t border-gray-200 flex-shrink-0">
              <button 
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setShowPopulationModal(false)}
              >
                确定
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* 户籍人口列表弹窗 */}
      {showHukouModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[900px] max-h-[85vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
              <h3 className="text-lg font-bold text-gray-800">户籍人口列表（深圳户口）</h3>
              <button 
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => setShowHukouModal(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4">
              {/* 搜索区域 */}
              <div className="flex gap-4 mb-4 justify-start">
                <div className="w-48">
                  <label className="block text-sm text-gray-600 mb-1">姓名</label>
                  <input
                    type="text"
                    placeholder="请输入姓名"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="w-48">
                  <label className="block text-sm text-gray-600 mb-1">年龄段</label>
                  <select
                    value={searchAgeRange}
                    onChange={(e) => setSearchAgeRange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    {ageRanges.map((range) => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="overflow-x-auto border rounded">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">序号</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">姓名</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">联系方式</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">性别</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">居住地址</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">民族</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">人员类型</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hukouData.map((item, idx) => (
                      <tr key={item.id} className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{idx + 1}</td>
                        <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">{item.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.phone}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.gender}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.address}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.nation}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* 分页 */}
              <div className="flex items-center justify-end gap-3 mt-4">
                <span className="text-sm text-gray-600">共 17524 条</span>
                <select
                  value={hukouPageSize}
                  onChange={(e) => setHukouPageSize(Number(e.target.value))}
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
                  {[1, 2, 3, 4, 5, '...', 877].map((page, idx) => (
                    <button
                      key={idx}
                      onClick={() => typeof page === 'number' && setHukouCurrentPage(page)}
                      className={`px-3 py-1 rounded text-sm ${
                        page === hukouCurrentPage
                          ? 'bg-green-500 text-white'
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
                  value={hukouCurrentPage}
                  onChange={(e) => setHukouCurrentPage(Number(e.target.value))}
                  className="w-14 px-2 py-1.5 border border-gray-300 rounded text-sm text-center"
                />
                <span className="text-sm text-gray-600">页</span>
              </div>
            </div>
            <div className="flex justify-end p-4 border-t border-gray-200 flex-shrink-0">
              <button 
                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => setShowHukouModal(false)}
              >
                确定
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* 非户籍人口列表弹窗 */}
      {showNonHukouModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[900px] max-h-[85vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
              <h3 className="text-lg font-bold text-gray-800">非户籍人口列表（非深圳户口）</h3>
              <button 
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => setShowNonHukouModal(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4">
              {/* 搜索区域 */}
              <div className="flex gap-4 mb-4 justify-start">
                <div className="w-48">
                  <label className="block text-sm text-gray-600 mb-1">姓名</label>
                  <input
                    type="text"
                    placeholder="请输入姓名"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="w-48">
                  <label className="block text-sm text-gray-600 mb-1">年龄段</label>
                  <select
                    value={searchAgeRange}
                    onChange={(e) => setSearchAgeRange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {ageRanges.map((range) => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="overflow-x-auto border rounded">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">序号</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">姓名</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">联系方式</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">性别</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">居住地址</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">民族</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">人员类型</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nonHukouData.map((item, idx) => (
                      <tr key={item.id} className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{idx + 1}</td>
                        <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">{item.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.phone}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.gender}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.address}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.nation}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* 分页 */}
              <div className="flex items-center justify-end gap-3 mt-4">
                <span className="text-sm text-gray-600">共 26404 条</span>
                <select
                  value={nonHukouPageSize}
                  onChange={(e) => setNonHukouPageSize(Number(e.target.value))}
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
                  {[1, 2, 3, 4, 5, '...', 1321].map((page, idx) => (
                    <button
                      key={idx}
                      onClick={() => typeof page === 'number' && setNonHukouCurrentPage(page)}
                      className={`px-3 py-1 rounded text-sm ${
                        page === nonHukouCurrentPage
                          ? 'bg-purple-500 text-white'
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
                  value={nonHukouCurrentPage}
                  onChange={(e) => setNonHukouCurrentPage(Number(e.target.value))}
                  className="w-14 px-2 py-1.5 border border-gray-300 rounded text-sm text-center"
                />
                <span className="text-sm text-gray-600">页</span>
              </div>
            </div>
            <div className="flex justify-end p-4 border-t border-gray-200 flex-shrink-0">
              <button 
                className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                onClick={() => setShowNonHukouModal(false)}
              >
                确定
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* 法人单位列表弹窗 */}
      {showEnterpriseModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[900px] max-h-[85vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
              <h3 className="text-lg font-bold text-gray-800">法人单位列表</h3>
              <button 
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => setShowEnterpriseModal(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4">
              {/* 搜索区域 */}
              <div className="flex gap-4 mb-4 justify-start">
                <div className="w-48">
                  <label className="block text-sm text-gray-600 mb-1">企业名称</label>
                  <input
                    type="text"
                    placeholder="请输入企业名称"
                    value={searchEnterpriseName}
                    onChange={(e) => setSearchEnterpriseName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="overflow-x-auto border rounded">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">序号</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">企业名称</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">法人代表</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">联系电话</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">地址</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">楼栋名称</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">成立日期</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: 1, name: '俊逸', legalRep: '兰立红', phone: '189****4619', address: '深圳市南山区蛇...', building: '南光路156-1', establishDate: '2017-04-10' },
                      { id: 2, name: '自然之声助听器', legalRep: '杜巧梅', phone: '176****3070', address: '山东省日照市莒...', building: '海王大厦A座', establishDate: '2022-08-15' },
                      { id: 3, name: 'dyna', legalRep: '-', phone: '-', address: '-', building: '海王大厦A座', establishDate: '-' },
                      { id: 4, name: '同步齿科', legalRep: '侯雪川', phone: '075****4671', address: '深圳市南山区南...', building: '海王大厦A座', establishDate: '2015-09-08' },
                      { id: 5, name: '东熙明白发转黑', legalRep: '马艺平', phone: '186****4646', address: '辽阳市文圣区三...', building: '海王大厦A座', establishDate: '2012-05-15' },
                      { id: 6, name: '优乐音乐世界', legalRep: '-', phone: '-', address: '-', building: '海王大厦A座', establishDate: '-' },
                      { id: 7, name: 'y-y拳道能', legalRep: '-', phone: '-', address: '-', building: '海王大厦A座', establishDate: '-' },
                      { id: 8, name: '深圳市得禧文化科...', legalRep: '胡珊珊', phone: '158****8028', address: '深圳市南山区南...', building: '海王大厦A座', establishDate: '2016-12-26' },
                      { id: 9, name: '海王大元草', legalRep: '许薇', phone: '075****2709', address: '深圳市南山区南...', building: '海王大厦A座', establishDate: '2020-05-22' },
                      { id: 10, name: '信睿维思德', legalRep: '许艳红', phone: '138****4353', address: '深圳市南山区南...', building: '海王大厦A座', establishDate: '2011-02-16' },
                      { id: 11, name: '菲拜斯特贸易（深...', legalRep: 'EVSEEVA NATALIA', phone: '-', address: '深圳市南山区南...', building: '海王大厦A座', establishDate: '2020-03-27' },
                      { id: 12, name: '证券事务', legalRep: '丁瑞鸣', phone: '-', address: '成都市*******', building: '海王大厦A座', establishDate: '1993-09-22' },
                      { id: 13, name: '太洋电机产业株式...', legalRep: '苏德强', phone: '-', address: '深圳市南山区南...', building: '海王大厦A座', establishDate: '2009-07-02' },
                      { id: 14, name: '深圳厚德载福美好...', legalRep: '陈明新', phone: '-', address: '深圳市南山区南...', building: '海王大厦A座', establishDate: '2023-03-15' },
                      { id: 15, name: '鲲鹏顾问', legalRep: '-', phone: '-', address: '-', building: '海王大厦A座', establishDate: '-' },
                      { id: 16, name: '福加德面粉工业深...', legalRep: '-', phone: '-', address: '-', building: '海王大厦A座', establishDate: '-' },
                      { id: 17, name: '深圳市康健顺国际...', legalRep: '白冰川', phone: '189****5189', address: '深圳市南山区南...', building: '海王大厦A座', establishDate: '2017-01-05' },
                    ].map((item, idx) => (
                      <tr key={item.id} className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{idx + 1}</td>
                        <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">{item.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.legalRep}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.phone}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.address}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.building}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">{item.establishDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* 分页 */}
              <div className="flex items-center justify-end gap-3 mt-4">
                <span className="text-sm text-gray-600">共 2304 条</span>
                <select
                  value={enterprisePageSize}
                  onChange={(e) => setEnterprisePageSize(Number(e.target.value))}
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
                  {[1, 2, 3, 4, 5, '...', 116].map((page, idx) => (
                    <button
                      key={idx}
                      onClick={() => typeof page === 'number' && setEnterpriseCurrentPage(page)}
                      className={`px-3 py-1 rounded text-sm ${
                        page === enterpriseCurrentPage
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
                  value={enterpriseCurrentPage}
                  onChange={(e) => setEnterpriseCurrentPage(Number(e.target.value))}
                  className="w-14 px-2 py-1.5 border border-gray-300 rounded text-sm text-center"
                />
                <span className="text-sm text-gray-600">页</span>
              </div>
            </div>
            <div className="flex justify-end p-4 border-t border-gray-200 flex-shrink-0">
              <button 
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setShowEnterpriseModal(false)}
              >
                确定
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* 三小场所列表弹窗 */}
      {showSmallBusinessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[900px] max-h-[85vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
              <h3 className="text-lg font-bold text-gray-800">三小场所列表</h3>
              <button 
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => setShowSmallBusinessModal(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4">
              {/* 搜索区域 */}
              <div className="flex gap-4 mb-4 justify-start">
                <div className="w-48">
                  <label className="block text-sm text-gray-600 mb-1">商铺名称</label>
                  <input
                    type="text"
                    placeholder="请输入商铺名称"
                    value={searchSmallBusinessName}
                    onChange={(e) => setSearchSmallBusinessName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="w-48">
                  <label className="block text-sm text-gray-600 mb-1">联系人名称</label>
                  <input
                    type="text"
                    placeholder="请输入联系人名称"
                    value={searchSmallBusinessName}
                    onChange={(e) => setSearchSmallBusinessName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
              
              <div className="overflow-x-auto border rounded">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">序号</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">商铺名称</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">商户地址</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">联系人名称</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">联系电话</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">状态</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
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
                    ].map((item, idx) => (
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* 分页 */}
              <div className="flex items-center justify-end gap-3 mt-4">
                <span className="text-sm text-gray-600">共 198 条</span>
                <select
                  value={smallBusinessPageSize}
                  onChange={(e) => setSmallBusinessPageSize(Number(e.target.value))}
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
                  {[1, 2, 3, 4, 5, '...', 10].map((page, idx) => (
                    <button
                      key={idx}
                      onClick={() => typeof page === 'number' && setSmallBusinessCurrentPage(page)}
                      className={`px-3 py-1 rounded text-sm ${
                        page === smallBusinessCurrentPage
                          ? 'bg-teal-500 text-white'
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
                  value={smallBusinessCurrentPage}
                  onChange={(e) => setSmallBusinessCurrentPage(Number(e.target.value))}
                  className="w-14 px-2 py-1.5 border border-gray-300 rounded text-sm text-center"
                />
                <span className="text-sm text-gray-600">页</span>
              </div>
            </div>
            <div className="flex justify-end p-4 border-t border-gray-200 flex-shrink-0">
              <button 
                className="px-6 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
                onClick={() => setShowSmallBusinessModal(false)}
              >
                确定
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* 报警列表弹窗 */}
      {showAlarmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[1100px] max-h-[85vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
              <h3 className="text-lg font-bold text-gray-800">{currentAlarmLevel}列表</h3>
              <button 
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => setShowAlarmModal(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4">
              {/* 搜索区域 */}
              <div className="flex flex-wrap gap-4 mb-4 justify-start">
                <div className="w-44">
                  <label className="block text-sm text-gray-600 mb-1">报警单号</label>
                  <input
                    type="text"
                    placeholder="请输入报警单号"
                    value={searchAlarmNo}
                    onChange={(e) => setSearchAlarmNo(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div className="w-44">
                  <label className="block text-sm text-gray-600 mb-1">设备名称</label>
                  <input
                    type="text"
                    placeholder="请输入设备名称"
                    value={searchDeviceName}
                    onChange={(e) => setSearchDeviceName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div className="w-44">
                  <label className="block text-sm text-gray-600 mb-1">报警状态</label>
                  <select
                    value={searchAlarmStatus}
                    onChange={(e) => setSearchAlarmStatus(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="">全部状态</option>
                    <option value="alarming">报警中</option>
                    <option value="handled">已处理</option>
                  </select>
                </div>
                <div className="w-44">
                  <label className="block text-sm text-gray-600 mb-1">报警类型</label>
                  <select
                    value={searchAlarmType}
                    onChange={(e) => setSearchAlarmType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="">全部类型</option>
                    <option value="arc">故障电弧报警</option>
                    <option value="offline">用电设备离线</option>
                  </select>
                </div>
                <div className="w-56">
                  <label className="block text-sm text-gray-600 mb-1">报警时间</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="date"
                      value={searchStartDate}
                      onChange={(e) => setSearchStartDate(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <span className="text-gray-400 text-sm">至</span>
                    <input
                      type="date"
                      value={searchEndDate}
                      onChange={(e) => setSearchEndDate(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div className="overflow-x-auto border rounded">
                <table className="w-full min-w-[1000px]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200 min-w-[60px]">序号</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200 min-w-[120px]">报警单号</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200 min-w-[120px]">设备名称</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200 min-w-[130px]">报警类型</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200 min-w-[80px]">设备类型</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200 min-w-[80px]">报警状态</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200 min-w-[120px]">报警地址</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200 min-w-[120px]">报警时间</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200 min-w-[80px]">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(10)].map((_, idx) => (
                      <tr key={idx} className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200 whitespace-nowrap">{idx + 1}</td>
                        <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200 whitespace-nowrap">2026052100267...</td>
                        <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200 whitespace-nowrap">南光村59号{300 + idx}室</td>
                        <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200 whitespace-nowrap">用电设备离线报警</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200 whitespace-nowrap">用电</td>
                        <td className="px-4 py-3 border-b border-gray-200 whitespace-nowrap">
                          <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded">报警中</span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200 whitespace-nowrap">南光村59号{300 + idx}室</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b border-gray-200 whitespace-nowrap">2026-05-21 18:XX:XX</td>
                        <td className="px-4 py-3 border-b border-gray-200 whitespace-nowrap">
                          <button className="text-red-600 hover:underline text-sm mr-2">处理</button>
                          <button className="text-blue-600 hover:underline text-sm">详情</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* 分页 */}
              <div className="flex items-center justify-end gap-3 mt-4">
                <span className="text-sm text-gray-600">共 {currentAlarmLevel === '红色报警' ? '10' : currentAlarmLevel === '橙色报警' ? '8640' : currentAlarmLevel === '黄色报警' ? '10514' : '240642'} 条</span>
                <select
                  value={alarmPageSize}
                  onChange={(e) => setAlarmPageSize(Number(e.target.value))}
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
                  {[1, 2, 3, 4, 5, '...', 100].map((page, idx) => (
                    <button
                      key={idx}
                      onClick={() => typeof page === 'number' && setAlarmCurrentPage(page)}
                      className={`px-3 py-1 rounded text-sm ${
                        page === alarmCurrentPage
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
                  value={alarmCurrentPage}
                  onChange={(e) => setAlarmCurrentPage(Number(e.target.value))}
                  className="w-14 px-2 py-1.5 border border-gray-300 rounded text-sm text-center"
                />
                <span className="text-sm text-gray-600">页</span>
              </div>
            </div>
            <div className="flex justify-end p-4 border-t border-gray-200 flex-shrink-0">
              <button 
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setShowAlarmModal(false)}
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

export default Dashboard;
