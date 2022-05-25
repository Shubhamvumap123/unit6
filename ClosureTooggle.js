let tog = null;

function toggler(m, n, o) {
  if (tog == null) {
    tog = m;
  }
  return function () {
    console.log(tog);
    if(tog==m){
        tog = n;
    }else if(tog==n){
        tog=o;
    }
    
  };
}
const toggle = toggler(1, 2, 3);

toggle();
toggle();
toggle();
