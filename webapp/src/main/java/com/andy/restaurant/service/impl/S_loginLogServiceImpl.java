package com.andy.restaurant.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.andy.restaurant.dao.S_loginLogDao;
import com.andy.restaurant.service.S_loginLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

/**
 * Created by fanjl on 2016/9/30.
 */
@Service
public class S_loginLogServiceImpl implements S_loginLogService {

    @Autowired
    private S_loginLogDao loginLogDao;

    @Override
    public void recordUserLoginLog(String username, HttpServletRequest request) {
        String ip;
        if (request.getHeader("x-forwarded-for") == null) {
            ip = request.getRemoteAddr();
        } else {
            ip = request.getHeader("x-forwarded-for");
        }

        JSONObject loginLog = new JSONObject();
        loginLog.put("user_name", username);
        loginLog.put("login_time", new Date());
        loginLog.put("ip_address", ip);

        loginLogDao.save(loginLog);
    }


}
