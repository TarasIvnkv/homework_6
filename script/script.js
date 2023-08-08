hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];
rainbow = [];

rainbow = rainbow.concat(hero, native, destination);
rainbow = rainbow.reverse();

rainbow.pop();
rainbow.splice(0, 2, `Richard`);
rainbow.push(`Gave`, `Battle`, `In`, `Vain`);

resultRainbow = '<ul class="rainbow">';

for (i = 0; i < rainbow.length; i++) {
    resultRainbow += `<li>${rainbow[i]}</li>`; 
}

resultRainbow += '</ul>';

document.write(resultRainbow);