function test(){

  let cLog = console.log.bind(document);

  let a = 10;
  let b = 5;
  let d = 30;
  let e = 30;

  //a > b && d == e
  if ( (a > b) && (d == e) ) {
    cLog({a, b, d, e});
    cLog("Se cumple: (a > b) && (d == e)");
  }


  let x = 10;
  let y = 20;
  let z = 30;
  //x < z || y > z
  if ( (x < z) || (y > z)) {
    cLog({x, y, z});
    cLog("Se cumple: (x < z) || (y > z)");
  }

  let i = 10;
  let j = 5;
  let h = 15;
  let f = 20;

  // j < i && (h >i || i > f)
  if ( (j < i) && ( (h > i) || (i > f) ) ) {
    cLog({i, j, h, f});
    cLog("Se cumple: (j < i) && ( (h > i) || (i > f) )");
  }

}

test();

  //console.log(c);
  //console.log({c});
  //c(`Sum is: ${sum}`);
  //c("My name is: " + name);

  //console.log("");

  /* console.log("Hello world!");
  console.log(1);
  console.log(true); */
