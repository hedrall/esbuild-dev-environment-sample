import React from 'react';
import { Button } from 'antd';
import './index.css';
import { useHistory } from 'react-router';

export const Page2: React.FC = () => {

  const history = useHistory();

  const onClickHandler = () => history.push('/page1');

  return (
    <div className="Page2">
      <h1>page2</h1>
      <Button type="primary" onClick={onClickHandler}>goto Page1</Button>
    </div>
  );
};
