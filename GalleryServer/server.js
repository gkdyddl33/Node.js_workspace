//웹 서버를 구축하여 이미지를 다운로드 해갈 수 있도록 제공
var http=require("http");
var static =require("serve-static");//정작 자원 요청 전담처리 미들웨어
//우리가 사용중인 http 모듈은 너무 기본 모듈인지라, 개발자가 모든 걸
//손수 구현해야 한다. 심지어 정적자원(html, css, js, image, xml 등등)에 요청을
//일일히 파일로 읽어 응답해야 한다.
//이러한 문제를 해결하기 위해 개발된, 모듈들이 있는데, 그 중 express 모듈을 사용해보자
//웹과 관련된 유용한 기능이 이미 포함되어 있는 모듈
//주의) http 모듈이 필요없는게 아니라, http 모듈에 추가해서 사용해야 한다.
//express의 주요특징은, 기능을 미들웨어라는 단위로 제공. 참고로 미들웨어는 함수
var express=require("express");

var app=express();//익스프레스 객체 생성
//미들웨어를 사용할 때는 use() 메서드를 쓴다
//node.js 자체적으로 전역변수가 몇개 지원되는데, 이중 __dirname
//console.log(__dirname);//현재 실행중인 파일의 물리적 경로 반환

app.use(static(__dirname+"/images"));//사용하고픈 미들웨어명

var server=http.createServer(app);

server.listen(7777, function(){
    console.log("server is running at 7777 port....");
});