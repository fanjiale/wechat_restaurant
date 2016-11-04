package com.weixin.common.user.bmo;

import java.util.Map;

import com.weixin.common.model.user.UserBound;
import com.weixin.common.model.user.WechatUser;


public interface UserBoundBMO {

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
	 * @return String
	 * @author XMZ
	 */
	public String insertBoundAccNbr(UserBound userBound);
	
	/**
	 * 更换绑定OpenId和手机号
	 * @param userBound : 用户绑定号码存储对象
	 * @return String
	 * @author XMZ
	 */
	public String updateBoundAccNbr(UserBound userBound);
	
	/**
	 * 解除绑定OpenId和手机号
	 * @param openId：用户微信号标识
	 * @return String
	 * @author XMZ
	 */
	public Map<String,Object> deleteBoundAccNbr(String openId);
	
	/**
	 * 新增微信用户基本信息 
	 * @param wechatUser：用户基础信息
	 * @author XMZ
	 */
	public void insertWechatUser(WechatUser wechatUser);
	
	/**
	 * 更新微信用户基本信息 
	 * @param wechatUser：用户基础信息
	 * @author XMZ
	 */
	public void updateWechatUser(WechatUser wechatUser);
	
	/**
	 * 查询微信用户是否已存在
	 * @param openId
	 * @return String
	 */
	public String queryWechatUserByOpenId(String openId);
}
