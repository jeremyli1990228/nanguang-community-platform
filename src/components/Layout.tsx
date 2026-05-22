import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { UserCircle, HeartPulse, ChevronRight, Users, Building2, MapPin, Settings, Activity, BookOpen, Eye, EyeOff } from 'lucide-react';
import { useAnnotation } from '../contexts/AnnotationContext';
import AnnotationWrapper from './AnnotationWrapper';

const Layout: React.FC = () => {
  const location = useLocation();
  const { isAnnotationMode, toggleAnnotationMode } = useAnnotation();
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set(['组织权限', '系统管理', '长者健康数据']));

  const topNavItems = [
    { label: '工作台', path: '/dashboard' },
    { label: '社区管理', path: '/community/merchants' },
    { label: '长者服务', path: '/elder/profile' },
    { label: '报警中心', path: '/alarm/broad' },
    { label: '物联中心', path: '/iot' },
    { label: '三维南光', path: '/3d' },
  ];

  const getSidebarItems = () => {
    const path = location.pathname;
    if (path.startsWith('/community') || path.startsWith('/permission') || path.startsWith('/system')) {
      return [
        { label: '商户管理', path: '/community/merchants' },
        { label: '小区管理', path: '/community/community' },
        { label: '房屋管理', path: '/community/house' },
        { label: '住户管理', path: '/community/resident' },
        { label: '企业管理', path: '/community/enterprise' },
        { label: '网格管理', path: '/community/grid' },
        { 
          label: '组织权限', 
          icon: Users,
          children: [
            { label: '通讯录', path: '/permission/contacts' },
            { label: '角色管理', path: '/permission/roles' },
            { label: '人员类型', path: '/permission/personnel-type' },
            { label: '组织信息', path: '/permission/organization' },
          ]
        },
        { 
          label: '系统管理', 
          icon: Settings,
          children: [
            { label: '消息模板', path: '/system/message-template' },
            { label: '消息记录', path: '/system/message-records' },
            { label: '登录日志', path: '/system/login-logs' },
            { label: '操作日志', path: '/system/operation-logs' },
          ]
        },
      ];
    }
    if (path.startsWith('/elder')) {
      return [
        { label: '长者档案', path: '/elder/profile' },
        { 
          label: '长者健康数据', 
          icon: Activity,
          children: [
            { label: '智能手环', path: '/elder/smart-watch' },
            { label: '健康一体机', path: '/elder/health-machine' },
            { label: '十二导', path: '/elder/twelve-lead' },
          ]
        },
      ];
    }
    if (path.startsWith('/alarm')) {
      return [
        { label: '报警看板', path: '/alarm/broad' },
        { label: '报警记录', path: '/alarm/record' },
        { label: '报警类型配置', path: '/alarm/type-config' },
        { label: '报警等级配置', path: '/alarm/level-config' },
        { label: '报警联动摄像头配置', path: '/alarm/camera-config' },
        { label: '报警推送记录', path: '/alarm/push-record' },
      ];
    }
    if (path.startsWith('/iot')) {
      return [
        { label: '物联看板', path: '/iot/broad' },
        { 
          label: '智能井盖管理', 
          children: [
            { label: '智能井盖配置', path: '/iot/manhole/config' },
            { label: '智能井盖数据管理', path: '/iot/manhole/data' },
          ]
        },
        { 
          label: '智能灯杆管理', 
          children: [
            { label: '智能灯杆配置', path: '/iot/lightpole/config' },
            { label: '智能灯杆数据管理', path: '/iot/lightpole/data' },
          ]
        },
        { 
          label: '摄像头管理', 
          children: [
            { label: '摄像头配置', path: '/iot/camera/config' },
            { label: '摄像头数据管理', path: '/iot/camera/data' },
          ]
        },
        { 
          label: 'AI算法盒子管理', 
          children: [
            { label: 'AI算法盒子配置', path: '/iot/aibox/config' },
            { label: 'AI算法盒子数据管理', path: '/iot/aibox/data' },
          ]
        },
        { 
          label: '智能用电管理', 
          children: [
            { label: '智能用电配置', path: '/iot/electric/config' },
            { label: '智能用电数据管理', path: '/iot/electric/data' },
          ]
        },
        { 
          label: '智能用水管理', 
          children: [
            { label: '智能用水配置', path: '/iot/water/config' },
            { label: '智能用水数据管理', path: '/iot/water/data' },
          ]
        },
        { 
          label: '智能手环管理', 
          children: [
            { label: '智能手环配置', path: '/iot/watch/config' },
            { label: '智能手环数据管理', path: '/iot/watch/data' },
          ]
        },
        { 
          label: '健康一体机管理', 
          children: [
            { label: '健康一体机配置', path: '/iot/health/config' },
            { label: '健康一体机数据管理', path: '/iot/health/data' },
          ]
        },
        { 
          label: '消防栓管理', 
          children: [
            { label: '消防栓配置', path: '/iot/firehydrant/config' },
            { label: '消防栓数据管理', path: '/iot/firehydrant/data' },
          ]
        },
        { 
          label: '烟感管理', 
          children: [
            { label: '烟感配置', path: '/iot/smoke/config' },
            { label: '烟感数据管理', path: '/iot/smoke/data' },
          ]
        },
        { 
          label: '喷淋管理', 
          children: [
            { label: '喷淋配置', path: '/iot/spray/config' },
            { label: '喷淋数据管理', path: '/iot/spray/data' },
          ]
        },
        { 
          label: '消防门管理', 
          children: [
            { label: '消防门配置', path: '/iot/firedoor/config' },
            { label: '消防门数据管理', path: '/iot/firedoor/data' },
          ]
        },
        { 
          label: '执法仪管理', 
          children: [
            { label: '执法仪配置', path: '/iot/police/config' },
            { label: '执法仪数据管理', path: '/iot/police/data' },
          ]
        },
        { 
          label: '电子标签管理', 
          children: [
            { label: '电子标签配置', path: '/iot/tag/config' },
            { label: '电子标签数据管理', path: '/iot/tag/data' },
          ]
        },
        { 
          label: '十二导管理', 
          children: [
            { label: '十二导配置', path: '/iot/twelvelead/config' },
            { label: '十二导数据管理', path: '/iot/twelvelead/data' },
          ]
        },
        { 
          label: '家庭守护机器人管理', 
          children: [
            { label: '家庭守护机器人配置', path: '/iot/robot/config' },
            { label: '家庭守护机器人数据管理', path: '/iot/robot/data' },
          ]
        },
      ];
    }
    return [];
  };

  const toggleMenu = (label: string) => {
    const newExpanded = new Set(expandedMenus);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedMenus(newExpanded);
  };

  const isTopNavActive = (path: string) => location.pathname.startsWith(path);
  const isSidebarActive = (path: string) => location.pathname === path;

  const sidebarItems = getSidebarItems();
  const showSidebar = sidebarItems.length > 0;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* 顶部导航栏 */}
      <header className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-3 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2">
          <HeartPulse className="h-7 w-7" />
          <div className="text-lg font-medium">南光社区治理平台</div>
        </div>
        
        <AnnotationWrapper id={2}>
          <nav className="flex gap-8">
            {topNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-1 rounded transition-colors ${
                  isTopNavActive(item.path)
                    ? 'bg-white bg-opacity-20 font-medium'
                    : 'hover:bg-white bg-opacity-10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </AnnotationWrapper>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleAnnotationMode}
            className="flex items-center gap-1 px-3 py-1 rounded bg-white/20 hover:bg-white/30 text-white text-sm transition-colors"
            title={isAnnotationMode ? "关闭标注模式" : "打开标注模式"}
          >
            {isAnnotationMode ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {isAnnotationMode ? "标注中" : "标注模式"}
          </button>
          <span className="text-sm">南光社区</span>
          <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
            <UserCircle className="h-6 w-6 text-blue-500" />
          </div>
        </div>
      </header>

      {/* 主体内容区 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 左侧侧边栏 */}
        {showSidebar && (
          <AnnotationWrapper id={3}>
            <aside className="w-48 bg-white border-r border-gray-200 flex-shrink-0 overflow-y-auto">
              <nav className="py-2">
              {sidebarItems.map((item, idx) => {
                if ('children' in item) {
                  const isExpanded = expandedMenus.has(item.label);
                  const Icon = item.icon;
                  return (
                    <div key={idx}>
                      <button
                        onClick={() => toggleMenu(item.label)}
                        className="w-full px-4 py-2.5 text-sm text-gray-700 flex items-center justify-between hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          {Icon && <Icon className="h-4 w-4" />}
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight className={`h-3 w-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>
                      {isExpanded && (
                        <div className="bg-gray-50">
                          {item.children.map((child, childIdx) => (
                            <Link
                              key={childIdx}
                              to={child.path}
                              className={`block px-4 py-2 text-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 transition-colors ${
                                isSidebarActive(child.path) ? 'text-blue-500 bg-blue-50' : ''
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={idx}
                    to={item.path}
                    className={`block px-4 py-2.5 text-sm hover:bg-gray-100 transition-colors ${
                      isSidebarActive(item.path)
                        ? 'text-blue-500 bg-blue-50 font-medium'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>
          </AnnotationWrapper>
        )}

        {/* 页面内容 */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
