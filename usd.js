*/
10.30;22:47
/*


const url = 'https://api.exchangerate-api.com/v4/latest/USD'; // 替换为你选择的 API

const request = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const usdToCny = data.rates.CNY; // 获取美元兑人民币的汇率
    return `当前美元兑人民币的汇率是: ${usdToCny}`;
};

request().then(console.log).catch(console.error);
