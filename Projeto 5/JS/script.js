function task(){
    var btn = document.getElementById("add-btn");
    var taskInput = document.getElementById("taskInput");
    
    function addTask(){
        var value = taskInput.value.trim();
        if(value !== ""){
            var li = document.createElement("li");
            li.className = "task-item";
        
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "task-checkbox";

            var label = document.createElement("label");
            label.textContent = value;
            label.className = "task-label";

            checkbox.addEventListener("change", function() {
                if (checkbox.checked){
                    label.style.textDecoration = "line-through";
                    label.style.color = "#888";
                }
                else{
                    label.style.textDecoration = "none";
                    label.style.color = "";
                }
            });

            li.appendChild(checkbox);
            li.appendChild(label);

            document.getElementById("taskList").appendChild(li);
            taskInput.value = "";
        }
    }
    btn.addEventListener("click", addTask);
    taskInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addTask();
        }


    });
}

task();