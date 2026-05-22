import React, { useState } from 'react';
import { Search, RefreshCw, Plus, Calendar } from 'lucide-react';

const LoginLogs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [formData, setFormData] = useState({
    loginAccount: '',
    authResult: '',
    startTime: '',
    endTime: ''
  });

  const logs = [
    { id: 1, username: '123', loginPhone: '13512340001', authType: 'UsernamePassword', path: '/nanguangcu...', method: 'POST', ip: '58.250.244.56', time: '2026-05-20 12:02:59', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 2, username: '123', loginPhone: '13512340001', authType: 'UsernamePassword', path: '/nanguangcu...', method: 'POST', ip: '58.250.244.56', time: '2026-05-20 11:55:27', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 3, username: '123', loginPhone: '13512340001', authType: 'UsernamePassword', path: '/nanguangcu...', method: 'POST', ip: '58.250.244.56', time: '2026-05-16 11:21:14', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 4, username: '123', loginPhone: '13512340001', authType: 'UsernamePassword', path: '/nanguangcu...', method: 'POST', ip: '58.250.244.56', time: '2026-05-15 15:41:35', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 5, username: '123', loginPhone: '13512340001', authType: 'UsernamePassword', path: '/nanguangcu...', method: 'POST', ip: '58.250.244.56', time: '2026-05-15 13:27:22', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 6, username: '123', loginPhone: '13512340001', authType: 'UsernamePassword', path: '/nanguangcu...', method: 'POST', ip: '58.250.244.56', time: '2026-05-15 13:16:40', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 7, username: '123', loginPhone: '13512340001', authType: 'UsernamePassword', path: '/nanguangcu...', method: 'POST', ip: '58.250.244.56', time: '2026-05-15 12:00:14', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 8, username: '123', loginPhone: '13512340001', authType: 'UsernamePassword', path: '/nanguangcu...', method: 'POST', ip: '58.250.244.56', time: '2026-05-15 11:56:21', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 9, username: '123', loginPhone: '13512340001', authType: 'UsernamePassword', path: '/nanguangcu...', method: 'POST', ip: '58.250.244.56', time: '2026-05-15 11:46:06', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 10, username: '123', loginPhone: '13512340001', authType: 'UsernamePassword', path: '/nanguangcu...', method: 'POST', ip: '58.250.244.56', time: '2026-05-15 09:26:00', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 11, username: '123', loginPhone: '13512340001', authType: 'UsernamePassword', path: '/nanguangcu...', method: 'POST', ip: '58.250.244.56', time: '2026-05-14 17:28:15', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 12, username: '123', loginPhone: '13512340001', authType: 'UsernamePassword', path: '/nanguangcu...', method: 'POST', ip: '58.250.244.56', time: '2026-05-14 11:59:46', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 13, username: '123', loginPhone: '13512340001', authType: 'UsernamePassword', path: '/nanguangcu...', method: 'POST', ip: '58.250.244.56', time: '2026-05-13 19:54:43', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 14, username: '123', loginPhone: '13512340001', authType: 'UsernamePassword', path: '/nanguangcu...', method: 'POST', ip: '58.250.244.56', time: '2026-05-13 15:39:52', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 15, username: '123', loginPhone: '13512340001', authType: 'UsernamePassword', path: '/nanguangcu...', method: 'POST', ip: '58.250.244.56', time: '2026-05-13 15:38:36', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 16, username: '123', loginPhone: '13512340001', authType: 'UsernamePassword', path: '/nanguangcu...', method: 'POST', ip: '10.200.94.174', time: '2026-05-13 15:22:40', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) rv:109.0 Gecko/20100101 Firefox/...' },
  ];

  const handleSearch = () => {
    console.log('搜索', formData);
  };

  const handleReset = () => {
    setFormData({ loginAccount: '', authResult: '', startTime: '', endTime: '' });
  };

  const totalItems = 65;
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <div className="p-5">
      {/* 搜索区域 */}
      <div className="bg-white rounded-t-lg p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">登录账号</span>
              <input
                type="text"
                value={formData.loginAccount}
                onChange={(e) => setFormData({ ...formData, loginAccount: e.target.value })}
                placeholder="用户名/登录手机"
                className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ width: '180px' }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">认证结果</span>
              <select
                value={formData.authResult}
                onChange={(e) => setFormData({ ...formData, authResult: e.target.value })}
                className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ width: '150px' }}
              >
                <option value="">请选择</option>
                <option value="success">登录成功</option>
                <option value="failed">登录失败</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">登录时间</span>
              <Calendar className="h-4 w-4 text-gray-400" />
              <input
                type="date"
                value={formData.startTime}
                onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ width: '150px' }}
              />
              <span className="text-gray-400">至</span>
              <input
                type="date"
                value={formData.endTime}
                onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ width: '150px' }}
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
            <button className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors">
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
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">用户名</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">登录手机</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">授权类型</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">请求路径</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">请求方式</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">登录IP</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">登录时间</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">认证结果</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">摘要</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((item, idx) => (
                <tr key={item.id} className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">{((currentPage - 1) * pageSize) + idx + 1}</td>
                  <td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">{item.username}</td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">{item.loginPhone}</td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">{item.authType}</td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200 max-w-xs truncate">{item.path}</td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">{item.method}</td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">{item.ip}</td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">{item.time}</td>
                  <td className="px-4 py-2 text-sm border-b border-gray-200">
                    <span className="px-2 py-0.5 bg-green-100 text-green-600 rounded text-xs">
                      {item.result}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200 max-w-xs truncate">{item.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 分页 */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
          <span className="text-sm text-gray-600">共 {totalItems} 条</span>
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
            <button className="px-3 py-1 rounded text-sm bg-blue-500 text-white">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">3</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">4</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
              &gt;
            </button>
          </div>
          <span className="text-sm text-gray-600">前往</span>
          <input
            type="number"
            value={currentPage}
            onChange={(e) => setCurrentPage(Math.min(Math.max(1, Number(e.target.value)), totalPages))}
            className="w-14 px-2 py-1.5 border border-gray-300 rounded text-sm text-center"
          />
          <span className="text-sm text-gray-600">页</span>
        </div>
      </div>
    </div>
  );
};

export default LoginLogs;
