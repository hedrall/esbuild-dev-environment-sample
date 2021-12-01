import React from 'react';
import { Button } from 'antd';
import './index.css';
import { useHistory } from 'react-router';

export const Page1: React.FC = () => {

  const history = useHistory();

  const onClickHandler = () => history.push('/page2');

  return (
    <div className="Page1">
      <h1>page1</h1>
      <Button type="primary" onClick={onClickHandler}>goto Page2</Button>
    </div>
  );
};
