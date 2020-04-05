const test = () => {
    console.log('>>>>>>>>>>>>>>>> this is testing');
    const $div = document.createElement('div');
    const $p = document.createElement('p');
    $div.innerHTML = 'Testing Application';
    $p.innerHTML = 'Testing class';
    $p.classList.add('test');
    const $body = document.getElementById('ecx-main');
    $body.appendChild($div);
    $body.appendChild($p);
};

export { test };
