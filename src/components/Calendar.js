import { CalendarList } from 'react-native-common-date-picker';
import { Modal } from '@react-navigation/native';

  <Modal animationType="slide" visible={this.state.visible}>
    <CalendarList
      containerStyle={{ flex: 1 }}
      cancel={() => this.setState({ visible: false })}
      confirm={(data) => {
        this.setState({
          selectedDate1: data[0],
          selectedDate2: data[1],
          visible: false,
        });
      }}
    />
  </Modal>;
