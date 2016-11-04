package com.weixin.common.user.service;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.http.HttpRequest;
import org.apache.http.HttpResponse;
import com.andy.common.domains.RspResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.weixin.common.model.user.UserBound;
import com.weixin.common.model.user.WechatUser;
import com.weixin.common.user.smo.UserBoundSMO;
import com.weixin.common.util.CommonConstants;

/**
 * 用户解绑/绑定服务类 
 */
@Controller
@RequestMapping("/userBoundWeb")
public class UserBoundService {

	@Autowired
	private UserBoundSMO userBoundSMO;
	
	@RequestMapping("queryBoundAccNbr")
	@ResponseBody
	public RspResult queryBoundAccNbr(HttpSession hs){
		String openId = hs.getAttribute(CommonConstants.SESSION_ATTR_OPENID).toString();
		String res =  userBoundSMO.queryBoundAccNbr(openId);
		return RspResult.getSuccessResult().setData(res);
	}
	
	@RequestMapping("insertBoundAccNbr")
	@ResponseBody
	public RspResult insertBoundAccNbr(HttpSession hs,UserBound userBound){
		userBound.setOpenId(hs.getAttribute(CommonConstants.SESSION_ATTR_OPENID).toString());
		Map<String,Object> map =  userBoundSMO.insertBoundAccNbr(userBound);
		if(CommonConstants.EXTRACT_SUCESS.equals(String.valueOf(map.get("resultCode")))){
			hs.setAttribute(CommonConstants.SESSION_ATTR_ACCNBR,userBound.getAccNbr());
		}
		return RspResult.getSuccessResult().setData(map);
	}
	
	@RequestMapping("getVerCodeFromUAM")
	@ResponseBody
	public RspResult getVercodeByAccNbr(HttpSession hs,String accNbr){
		Map<String,Object>  map =  userBoundSMO.getVercodeByAccNbr(accNbr);
		return RspResult.getSuccessResult().setData(map);
	}
	
	@RequestMapping("updateBoundAccNbr")
	@ResponseBody
	public RspResult updateBoundAccNbr(HttpSession hs,UserBound userBound){
		userBound.setOpenId(hs.getAttribute(CommonConstants.SESSION_ATTR_OPENID).toString());
		Map<String,Object>  map =  userBoundSMO.updateBoundAccNbr(userBound);
		if(CommonConstants.EXTRACT_SUCESS.equals(String.valueOf(map.get("resultCode")))){
			hs.setAttribute(CommonConstants.SESSION_ATTR_ACCNBR,userBound.getAccNbr());
		}
		return RspResult.getSuccessResult().setData(map);
	}
	
	@RequestMapping("deleteBoundAccNbr")
	@ResponseBody
	public RspResult deleteBoundAccNbr(HttpSession hs){
		String openId = hs.getAttribute(CommonConstants.SESSION_ATTR_OPENID).toString();
		Map<String,Object> map =  userBoundSMO.deleteBoundAccNbr(openId);
		if(CommonConstants.EXTRACT_SUCESS.equals(String.valueOf(map.get("resultCode")))){
			hs.removeAttribute(CommonConstants.SESSION_ATTR_ACCNBR);
		}
		return RspResult.getSuccessResult().setData(map);
	}
	
	@RequestMapping("saveWechatUser")
	@ResponseBody
	public RspResult saveWechatUser(HttpServletRequest request){
		String openId = request.getParameter("openId");
		String statusCd = request.getParameter("statusCd");
		WechatUser wechatUser = new WechatUser();
		wechatUser.setOpenId(openId);
		wechatUser.setStatusCd(Integer.parseInt(statusCd));
		Map<String,Object> map = userBoundSMO.saveWechatUser(wechatUser);
		return RspResult.getSuccessResult().setData(map);
	}
}
