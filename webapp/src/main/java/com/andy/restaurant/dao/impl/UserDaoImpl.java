package com.andy.restaurant.dao.impl;

import com.alibaba.fastjson.JSONObject;
import com.andy.restaurant.dao.UserDao;
import com.skytech.ark.jdbc.GenericCRUD;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by fanjl on 2016/9/30.
 */
@Repository
public class UserDaoImpl extends GenericCRUD<JSONObject> implements UserDao {

    @Override
    protected String getTableName() {
        return "S_USER";
    }

    @Override
    protected JSONObject wrap(JSONObject jsonObject) {
        return jsonObject;
    }

    @Override
    protected JSONObject unWrap(JSONObject jsonObject) {
        return jsonObject;
    }

    public List<JSONObject> listUserByUserName(String username){
        JSONObject condition = new JSONObject();
        condition.put("username", username);

        return list(condition);
    }
}
