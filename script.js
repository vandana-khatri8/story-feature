var arr = [
    {  dp:" https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D ",
       story:"  https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzfGVufDB8fDB8fHww "
    },
    {  dp:" https://images.unsplash.com/photo-1622396636133-ba43f812bc35?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    story:" https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  "
 },
 {  dp:"https://images.unsplash.com/photo-1616091093714-c64882e9ab55?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  ",
 story:" https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  "
},
{  dp:" https://images.unsplash.com/photo-1514315384763-ba401779410f?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
story:" https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?q=80&w=1319&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  "
},
{  dp:" https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=1382&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
story:" https://images.unsplash.com/photo-1586078130702-d208859b6223?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  "
},
]

var screen = document.querySelector("#full-screen")
var stories = document.querySelector("#stories")
var clutter = "  "
arr.forEach(function(elem,idx){
    clutter += `    <div class="story">
    <img  id = "${idx}" src="${elem.dp}">
</div> `
})
stories.innerHTML = clutter;
stories.addEventListener("click", function(dets){
    screen.style.display ="block"
    screen.style.backgroundImage = `url(${arr[dets.target.id].story})`


    setTimeout(function(){
        screen.style.display ="none"
    },3000)
 
})