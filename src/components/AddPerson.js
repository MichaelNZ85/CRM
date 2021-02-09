import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';

class AddPerson extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name={'plus'} size={50} color={tintColor} />
    )
  }
  render() {
    return (
      <View>
        <Text>Add Person screen</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return { people: state.people }
}

export default connect(null, actions)(AddPerson);
