const result = document.getElementById('result');

const calculate = (num) => result.value += num;

const score = () => result.value = eval(result.value).toFixed(0);

const clearScore = () => result.value = '';
