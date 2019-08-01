const btn = document.querySelector("#btn-submit");
const text = document.querySelector("#text-item");
const result = document.querySelector(".form-result");

btn.onclick = function () {
  const arr = text.value.toLowerCase().split("");
  const res = [];
  for(let i = 0; i<arr.length; i++){
    if (arr[i] != arr[i+1] && arr[i] != arr[i-1]  ){
      res.push(arr[i])
    }
  }
  const resString = res.join('')
  return result.innerHTML = resString;
}

