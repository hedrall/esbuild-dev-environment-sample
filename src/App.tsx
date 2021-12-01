import React from 'react';
import { Content } from 'antd/es/layout/layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Button, Layout } from 'antd';
import 'antd/dist/antd.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Page1 } from '@/components/pages/page1';
import { Page2 } from '@/components/pages/page2';

const RoutingContent: React.FC = () => {
  return (
    <Content className="site-layout-background" style={{ padding: 0, margin: 0 }}>
      <Switch>
        <Route path={'/page1'} component={Page1} exact={true} />
        <Route path={'/page2'} component={Page2} exact={true}  />
        <Route path="*">
          <Redirect to={'page2'} />
        </Route>
      </Switch>
    </Content>
  );
};

export const App: React.FC = () => (
  <Layout>
    <Router>
      <RoutingContent />
    </Router>
  </Layout>
);
