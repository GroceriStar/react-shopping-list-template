Example:
```

import axios from 'axios'
import { API_ROOT } from '../utils/api-config'

const changePassword = (pass, accessToken) => {
  return new Promise((resolve, reject) => {
    axios.request({
     method: 'post',
     url: API_ROOT + `/api/userData/reset-password?access_token=${accessToken}`,//modify the reset method in
     data: {newPassword: pass }//         userdata.js backend call a different method to handle this
    }).then(response => {
      //  console.log(response)
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
    })
}
export default changePassword

```


// @todo let's keep that version in someplace. maybe later we'll use a different versions of API
let backendHost;
// const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if(hostname === 'groceristar.netlify.com') {
  backendHost = 'https://loopback-react-account.herokuapp.com';
} else if(hostname === 'staging.realsite.com') {
  backendHost = 'https://staging.api.realsite.com';

} else if(/^qa/.test(hostname)) {
  backendHost = `https://api.${hostname}`;

} else {
  backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:3000';

}

export const API_ROOT = `${backendHost}`;
