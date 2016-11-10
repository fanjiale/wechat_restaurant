package com.andy.restaurant.service;

import com.alibaba.fastjson.JSONObject;
import com.andy.restaurant.pojo.User;

import java.util.List;

/**
 * Created by fanjl on 2016/9/30.
 */
public interface S_userService {
    boolean validateUserInfo(String user_code, String password);

    JSONObject findUserByUserCode(String user_code);

    String createUser(String user_code,String username, String password);

    JSONObject list(JSONObject param);
}
