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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.weixin.common.config.load.ConfigLoader;
import com.weixin.common.core.MenuService;
/**
 * @alias 更新菜单Controller
 */
@Controller
@RequestMapping("/menu")
public class RefreshMenuController {
	private static Logger log = LoggerFactory.getLogger(RefreshMenuController.class);
	@Autowired
	private MenuService menuService;

	
	/**
	 * @alias 处理更新菜单请求
	 * @throws Exception 
	 */
	@RequestMapping("refreshMenu")
	@ResponseBody
	public RspResult refreshMenu(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		int res = menuService.refresh();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("result", res);
		return RspResult.getSuccessResult().setData(map);
	}
}
