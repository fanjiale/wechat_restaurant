package com.weixin.common.model.validate;

import java.util.Date;
/**
 * 验证码消息
 * @author H
 *
 */
public class ValidateMessage {
	//与表中MSG_ID对应
	private Long msgId;
	//关注者openid
	private String openId;
	//关注着号码
	private String accNbr;
	//验证码
	private String vCode;
	//创建时间
	private Date createDate;
	//失效时间
	private int expTime;
	
	public int getExpTime() {
		return expTime;
	}
	public void setExpTime(int expTime) {
		this.expTime = expTime;
	}
	public String getOpenId() {
		return openId;
	}
	public void setOpenId(String openId) {
		this.openId = openId;
	}
	
	public Long getMsgId() {
		return msgId;
	}
	public void setMsgId(Long msgId) {
		this.msgId = msgId;
	}
	public String getAccNbr() {
		return accNbr;
	}
	public void setAccNbr(String accNbr) {
		this.accNbr = accNbr;
	}
	public String getvCode() {
		return vCode;
	}
	public void setvCode(String vCode) {
		this.vCode = vCode;
	}
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
}
