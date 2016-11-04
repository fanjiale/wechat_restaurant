package com.weixin.common.core;

import com.weixin.common.model.request.UserRequest;


/**
 * 事件处理类
 */
public interface SimpleEventManage {

	/**
	 * 默认请求事件处理
	 * @param ur 用户请求内容
	 * @return
	 */
	public String dealRequestDefaultMsg(UserRequest ur);

	/**
	 * Click事件处理
	 * @param ur 用户请求内容
	 * @return
	 */
	public String dealClickEvent(UserRequest ur);
	
	/**
	 * 订阅事件处理
	 * @param ur 用户请求内容
	 * @return
	 */
	public String dealSubscribeEvent(UserRequest ur);
	
	/**
	 * 退订事件处理
	 * @param ur 用户请求内容
	 * @return
	 */
	public String dealUnSubscribeEvent(UserRequest ur);

	/**
	 * 处理文本消息
	 * @param ur
	 * @return
	 */
	public String dealTextReq(UserRequest ur);
	
}
