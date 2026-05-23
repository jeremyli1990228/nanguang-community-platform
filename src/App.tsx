import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Merchants from './pages/Merchants';
import CommunityManagement from './pages/CommunityManagement';
import HouseManagement from './pages/HouseManagement';
import ResidentManagement from './pages/ResidentManagement';
import EnterpriseManagement from './pages/EnterpriseManagement';
import GridManagement from './pages/GridManagement';
import ElderProfile from './pages/ElderProfile';
import SmartWatch from './pages/SmartWatch';
import SmartWatchDetail from './pages/SmartWatchDetail';
import HealthMachine from './pages/HealthMachine';
import TwelveLead from './pages/TwelveLead';
import AlarmBroad from './pages/AlarmBroad';
import AlarmRecord from './pages/AlarmRecord';
import AlarmTypeConfig from './pages/AlarmTypeConfig';
import AlarmLevelConfig from './pages/AlarmLevelConfig';
import AlarmCameraConfig from './pages/AlarmCameraConfig';
import AlarmPushRecord from './pages/AlarmPushRecord';
import Contacts from './pages/Contacts';
import Roles from './pages/Roles';
import PersonnelType from './pages/PersonnelType';
import Organization from './pages/Organization';
import MessageTemplate from './pages/MessageTemplate';
import MessageRecords from './pages/MessageRecords';
import LoginLogs from './pages/LoginLogs';
import OperationLogs from './pages/OperationLogs';
import PlaceholderPage from './pages/PlaceholderPage';
import IotBroad from './pages/IotBroad';
import IotManholeConfig from './pages/IotManholeConfig';
import IotManholeData from './pages/IotManholeData';
import IotLightpoleConfig from './pages/IotLightpoleConfig';
import IotLightpoleData from './pages/IotLightpoleData';
import IotCameraConfig from './pages/IotCameraConfig';
import IotCameraData from './pages/IotCameraData';
import IotAiboxConfig from './pages/IotAiboxConfig';
import IotAiboxData from './pages/IotAiboxData';
import IotElectricConfig from './pages/IotElectricConfig';
import IotElectricData from './pages/IotElectricData';
import IotWaterConfig from './pages/IotWaterConfig';
import IotWaterData from './pages/IotWaterData';
import IotWatchConfig from './pages/IotWatchConfig';
import IotWatchData from './pages/IotWatchData';
import IotHealthConfig from './pages/IotHealthConfig';
import IotHealthData from './pages/IotHealthData';
import IotFirehydrantConfig from './pages/IotFirehydrantConfig';
import IotFirehydrantData from './pages/IotFirehydrantData';
import IotSmokeConfig from './pages/IotSmokeConfig';
import IotSmokeData from './pages/IotSmokeData';
import IotSprayConfig from './pages/IotSprayConfig';
import IotSprayData from './pages/IotSprayData';
import IotFiredoorConfig from './pages/IotFiredoorConfig';
import IotFiredoorData from './pages/IotFiredoorData';
import IotPoliceConfig from './pages/IotPoliceConfig';
import IotPoliceData from './pages/IotPoliceData';
import IotTagConfig from './pages/IotTagConfig';
import IotTagData from './pages/IotTagData';
import IotTwelveleadConfig from './pages/IotTwelveleadConfig';
import IotTwelveleadData from './pages/IotTwelveleadData';
import IotRobotConfig from './pages/IotRobotConfig';
import IotRobotData from './pages/IotRobotData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/community/merchants" element={<Merchants />} />
          <Route path="/community/community" element={<CommunityManagement />} />
          <Route path="/community/house" element={<HouseManagement />} />
          <Route path="/community/resident" element={<ResidentManagement />} />
          <Route path="/community/enterprise" element={<EnterpriseManagement />} />
          <Route path="/community/grid" element={<GridManagement />} />
          <Route path="/permission/contacts" element={<Contacts />} />
          <Route path="/permission/roles" element={<Roles />} />
          <Route path="/permission/personnel-type" element={<PersonnelType />} />
          <Route path="/permission/organization" element={<Organization />} />
          <Route path="/system/message-template" element={<MessageTemplate />} />
          <Route path="/system/message-records" element={<MessageRecords />} />
          <Route path="/system/login-logs" element={<LoginLogs />} />
          <Route path="/system/operation-logs" element={<OperationLogs />} />
          <Route path="/elder/profile" element={<ElderProfile />} />
          <Route path="/elder/smart-watch" element={<SmartWatch />} />
          <Route path="/elder/smart-watch/detail/:id" element={<SmartWatchDetail />} />
          <Route path="/elder/health-machine" element={<HealthMachine />} />
          <Route path="/elder/twelve-lead" element={<TwelveLead />} />
          <Route path="/alarm/broad" element={<AlarmBroad />} />
          <Route path="/alarm/record" element={<AlarmRecord />} />
          <Route path="/alarm/type-config" element={<AlarmTypeConfig />} />
          <Route path="/alarm/level-config" element={<AlarmLevelConfig />} />
          <Route path="/alarm/camera-config" element={<AlarmCameraConfig />} />
          <Route path="/alarm/push-record" element={<AlarmPushRecord />} />
          <Route path="/iot" element={<Navigate to="/iot/broad" replace />} />
          <Route path="/iot/broad" element={<IotBroad />} />
          <Route path="/iot/manhole/config" element={<IotManholeConfig />} />
          <Route path="/iot/manhole/data" element={<IotManholeData />} />
          <Route path="/iot/lightpole/config" element={<IotLightpoleConfig />} />
          <Route path="/iot/lightpole/data" element={<IotLightpoleData />} />
          <Route path="/iot/camera/config" element={<IotCameraConfig />} />
          <Route path="/iot/camera/data" element={<IotCameraData />} />
          <Route path="/iot/aibox/config" element={<IotAiboxConfig />} />
          <Route path="/iot/aibox/data" element={<IotAiboxData />} />
          <Route path="/iot/electric/config" element={<IotElectricConfig />} />
          <Route path="/iot/electric/data" element={<IotElectricData />} />
          <Route path="/iot/water/config" element={<IotWaterConfig />} />
          <Route path="/iot/water/data" element={<IotWaterData />} />
          <Route path="/iot/watch/config" element={<IotWatchConfig />} />
          <Route path="/iot/watch/data" element={<IotWatchData />} />
          <Route path="/iot/health/config" element={<IotHealthConfig />} />
          <Route path="/iot/health/data" element={<IotHealthData />} />
          <Route path="/iot/firehydrant/config" element={<IotFirehydrantConfig />} />
          <Route path="/iot/firehydrant/data" element={<IotFirehydrantData />} />
          <Route path="/iot/smoke/config" element={<IotSmokeConfig />} />
          <Route path="/iot/smoke/data" element={<IotSmokeData />} />
          <Route path="/iot/spray/config" element={<IotSprayConfig />} />
          <Route path="/iot/spray/data" element={<IotSprayData />} />
          <Route path="/iot/firedoor/config" element={<IotFiredoorConfig />} />
          <Route path="/iot/firedoor/data" element={<IotFiredoorData />} />
          <Route path="/iot/police/config" element={<IotPoliceConfig />} />
          <Route path="/iot/police/data" element={<IotPoliceData />} />
          <Route path="/iot/tag/config" element={<IotTagConfig />} />
          <Route path="/iot/tag/data" element={<IotTagData />} />
          <Route path="/iot/twelvelead/config" element={<IotTwelveleadConfig />} />
          <Route path="/iot/twelvelead/data" element={<IotTwelveleadData />} />
          <Route path="/iot/robot/config" element={<IotRobotConfig />} />
          <Route path="/iot/robot/data" element={<IotRobotData />} />
          <Route path="/3d" element={<PlaceholderPage title="三维南光" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
