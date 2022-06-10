import { configureStore } from '@reduxjs/toolkit'

import personnel from './reducer/personnel'
import global from './reducer/global'

export default configureStore({
  reducer: {
    personnel,
    global,
  },
})