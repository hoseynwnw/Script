/*
CamScanner unlocks pro, Cloud scanning is not available.

QuanX 1.0.0:  [rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js

Quan:  [REWRITE]
https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url simple-response SFRUUC8xLjEgMjAwIE9LCgp7CiAiZGF0YSI6IHsKICAicHNubF92aXBfcHJvcGVydHkiOiB7CiAgICJleHBpcnkiOiAiMTY0MzczMTIwMCIKICB9CiB9Cn0=

Surge4.0: [Script]
http-response https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js




https:\/\/api-rjvn\.app\/api2\/user_subscription url script-response-body NobyDa/Surge/JS/Radiojavan.js





QX & Q & Surge Mitm = ap*.intsig.net,
*/

let obj = JSON.parse($response.body);
obj = {"success":true,"subscription":"ios_monthly","allow_sync":true};
$done({body: JSON.stringify(obj)});
