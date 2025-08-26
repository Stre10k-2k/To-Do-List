let btn = document.getElementById("btn");

btn.onclick = function() {

    let input = document.getElementById('input').value;

    if(!input){
    
    alert('fill empty places');
    
    }else{

        let output = document.getElementById('input').value;

        let parent = document.getElementById("output");

        let newp = document.createElement('p');

        newp.textContent = (output);

        newp.classList.add("output");

        parent.appendChild(newp);

        let newbtn = document.createElement('button');

        newbtn.textContent = "Remove";

        newbtn.classList.add("rembtn");

        parent.appendChild(newbtn);

        let remove = document.querySelector(".rembtn");

        remove.onclick = function() {

            remove.remove();

            let output = document.querySelector(".output");

            output.remove();
        }

    }
}