package com.weixin.common.core.impl;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import net.sf.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.weixin.common.config.load.xml.XMLConfigLoader;
import com.weixin.common.core.WxService;
import com.weixin.common.mapper.AccessTokenMapper;
import com.weixin.common.model.menu.Menu;
import com.weixin.common.model.token.AccessToken;
import com.weixin.common.model.token.AccessTokenCode;
import com.weixin.common.util.CommonConstants;
import com.weixin.common.util.HttpUtils;
import com.weixin.common.util.MsgHandleUtil;

@Component("wxService")
public class WxServiceImpl implements WxService{

	private static Logger log = LoggerFactory.getLogger(WxServiceImpl.class);
	@Autowired
	private AccessTokenMapper accessTokenMapper;
	
	private String getAccessToken(){
		/*HashMap<String,Object> map =  accessTokenMapper.getAccessTokenConfig(CommonConstants.ACCESS_TOKEN_TYPE_NORMAL);
		return map.get("ACCESS_TOKEN")==null?"":String.valueOf(map.get("ACCESS_TOKEN"));*/
		
		return getAccessToken(XMLConfigLoader
				.getBaseConfig().getAppid(), XMLConfigLoader
				.getBaseConfig().getSecret()).getToken();
	}
	
	/**
	 * 获取AccessToken
	 * @param appid
	 * @param appsecret
	 * @return AccessToken
	 */
	public AccessToken getAccessToken(String appid, String appsecret) {
		AccessToken accessToken = null;
		String requestUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid="
				+ appid + "&secret=" + appsecret;
		JSONObject jsonObject = HttpUtils.httpRequest(requestUrl, "GET", null);
		// 如果请求成功
		if (null != jsonObject) {
			try {
				accessToken = new AccessToken();
				accessToken.setToken(jsonObject.getString("access_token"));
				accessToken.setExpiresIn(jsonObject.getInt("expires_in"));
			} catch (Exception e) {
				accessToken = null;
				// 获取token失败
				log.error("获取token失败 errcode:{} errmsg:{}",
						jsonObject.getInt("errcode"),
						jsonObject.getString("errmsg"));
			}
		}
		return accessToken;
	}
	
	/**
	 * 使用code换取AccessToken
	 * @param appid
	 * @param appsecret
	 * @param code
	 * @return Map<String,Object>
	 */
	public Map<String,Object> getAccessTokenByCode(String appID, String appsecret, String code){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("resultCode", "0");//成功
		
		AccessTokenCode accessTokenCode = null;
		//换取网页授权access_token页面的构造方式地址
		String requestUrl = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" + appID +
		 		"&secret=" + appsecret + "&code=" + code + "&grant_type=authorization_code";
		 
		JSONObject jsonObject = HttpUtils.httpRequest(requestUrl, "GET", null);
		// 如果请求成功
		if (null != jsonObject) {
			try {
				accessTokenCode = new AccessTokenCode();
				accessTokenCode.setAccessToken(jsonObject.getString("access_token"));
				accessTokenCode.setExpiresIn(jsonObject.getString("expires_in"));
				accessTokenCode.setRefreshToken(jsonObject.getString("refresh_token"));
				accessTokenCode.setOpenId(jsonObject.getString("openid"));
				accessTokenCode.setScope(jsonObject.getString("scope"));
				map.put("resultMsg", accessTokenCode);
			} catch (Exception e) {
				accessTokenCode = null;
				map.put("resultCode", String.valueOf(jsonObject.getInt("errcode")));
				map.put("resultMsg", jsonObject.getString("errmsg"));
			}
		}
		return map;
	}
	
	/**
	 * 调用客服接口
	 * @param accessToken
	 * @param msgInfo
	 */
	public Map<String,Object> sendCustService(String msgInfo){
		Map<String,Object> map = new HashMap<String,Object>();
		String requestUrl = "https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=" + getAccessToken();
		
		try {
			JSONObject jsonObject = HttpUtils.httpRequest(requestUrl, "POST", msgInfo);
			// 如果请求成功
			if (null != jsonObject) {
				map.put("resultCode", jsonObject.getString("errcode"));
				map.put("resultMsg", jsonObject.getString("errmsg"));
			}
		 } catch (Exception e) {
			map.put("resultCode", CommonConstants.ERROR_CODE_1);
			map.put("resultMsg", MsgHandleUtil.getExceptionString(e, 400));
		 }
		return map;
	}
	
	/**
	 * 获取二维码
	 * @param accessToken
	 * @param jsonMsg
	 * @return JSONObject
	 */
	public JSONObject getQr(String jsonMsg){
		String requestUrl = " https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=TOKEN";
		requestUrl = requestUrl.replace("TOKEN", getAccessToken());
		JSONObject jsonObject = HttpUtils.httpRequest(requestUrl, "POST", jsonMsg);
		return jsonObject;
	}
	
