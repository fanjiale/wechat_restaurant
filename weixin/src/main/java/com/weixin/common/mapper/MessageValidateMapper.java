package com.weixin.common.mapper;

import java.util.Map;

import com.weixin.common.model.validate.ValidateMessage;


public interface MessageValidateMapper {
	/**
	 * 统计OpenId获取验证码的次数
	 * @param openId
	 */
	public Long countOpenIdValidateTimes(Map<String,Object> map);
	
	/**
	 * 保存校验码记录
	 * @param validateMessage
	 */
	public void insertValidateMessage(ValidateMessage validateMessage);
	
	/**
	 * 查询验证码信息
	 * @param validateMessage
	 */
	public ValidateMessage queryValidateMessage(ValidateMessage vm);
	
	/**
	 * 获取UAM验证码接口的序列号
	 * @return
	 * @author XMZ
	 */
	public String getUamTransactionSeq();
}
