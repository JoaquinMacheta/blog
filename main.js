if(JSON.parse(localStorage.getItem("blogs")) == null){
    let store = [
        {"title": "My first Blog","content":"This is my first blog created from JavaScript, HTML and CSS.You can check it out on github.Enjoy!"}
     ]
    localStorage.setItem("blogs",JSON.stringify(store))
}

let icon = document.getElementById("icon"),
    main = document.getElementById("main"),
    blog = document.getElementById("blog"),
    local_store = JSON.parse(localStorage.getItem("blogs"));
    
// Retrieving blogs from local storage and displaying them 

for(let a in local_store) {
    let  head = local_store[a].title,
        content = local_store[a].content;

        var box = document.createElement('div'),
            close = document.createElement('i'),
            save = document.createElement('i'),
            title = document.createElement('input'),
            heading = document.createElement('h1'),
            textarea = document.createElement('textarea');
        
    save.className = "fas fa-file save";
    close.className = "fas fa-times times";
    box.className = "blog";
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', "Title...")
    textarea.setAttribute('placeholder', 'Write your blog .........')
   
    box.appendChild(close);
    box.appendChild(save);
    box.appendChild(title);
    box.appendChild(heading);
    box.appendChild(textarea);
    main.appendChild(box);  

    title.value = head;
    heading.innerHTML = head;
    textarea.value = content;
}

/****************** ADDING A BLOG *********************/
icon.addEventListener(
    'click', function() {

        var box = document.createElement('div'),
                close = document.createElement('i'),
                save = document.createElement('i'),
                title = document.createElement('input'),
                heading = document.createElement('h1'),
                textarea = document.createElement('textarea');
                
            save.className = "fas fa-file save";
            close.className = "fas fa-times times";
            box.className = "blog";
            title.setAttribute('type', 'text');
            title.setAttribute('placeholder', "Title...")
            textarea.setAttribute('placeholder', 'Write your blog .........')
           
            box.appendChild(close);
            box.appendChild(save);
            box.appendChild(title);
            box.appendChild(heading);
            box.appendChild(textarea);
            main.appendChild(box);   

    }
);


/******************* EDITING THE BLOG ************************/
main.addEventListener(
    'click', function(e){
        if(e.target.classList[0] === "blog"){
            var blog = e.target;

            let close_icon = blog.firstElementChild,
                save_icon = close_icon.nextElementSibling,
                title_input = save_icon.nextElementSibling,
                heading = title_input.nextElementSibling,
                textarea = blog.lastElementChild;

            blog.classList.add('edit');
            close_icon.style.display = "inline";
            save_icon.style.display = "inline";
            title_input.style.display = "inline";
            textarea.style.display = "block";

            // Closing the blog
            close_icon.onclick = function() {
                
                blog.classList.remove("edit");
                heading.innerHTML = title_input.value;

            close_icon.style.display = "none";
            save_icon.style.display = "none";
            title_input.style.display = "none";
            textarea.style.display = "none";

            }
            
            // Saving the blog
            save_icon.onclick = function() {

                let obj = {
                    "title":title_input.value,
                    "content": textarea.value
                }

                local_store.push(obj);
                localStorage.setItem("blogs",JSON.stringify(local_store));
                alert("Save successfull");

            }
          
        }
            
    }   
    
);

