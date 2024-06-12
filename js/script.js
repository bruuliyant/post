
let doc = document
let wrapper = doc.querySelector('.wrapper')
let inp = doc.querySelector('input')
let btn = doc.querySelector('button')
axios.get('http://localhost:3003/todos')
    .then(res => {
        let data = res.data
        
        console.log(data);
        get_card(data)
    })
    .catch(err => console.log(err))

let date = new Date()
let time = date.getUTCHours()
let min = date.getUTCMinutes()
let txt_inp;

inp.addEventListener('input', ()=>{
    txt_inp = inp.value

})

let obj = {
    tittle: txt_inp,
    time: `${time}:${min}`,
    id: 6
}

btn.addEventListener("click", () => {
    axios.post('http://localhost:3003/todos', obj)
})




let get_card = (arr) => {
    for (let item of arr) {
        let div = doc.createElement('div')
        let p = doc.createElement('p')
        let time = doc.createElement('p')
        let cross = doc.createElement('img')

        p.textContent = item.tittle
        time.textContent = item.time
        cross.src = '../img/4879885_close_cross_delete_remove_icon.png'

        div.classList.add('card')
        cross.classList.add('cross')
        time.classList.add('time')

        wrapper.append(div)
        div.append(p)
        div.append(time)
        div.append(cross)
    }
}



