import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { pattern1 } from './data.js'
import Matrix from './Matrix.js'

ReactDOM.render(<Matrix values={pattern1} />, document.getElementById('root'));
// Matrix gets a values prop(erty) of pattern1, which is imported from data.js
