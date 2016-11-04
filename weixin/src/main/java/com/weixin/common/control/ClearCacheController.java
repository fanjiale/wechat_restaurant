package com.weixin.common.control;


import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.andy.common.domains.RspResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.weixin.common.config.load.ConfigLoader;
/**
 * 刷新缓存
 */
@Controller
@RequestMapping("/cache")
public class ClearCacheController {
	private static Logger log = LoggerFactory.getLogger(ClearCacheController.class);
	@Autowired
	ConfigLoader configLoader;
	

	public ConfigLoader getConfigLoader() {
		return configLoader;
	}

	public void setConfigLoader(ConfigLoader configLoader) {
		this.configLoader = configLoader;
	}

	/**
	 * 处理请求
	 * @throws Exception 
	 */
	@RequestMapping("clearCache")
	@ResponseBody
	public RspResult  clearCache(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		configLoader.reload();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("result", 0);
		log.error("系统缓存刷新成功！");
		return RspResult.getSuccessResult().setData(map);
	}

}
