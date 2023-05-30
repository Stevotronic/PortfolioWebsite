const skills = document.querySelectorAll('.skill');
const skillLists = document.querySelectorAll('.skill-ul');

skills.forEach((element, index) => {
    let j = 0;
    element.addEventListener('click', function(){
        if (j%2 === 0) {
            skillLists[index].style.display='block'
        } else {
            skillLists[index].style.display='none'
        }
        j++;
    })
});