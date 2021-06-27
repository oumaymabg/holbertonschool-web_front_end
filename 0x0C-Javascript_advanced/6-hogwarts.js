function studentHogwarts() {
    let privateScope = 0;
    name = null;
    function changeScoreBy(points) {
      privateScope += points;
    }
    this.setName = (newName) => {
      name = newName;
    }
    this.rewardStudent = () => {
      changeScoreBy(1);
    }
    this.penalizeStudent = () => {
      changeScoreBy(-1);
    }
    this.getScore = () => {
      return `${name}: ${privateScope}`;
    }
  }
  
  let harry = new studentHogwarts();
  harry.setName('Harry');
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  console.log(harry.getScore());
  
  let draco = new studentHogwarts();
  draco.setName('Draco');
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  console.log(draco.getScore());