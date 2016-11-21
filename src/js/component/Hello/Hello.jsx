import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./Hello.css";
import "./Hello.scss";

// 把里面的组件渲染到页面
ReactDOM.render(
	<div className="Hello">
		<span>Hello, world123!</span>
		<p></p>
	</div>,
    document.getElementById('hello')
);