import React from 'react';
import { createRoot } from 'react-dom/client'; // 引入 React 18 的 createRoot
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div); // 创建根节点
  root.render(<App />); // 渲染组件
  root.unmount(); // 卸载组件
});

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(5);
  });
});

    