/**
 * title
 */
import React, { ReactNode, Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import GoogleCast, { CastButton } from 'react-native-google-cast'

interface IProps {
}

interface IState {
}

@connect((state: { local: { user: any; }; }) => ({
  user: state.local.user,
}))
export default class index extends Component <IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    GoogleCast.showIntroductoryOverlay();
  }

  render(): ReactNode {
    return (
      <SafeAreaView>
        <Text>Home</Text>
        <CastButton style={{ width: 24, height: 24, backgroundColor: 'red' }} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
});
