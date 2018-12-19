var http = require("http");

var options = {
  host: "127.0.0.1",
  port: 8000,
  path: "/"
};

var req = http.request(options, res => {
  var data = "";
  res.on("data", chunk => {
    data += chunk; // 수신 데이터 병합
  });
  res.on("end", () => {
    console.log(data); // 데이터 수신 완료
  });
});

req.end();
