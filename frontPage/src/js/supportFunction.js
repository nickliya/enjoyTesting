// 生成身份证
function getidcard(){
    var coefficientArray = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"]; // 加权因子
    var lastNumberArray = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"]; // 校验码
    var address = "420101"; // 住址
    var birthday = "19810101"; // 生日
    var s = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();
    var array = (address + birthday + s).split("");
    var total = 0;
    var i
    for (i in array) {
      total = total + parseInt(array[i]) * parseInt(coefficientArray[i]);
    }
    var lastNumber = lastNumberArray[parseInt(total % 11)];
    var id_no_String = address + birthday + s + lastNumber;
    return id_no_String;
}
// 生成手机号
function getphone(){
  var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189")
  var i = parseInt(10 * Math.random())
  var prefix = prefixArray[i]
  for (var j = 0; j < 8; j++) {
    prefix = prefix + Math.floor(Math.random() * 10)
  }
  return prefix
}
// 生成邮箱
function randomString(e) {  
    e = e || 32
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz12345678"
    var a = t.length
    var n = ""
    var i
    for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a))
    return n
  }

function getemail(){
  var suffixArray = new Array("@qq.com", "@163.com", "@sina.com", "@gmail.com")
  var i = parseInt(10 * Math.random())
  var suffix = suffixArray[i]
  suffix = randomString(8)+suffix
  return suffix
}

function  sayMsg(msg){
	console.log(msg);
}

export {
    getidcard,
    getphone,
    sayMsg,
    getemail,
}