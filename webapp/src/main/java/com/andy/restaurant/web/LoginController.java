package com.andy.restaurant.web;

import com.alibaba.fastjson.JSONObject;
import com.andy.restaurant.pojo.Result;
import com.andy.restaurant.pojo.User;
import com.andy.restaurant.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by fanjl on 2016/9/27.
 */
@Controller
public class LoginController {
    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index(){
        return "login";
    }

    @RequestMapping(value = "login", method = RequestMethod.POST)
    @ResponseBody
    public Result login(@RequestBody JSONObject userInfo, HttpServletRequest request){
        logger.info("用户" + userInfo.getString("username")  +"请求登录");
        Result result = new Result();

        String username = userInfo.getString("username");
        String password = userInfo.getString("password");

        if(StringUtils.isEmpty(username) || StringUtils.isEmpty(password)){
            result.returnErrorMsg("用户名或密码不能为空！");
        }

        if(userService.validateUserInfo(username, password)){
            User user = userService.findUserByName(username);
            user.setIp(request.getRemoteAddr());

            request.setAttribute("user", user);
        }
        else {
            result.returnErrorMsg("用户名或密码错误！");
        }

        return result;

    }

}
