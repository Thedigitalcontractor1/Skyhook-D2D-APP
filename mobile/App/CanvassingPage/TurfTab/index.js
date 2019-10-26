import React from 'react';
import { View } from 'react-native';
import { Header, Text, Button, Segment } from 'native-base';

import SegmentList from './SegmentList';
import SegmentInfo from './SegmentInfo';

import { say } from '../../common';

export default ListTab = props => {
  const { segmentTurf } = props.refer.state;

  return (
    <View>
      <Header hasSegment style={{paddingTop: 0}}>
        <Segment>
          <Button first active={(segmentTurf==='list')} onPress={() => props.refer.setState({segmentTurf: 'list'})}><Text>List</Text></Button>
          <Button last active={(segmentTurf==='info')} onPress={() => props.refer.setState({segmentTurf: 'info'})}><Text>Info</Text></Button>
        </Segment>
      </Header>
      <SegmentList refer={props.refer} />
      <SegmentInfo refer={props.refer} />
    </View>
  );
}
