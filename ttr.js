

[MITM]
hostname = nobitex.ir
hostname = exchangerate-api.com


const usdtUrl = 'https://api.nobitex.ir/market/stats?srcCurrency=usdt'; // 获取 USDT 价格的 API
const usdCnyUrl = 'https://api.exchangerate-api.com/v4/latest/USD'; // 获取美元兑人民币汇率的 API

const request = async () => {
    try {
        // 获取 USDT 价格（以伊朗里尔为单位）
        const usdtResponse = await fetch(usdtUrl);
        const usdtData = await usdtResponse.json();
        const usdtPriceInRial = parseFloat(usdtData.stats['usdt-rls'].latest); // 提取 "latest" 的值并转换为浮点数

        // 获取美元兑人民币汇率
        const usdCnyResponse = await fetch(usdCnyUrl);
        const usdCnyData = await usdCnyResponse.json();
        const usdToCny = usdCnyData.rates.CNY;

        // 计算 USDT 价格除以美元兑人民币汇率
        const result = usdtPriceInRial / usdToCny;
        return `USDT 价格（伊朗里尔）: ${usdtPriceInRial}, 美元兑人民币汇率: ${usdToCny}, 计算结果: ${result}`;
    } catch (error) {
        return `发生错误: ${error.message}`;
    }
};

request().then(console.log).catch(console.error);