	/**
	 * 用ticket获取二维码
	 * @param ticket
	 * @return boolean
	 */
	public boolean chageQr(String ticket){
		boolean result = false;
		String requestUrl = "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=TICKET";
		requestUrl = requestUrl.replace("TICKET", ticket);
		JSONObject jsonObject = HttpUtils.httpRequest(requestUrl, "GET", null);
		if(null != jsonObject){
			int errorCode = jsonObject.getInt("errcode");
			String errorMsg = jsonObject.getString("errmsg");
			if(0 == errorCode){
				result = true;
				log.info("成功errorCode:{"+errorCode+"},errmsg:{"+errorMsg+"}");
			}else{
				log.info("失败errorCode:{"+errorCode+"},errmsg:{"+errorMsg+"}");
			}
		}
		return result;
	}
	
	/**
	 * 创建菜单 
	 * @param menu
	 * @param accessToken
	 * @return int
	 */
	public int createMenu(Menu menu){
		int result = 0;
		// 拼装创建菜单的url
		String requestUrl = "https://api.weixin.qq.com/cgi-bin/menu/create?access_token=" 
				+ getAccessToken();
		// 将菜单对象转换成json字符串
		String jsonMenu = JSONObject.fromObject(menu).toString();
		// 调用接口创建菜单
		JSONObject jsonObject = HttpUtils.httpRequest(requestUrl, "POST", jsonMenu);

		if (null != jsonObject) {
			if (0 != jsonObject.getInt("errcode")) {
				result = jsonObject.getInt("errcode");
				log.error("创建菜单失败 errcode:{} errmsg:{}",
						jsonObject.getInt("errcode"),
						jsonObject.getString("errmsg"));
			}
		}
		return result;
	}

	@Override
	public JSONObject sendMsgByGroupId(String request) {
		String requestUrl = "https://api.weixin.qq.com/cgi-bin/message/mass/sendall?access_token=" + getAccessToken();
		JSONObject jsonObject = HttpUtils.httpRequest(requestUrl, "POST", request);
		return jsonObject;
	}

	@Override
	public JSONObject sendMsgByOpenids(String request) {
		String requestUrl = "https://api.weixin.qq.com/cgi-bin/message/mass/send?access_token=" + getAccessToken();
		JSONObject jsonObject = HttpUtils.httpRequest(requestUrl, "POST", request);
		return jsonObject;
	}

	@Override
	public JSONObject uploadNews(String request) {
		String requestUrl = "https://api.weixin.qq.com/cgi-bin/media/uploadnews?access_token=" + getAccessToken();
		JSONObject jsonObject = HttpUtils.httpRequest(requestUrl, "POST", request);
		return jsonObject;
	}
	
	/**
     * 微信服务器素材上传
     * @param file  表单名称media
     * @param token access_token
     * @param type  type只支持四种类型素材(video/image/voice/thumb)
     */
    public  JSONObject uploadMedia(File file,String type) {
    	String requestUrl = "https://api.weixin.qq.com/cgi-bin/material/add_material";
    	JSONObject jsonObject = HttpUtils.uploadMedia(file, getAccessToken(), type, requestUrl);
        return jsonObject;
    }

	@Override
	public JSONObject previewMass(String openid, String mediaId, String type,
			String content) {
		String requestUrl = "https://api.weixin.qq.com/cgi-bin/message/mass/preview?access_token=ACCESS_TOKEN".replace("ACCESS_TOKEN", getAccessToken());
		String mediaIdString = "media_id";
		String contentString = mediaId;
		if(type.equals("text")){
			mediaIdString = "content";
			contentString = content;
		}else if(type.equals("news")){
			type = "mpnews";
		}
		String requestString = "{\"touser\":\""+ openid +"\",\"" + type +"\":{\""
				+ mediaIdString +"\":\"" + contentString +"\"},\"msgtype\":\"" + type
				+ "\"}";
		JSONObject jsonObject = HttpUtils.httpRequest(requestUrl, "POST", requestString);
		return jsonObject;
	}

	@Override
	public JSONObject getMassSendStatus(String msgId) {
		String requestUrl = "https://api.weixin.qq.com/cgi-bin/message/mass/get?access_token=ACCESS_TOKEN".replace("ACCESS_TOKEN", getAccessToken());
		String requestString = "{\"msg_id\":\"" + msgId +"\"}";
		JSONObject jsonObject = HttpUtils.httpRequest(requestUrl, "POST", requestString);
		return jsonObject;
	}

	@Override
	public JSONObject deleteMass(String msgId) {
		String requestUrl = "https://api.weixin.qq.com/cgi-bin/message/mass/delete?access_token=ACCESS_TOKEN".replace("ACCESS_TOKEN", getAccessToken());
		String requestString = "{\"msg_id\":\"" + msgId +"\"}";
		JSONObject jsonObject = HttpUtils.httpRequest(requestUrl, "POST", requestString);
		return jsonObject;
	}

	@Override
	public JSONObject deleteMaterial(String mediaId) {
		String requestUrl = "https://api.weixin.qq.com/cgi-bin/material/del_material?access_token=ACCESS_TOKEN".replace("ACCESS_TOKEN", getAccessToken());
		String requestString = "{\"media_id\":\"" + mediaId +"\"}";
		JSONObject jsonObject = HttpUtils.httpRequest(requestUrl, "POST", requestString);
		return jsonObject;
	}
    
}
