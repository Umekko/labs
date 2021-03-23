// Порождающие шаблоны Constructor

function Robot(name, model) {
    this.name = name;
    this.model = model;

    this.fire = function() {}
    this.up = function() {}
}

const robot = new Robot('terminator', 25);
const robot1 = new Robot('terminator', 14);
const robot2 = new Robot('terminator', 13);
