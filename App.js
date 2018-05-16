import { StackNavigator } from 'react-navigation';

import login from './src/scenes/login';
import depositos from './src/scenes/depositos'

const App = StackNavigator({

  Login: {screen: login},
  Depositos: {screen: depositos}
},
{ mode: 'modal' });

export default App