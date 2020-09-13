import {
  DATA_START,
  DATA_SUCCESS,
  DATA_ERROR,
} from '../actionTypes';

import {getScheduleList} from '../service';

async function scheduleList() {  
  await getScheduleList()
  .then((res)=>{
    return {
        type: DATA_SUCCESS,
        payload: res
    }
  })
  .catch((err)=>{
    return {
      type: DATA_ERROR      
    }
  })
}

export default {
  scheduleList
}