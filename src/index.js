import React from 'react';
import ReactDOM from 'react-dom/client';

// 创建一个简单的函数式组件
function App() {
    return (
        <div>
            <h1>Hello, React!</h1>
            <p>Welcome to my React application.</p>
        </div>
    );
}

// 获取 HTML 文档中的根元素
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// 使用 ReactDOM 渲染 App 组件到页面上
root.render(<App />);
