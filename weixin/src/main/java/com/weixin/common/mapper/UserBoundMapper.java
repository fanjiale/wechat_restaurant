package com.weixin.common.mapper;


import java.util.Map;

import com.weixin.common.model.user.UserBound;
import com.weixin.common.model.user.WechatUser;


public interface UserBoundMapper {

	/**
	 * 查询OpenId绑定的手机号
	 * @param accNbr：接入号码
	 * @return String
	 * @author XMZ
	 */
	public String queryBoundAccNbr(String openId);
	
	/**
	 * 查询手机号所属openid
	 * @param openid
	 * @return String
	 */
	public String queryOpenid(String accNbr);
	
	/**
	 * 绑定OpenId和手机号
	 * @param userBound ： 用户绑定号码存储对象
	 * @author XMZ
	 */
	public void insertBoundAccNbr(UserBound userBound);
	
	/**
	 * 更换绑定OpenId和手机号
	 * @param userBound ： 用户绑定号码存储对象
	 * @author XMZ
	 */
	public void updateBoundAccNbr(UserBound userBound);
	
	/**
	 * 解除绑定OpenId和手机号
	 * @param openId：用户微信号标识
	 * @author XMZ
	 */
	public void deleteBoundAccNbr(String openId);
	
	/**
	 * 解除号码的绑定关系
	 * @param accNbr
	 */
	public void deleteBoundRelation(String accNbr);
	
	/**
	 * 保存微信用户基本信息 
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
