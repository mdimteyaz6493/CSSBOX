let height = document.getElementById("height");
let width = document.getElementById("width");
let border = document.getElementById("border");
let border_r = document.getElementById("border_r");
let color = document.getElementById("color");
let box = document.querySelector(".box")
let h_display = document.getElementById("h_dis")
let w_display = document.getElementById("w_dis")
let b_display = document.getElementById("b_dis")
let br_display = document.getElementById("br_dis")
let c_display = document.getElementById("c_dis")
let hl_display = document.getElementById("hl_dis")
let wl_display = document.getElementById("wl_dis")
let bl_display = document.getElementById("blur_dis")
let sr_display = document.getElementById("sr_dis")
let b_type = document.getElementById("b_type")
let b_color = document.getElementById("b_color")
let generate_code = document.getElementById("generate_code")
let code = document.getElementById("gen_code");
let image = document.getElementById("img")
let h_length = document.getElementById("h_length")
let w_length = document.getElementById("w_length")
let blur_radius = document.getElementById("blur_radius")
let spread_radius = document.getElementById("spread_radius");
let check = document.getElementById("check");
let showmore ;



height.addEventListener("input",()=>{
box.style.height = height.value+"px";
h_display.innerText = height.value+"px"
})

width.addEventListener("input",()=>{
    box.style.width = width.value+"px";
    w_display.innerText = width.value+"px"
    })

border.addEventListener("input",()=>{
box.style.border = `${border.value+"px"} ${b_type.value} ${b_color.value}`
b_display.innerText =`${border.value+"px"} ${b_type.value} ${b_color.value}`
 })

border_r.addEventListener("input",()=>{
box.style.borderRadius = border_r.value+"%";
br_display.innerText = border_r.value+"%"
 })


color.addEventListener("input",()=>{
box.style.backgroundColor = color.value;
c_display.innerText = color.value
     })

generate_code.addEventListener("click", () => {
        generatedCode = `
        height: ${height.value}px;<br>
        width: ${width.value}px;<br>
        border: ${border.value}px ${b_type.value} ${b_color.value};<br>
        border-radius: ${border_r.value}%;<br>
        background-color: ${color.value}; <br>
        box-shadow : ${h_length.value}px ${w_length.value}px ${blur_radius.value}px ${spread_radius.value}px rgba(0,0,0,0.75);
    `;
        code.innerHTML = generatedCode;
        document.querySelector(".pop_up").classList.add("came");
    
        setTimeout(() => {
            document.querySelector(".pop_up").classList.remove("came");
        }, 10000);
    });

    h_length.addEventListener("input", () => {
        updateBoxShadow();
        hl_display.textContent = `${h_length.value}px`;
    });
    
    w_length.addEventListener("input", () => {
        updateBoxShadow();
        wl_display.textContent = `${w_length.value}px`;
    });
    
    blur_radius.addEventListener("input", () => {
        updateBoxShadow();
        bl_display.textContent = `${blur_radius.value}px`;
    });
    spread_radius.addEventListener("input", () => {
        updateBoxShadow();
        sr_display.textContent = `${spread_radius.value}px`;
    });
    
    function updateBoxShadow() {
        
        box.style.boxShadow = `${h_length.value}px ${w_length.value}px ${blur_radius.value}px ${spread_radius.value}px rgba(0,0,0,0.75)`;
    }
    check.addEventListener("change", () => {
        if (check.checked) {
            showmore = true;
            document.querySelectorAll(".shad-field").forEach(element => {
                element.classList.remove("hide");
            });
        } else {
            showmore = false;
            document.querySelectorAll(".shad-field").forEach(element => {
                element.classList.add("hide");
            });
        }
    });
    