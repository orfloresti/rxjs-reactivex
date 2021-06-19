import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div');
texto.innerHTML = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu magna finibus, eleifend nibh vitae, dignissim mi. Quisque ante ipsum, molestie sit amet ultricies id, pellentesque in ligula. Sed finibus justo a facilisis accumsan. Vivamus elit felis, ullamcorper sed vestibulum at, varius eu lacus. Aenean ac erat dapibus, elementum ex eget, porttitor diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent tincidunt auctor leo, vel lacinia felis lacinia at. In pulvinar, ante nec auctor consectetur, quam diam tincidunt orci, ut elementum nunc eros a magna. Sed lacinia arcu ac metus sagittis pulvinar. Phasellus iaculis facilisis nunc nec porta. Aliquam quis nulla id dolor condimentum scelerisque. Donec lacinia ipsum ac justo feugiat efficitur.
<br /><br />
Curabitur pellentesque orci ut dui volutpat, vitae hendrerit metus feugiat. Donec in mi nec lorem cursus suscipit. Donec elit justo, viverra et porta eu, sollicitudin at nisl. Nulla vitae ultricies velit. Integer aliquet felis sit amet nulla suscipit, at imperdiet ante porttitor. Etiam purus sem, suscipit eget vehicula quis, ultrices vitae velit. Curabitur a aliquam leo. In libero ipsum, faucibus eget orci eu, tincidunt elementum urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus velit sapien, congue ac malesuada non, imperdiet non massa. Curabitur scelerisque sagittis nunc, eget consequat est varius facilisis. Aliquam eget purus maximus elit consectetur suscipit et nec lectus. Nulla luctus a velit ut rutrum. Phasellus blandit nibh sem, eget blandit ex efficitur at.
<br /><br />
Pellentesque egestas tempus sagittis. Aliquam eget metus eget orci volutpat feugiat. Morbi quis ipsum in nulla rhoncus aliquet. Fusce eget fringilla nunc. Quisque vel nisi sagittis, placerat magna in, faucibus felis. Donec maximus risus vitae ligula accumsan, sed hendrerit nisi iaculis. Cras lectus justo, pellentesque id leo vel, placerat ullamcorper augue. Cras pharetra dictum nunc, nec vulputate augue finibus ut. Pellentesque at convallis justo. Nulla tincidunt venenatis erat a volutpat.
<br /><br />
Cras tempor ex eget finibus aliquet. Integer blandit posuere diam scelerisque hendrerit. Sed dignissim tempor tellus, vel commodo velit ultrices ut. Vivamus sem ex, interdum nec tincidunt ac, laoreet eget dui. Vestibulum a ex aliquam, facilisis metus non, suscipit arcu. Donec non metus eros. Nullam quis lobortis felis. Sed et mi arcu.
<br /><br />
Vivamus interdum leo enim, a ultrices lectus iaculis sit amet. Etiam eu urna in dolor porta pulvinar. Fusce rutrum vel nunc sed molestie. Donec eleifend mauris lorem, eget consectetur felis tempus at. Quisque at lectus nulla. Donec libero massa, dictum sed lacus sed, porttitor elementum tortor. Morbi eu libero eget sem feugiat sollicitudin. 
<br /><br />
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu magna finibus, eleifend nibh vitae, dignissim mi. Quisque ante ipsum, molestie sit amet ultricies id, pellentesque in ligula. Sed finibus justo a facilisis accumsan. Vivamus elit felis, ullamcorper sed vestibulum at, varius eu lacus. Aenean ac erat dapibus, elementum ex eget, porttitor diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent tincidunt auctor leo, vel lacinia felis lacinia at. In pulvinar, ante nec auctor consectetur, quam diam tincidunt orci, ut elementum nunc eros a magna. Sed lacinia arcu ac metus sagittis pulvinar. Phasellus iaculis facilisis nunc nec porta. Aliquam quis nulla id dolor condimentum scelerisque. Donec lacinia ipsum ac justo feugiat efficitur.
<br /><br />
Curabitur pellentesque orci ut dui volutpat, vitae hendrerit metus feugiat. Donec in mi nec lorem cursus suscipit. Donec elit justo, viverra et porta eu, sollicitudin at nisl. Nulla vitae ultricies velit. Integer aliquet felis sit amet nulla suscipit, at imperdiet ante porttitor. Etiam purus sem, suscipit eget vehicula quis, ultrices vitae velit. Curabitur a aliquam leo. In libero ipsum, faucibus eget orci eu, tincidunt elementum urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus velit sapien, congue ac malesuada non, imperdiet non massa. Curabitur scelerisque sagittis nunc, eget consequat est varius facilisis. Aliquam eget purus maximus elit consectetur suscipit et nec lectus. Nulla luctus a velit ut rutrum. Phasellus blandit nibh sem, eget blandit ex efficitur at.
<br /><br />
Pellentesque egestas tempus sagittis. Aliquam eget metus eget orci volutpat feugiat. Morbi quis ipsum in nulla rhoncus aliquet. Fusce eget fringilla nunc. Quisque vel nisi sagittis, placerat magna in, faucibus felis. Donec maximus risus vitae ligula accumsan, sed hendrerit nisi iaculis. Cras lectus justo, pellentesque id leo vel, placerat ullamcorper augue. Cras pharetra dictum nunc, nec vulputate augue finibus ut. Pellentesque at convallis justo. Nulla tincidunt venenatis erat a volutpat.
<br /><br />
Cras tempor ex eget finibus aliquet. Integer blandit posuere diam scelerisque hendrerit. Sed dignissim tempor tellus, vel commodo velit ultrices ut. Vivamus sem ex, interdum nec tincidunt ac, laoreet eget dui. Vestibulum a ex aliquam, facilisis metus non, suscipit arcu. Donec non metus eros. Nullam quis lobortis felis. Sed et mi arcu.
<br /><br />
Vivamus interdum leo enim, a ultrices lectus iaculis sit amet. Etiam eu urna in dolor porta pulvinar. Fusce rutrum vel nunc sed molestie. Donec eleifend mauris lorem, eget consectetur felis tempus at. Quisque at lectus nulla. Donec libero massa, dictum sed lacus sed, porttitor elementum tortor. Morbi eu libero eget sem feugiat sollicitudin. `;

const body = document.querySelector('body');

body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// Function to calculate 
const calPercentScroll = ( event )=> {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return ( scrollTop / (scrollHeight - clientHeight) ) * 100;
    
}

// Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe( console.log );

const progress$ = scroll$.pipe(
    // map( event =>  calPercentScroll(event) )
    map( calPercentScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});