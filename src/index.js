import './style.css';

const data = [
  {
    description: 'First Task',
    completed: false,
    index: 0,
  },
  {
    description: 'Second Task',
    completed: true,
    index: 1,
  },
];

const taskDiv = document.querySelector('#task-div');

const showList = () => {
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].completed) {
      taskDiv.insertAdjacentHTML('beforeend',
        `<ul class="task-ul">
          <li class="task-li">
              <div class="checkbox"><input type="checkbox" checked> <p>${data[i].description}</p>
              </div> 
              <div class="trash">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              </div>
          </li>
      </ul>`);
    } else {
      taskDiv.insertAdjacentHTML('beforeend',
        `<ul class="task-ul">
          <li class="task-li">
              <div class="checkbox"><input type="checkbox"> <p>${data[i].description}</p>
              </div> 
              <div class="trash">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              </div>
          </li>
      </ul>`);
    }
  }
};

document.addEventListener('DOMContentLoaded', showList());