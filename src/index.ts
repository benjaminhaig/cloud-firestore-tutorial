const button = document.getElementById('first_call');

const click = async () => {
    const res = await fetch('https://helloworld-rtitbhzmiq-uc.a.run.app');
    const text = await res.text();
    console.log(text);
}

button!.addEventListener('click', (e) => {
    click();
})