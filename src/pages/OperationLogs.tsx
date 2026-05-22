import React, { useState } from 'react';
import { Search, RefreshCw, Calendar } from 'lucide-react';

const OperationLogs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [formData, setFormData] = useState({
    operation: '',
    username: '',
    result: '',
    startTime: '',
    endTime: ''
  });

  const logs = [
    { id: 1, operation: '同步门禁设备状态', username: '123', path: '/nanguangcu...', method: 'GET', ip: '58.250.244.56', time: '2026-05-14 18:57:04', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 2, operation: '同步门禁设备状态', username: '123', path: '/nanguangcu...', method: 'GET', ip: '58.250.244.56', time: '2026-05-14 18:53:28', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 3, operation: '同步门禁设备状态', username: '123', path: '/nanguangcu...', method: 'GET', ip: '58.250.244.56', time: '2026-05-14 18:29:35', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 4, operation: '同步设备状态', username: '123', path: '/nanguangcu...', method: 'GET', ip: '58.250.244.56', time: '2026-05-14 18:29:05', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 5, operation: '同步门禁设备状态', username: '123', path: '/nanguangcu...', method: 'GET', ip: '58.250.244.56', time: '2026-05-14 18:28:56', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 6, operation: '同步门禁设备状态', username: '123', path: '/nanguangcu...', method: 'GET', ip: '58.250.244.56', time: '2026-05-14 18:28:39', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 7, operation: '同步设备状态', username: '123', path: '/nanguangcu...', method: 'GET', ip: '58.250.244.56', time: '2026-05-14 17:38:11', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 8, operation: '同步门禁设备状态', username: '123', path: '/nanguangcu...', method: 'GET', ip: '10.203.45.250', time: '2026-05-13 10:58:08', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 9, operation: '修改用户名', username: 'test', path: '/nanguangcu...', method: 'POST', ip: '10.200.178.67', time: '2026-04-24 16:53:02', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 10, operation: '修改用户名', username: 'test', path: '/nanguangcu...', method: 'POST', ip: '10.200.178.67', time: '2026-04-24 16:53:02', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 11, operation: '修改用户名', username: 'test', path: '/nanguangcu...', method: 'POST', ip: '10.200.178.67', time: '2026-04-24 16:52:57', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 12, operation: '修改用户名', username: 'test', path: '/nanguangcu...', method: 'POST', ip: '10.200.178.67', time: '2026-04-24 16:52:57', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 13, operation: '修改用户名', username: 'test', path: '/nanguangcu...', method: 'POST', ip: '10.200.178.67', time: '2026-04-24 16:52:48', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 14, operation: '修改用户名', username: 'test', path: '/nanguangcu...', method: 'POST', ip: '10.200.178.67', time: '2026-04-24 16:52:44', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 15, operation: '修改用户名', username: 'test', path: '/nanguangcu...', method: 'POST', ip: '10.200.178.67', time: '2026-04-24 16:52:38', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
    { id: 16, operation: '修改用户名', username: 'test', path: '/nanguangcu...', method: 'POST', ip: '10.200.178.67', time: '2026-04-24 16:52:34', result: '登录成功', summary: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/...' },
  ];

  const handleSearch = () => {
    console.log('搜索', formData);
  };

  const handleReset = () => {
    setFormData({ operation: '', username: '', result: '', startTime: '', endTime: '' });
  };

  const totalItems = 1208;
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <div className="p-5">
      {/* 搜索区域 */}
      <div className="bg-white rounded-t-lg p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">操作</span>
              <input
                type="text"
                value={formData.operation}
                onChange={(e) => setFormData({ ...formData, operation: e.target.value })}
                placeholder="操作名称"
                className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ width: '180px' }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">用户名</span>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                placeholder="用户名"
                className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ width: '180px' }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">操作结果</span>
              <select
                value={formData.result}
                onChange={(e) => setFormData({ ...formData, result: e.target.value })}
                className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ width: '150px' }}
              >
                <option value="">请选择</option>
                <option value="success">成功</option>
                <option value="failed">失败</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">操作时间</span>
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
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">操作</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">用户名</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">请求路径</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">请求方式</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">请求IP</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">上报时间</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">操作结果</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">摘要</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((item, idx) => (
                <tr key={item.id} className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">{((currentPage - 1) * pageSize) + idx + 1}</td>
                  <td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">{item.operation}</td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">{item.username}</td>
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
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">5</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">6</button>
            <span className="text-gray-400">...</span>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">61</button>
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

export default OperationLogs;
