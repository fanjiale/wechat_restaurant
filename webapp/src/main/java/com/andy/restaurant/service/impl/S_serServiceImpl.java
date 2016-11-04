package com.andy.restaurant.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.andy.restaurant.dao.S_userDao;
import com.andy.restaurant.pojo.User;
import com.andy.restaurant.service.S_userService;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by fanjl on 2016/9/30.
 */
@Service
public class S_serServiceImpl implements S_userService {

    @Autowired
    private S_userDao userDao;

    @Override
    public boolean validateUserInfo(String username, String password) {
        List<JSONObject> users = userDao.listUserByUserName(username);

        if (!users.isEmpty()) {
            JSONObject user = users.get(0);

            String ps = user.getString("password");

            if (DigestUtils.md5Hex(password).endsWith(ps)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public User findUserByName(String username) {
        User user = new User();
        List<JSONObject> users = userDao.listUserByUserName(username);

        if (!users.isEmpty()) {
            JSONObject item = users.get(0);

            user.setUsername(username);
        }

        return user;
    }

    @Override
    public String createUser(String user_name, String password) {
        JSONObject condition = new JSONObject();
        condition.put("user_name", user_name);
        condition.put("password", DigestUtils.md5Hex(password));

        return userDao.save(condition);
    }
}
