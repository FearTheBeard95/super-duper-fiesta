import '@aws-amplify/ui-react/styles.css';
import './App.css';
import React, { Component } from 'react';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import { handleReceiveData } from './redux-store/actions/shared';
import AddDocument from './components/AddDocument';
import ViewDocument from './components/ViewDocument';

class App extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleReceiveData()).then(() =>
      this.setState({
        loading: false,
      })
    );
  }
  render() {
    return (
      <Spin spinning={this.state.loading} size='large'>
        <ViewDocument />
      </Spin>
    );
  }
}

export default connect()(App);
