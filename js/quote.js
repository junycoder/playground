const quotes = [
    {
        quote: "추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.",
        author: "월트 디즈니 (미국, 1923 ~ )",
    },
    {
        quote: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.",
        author: "윈스턴 처칠 (영국, 1874~1965)",
    },
    {
        quote: "당신이 허락해주지 않으면 아무도 당신이 열등감을 느끼게 만들 수 없다.",
        author: "엘러너 루즈벨트 (미국, 1884 ~ 1962)",
    },
    {
        quote: "성공적인 삶의 비밀은 무엇을 하는 게 자신의 운명인지 찾아낸 다음 그걸 하는 것이다.",
        author: "헨리 포드 (미국, 1863~1947)",
    },
    {
        quote: "괴로운 시련처럼 보이는 것이 뜻밖의 좋은 일일 때가 많다.",
        author: "오스카 와일드 (아일랜드, 1854~1900)",
    },
    {
        quote: "당신이 세상을 바꿀 수 없다고 말하는 사람에는 두 종류가 있다. 시도하기를 두려워하는 사람들, 당신이 성공할까 봐 두려워 하는 사람들.",
        author: "레이 고포스 (SPEEA / Executive Director)",
    },
    {
        quote: "나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다.",
        author: "토마스 제퍼슨 (미국, (1743~1826)",
    },
    {
        quote: "모든 성취의 시작점은 갈망이다.",
        author: "나폴레온 힐 (미국, 1883~1970)",
    },
    {
        quote: "사람들은 동기 부여는 오래가지 않는다고 말한다. 목욕도 마찬가지다. 그래서 매일 하라고 하는 것이다.",
        author: "지그 지글러 (미국, 1926~2012)",
    },
    {
        quote: "우리는 우리가 늘 생각하는 것이 된다. 그것이 가장 묘한 비밀이다.",
        author: "얼 나이팅게일 (미국, 1921~1989)",
    },
    {
        quote: "성공이란 당신 자신, 당신이 하는 일, 그 일을 하는 방식을 좋아하는 것이다.",
        author: "마야 안젤루 (미국, 1928~2014)",
    },
    {
        quote: "성공한 사람에겐 모멘텀이 있다. 성공할수록 더 성공하고 싶어지고, 성공할 방법을 더 많이 찾아낸다. 마찬가지로, 실패하면 자기충족적 예언이 될수도 있는 하강 경향이 생긴다.",
        author: "토니 로빈스 (미국, 1960 ~ )",
    },
    {
        quote: "실패에서부터 성공을 만들어 내라. 좌절과 실패는 성공으로 가는 가장 확실한 디딤돌이다.",
        author: "데일 카네기 (미국, 1888~1955)",
    },
    {
        quote: "위대한 일들을 이루기 전에 스스로에게 위대한 일들을 기대해야 한다.",
        author: "마이클 조던 (미국, 1963 ~ )",
    },
] ;

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQoute.quote;
author.innerText = todaysQoute.author;