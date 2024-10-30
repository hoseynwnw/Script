const usdtUrl = 'https://api.nobitex.ir/market/stats?srcCurrency=usdt'; // 获取 USDT 价格的 API
const usdCnyUrl = 'https://api.exchangerate-api.com/v4/latest/USD'; // 获取美元兑人民币汇率的 API

const request = () => {
    // 获取 USDT 价格（以伊朗里尔为单位）
    let usdtPriceInRial, usdToCny;

    // 获取 USDT 价格
    const usdtResponse = http.get(usdtUrl);
    if (usdtResponse.status !== 200) {
        return `获取 USDT 价格失败: ${usdtResponse.status}`;
    }
    const usdtData = JSON.parse(usdtResponse.body);
    usdtPriceInRial = parseFloat(usdtData.stats['usdt-rls'].latest); // 提取 "latest" 的值

    // 获取美元兑人民币汇率
    const usdCnyResponse = http.get(usdCnyUrl);
    if (usdCnyResponse.status !== 200) {
        return `获取美元兑人民币汇率失败: ${usdCnyResponse.status}`;
    }
    const usdCnyData = JSON.parse(usdCnyResponse.body);
    usdToCny = usdCnyData.rates.CNY;

    // 计算 USDT 价格除以美元兑人民币汇率
    const result = usdtPriceInRial / usdToCny;
    return `USDT 价格（伊朗里尔）: ${usdtPriceInRial}, 美元兑人民币汇率: ${usdToCny}, 计算结果: ${result}`;
};

const output = request();
$notify("结果", "", output);
