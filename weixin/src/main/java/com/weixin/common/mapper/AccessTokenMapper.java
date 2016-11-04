package com.weixin.common.mapper;

import java.util.HashMap;
import java.util.Map;

public interface AccessTokenMapper {

	/**
	 * 获取更新AccessToken的配置
	 * @return
	 */
	HashMap<String,Object> getAccessTokenConfig(int type);
	
	/**
	 * 更新AccessToken
	 * @param accessToken
	 */
	void updateAccessToken(Map<String,Object> param);
}
