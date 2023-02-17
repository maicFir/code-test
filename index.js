/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2022, Web技术学苑. All rights reserved
 * @LineEnd: -------------------------------------------
 * @Author: maicFir
 * @Date: 2023-02-17 11:01:35
 * @LastEditors: maicFir
 * @LastEditTime: 2023-02-17 11:06:41
 * @Description: 
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App.jsx';
const appDom = document.getElementById('app');
const root = createRoot(appDom);
root.render(<App />);