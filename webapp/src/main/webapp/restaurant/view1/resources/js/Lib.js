//       var w3c=(document.getElementById)? true: false;
//       var agt=navigator.userAgent.toLowerCase();
//       var ie = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1) && (agt.indexOf("omniweb") == -1));

//       function IeTrueBody()
//       {
//         return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body;
//       }

//       function GetScrollTop()
//       {
//       return ie ? IeTrueBody().scrollTop : window.pageYOffset;
//       }


///加载多个 onload 事件
function addLoadEvent(func) {

    var oldonload = window.onload;
    if (typeof (window.onload) != "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}


function trim(s) {
    
            	 var i,r,j
                var n = s.length;
	             for(i=0;i<n;i++)
	            { t=s.charAt(i)
	              if(t!=" " && t!='　') break;
	            } 
	              if(i==n) return("");
	              for(j=n-1;j>=0;j--)
	                 { t=s.charAt(j)
	                  if(t!=" " && t!='　') break;
	            }  
	             r=s.substring(i,j+1);
	            return(r);
                } 
                

function autoResize(obj)
{
try 
{


parent.document.all[obj].style.height=parent.mid.document.body.scrollHeight*1+50;

}
catch(e)
{

}
}


//取窗口可视范围的高度 
function getClientHeight()
{
    var clientHeight=0;
    if(document.body.clientHeight&&document.documentElement.clientHeight)
    {
        var clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;        
    }
    else
    {
        var clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;    
    }
    return clientHeight;
}

function getScroll()  
{     var t; 
         if (document.documentElement && document.documentElement.scrollTop) 
         {         
         t = document.documentElement.scrollTop;                     
          }
                             
         else if (document.body) 
         { 
           t = document.body.scrollTop;  
         }
        return t;
         }  

    function Resize(obj)
    {

    parent.document.all[obj].style.height=520;

    }

    function GetObj_Y(obj)
    {
        if (obj == null)
            return 0;
        var oRect   = obj.getBoundingClientRect();  
        var y=oRect.top;
        var Sh=getScroll();
        y=(y+Sh*1)*1;
        return y;
    }//obj.offsetHeight 实际高度
    
    function GetObj_X(obj)
    {
        var oRect   = obj.getBoundingClientRect();  
        var x=oRect.left;
        return x;
    }
    
    function GetObj_R(obj)
    {
        var oRect = obj.getBoundingClientRect();  
        var r=document.body.clientWidth-oRect.right;
        return r;
    }
    
    function GetObj_B(obj)
    {
        var oRect   = obj.getBoundingClientRect();  
        var b=oRect.bottom;
        return b;
    }

      function ReIDs(IDstr)//获取ID集
      {
       var IDS="";
       var Mid="";
       var len=document.form1.elements.length;
			var i;
		    for (i=0;i<len;i++)
		    {
		    
			if (document.form1.elements[i].type=="checkbox")
			{
		      var obj= document.form1.elements[i];
		      if(obj.checked==true)
		      {
		        Mid=obj.id.replace(IDstr,"");
		       if(Mid!="")
		       {
		        IDS+=","+Mid;
		       }
		      }
		     		      
			}
					
			}
			try{IDS=IDS.substring(1);}catch(e){}
		
			return IDS;
			
      }
      
      function  readCookie(name)//读Cookie
      {   
       var   cookieValue   =   "";   
       var   search   =   name   +   "=";   
       if(document.cookie.length   >   0)   
       {     
          offset   =   document.cookie.indexOf(search);   
          if   (offset   !=   -1)   
          {     
              offset   +=   search.length;   
              end   =   document.cookie.indexOf(";",   offset);   
              if   (end   ==   -1)   end   =   document.cookie.length;   
              cookieValue   =   unescape(document.cookie.substring(offset,   end))   
          }   
       }   
   
        return   cookieValue;   
      }  
      
      function ReIDsToName(IDstr,IDName)//获取ID集
      {
       var IDS="";
       var obj;
       var Mid="";
       var len=document.form1.elements.length;
			var i;
		    for (i=0;i<len;i++)
		    {
		    obj=document.form1.elements[i];
			if (obj.type=="checkbox"&&obj.name==IDName)
			{
		      if(obj.checked==true)
		      {
		       Mid=obj.id.replace(IDstr,"");
		       if(Mid!="")
		       {
		        IDS+=","+Mid;
		       }
		      }
		     		      
			}
					
			}
			try{IDS=IDS.substring(1);}catch(e){}
		
			return IDS;
			
      }
      
      
      function GetIDs()
      {
      
       var IDS="";
       var ChildNodelist=document.getElementsByTagName("input");
       var Mid="";
       var len=ChildNodelist.length;
			var i;
		    for (i=0;i<len;i++)
		    {
		    var obj=ChildNodelist[i];
			if (obj.type=="checkbox"&&obj.name=="ID")
			{
		      if(obj.checked==true)
		      {
		       Mid=obj.getAttribute("value");
		       if(Mid!="")
		       {
		        IDS+=","+Mid;
		       }
		      }
		     		      
			}
					
			}
			try{IDS=IDS.substring(1);}catch(e){}
		
			return IDS;

      
      }
      
       function GetTextValue(IDstr,IDName,CssA,CssB,ObjStr)//获取ID集
      {
       var IDS="";
       var Value="";
       var obj;
       var obj2;
       var Mid="";
       var len=document.form1.elements.length;
			var i;
		    for (i=0;i<len;i++)
		    {
		    obj=document.form1.elements[i];
			if (obj.type=="text"&&obj.name==IDName)
			{
               if(obj.className==CssA)
               {
                obj.className=CssB;
                obj2=$2(ObjStr+obj.id.replace(IDstr,""));
                obj2.className=CssA;
                obj.value=obj2.innerHTML;
                
               }
               else
               {
		        Mid=obj.id.replace(IDstr,"");
	
		        IDS+=","+Mid;
		        
		        Value+=","+obj.value;
		        
		        }

		     }
		     		      
			}
					
			try{IDS=IDS.substring(1);Value=Value.substring(1);}catch(e){}
		
			return Value+"#"+IDS;
			
      }
      
        function selectAll(bool)//全选与全消
       {
         
			var len=document.form1.elements.length;
			var i;
		    for (i=0;i<len;i++)
		    {
		    
			if (document.form1.elements[i].type=="checkbox")
			{
		       document.form1.elements[i].checked=bool;
		      
			}
					
			}
			
			}
			
			 function selectAllToName(bool,IDName)//全选与全消
            {
			var len=document.form1.elements.length;
			var i;
			var obj;
		    for (i=0;i<len;i++)
		    {
		     obj=document.form1.elements[i]
			if (obj.type=="checkbox"&&obj.name==IDName)
			{
		       obj.checked=bool;
		       
		       try
		       {
		        var id=obj.id.replace("ID_","");//新加进来
		        SelectChecked(id);
		       }
		       catch(e)
		       {
		       
		       }
		      
			}
					
			}

}

function selectByName(ID,IDName,bool)//全选与全消
{
    var len = $2(ID).getElementsByTagName('input');
    var i;
    var obj;
    for (i = 0; i < len.length; i++) {
        obj = len[i]
        if (obj.type == "checkbox" && obj.name == IDName) {
            obj.checked = bool;
        }
    }

}

function GetCheckIDs(ID, IDName)//获取ID集
{
    var IDS = "";
    var Mid = "";
    var len = $2(ID).getElementsByTagName('input');
    var i;
    for (i = 0; i < len.length; i++) {

        if ((len[i].type == "checkbox" || len[i].type == "radio") && len[i].name == IDName)
         {
             var obj = len[i];
            if (obj.checked == true) {
                Mid = obj.value;
                if (Mid != "") {
                    IDS += "," + Mid;
                }
            }

        }

    }
    try { IDS = IDS.substring(1); } catch (e) { }

    return IDS;

}
        
function $1(obj) {
    var _obj = null;
    try {
        if (typeof (obj) == typeof ("")) {
            _obj = document.getElementById(obj);
        }
        else {
            _obj = obj;
        }
    }
    catch (e) {
        _obj = null;
    }
    return _obj;
}

function $2(obj) {
    var _obj = null;
    try {
        if (typeof (obj) == typeof ("")) {
            _obj = document.getElementById(obj);
        }
        else {
            _obj = obj;
        }
    }
    catch (e) {
        alert("不存在对象" + obj);
        _obj = null;
    }
    return _obj;
}

function CheckDIV(obj)
{
	var div=document.getElementById(obj);
	if(div != null){return true; }
	else {return false; }

}


//var para=Request.QueryString["paraname"]
var Request = new function()
{
        this.search=window.location.search;
        
        this.QueryString = new Array();
        
        var tmparray = this.search.substr(1,this.search.length).split("&")
        for(var i = 0;i<tmparray.length;i++)
        {
                var tmpStr2 = tmparray[i].split("=");
                this.QueryString[tmpStr2[0]] = tmpStr2[1];
        }        
}

function Request()//返回所有参数值，用','号隔开
{
     try
     {
      var search=window.location.search;
        
      var QueryString = "";
        
        var tmparray = search.substr(1,search.length).split("&")
        for(var i = 0;i<tmparray.length;i++)
        {
                var tmpStr2 = tmparray[i].split("=");
                QueryString =QueryString+","+tmpStr2[1];
        }      
        
        return  QueryString.substring(1);
        }
        catch(e)
        {
        
        return "";
        
        }
}

function RequestByName(PName)//根据参数名取参数值
{
     var QueryString = "";
     try
     {
        var search=window.location.search;
        var tmparray = search.substr(1,search.length).split("&")
        for(var i = 0;i<tmparray.length;i++)
        {
                var tmpStr2 = tmparray[i].split("=");
                if(tmpStr2[0].toLowerCase()==PName.toLowerCase())
                {
                QueryString=tmpStr2[1];
                
                }
        }      
        }
        catch(e)
        {
        }

        return QueryString;

}

function DelOption(objName,objValue)
{
 var obj=$2(objName);
 var Leg= obj.length;
 var theValue="";
 if(Leg>=1)
 {
  for(i=0;i<Leg;i++)
  {
  theValue =obj.options[i].value;
  if(theValue==objValue)
  {
     obj.remove(i); 
     return;
  
  }
  }
 }
}

function DelOptionByStartIndex(objName,StartIndex)
{ 
  var obj=$2(objName); 
  var len=obj.length;
  while(len>StartIndex)
  {
    obj.remove(len-1);
    len=len-1;
  }
  
}


function DelByIndex(Name,Index)
{
 var  obj=document.getElementById(Name);
 obj.remove(Index);

}

//已经改
function AddOption(objName,OptionText,OptionValue)
{
    try {

      if (typeof (objName) == typeof ("")) {
          objName=$2(objName);
      }
  var oOption = document.createElement("OPTION");
      oOption.text = OptionText;
      oOption.value = OptionValue;
      objName.add(oOption);
   }
   catch(e)
   {}

}

function BindSelect(objName,Content,SplitStr)
{
  var V=Content.split(SplitStr);
  
  var Text = V[0].split(",");
  
  var Value =V[1].split(",");
  
  $2(objName).length=0;
  
  if(Text.length>0)
  {
   for(var i=0;i<Text.length;i++)
   {
    if(Text[i]!="")
    {
     AddOption(objName,Text[i],Value[i]);
    }
    
   }
  
  }

}

function AddOptionToIndex(Name,OptionText,OptionValue,Index)
{
    var   obj=document.getElementById(Name);
    
   // obj.options[Index]=new  Option(OptionText,OptionValue);
    
     var option =obj.insertBefore(new Option(null,Index),obj.options[Index]);
      option.text=OptionText;
      option.value=OptionValue;
      
      obj.selectedIndex=0;

    
}

function AddAddOptionByJson(ID,Json,TextName,ValueName)
{

   var result = eval(Json);
   
   for (var one in result)
    {
        AddOption(ID,result[one][TextName],result[one][ValueName])
    }
}



function GetTextOrValue(Name,Type)
{
    var ReStr="";
    var obj=document.getElementById(Name);
    if(Type*1==1)
    {
                for(var i=0; i<obj.length; i++)
                {
                ReStr +=","+obj[i].text;

                }
     }
    else
    {
                for(var j=0; j<obj.length; j++)
                {
                ReStr+=","+obj.options[j].value;
                }
    }

    try{ReStr=ReStr.substring(1);}catch(e){}
    return ReStr;

}

function GetSelectValue(Name)
{
 try
 { 
 var obj=$2(Name);
 
 if(obj.length==0)
 {
   return 0;
 }
 else
 {
 var Value=obj.options[obj.selectedIndex].value;
 return Value;
 }
 
  }
 catch(e)
 {
 
 return "0";
 
 }


}

function GetSelectText(Name)
{
 try
 {
 var obj=$2(Name);
 var Text=obj.options[obj.selectedIndex].text;
 return Text;
 }
 catch(e)
 {
 
 return "";
 
 }


}


     function GetManyListBoxValue(obj)
     {
       var ListObj = document.getElementById(obj);
       
       var Value="";
       
        for (var i = 0; i < ListObj.options.length; i++)
        { 
          Value+=","+ListObj.options[i].value;
        }
        
        if(Value!="")
        {
         Value=Value.substring(1);
        }
        
        return Value;
        
     }
     
     function GetManyListBoxText(obj)
     {
       var ListObj = document.getElementById(obj);
       
        var Text=""
       
        for (var i = 0; i < ListObj.options.length; i++)
        { 
          Text+=","+ListObj.options[i].text;
        }
        
        if(Text!="")
        {
         Text=Text.substring(1);
        }
        
        return Text;
        
     }

function DefaultValue(Name,Value)
{

  var obj=$2(Name);
 
   for(var j=0; j<obj.length; j++)
   {
     if(obj.options[j].value==Value||obj[j].text==Value)
     {
     
      obj.selectedIndex=j;
      
      return;
     
     }
   }

}


function ImagesLoad(id)
{

ImagesLoad2(id,240,240);
}

function BImagesLoad(id)
{

ImagesLoad2(id,600,500);
}


function ImagesLoad2(id,Width,Height)
{
    var W=id.width;
    var H=id.height;
    
    if(W>Width)
    {
     id.width=Width;
    }
    else if(H*(Width/W*1)>Height)
    {
       id.height=Height;
    }
}

 function ImgAutoSize(Size)
 {
       var imglist = document.getElementsByTagName('img');
       for(j=0; j<imglist.length; j++) 
	   {
          if(imglist[j].width*1>=Size*1)
		  {
		   imglist[j].width=Size*1;
		  }
       }  
 }
 

 function ImgAutoSize(Size)
 {
       var imglist = document.getElementsByTagName('img');
       for(j=0; j<imglist.length; j++) 
	   {
          if(imglist[j].width*1>=Size*1)
		  {
		  // imglist[j].width=Size*1;
		  }
       }
 }



/////////没有图片时加载(06-17)//////////
function nopic(obj)
{
	var nopicurl = "/images/nopic.gif";
	if(obj)
		obj.src=nopicurl;
}


function SetValue(str,id)
{
try
{
 var NameList=str.split(",");

 for(var i=0;i<NameList.length;i++)
 {
 try
 {
 $2(NameList[i]).value=$2(NameList[i]+"_"+id).innerHTML;
 }
 catch(e)
 {}
 
 }
 }
 catch(e)
 {
 
  $2(str).value=$2(str+"_"+id).innerHTML;
 
 }

}

function ShowObj(obj)//显示隐藏对象
{
try
{
var style=$2(obj).style.display;
if(style=="")
{
$2(obj).style.display="none";
}
else
{
$2(obj).style.display="";
}
}
catch(e)
{}

}

function ShowObj2(obj)
{
try
{
$2(obj).style.display="";
}
catch(e)
{}
}

function GetListValue(Name,Count)//获取列表选择的值
{
 var obj;
 var Str="";
for(var i=0;i<Count;i++)
{
  obj=$2(Name+"_"+i);
  
   if(obj.checked)
   {
    Str=obj.value;
    break;
   }

}
return Str;

}

function CheckIsNull(Obj,Alert)
{
  var V;
  for(var i=0;i<Obj.length;i++)
  {
    V=trim($2(Obj[i]).value);
    
    if(V=="")
    {
    
        try
        {
         $2(Obj[i]).focus();
        }
        catch(e)
        {}

    alert(Alert[i]);
    
    return false;
    
    }
  
  }
  
  return true;

}

function ClearText(Obj)
{

  for(var i=0;i<Obj.length;i++)
  {
   
   $2(Obj[i]).value="";
    
  }

}

function ClearTextBox()
{
   try
   {
     var ChildNodelist=document.getElementsByTagName("input");
     var TextareaNodeList=document.getElementsByTagName("textarea");
     
     for(var i=0;i<ChildNodelist.length;i++)
     {      
          if(ChildNodelist[i].type=="text")
          {
    	     ChildNodelist[i].value="";
    	     
    	     var DataType = ChildNodelist[i].DataType;
    	     
    	     var NoClear = ChildNodelist[i].NoClear;

    	     if(NoClear!="true")
    	     {
    	     
    	         if(DataType=="DomInteger" || DataType=="DomDouble")
    	         {
    	          ChildNodelist[i].value="0";
    	         }
        	     
    	          if(DataType=="DomDateStr")
    	         {
    	          var myDate = new Date();

    	          ChildNodelist[i].value=myDate.toLocaleDateString().replace("年","-").replace("月","-").replace("日","");
    	         }
    	     }
    	     
	      }  
     }
     
     for(var j=0;j<TextareaNodeList.length;j++)
     {             
    	   TextareaNodeList[j].value="";	     
     }
     
     
   }
   catch(e)
   { }
   
}


var IsLoadSearchTitle=true;//是否装载搜索字段
var SearchIndex=new Array();//字段索引
var TimeIndex=new Array();//时间索引
var IsTimeDivShow=false;//首次显示时间DIV

function GetSearchTitle()
{
   if(this.IsLoadSearchTitle)
   {
      var ChildNodelist=document.getElementById("TagH").getElementsByTagName("TD");
      
      var ValueIndex=1;
      
      for(var i=0;i<SearchIndex.length;i++)
       {        	   
           var j=SearchIndex[i];
           
    	   AddOption("SType",ChildNodelist[j].innerText,ValueIndex);
    	   
    	   ValueIndex++;
       }
       
       try
       {
        if(IsTimeDivShow)
        {
          LoadTimeDiv();
        }
       }
       catch(e)
       {}
     
   }
   
   this.IsLoadSearchTitle=false;

}


function GetManyListDivValue(ListDIV)
{
      var List=document.getElementById(ListDIV).getElementsByTagName("li");
      
      var Value="";
      
      for(var i=0;i<List.length;i++)
      {   
          var V= List[i].getAttribute("value");
          
          if(!IsExist(Value,V))
          {
           Value+=","+V;
          }
      }
       
      if(Value.indexOf(",")!=-1)
      {
          Value=Value.substring(1);
      }
       
      return Value;
}

function IsExist(C,V)
{  
  var Is=false;
  
  if(C!="")
  { 
     C=","+C+",";
     V=","+V+",";
     if(C.indexOf(V)!=-1)
     {
       Is=true;
     }
  }
 return Is;

}

/*新增*/
function GetList(ID) {

    var ChildNodelist = $2(ID).getElementsByTagName("input");

    var Value = "";

    for (var i = 0; i < ChildNodelist.length; i++) {
        if (ChildNodelist[i].checked) {
            Value += "," + ChildNodelist[i].value;
            if (ChildNodelist[i].type == "radio") {
                break;
            }
        }
    }

    if (Value.indexOf(",") != -1) {
        Value = Value.substring(1);
    }

    return Value;
}

function BindList(ID, Value) {

    try {

        if (Value != "") {
            Value = "," + Value + ",";
            var ChildNodelist = $2(ID).getElementsByTagName("input");

            for (var i = 0; i < ChildNodelist.length; i++) {
                var v = "," + ChildNodelist[i].value + ",";
                if (Value.indexOf(v) != -1) {
                    ChildNodelist[i].checked = true;
                    if (ChildNodelist[i].type == "radio") {
                        break;
                    }
                }
                else {
                    ChildNodelist[i].checked = false;
                }

            }
        }
    }
    catch (e)
       { }

}

/*新增*/

function GetRadioListValue(RadioID)
{

    var Value="";
    
    try
    {
    var ChildNodelist=document.getElementById(RadioID).getElementsByTagName("input");
    
    for(var i=0;i<ChildNodelist.length;i++)
       {        	   
         if(ChildNodelist[i].checked)
         {
          Value=ChildNodelist[i].value+"";
          break;
         }

       }
       }
       catch(e)
       {}
       return Value;
}

function RadioAddFun(RadioID,Fun)
{
    var ChildNodelist=document.getElementById(RadioID).getElementsByTagName("input");
     
    for(var i=0;i<ChildNodelist.length;i++)
       {        	   
         ChildNodelist[i].onclick=Fun;
       }

}

function GetRadioListValue2(RadioID)
{
    var ChildNodelist=document.getElementById(RadioID).getElementsByTagName("input");
    
    var Value="";
  
    for(var i=0;i<ChildNodelist.length;i++)
       {        	   
         if(ChildNodelist[i].checked)
         {
          Value+=","+ChildNodelist[i].value+"";

         }

       }
       
         
       if(Value.indexOf(",")!=-1)
       {
        Value=Value.substring(1);
       }
       
       return Value;
}

function GetRadioListText(RadioID)
{
    var ChildNodelist=document.getElementById(RadioID).getElementsByTagName("input");
    
    var ChildTextlist=document.getElementById(RadioID).getElementsByTagName("label");
    
    var Value="";
  
    for(var i=0;i<ChildNodelist.length;i++)
       {        	   
         if(ChildNodelist[i].checked)
         {
          Value=ChildTextlist[i].innerText+"";
          break;
         }
       }
       
       return Value;
}


function SetRadioListValue(RadioID,Value)
{

    var ChildNodelist=document.getElementById(RadioID).getElementsByTagName("input");
  
    for(var i=0;i<ChildNodelist.length;i++)
       {        	   
         if(ChildNodelist[i].value==Value)
         {
          ChildNodelist[i].checked=true;
          break;
         }
       }

}



function GetCheckBoxListValue(CheckBoxID)
{
    var ChildNodelist=document.getElementById(CheckBoxID).getElementsByTagName("input");
    
    var Value="";
  
    for(var i=0;i<ChildNodelist.length;i++)
       {        	   
         if(ChildNodelist[i].checked)
         {
          Value+=","+ChildNodelist[i].value;
         }
       }
       
       if(Value.indexOf(",")!=-1)
       {
        Value=Value.substring(1);
       }
       
       return Value;
}

function _InsertHTML(html,HtmlEdit)
  {
    var sel =  HtmlEdit.document.selection;
  
    if (sel!=null)
     {
          var rng = sel.createRange();

          if(rng!=null)
          {
           rng.pasteHTML(html);
           HtmlEdit.focus();
           rng.select();
          }
     }
  }


/*---------------------------------------*/

function GetObjValue(id)
{

  var ChildNodelist=document.getElementById(id).getElementsByTagName("td")
  
  
  for(var i=0;i<ChildNodelist.length;i++)
  {
  
      var ChildNodelist2= ChildNodelist[i].getElementsByTagName("*");
      
     // alert(ChildNodelist2.length);
      
      for(var j=0;j<ChildNodelist2.length;j++)
      {
       alert(ChildNodelist2[j].type);
      }
  
  }


}


function DisplayColumn(TableID,ColumnIndex,IsShow) 
     {  
      var   Table;
      var   TD;
      var   TR;
      
      Table = document.getElementById(TableID);
      var TRs=Table.getElementsByTagName("tr");
      
      for(var i=0;i<TRs.length;i++)
      {
        TR = TRs[i];
        
        for(var j=0;j<TR.childNodes.length;j++)
        {
          TD = TR.childNodes[j];
          
          if (j==ColumnIndex)
          {
            TD.style.display =(IsShow)?"":"none";
            break;
          }
        }
       }
     }

     var VHeight=12;
     function AutoHeight() 
     {
     try
     {   
         var obj=document.getElementById("ContentList");

         if (obj == null)
         { 
	      var height = document.body.scrollHeight;
	      parent.document.getElementById("IframeTable").style.height=height+"px";
	      parent.document.getElementById("iname").style.height=(height+this.VHeight)*1+"px";
	      ParentAutoHeight(parent);
	    
	     }
	     else
	     { 
	      var H=top.CHeight;
	      parent.document.getElementById("IframeTable").style.height=H+"px";
	      parent.document.getElementById("iname").style.height=(H+this.VHeight)*1+"px";
	      ParentAutoHeightList(parent);
	      
	     }
	 }
	 catch(e)
	 {}

     }
     
     
     //预防多级的滚动条影响
     function ParentAutoHeight(obj)
     {
        try
        {
            if(obj.$1("iname")!=null)
            {
                var  height = obj.document.body.scrollHeight;	       
                obj.parent.document.getElementById("IframeTable").style.height=height+"px";
                obj.parent.document.getElementById("iname").style.height=(height+this.VHeight)*1+"px";
                
                ParentAutoHeight(obj.parent);
            }
	    }
	    catch(e)
	    {}
     }
     
     //预防多级的滚动条影响
     function ParentAutoHeightList(obj)
     {
        try
        {
            if(obj.$1("iname")!=null)
            {
                var  height = obj.document.body.scrollHeight;	       
                obj.parent.document.getElementById("IframeTable").style.height=height+"px";
                obj.parent.document.getElementById("iname").style.height=(height+this.VHeight)*1+"px";
                
                ParentAutoHeightList(obj.parent);
            }
	    }
	    catch(e)
	    {}
     }
     
     function SetHeight(height)
     {
     try
     {

	 document.getElementById("IframeTable").style.height=height+"px";
	 document.getElementById("iname").style.height=(height+70)*1+"px";
	 }
	 catch(e)
	 {}
}

function SetHeight2(height) 
    {
    try {

        parent.document.getElementById("IframeTable").style.height = height + "px";
        parent.document.getElementById("iname").style.height = (height + 70) * 1 + "px";
    }
    catch (e)
	 { }
   } 
     
     //onpropertychange="CheckInputInt(this)" 整型
    function CheckInputInt(oInput)
    {
     if  ('' != oInput.value.replace(/\d/g,''))
     {
        oInput.value = oInput.value.replace(/\D/g,'');
     }
    }
    

    
     //设置X,Y轴
    function SetPoint(Name1, Name2, x, y) {

        var obj = "";
        var obj2 = "";

        if (typeof (Name1).toString() == "string") {
            obj = $2(Name1);
        }

        if (typeof (Name2).toString() == "string") {
            obj2 = $2(Name2);
        }

        if (obj2.style.display == "none") {
            var X = GetObj_X(obj);
            var Y = GetObj_Y(obj);

            obj2.style.left = (X + x) * 1;
            obj2.style.top = (Y + y) * 1;
            obj2.style.display = "";
        }
        else {
            obj2.style.display = "none";
        }
    }

    function SetPoint2(Name1, Name2, x, y) {

        var obj = "";
        var obj2 = "";

        if (typeof (Name1).toString() == "string") {
            obj = $2(Name1);
        }

        if (typeof (Name2).toString() == "string") {
            obj2 = $2(Name2);
        }

        var X = GetObj_X(obj);
        var Y = GetObj_Y(obj);

        obj2.style.left = ((X + x) * 1) + "px";
        obj2.style.top = ((Y + y) * 1) + "px";
        obj2.style.display = "";

    }


    function GetBrowser() 
    {

        var Sys = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
        (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
        (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

        var Browser = "";
        if (Sys.ie) Browser = "IE:"+Sys.ie;
        if (Sys.firefox) Browser = "firefox:"+Sys.firefox;
        if (Sys.chrome) Browser = "chrome:" + Sys.chrome;
        if (Sys.safari) Browser = "safari:"+Sys.safari;

        return Browser;
        
    }
    
    //时间倒计时,传秒数
    function RemainTime(S)
    {
        if(S>0)
        {
            var secondsold=S;
            var msPerDay=24*60*60;
            var e_daysold=secondsold/msPerDay;
            var daysold=Math.floor(e_daysold); 
            var e_hrsold=(e_daysold-daysold)*24; 
            var hrsold=Math.floor(e_hrsold); 
            var e_minsold=(e_hrsold-hrsold)*60; 
            minsold=Math.floor((e_hrsold-hrsold)*60);  
            seconds=Math.floor((e_minsold-minsold)*60); 
            if (seconds<10){seconds="0"+seconds}                            
            //alert(daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒");
            return Array(daysold,hrsold,minsold,seconds);
        }
        else
        {
            return null;
        }
    
    }

   //去掉所有的html标记 
   function delHtmlTag(str) 
   { 
     return str.replace(/<[^>]+>/g,"");
   } 


     function storeCaret(textEl)
     {   
       if(textEl.createTextRange)   
       textEl.caretPos = document.selection.createRange().duplicate();   
     }
     
function insertAtCaret(textEl, text)
{   
    if(textEl.createTextRange && textEl.caretPos)
    {   
        var caretPos = textEl.caretPos;   
        caretPos.text=caretPos.text.charAt(caretPos.text.length-1)==''?text+'':text;   
    }   
    else  
    textEl.value = text;   
}

    //获得字符串的长度，汉字为二个字节
    function GetLen(v)
    {
    var len = 0;
    for(i=0;i<v.length;i++)
    {
        if(v.charCodeAt(i)>256)
        {
         len += 2;
        }
        else
        {
         len++;
        }
    }
    return len;
    }
    
       //控制Div在另一对象附近
       function ShowObjPoint(ID,ShowDiv,X,Y)
       {
          var _ID = $2(ID);
           var _ShowDiv = $2(ShowDiv);
           
           var x = GetObj_X(_ID);
           var y = GetObj_Y(_ID);
           
           if((y-getScroll())<250)
           {

           _ShowDiv.style.left =((x+"".replace("px",""))*1+X)+"px";
           _ShowDiv.style.top = ((y+"".replace("px",""))*1+Y)+"px";
           _ShowDiv.style.display = "";
           }
           else
           {
            _ShowDiv.style.display = "";
            var H=_ShowDiv.offsetHeight+"".replace("px","");
            _ShowDiv.style.left =((x+"".replace("px",""))*1+X)+"px";
           _ShowDiv.style.top = ((y+"".replace("px",""))*1-H+1)+"px";
           
           
           }
            
       }
   
   //firefox下检测状态改变只能用oninput,且需要用addEventListener来注册事件。 
       function LoadChangeFunction(ID,fun)  
  {
   
    if(/msie/i.test(navigator.userAgent))//ie浏览器 
    {
          document.getElementById(ID).onpropertychange=fun;

    } 
    else//非ie浏览器，比如Firefox 
    {
      document.getElementById(ID).addEventListener("input",fun,false); 
    }

  
  }
  
  function LoadChangeFunctionObj(Obj,fun)
  {
   
    if(/msie/i.test(navigator.userAgent))//ie浏览器 
    {
      Obj.onpropertychange=fun;
    } 
    else//非ie浏览器，比如Firefox 
    {
      Obj.addEventListener("input",fun,false); 
    }
  }
  
 
 //JS获取事件的源对象,tagName,id,相当于document.getElementById("")这样的功能
function getEvent()
{
    if(document.all)
    {
    return window.event;//如果是ie
    }
    
    func=getEvent.caller;
    while(func!=null)
    {
        var arg0=func.arguments[0];
        if(arg0)
        {
          if((arg0.constructor==Event || arg0.constructor ==MouseEvent)||(typeof(arg0)=="object" && arg0.preventDefault && arg0.stopPropagation))
         {
          return arg0;
         }
        }

    func=func.caller;
    }
    
    return null;
}

function GetObj()
{
 var evt=getEvent();
 var element=evt.srcElement || evt.target;
 //element.tagName;
 //element.id;
 return element;
}

function GetFlowCheck(RadioID)
{
  var V = GetRadioListValue(RadioID);
  
  if(V=="")
  {
    V = document.getElementById("CheckControl").getAttribute("value");
  }
  
  return V;
}


/*
function InsertHTML2(obj,type,html)
{  
   switch(type)//insertAdjacentText
   {
     case 1://插入到标签开始标记之前
      $1(obj).insertAdjacentHTML("beforeBegin",html);
     break;
     case 2://插入到标签开始标记之后
      $1(obj).insertAdjacentHTML("afterBegin",html);
     break;
     case 3://插入到标签结束标记前
      $1(obj).insertAdjacentHTML("beforeEnd",html);
     break;
     case 4://插入到标签结束标记后
      $1(obj).insertAdjacentHTML("afterEnd",html);
     break;
   }
   

   
   //插入内容位置如下：
   //例 1<div id="obj">2[中间内容]3</div>4
}
*/

//兼容IE和firefox
function InsertHTML(obj,type,html)
{
    var el = null;
    if (typeof (obj) == typeof ("")) {
        el = $2(obj);
    }
    else {
        el = obj;
    }

  InsertHTML2(el,type,html)
}

function InsertHTML2(el,type,html)
{       
    //var el=$1(obj);     
    if(el.insertAdjacentHTML)
    {       
      
        switch(type)
        {       
            case 1:       
                el.insertAdjacentHTML('BeforeBegin', html);       
                return el.previousSibling;       
            case 2:       
                el.insertAdjacentHTML('AfterBegin', html);       
                return el.firstChild;       
            case 3:       
                el.insertAdjacentHTML('BeforeEnd', html);       
                return el.lastChild;       
            case 4:       
                el.insertAdjacentHTML('AfterEnd', html);       
                return el.nextSibling;       
        }

    }       
                     
    var range = el.ownerDocument.createRange();       
    var frag;       
    switch(type)
         {       
         case 1:       
            range.setStartBefore(el);       
            frag = range.createContextualFragment(html);       
            el.parentNode.insertBefore(frag, el);       
            return el.previousSibling;       
         case 2:       
            if(el.firstChild){       
                range.setStartBefore(el.firstChild);       
                frag = range.createContextualFragment(html);       
                el.insertBefore(frag, el.firstChild);       
                return el.firstChild;       
             }else{       
                el.innerHTML = html;       
                return el.firstChild;       
             }       
        case 3:       
            if(el.lastChild){       
                range.setStartAfter(el.lastChild);       
                frag = range.createContextualFragment(html);       
                el.appendChild(frag);       
                return el.lastChild;       
            }else{       
                el.innerHTML = html;       
                return el.lastChild;       
            }       
        case 4:       
            range.setStartAfter(el);       
            frag = range.createContextualFragment(html);       
            el.parentNode.insertBefore(frag, el.nextSibling);       
            return el.nextSibling;       
       }     

}

//执行对象 onclick 事件,ID名
function LoadOnClick(obj)
{
//    if(document.all)//IE
//    { 
//       $1(obj).click();
//    } 
//    else//firefox
//    { 
//       var evt = document.createEvent("MouseEvents");
//       evt.initEvent("click", true, true);
//       $1(obj).dispatchEvent(evt);
//    }

      LoadOnClick2($2(obj));
}

//执行对象 onclick 事件，对象
function LoadOnClick2(obj)
{
    if(document.all)//IE
    { 
       obj.click();
    } 
    else//firefox
    { 
       var evt = document.createEvent("MouseEvents");
       evt.initEvent("click", true, true);
       obj.dispatchEvent(evt);
    }
}

//toLowerCase() toUpperCase()


function Exist(objName)
{
    
    if(typeof(eval("document.all."+objName ))!= "undefined")
    {
      return true;
    }
    else
    {
     return  false;
    }
}

//刷新
function Refresh() {
    location.reload();

}

///字符串格式化,已修改
 function Format() 
{  
     if( arguments.length == 0 )
         return null;
 
     var str = arguments[0];
     if (IsArray(arguments[1]))//数组
     {
         var array = arguments[1];
         for (var i = 0; i < array.length; i++) {
             var re = new RegExp('\\{' + i + '\\}', 'gm');
             str = str.replace(re, array[i]);
         }
     }
     else
     {
         for (var i = 1; i < arguments.length; i++) {
             var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
             str = str.replace(re, arguments[i]);
         }
     }
     return str;
 }
 
 /*
 format : function(format)
 {
        var args = Ext.toArray(arguments, 1);
        return format.replace(/\{(\d+)\}/g, function(m, i)
        {
            return args[i];
        });
  }
  
   String.prototype.format = function()
  {
      var args = arguments;
      return this.replace(/\{(\d+)\}/g,               
      function(m,i)
      {
        return args[i];
      }
      );
 }
 */
 
//预加载图片
//var imgs=["/SysAdmin/images/bg3.jpg","/kindeditor/skins/default/default.gif"]; 
var loadimg=function(imgs)
{              
     if(!imgs){return false};//参数判断               
     var img=[],len=imgs.length;

     for(var i=0;i<imgs.length;i++)
     {
        img[i]=new Image();//新建一个IMG对象
        img[i].src=imgs[i];
     }
 }


function LoadEventArgs() 
 {

     var ChildNodelist = document.getElementsByTagName("td")


     for (var i = 0; i < ChildNodelist.length; i++) {

         var ChildNodelist2 = ChildNodelist[i].getElementsByTagName("*");

         // alert(ChildNodelist2.length);

         for (var j = 0; j < ChildNodelist2.length; j++) {
             alert(ChildNodelist2[j].type);
         }

     }

 }
 
 //弹出层居中显示
 function Middle(ID)
 {

     var obj = $2(ID);
     obj.style.display = "";

     var W = obj.offsetWidth;
     var H = obj.offsetHeight;

     obj.style.left = ((document.body.clientWidth - W) / 2)*1 + "px";
     obj.style.top = ((document.documentElement.clientHeight - H) / 2 + getScroll())*1 + "px";
 
 }
 

   
   function ClearValue2(Obj,Tag)
   {
       var txts=$1(Obj).getElementsByTagName(Tag);
  
     for(var i=0;i <txts.length;i++) 
     { 
      if(txts[i].type=="text" || txts[i].type=="textarea")
      { 

       txts[i].value =""; 
      } 
     }
   }
   
    function ClearValue(Obj)
    {
      ClearValue2(Obj,"input");
      ClearValue2(Obj,"textarea");
    }
  
    function GetUrl()
    {
     var href="";
     try
     {
      var url = location.href.split("R=");
      if(url.length==2)
      {
       href=url[0].substring(0,url[0].length-1);
      }
      else
      {
      href=url[0];
      }
      
     }
     catch(e)
     {}
     
     return href;
 }

 //切换卡 SelectTab(this, "DivTag", "li", "CurrentS"); DivTag={DivTag0,DivTag1,DivTag2}
 function SelectTab(obj, name, tag, cssName) {

     var ChildNodelist = obj.parentNode.getElementsByTagName(tag);

     for (var i = 0; i < ChildNodelist.length; i++) {
         ChildNodelist[i].className = "";
        
         if(name!=null)
         {
         var obj2=$2(name + i);
         if(obj2!=null)
         {
          obj2.style.display = "none";
         }
         if (ChildNodelist[i] == obj) {
             obj2.style.display = "";
         }
         }
     }
     obj.className = cssName;
 }
 
     var TabClick=function (e)
     { 
      var obj = e.srcElement ? e.srcElement: e.target; 
      alert(obj.innerHTML);   
      SelectTab(obj.parentNode,null,"li","Current");
     }
     
     
      function LoadTab(obj)
     {
       var ChildNodelist =$1(obj).getElementsByTagName("li");
       alert(obj.innerHTML);   
       for (var i = 0; i < ChildNodelist.length; i++) 
       {
         ChildNodelist[i].name=i;
         ChildNodelist[i].attachEvent("onclick", this.TabClick);
       }
 }


 function getText(obj) {
     if (typeof (obj) != "object") {
         obj = $1(obj);
     }
        if (obj.innerText == null) {
            return obj.textContent;
        }
        else {
            return obj.innerText;
        }
  
}

function setText(obj,text) {
    if (typeof (obj) != "object") {
        obj = $1(obj);
    }
    if(obj.innerText==null)
    {
         obj.textContent=text;
    }
    else
    {
          obj.innerText=text;
    }
  }


  /*新增*/

  //文本插入光标处
  function insertText(id, text) {
      var obj = $2(id);
      obj.focus();
      var str = document.selection.createRange();
      str.text = text;
  }


  function DelNode(Emement) {
      Emement.parentNode.removeChild(Emement);
  }

  function DelLevel(Emement, Level) {

      if (Level > 0) {
          for (var i = 0; i < Level; i++) {
              Emement = Emement.parentNode;
          }
      }

     Emement.parentNode.removeChild(Emement);
  }


  //图片缩小
  function AutoSetImgSize(img, w, h) {
      var W = img.width;
      var H = img.height;

      if (img.width > w) {
          W = w;
          H = parseInt(W / img.width * img.height);
      }

      if (H > h) {
          H = h;
          W = parseInt(H / img.height * img.width);
      }

      img.style.width = W + "px";
      img.style.height = H + "px";
  }


  //完美解决onMouseOver、onMouseOut冒泡事件方法简单 
  function IsOnMouse(obj)
  {
      var IsTrue = true;
      var browser = navigator.userAgent;   //取得浏览器属性

      if (browser.indexOf("MSIE") > 0)//如果是IE
      {
          try
          {
              if (obj.contains(event.toElement)) // 如果是子元素则结束函数
              {
                  IsTrue = false;
              }
          }
          catch (e)
          { }
      }
      else//如果是Firefox
      {
          if (obj.contains(getEvent().relatedTarget))  // 如果是子元素则结束函数
          {
              IsTrue = false;
          }
      }

      return IsTrue;
  }

//新增
  function IsArray(obj)//判断是否数组
  {
      return Object.prototype.toString.call(obj) === '[object Array]';
  }

  function SetSearch(SValue)
  {
      var Value = "";
      var Index = 0;
      for (var i = 0; i < SValue.length; i++)
      {
          if (SValue[i] != "") {
              if (Index == 0) {
                  Value = SValue[i];
              }
              else {
                  Value += "@#@" + SValue[i];
              }
              Index++;
          }
      }

      return Value;
  }

//清空
  function ClearSearch(SValue)
  {
      for (var i = 0; i < SValue.length; i++) {
          SValue[i] = "";
      }
  }

 //时间格式化
  Date.prototype.format = function (format) {
      var o = {
          "M+": this.getMonth() + 1, //month 
          "d+": this.getDate(), //day 
          "h+": this.getHours(), //hour 
          "m+": this.getMinutes(), //minute 
          "s+": this.getSeconds(), //second 
          "q+": Math.floor((this.getMonth() + 3) / 3), //quarter 
          "S": this.getMilliseconds() //millisecond 
      }

      if (/(y+)/.test(format)) {
          format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      }

      for (var k in o) {
          if (new RegExp("(" + k + ")").test(format)) {
              format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
          }
      }
      return format;

      /*

        //使用方法 
        var now = new Date(); 
        var nowStr = now.format("yyyy-MM-dd hh:mm:ss"); 
        //使用方法2: 
        var testDate = new Date(); 
        var testStr = testDate.format("YYYY年MM月dd日hh小时mm分ss秒"); 
        alert(testStr); 
        //示例： 
        alert(new Date().Format("yyyy年MM月dd日")); 
        alert(new Date().Format("MM/dd/yyyy")); 
        alert(new Date().Format("yyyyMMdd")); 
        alert(new Date().Format("yyyy-MM-dd hh:mm:ss"));

      */
  }



  //增加-年
  Date.prototype.addYear = function (num) {
      var tempDate = this.getDate();
      this.setYear(this.getYear() + num);
      if (tempDate != this.getDate()) this.setDate(0);
      return this;
  }
  //增加-月
  Date.prototype.addMonth = function (num) {
      var tempDate = this.getDate();
      this.setMonth(this.getMonth() + num);
      if (tempDate != this.getDate()) this.setDate(0);
      return this;
  }
  //增加-天
  Date.prototype.addDay = function (num) {
      this.setDate(this.getDate() + num);
      return this;
  }
  //增加-小时
  Date.prototype.addHour = function (num) {
      this.setHours(this.getHours() + num);
      return this;
  }
  //增加-分钟
  Date.prototype.addMinute = function (num) {
      this.setMinutes(this.getMinutes() + num);
      return this;
  }
  //增加-秒
  Date.prototype.addSecond = function (num) {
      this.setSeconds(this.getSeconds() + num);
      return this;
  }

  function CheckLength(obj, size) {
      var Len = obj.value.replace(/[^\u0000-\u00ff]/g, "aa").length + 4;
      if (Len > size) {
          obj.size = Len;
      }
      else {
          obj.size = size;
      }
  }


  //动态创建div
  function CreateDiv(id, className, text) {
      var div = document.getElementById(id);
      if (div == null) {
          var DivObj = document.createElement("div");
          DivObj.id = id;
          DivObj.className = className;
          DivObj.innerHTML = text;
          document.body.appendChild(DivObj);
      }
  }


  function SetValue(obj)
  {
      var msg = obj.getAttribute("title");
      if (trim(obj.value) == msg)
      {
          obj.value = "";
          obj.className = "text";
      }
  }

  function SetValue2(obj) {
      var msg = obj.getAttribute("title");
      if (trim(obj.value) == "") {
          obj.value = msg;
          obj.className = "text font1";
      }
  }

  function GetKeyValue(id)
  {
      var obj = $1(id);
      var msg = obj.getAttribute("title");
      if (trim(obj.value) == msg) {
          return "";
      }
      else {
          return trim(obj.value);
      }
  }

     
    

  //g:全文查找  i:忽略大小写 m:多行查找     re:/\d+/gim 

  //是否匹配
  function IsMatch(content, re) {
      //var re = new RegExp(exp, regexOptions);
      return re.test(content);
  }

  //返回匹配的数组
  function Match(content, re) {
      //var re = new RegExp(exp, regexOptions);
      return content.match(re);
  }

  //正则替换
  function RegExpRegPlace(content, re, replaceValue) {
      //var re = new RegExp(exp, regexOptions);
      return content.replace(re, replaceValue);
  }

  //字符串分割,返回数组
  function Split(content, re) {
      //var re = new RegExp(exp, regexOptions);
      return content.split(re);
  }