package com.andy.restaurant.service;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by fanjl on 2016/9/30.
 */
public interface S_loginLogService {
    /**
     * 记录用户登录
     *
     * @param username
     * @param request
     */
    void recordUserLoginLog(String username, HttpServletRequest request);
}
