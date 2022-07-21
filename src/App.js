import react from 'react';
import { stylesheet, text,view} from 'react-native';
import { LoginForm} from 'react-native';

export default function app () {
  return (
    <view>
       <LoginForm></LoginForm>
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