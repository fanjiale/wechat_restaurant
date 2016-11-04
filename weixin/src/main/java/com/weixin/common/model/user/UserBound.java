package com.weixin.common.model.user;

import java.util.Date;

public class UserBound {

	private Integer boundId; //绑定主键
	private String openId; //用户微信号
	private String accNbr; //用户手机号
	private String msgId;//内部校验短信ID
	private Date effDate; //生效时间
	private Date expDate; //失效时间
	private Date createDate; //创建时间
	private String verCode; //验证码
	 
	public String getMsgId() {
		return msgId;
	}
	public void setMsgId(String msgId) {
		this.msgId = msgId;
	}
	public Integer getBoundId() {
		return boundId;
	}
	public void setBoundId(Integer boundId) {
		this.boundId = boundId;
	}
	public String getOpenId() {
		return openId;
	}
	public void setOpenId(String openId) {
		this.openId = openId;
	}
	public String getAccNbr() {
		return accNbr;
	}
	public void setAccNbr(String accNbr) {
		this.accNbr = accNbr;
	}
	public Date getEffDate() {
		return effDate;
	}
	public void setEffDate(Date effDate) {
		this.effDate = effDate;
	}
	public Date getExpDate() {
		return expDate;
	}
	public void setExpDate(Date expDate) {
		this.expDate = expDate;
	}
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
	public String getVerCode() {
		return verCode;
	}
	public void setVerCode(String verCode) {
		this.verCode = verCode;
	}
}
