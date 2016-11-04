package com.weixin.common.user.smo;

import java.util.Map;

import com.weixin.common.model.user.UserBound;
import com.weixin.common.model.user.WechatUser;



public interface UserBoundSMO {

	/**
	 * 查询OpenId绑定的手机号
	 * @param openId：用户微信号标识
	 * @return String
	 * @author XMZ
	 */
	public String queryBoundAccNbr(String openId);
	
	/**
	 * 绑定OpenId和手机号
	 * @param userBound : 用户绑定号码存储对象
	 * @return Map<String,Object>
	 * @author XMZ
	 */
	public Map<String,Object> insertBoundAccNbr(UserBound userBound);
	
	/**
	 * 获取验证码  （调用UAM）
	 * @param accNbr：用户号码
	 * @return Map
	 */
	public Map<String,Object> getVercodeByAccNbr(String accNbr);
	
	/**
	 * 获取验证码（自行生成调用短信接口）  
	 * @return Map
	 */
	public Map<String,Object> getVercodeByAccNbr(String openId,String accNbr);
	
	/**
	 * 更换绑定OpenId和手机号
	 * @param userBound : 用户绑定号码存储对象
	 * @return Map<String,Object>
	 * @author XMZ
	 */
	public Map<String,Object> updateBoundAccNbr(UserBound userBound);
	
	/**
	 * 解除绑定OpenId和手机号
	 * @param openId：用户微信号标识
	 * @return String
	 * @author XMZ
	 */
	public Map<String,Object> deleteBoundAccNbr(String openId);
	
	/**
	 * 保存微信用户基本信息 
	 * @param wechatUser：用户基础信息
	 * @return Map<String,Object>
	 * @author XMZ
	 */
	public Map<String,Object> saveWechatUser(WechatUser wechatUser);
}
