import axios from 'axios';
import { Toast } from 'antd-mobile';

let needLoadingRequestCount = 0
axios.interceptors.request.use(function(config){
    if(needLoadingRequestCount == 0){
        Toast.loading('加载中...',0);   
    };
    needLoadingRequestCount++;
    return config;
});

axios.interceptors.response.use(function(config){
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        
        Toast.hide();
    }
    
    return config;
});