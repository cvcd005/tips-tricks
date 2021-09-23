//simple convert number from 10000 to 10 000;

const prettyfy = (num) => {
  let n = num.toString();
  let separator = " ";
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
};
