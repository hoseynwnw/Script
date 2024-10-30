const url = "https://fx.cmbchina.com/api/v1/fx/rate";
$httpClient.get(url, function(error, response, data) {
    if (error) {
        console.log('Error: ' + error);
        return;
    }
    const jsonData = JSON.parse(data);
    const body = jsonData.body;
    const usdData = body[3]; // 假设美元汇率信息在列表中的索引为 3
    const usdBidPrice = usdData.rtbBid;
    console.log('美元买入价:', usdBidPrice);
});
