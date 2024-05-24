// const kits=['crash','kick','snare','tom'];

// const container= document.getElementsByClassName('container');
// const btn= document.getElementsByClassName('btn');

// kits.forEach((kit)=>{
//     btn.innerText=kit;
//     btn.style.backgroundImage="url(images/"+ kit +".png)";
//     const audioEl = document.createElement("audio");
//   audioEl.src = "audio/" + kit + ".mp3";
//   container.appendChild(audioEl);
//   btn.addEventListener("click", () => {
//     audioEl.play();})

//     window.addEventListener("keydown", (event) => {
//         if (event.key === kit.slice(0, 1)) {
//           audioEl.play();
//           btn.style.transform = "scale(.9)";
//           setTimeout(() => {
//             btn.style.transform = "scale(1)";
//           }, 100);
//         }
//       });
// })

const kits = ['crash', 'kick', 'snare', 'tom'];

document.querySelectorAll('.btn').forEach((button, index) => {
    const kit = kits[index];
    button.innerText = kit;
    button.style.backgroundImage = `url(images/${kit}.png)`;

    const audioEl = document.createElement('audio');
    audioEl.src = `audio/${kit}.mp3`;
    button.appendChild(audioEl);

    button.addEventListener('click', () => {
        audioEl.play();
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === kit.charAt(0)) {
            audioEl.play();
            button.style.transform = 'scale(0.9)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        }
    });
});