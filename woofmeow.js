for (var x=1; x <= 100; x++){
    if( x % 3 && x % 5 ) {
        document.write(x);
    } else {
        if( x % 3 === 0 ) {
            document.write("woof");
        }
        if( x % 5 === 0 ) {
            document.write("meow");
        }
    }
   document.write('<br>');
}
