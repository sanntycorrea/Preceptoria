import react from 'react';
import { stylesheet, text,view} from 'react-native';
import { view } from 'react-native-web';

export default function app () {
  return (
    <view style={styles.container}>
      <text>holas</text>
    </view>
  );
}

const styles=stylesheet.create({
container: {
  flex: 1,
  backgroundcolor:"255",
  alignitems:"center",
  justifycontent: "center",
 },
})
;